import React, { useState, useRef } from 'react';
import { Play, X, Volume2, VolumeX, Pause, Youtube, Film, MapPin, Clock } from 'lucide-react';
import { CINEMATIC_FILMS, CinematicFilm, BUSINESS_PROFILE } from '../data/weddingData';

export const CinematicFilmsSection: React.FC = () => {
  const [activeFilm, setActiveFilm] = useState<CinematicFilm | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const openVideoModal = (film: CinematicFilm) => {
    setActiveFilm(film);
    setIsPlaying(true);
    setIsMuted(false);
  };

  const closeVideoModal = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setActiveFilm(null);
    setIsPlaying(false);
  };

  const toggleModalPlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  return (
    <section id="films" className="py-24 sm:py-32 bg-[#EDEAE3] border-b border-[#DDD8CF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#DDD8CF]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-[#A68B6A] inline-block" />
              <p className="text-xs tracking-[0.24em] text-[#A68B6A] uppercase font-semibold">
                Motion Picture Archive
              </p>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#252525] tracking-tight leading-tight">
              Cinematic Wedding Films
            </h2>
            <p className="text-[#68645E] text-sm sm:text-base font-light mt-3 max-w-xl leading-relaxed">
              Crafted in 4K widescreen cinema format with rich ambient sound design, unscripted vows, and emotional storytelling.
            </p>
          </div>

          <a
            href={BUSINESS_PROFILE.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start md:self-end flex items-center gap-2 px-4 py-2.5 text-xs tracking-[0.18em] uppercase font-semibold bg-[#F7F5F0] border border-red-400/40 text-red-600 hover:bg-[#252525] hover:text-[#FFFFFF] transition-all rounded-sm shadow-sm"
          >
            <Youtube className="w-4 h-4" />
            <span>Visit YouTube Channel</span>
          </a>
        </div>

        {/* Film Cards Grid */}
        {/* Film Cards Grid - Responsive tablet 2-cols and desktop 3-cols */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CINEMATIC_FILMS.map((film) => (
            <article
              key={film.id}
              className="group bg-[#EDEAE3] border border-[#DDD8CF] hover:border-[#A68B6A] transition-all duration-300 flex flex-col justify-between overflow-hidden rounded-sm shadow-[0_4px_20px_rgba(37,37,37,0.03)] hover:shadow-[0_12px_32px_rgba(166,139,106,0.14)]"
            >
              {/* Video Thumbnail with Play Button */}
              <div
                className="relative aspect-[16/9] w-full overflow-hidden bg-[#252525] cursor-pointer"
                onClick={() => openVideoModal(film)}
              >
                <img
                  src={film.posterUrl}
                  alt={film.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />

                {/* Subtle Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                {/* Duration Badge */}
                <div className="absolute top-3 right-3 z-10 flex items-center gap-1 bg-[#F7F5F0]/92 text-[#252525] text-[10px] tracking-wider px-2.5 py-1 border border-[#DDD8CF] font-mono shadow-sm">
                  <Clock className="w-2.5 h-2.5 text-[#A68B6A]" />
                  <span>{film.duration}</span>
                </div>

                {/* Custom Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#EDEAE3]/90 border border-[#A68B6A] backdrop-blur-md flex items-center justify-center text-[#A68B6A] group-hover:bg-[#252525] group-hover:text-[#FFFFFF] transition-all duration-300 gold-halo rounded-full shadow-lg">
                    <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current translate-x-0.5" />
                  </div>
                </div>
              </div>

              {/* Film Narrative */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between bg-[#EDEAE3]">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#A68B6A] mb-2 font-sans tracking-wider font-semibold">
                    <MapPin className="w-3 h-3" />
                    <span>{film.location}</span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl text-[#252525] font-normal group-hover:text-[#A68B6A] transition-colors leading-snug">
                    {film.title}
                  </h3>

                  <p className="text-xs text-[#68645E] font-light mt-2.5 leading-relaxed">
                    Score: <span className="italic font-serif text-[#252525] font-medium">{film.scoreDescription}</span>
                  </p>
                </div>

                <div className="mt-5 sm:mt-6 pt-4 border-t border-[#DDD8CF] flex items-center justify-between">
                  <button
                    onClick={() => openVideoModal(film)}
                    className="text-xs tracking-[0.18em] uppercase text-[#A68B6A] font-semibold hover:text-[#252525] flex items-center gap-1.5 cursor-pointer py-1"
                  >
                    <span>Watch Film</span>
                    <Play className="w-3 h-3 fill-current" />
                  </button>

                  <span className="text-[10px] font-mono text-[#68645E]">
                    {film.aspectRatio} CinemaScope
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Video Lightbox Modal */}
      {activeFilm && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeFilm.title}
          className="fixed inset-0 z-50 bg-[#252525]/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 md:p-8"
        >
          <div className="relative w-full max-w-5xl max-h-[94dvh] bg-[#EDEAE3] border border-[#DDD8CF] shadow-2xl flex flex-col overflow-hidden rounded-sm">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-[#DDD8CF] bg-[#F7F5F0]">
              <div className="pr-3">
                <p className="text-[10px] sm:text-xs tracking-[0.2em] text-[#A68B6A] uppercase font-semibold">
                  Cinema Preview · {activeFilm.couple}
                </p>
                <h3 className="font-serif text-sm sm:text-base md:text-lg text-[#252525] mt-0.5 truncate max-w-md sm:max-w-xl">
                  {activeFilm.title}
                </h3>
              </div>

              <button
                onClick={closeVideoModal}
                className="p-1.5 sm:p-2 border border-[#DDD8CF] text-[#68645E] hover:text-[#252525] hover:bg-[#EDEAE3] transition-all cursor-pointer rounded-sm shrink-0"
                aria-label="Close Cinema Player"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Viewport */}
            <div className="relative aspect-[16/9] w-full bg-black flex items-center justify-center">
              <video
                ref={videoRef}
                src={activeFilm.videoUrl}
                poster={activeFilm.posterUrl}
                autoPlay
                controls
                playsInline
                muted={isMuted}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Modal Footer */}
            <div className="px-4 sm:px-6 py-3 sm:py-4 bg-[#F7F5F0] border-t border-[#DDD8CF] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#68645E]">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-xs">
                <span className="text-[#A68B6A] font-medium">{activeFilm.aspectRatio} Widescreen</span>
                <span className="text-[#DDD8CF]">·</span>
                <span>{activeFilm.location}</span>
              </div>

              <a
                href={BUSINESS_PROFILE.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:underline flex items-center gap-1.5 font-medium text-xs"
              >
                <Youtube className="w-3.5 h-3.5" />
                <span>Watch on YouTube</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
