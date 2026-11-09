// Subtle cinematic ambient sound generator using Web Audio API
class AmbientSoundEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private oscillators: OscillatorNode[] = [];
  private isPlaying: boolean = false;

  public init() {
    if (this.ctx) return;
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    this.ctx = new AudioContextClass();
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.0001, this.ctx.currentTime);
    this.masterGain.connect(this.ctx.destination);
  }

  public toggle(onState?: boolean): boolean {
    this.init();
    if (!this.ctx || !this.masterGain) return false;

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    const target = onState !== undefined ? onState : !this.isPlaying;

    if (target && !this.isPlaying) {
      this.startDrone();
      this.isPlaying = true;
    } else if (!target && this.isPlaying) {
      this.stopDrone();
      this.isPlaying = false;
    }

    return this.isPlaying;
  }

  private startDrone() {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;
    this.stopDrone(); // clear any existing

    // Warm cinematic chord: D minor / F / A with low drone and subtle overtone
    const frequencies = [73.42, 110.0, 146.83, 220.0, 329.63]; // D2, A2, D3, A3, E4

    frequencies.forEach((freq, i) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = i === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq + (Math.random() - 0.5) * 0.4, now);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450 + i * 80, now);

      // Delicate individual volume
      const oscVol = i === 0 ? 0.08 : 0.04;
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(oscVol, now + 3);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      this.oscillators.push(osc);
    });

    this.masterGain.gain.setValueAtTime(0.001, now);
    this.masterGain.gain.exponentialRampToValueAtTime(0.35, now + 2.5);
  }

  private stopDrone() {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;
    this.masterGain.gain.cancelScheduledValues(now);
    this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
    this.masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.5);

    setTimeout(() => {
      this.oscillators.forEach(osc => {
        try {
          osc.stop();
          osc.disconnect();
        } catch {
          // already stopped
        }
      });
      this.oscillators = [];
    }, 1600);
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }
}

export const ambientSound = new AmbientSoundEngine();
