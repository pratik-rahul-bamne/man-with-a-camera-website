import React, { useState, useRef } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Sparkles,
  RotateCcw,
  Youtube,
  Eye,
  EyeOff,
  Phone,
  MessageSquare
} from 'lucide-react';
import { FILM_CLIPS, BUSINESS_PROFILE } from '../data/weddingData';

interface ScreeningRoomProps {
  aspectRatio: '2.39:1' | '16:9';
  setAspectRatio: (ar: '2.39:1' | '16:9') => void;
  onOpenCommission: () => void;
}

export const ScreeningRoom: React.FC<ScreeningRoomProps> = ({
  aspectRatio,
  setAspectRatio,
  onOpenCommission,
}) => {
  const [selectedFilmIndex, setSelectedFilmIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(258);
  const [isMuted, setIsMuted] = useState(false);
  const [showHud, setShowHud] = useState(true);
  const [filmGrain, setFilmGrain] = useState(true);
  const [isTheaterMode, setIsTheaterMode] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const scrubberRef = useRef<HTMLDivElement | null>(null);

  const currentFilm = FILM_CLIPS[selectedFilmIndex];

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(true));
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      if (videoRef.current.duration && !isNaN(videoRef.current.duration)) {
        setDuration(videoRef.current.duration);
      }
    }
  };

  const handleScrubberClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrubberRef.current || !videoRef.current) return;
    const rect = scrubberRef.current.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    const newTime = pos * duration;
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTimecode = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    const frames = Math.floor((seconds % 1) * 24);
    return `00:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}:${frames.toString().padStart(2, '0')}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  const chapters = [
    { name: 'Haldi & Antarpat Prelude', pct: 15 },
    { name: 'Sacred Saptapadi Phere', pct: 45 },
    { name: 'Grand Gala & Fireworks', pct: 75 },
  ];

  return (
    <section
      id="screening"
      className={`py-20 border-b border-[rgba(198,164,119,0.18)] transition-colors duration-500 ${
        isTheaterMode ? 'bg-black' : 'bg-[#080808]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[rgba(245,240,232,0.08)]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-[#C6A477]"></span>
              <p className="text-[11px] tracking-[0.25em] text-[#C6A477] uppercase font-semibold">
                CINEMA SUITE · {BUSINESS_PROFILE.name}
              </p>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#F5F0E8] tracking-tight">
              Wedding Films &amp; Cinematic Reels
            </h2>
          </div>

          {/* Film Selector Tabs & YouTube channel link */}
          <div className="flex flex-wrap items-center gap-2">
            {FILM_CLIPS.map((film, idx) => (
              <button
                key={film.id}
                onClick={() => {
                  setSelectedFilmIndex(idx);
                  setIsPlaying(false);
                  if (videoRef.current) {
                    videoRef.current.currentTime = 0;
                  }
                }}
                className={`px-3 py-2 text-[10px] sm:text-[11px] tracking-[0.2em] uppercase font-semibold transition-all border cursor-pointer ${
                  selectedFilmIndex === idx
                    ? 'border-[#C6A477] bg-[#C6A477] text-[#080808]'
                    : 'border-[rgba(245,240,232,0.15)] text-[#A6A19A] hover:text-[#F5F0E8] hover:border-[#C6A477]/40 bg-[#101010]'
                }`}
              >
                REEL {idx + 1}: {film.couple}
              </button>
            ))}

            <a
              href={BUSINESS_PROFILE.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-[10px] tracking-[0.2em] uppercase font-semibold border border-red-500/40 text-red-400 hover:bg-red-500 hover:text-white transition-all flex items-center gap-1.5"
            >
              <Youtube className="w-3.5 h-3.5" />
              <span>YOUTUBE CHANNEL</span>
            </a>
          </div>
        </div>

        {/* Cinematic Film Player Container */}
        <div className="relative bg-[#101010] border border-[rgba(198,164,119,0.22)] gold-halo p-1.5 sm:p-3">
          {/* Top Bar HUD */}
          <div className="flex items-center justify-between px-3 py-2 bg-[#080808]/90 border-b border-[rgba(198,164,119,0.15)] text-[10px] tracking-[0.22em] text-[#A6A19A] uppercase mb-1.5">
            <div className="flex items-center gap-3">
              <span className="text-[#C6A477] font-semibold flex items-center gap-1.5">
                <span
                  className={`w-1.5 h-1.5 ${
                    isPlaying ? 'bg-red-500 animate-pulse' : 'bg-[#C6A477]'
                  }`}
                ></span>
                {isPlaying ? 'ROLLING' : 'STANDBY'}
              </span>
              <span>·</span>
              <span className="text-[#F5F0E8]">{currentFilm.title}</span>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setFilmGrain(!filmGrain)}
                title="Toggle Film Grain Emulation"
                className={`hidden sm:flex items-center gap-1 hover:text-[#F5F0E8] cursor-pointer ${
                  filmGrain ? 'text-[#C6A477]' : 'text-[#A6A19A]'
                }`}
              >
                <Sparkles className="w-3 h-3" />
                <span>GRAIN {filmGrain ? 'ON' : 'OFF'}</span>
              </button>

              <button
                onClick={() => setShowHud(!showHud)}
                title="Toggle Optics & Specs Overlay"
                className="flex items-center gap-1 hover:text-[#F5F0E8] cursor-pointer"
              >
                {showHud ? <Eye className="w-3 h-3 text-[#C6A477]" /> : <EyeOff className="w-3 h-3" />}
                <span className="hidden sm:inline">SPECS HUD</span>
              </button>

              <button
                onClick={() => setIsTheaterMode(!isTheaterMode)}
                title="Theater Immersion Mode"
                className={`hidden sm:flex items-center gap-1 hover:text-[#F5F0E8] cursor-pointer ${
                  isTheaterMode ? 'text-[#C6A477]' : ''
                }`}
              >
                <span>THEATER</span>
              </button>
            </div>
          </div>

          {/* Video Viewport */}
          <div
            className={`relative w-full overflow-hidden bg-black flex items-center justify-center cursor-pointer ${
              aspectRatio === '2.39:1' ? 'aspect-[2.39/1]' : 'aspect-[16/9]'
            }`}
            onClick={togglePlay}
          >
            <video
              ref={videoRef}
              src={currentFilm.videoUrl}
              poster={currentFilm.posterUrl}
              onTimeUpdate={handleTimeUpdate}
              onEnded={() => setIsPlaying(false)}
              muted={isMuted}
              playsInline
              loop
              className="w-full h-full object-cover"
            />

            {filmGrain && (
              <div
                className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay"
                style={{
                  backgroundImage: `radial-gradient(rgba(255,255,255,0.15) 1px, transparent 0)`,
                  backgroundSize: '4px 4px',
                }}
              />
            )}

            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 via-transparent to-black/30" />

            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-20 h-20 bg-[#080808]/80 border border-[#C6A477] backdrop-blur-md flex items-center justify-center text-[#C6A477] gold-halo">
                  <Play className="w-8 h-8 fill-current translate-x-0.5" />
                </div>
              </div>
            )}

            {showHud && (
              <>
                <div className="absolute top-4 left-4 z-20 pointer-events-none bg-[#080808]/85 border border-[rgba(198,164,119,0.25)] px-3 py-2 backdrop-blur-md">
                  <p className="text-[9px] tracking-[0.25em] text-[#C6A477] font-semibold uppercase">
                    CAMERA &amp; COLOR PROFILE
                  </p>
                  <p className="font-mono text-[11px] text-[#F5F0E8] mt-0.5">
                    {currentFilm.camera}
                  </p>
                  <p className="text-[9px] tracking-[0.18em] text-[#A6A19A] uppercase mt-0.5">
                    LOCATION: {currentFilm.location} · 4K 23.976 FPS
                  </p>
                </div>

                <div className="absolute top-4 right-4 z-20 pointer-events-none bg-[#080808]/85 border border-[rgba(245,240,232,0.12)] px-3 py-2 backdrop-blur-md hidden sm:block text-right">
                  <p className="text-[9px] tracking-[0.22em] text-[#A6A19A] uppercase">
                    SCORE &amp; AUDIO
                  </p>
                  <p className="text-[10px] text-[#F5F0E8] italic font-serif">
                    {currentFilm.audioTrack}
                  </p>
                </div>
              </>
            )}

            <div className="absolute bottom-6 right-6 z-20 pointer-events-none font-mono text-xs sm:text-sm tracking-widest text-[#F5F0E8] bg-[#080808]/80 px-2.5 py-1 border border-[rgba(245,240,232,0.1)]">
              {formatTimecode(currentTime)} / {formatTimecode(duration)}
            </div>
          </div>

          {/* Minimal Champagne Scrubber Line */}
          <div
            ref={scrubberRef}
            onClick={handleScrubberClick}
            className="relative h-2.5 bg-[#201f1f] hover:h-3.5 transition-all cursor-pointer group my-1.5"
          >
            <div
              className="absolute top-0 bottom-0 left-0 bg-[#C6A477] transition-all"
              style={{ width: `${progressPercent}%` }}
            />
            {chapters.map((ch, i) => (
              <div
                key={i}
                className="absolute top-0 bottom-0 w-[2px] bg-white/40 hover:bg-[#C6A477] z-10"
                style={{ left: `${ch.pct}%` }}
                title={ch.name}
              />
            ))}
            <div
              className="absolute top-1/2 -translate-y-1/2 w-2 h-4 bg-[#F5F0E8] border border-[#080808] opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ left: `calc(${progressPercent}% - 4px)` }}
            />
          </div>

          {/* Bottom Controls Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 px-3 py-3 bg-[#0e0e0e] border border-[rgba(245,240,232,0.06)]">
            <div className="flex items-center gap-3 sm:gap-4">
              <button
                onClick={togglePlay}
                className="w-8 h-8 bg-[#C6A477] text-[#080808] hover:bg-[#F5F0E8] flex items-center justify-center transition-colors cursor-pointer"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 fill-current" />
                ) : (
                  <Play className="w-4 h-4 fill-current translate-x-0.5" />
                )}
              </button>

              <button
                onClick={() => {
                  if (videoRef.current) videoRef.current.currentTime = 0;
                }}
                title="Restart Reel"
                className="p-1.5 text-[#A6A19A] hover:text-[#F5F0E8] border border-[rgba(245,240,232,0.1)] cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => {
                  if (videoRef.current) {
                    videoRef.current.muted = !isMuted;
                    setIsMuted(!isMuted);
                  }
                }}
                className="p-1.5 text-[#A6A19A] hover:text-[#F5F0E8] border border-[rgba(245,240,232,0.1)] cursor-pointer"
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5 text-red-400" /> : <Volume2 className="w-3.5 h-3.5" />}
              </button>

              <div className="text-[11px] font-mono tracking-wider text-[#A6A19A]">
                <span className="text-[#F5F0E8]">{formatTimecode(currentTime)}</span>
                <span className="mx-1 text-[#C6A477]">/</span>
                <span>{formatTimecode(duration)}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center border border-[rgba(245,240,232,0.15)] text-[10px] tracking-[0.2em]">
                <button
                  onClick={() => setAspectRatio('2.39:1')}
                  className={`px-2 py-1 uppercase cursor-pointer ${
                    aspectRatio === '2.39:1' ? 'bg-[#C6A477] text-[#080808] font-bold' : 'text-[#A6A19A]'
                  }`}
                >
                  2.39:1
                </button>
                <button
                  onClick={() => setAspectRatio('16:9')}
                  className={`px-2 py-1 uppercase cursor-pointer ${
                    aspectRatio === '16:9' ? 'bg-[#C6A477] text-[#080808] font-bold' : 'text-[#A6A19A]'
                  }`}
                >
                  16:9
                </button>
              </div>

              <a
                href={BUSINESS_PROFILE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#C6A477] text-[#C6A477] hover:bg-[#C6A477] hover:text-[#080808] px-3 py-1.5 text-[10px] tracking-[0.2em] font-semibold uppercase transition-all flex items-center gap-1.5"
              >
                <MessageSquare className="w-3 h-3" />
                <span>INQUIRE ON WHATSAPP</span>
              </a>
            </div>
          </div>
        </div>

        {/* Chapters breakdown */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {chapters.map((ch, idx) => (
            <div
              key={idx}
              onClick={() => {
                if (videoRef.current) {
                  const targetSec = (ch.pct / 100) * duration;
                  videoRef.current.currentTime = targetSec;
                  setCurrentTime(targetSec);
                  if (!isPlaying) togglePlay();
                }
              }}
              className="bg-[#101010] p-4 border border-[rgba(245,240,232,0.08)] hover:border-[#C6A477]/50 transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between text-[10px] tracking-[0.22em] text-[#A6A19A] uppercase mb-1">
                <span>CHAPTER 0{idx + 1}</span>
                <span className="text-[#C6A477] group-hover:underline">{ch.pct}% TIMECODE</span>
              </div>
              <h4 className="font-serif text-lg text-[#F5F0E8] group-hover:text-[#C6A477] transition-colors">
                {ch.name}
              </h4>
              <p className="text-xs text-[#A6A19A] mt-2 font-light leading-relaxed">
                Highlights captured by {BUSINESS_PROFILE.name} with natural light and cinematic lenses.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
