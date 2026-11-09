import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { StoryItem } from '../data/weddingData';

interface ExhibitionLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  activeStory?: StoryItem | null;
  initialIndex?: number;
}

export const ExhibitionLightbox: React.FC<ExhibitionLightboxProps> = ({
  isOpen,
  onClose,
  activeStory,
  initialIndex = 0,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [zoomLevel, setZoomLevel] = useState(1);
  const touchStartX = useRef<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  // Derive flat list of images to display
  const images = activeStory && activeStory.galleryImages && activeStory.galleryImages.length > 0
    ? activeStory.galleryImages.map((img) => ({
        url: img.url,
        caption: img.caption,
        couple: activeStory.couple,
        location: activeStory.location,
      }))
    : activeStory
    ? [
        {
          url: activeStory.heroImage,
          caption: activeStory.caption,
          couple: activeStory.couple,
          location: activeStory.location,
        },
      ]
    : [];

  useEffect(() => {
    setCurrentIndex(initialIndex);
    setZoomLevel(1);
  }, [initialIndex, activeStory]);

  // Lock background scroll when open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      // Focus close button for accessibility
      setTimeout(() => closeButtonRef.current?.focus(), 50);
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && images.length > 1) {
        handleNext();
      }
      if (e.key === 'ArrowLeft' && images.length > 1) {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images.length]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex] || images[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setZoomLevel(1);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setZoomLevel(1);
  };

  // Touch Swipe Handlers for mobile devices
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > 50 && images.length > 1) {
      handlePrev();
    } else if (deltaX < -50 && images.length > 1) {
      handleNext();
    }
    touchStartX.current = null;
  };

  const zoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.35, 2.5));
  const zoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.35, 1));
  const resetZoom = () => setZoomLevel(1);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Photograph Lightbox"
      className="fixed inset-0 z-50 bg-[#F7F5F0]/98 backdrop-blur-md flex flex-col justify-between overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between px-3 sm:px-8 py-3 sm:py-4 bg-[#F7F5F0]/95 border-b border-[#DDD8CF] z-30 shadow-sm">
        <div className="flex items-center gap-2 sm:gap-3 pr-2 truncate">
          <span className="font-serif text-sm sm:text-base md:text-lg text-[#252525] font-normal truncate">
            {currentImage.couple}
          </span>
          <span className="text-[#DDD8CF] hidden xs:inline" aria-hidden="true">·</span>
          <span className="text-xs text-[#68645E] font-light hidden sm:inline">
            {currentImage.location}
          </span>
          {images.length > 1 && (
            <span className="text-[10px] sm:text-[11px] font-mono text-[#A68B6A] font-semibold shrink-0">
              ({currentIndex + 1}/{images.length})
            </span>
          )}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Zoom controls */}
          <div className="hidden sm:flex items-center border border-[#DDD8CF] bg-[#EDEAE3] rounded-sm">
            <button
              onClick={zoomIn}
              title="Zoom In"
              aria-label="Zoom In"
              className="p-1.5 text-[#68645E] hover:text-[#252525] cursor-pointer"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={zoomOut}
              disabled={zoomLevel <= 1}
              title="Zoom Out"
              aria-label="Zoom Out"
              className="p-1.5 text-[#68645E] hover:text-[#252525] disabled:opacity-30 cursor-pointer"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            {zoomLevel > 1 && (
              <button
                onClick={resetZoom}
                title="Reset Zoom"
                aria-label="Reset Zoom"
                className="p-1.5 text-[#A68B6A] hover:text-[#252525] cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Close button */}
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="p-1.5 sm:p-2 bg-[#252525] text-[#FFFFFF] hover:bg-[#A68B6A] transition-colors cursor-pointer rounded-sm shadow-sm"
            aria-label="Close Lightbox"
          >
            <X className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
          </button>
        </div>
      </div>

      {/* Main Image Canvas */}
      <div className="relative flex-1 flex items-center justify-center p-2 sm:p-6 md:p-8 overflow-hidden">
        <div className="relative max-w-6xl max-h-full flex items-center justify-center overflow-hidden">
          <img
            src={currentImage.url}
            alt={currentImage.caption || currentImage.couple}
            className="max-h-[62vh] sm:max-h-[72vh] md:max-h-[76vh] w-auto max-w-full object-contain transition-transform duration-300 select-none shadow-[0_20px_60px_rgba(37,37,37,0.12)] rounded-sm"
            style={{
              transform: `scale(${zoomLevel})`,
              cursor: zoomLevel > 1 ? 'grab' : 'default',
            }}
          />

          {/* Previous / Next Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 bg-[#EDEAE3]/90 hover:bg-[#252525] text-[#252525] hover:text-[#FFFFFF] border border-[#DDD8CF] flex items-center justify-center transition-all cursor-pointer rounded-sm shadow-md"
                aria-label="Previous Photograph"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 bg-[#EDEAE3]/90 hover:bg-[#252525] text-[#252525] hover:text-[#FFFFFF] border border-[#DDD8CF] flex items-center justify-center transition-all cursor-pointer rounded-sm shadow-md"
                aria-label="Next Photograph"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Bottom Caption Bar */}
      <div className="px-4 sm:px-6 py-3 sm:py-4 bg-[#F7F5F0]/95 border-t border-[#DDD8CF] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-4 z-30 shadow-sm safe-pb">
        <div className="max-w-2xl">
          <p className="text-xs sm:text-sm text-[#252525] font-light leading-relaxed line-clamp-2 sm:line-clamp-none">
            {currentImage.caption}
          </p>
        </div>

        {images.length > 1 && (
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto py-1 scrollbar-none snap-x">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx);
                  setZoomLevel(1);
                }}
                className={`w-11 h-8 sm:w-12 sm:h-9 border overflow-hidden cursor-pointer transition-all rounded-sm shrink-0 snap-start ${
                  currentIndex === idx
                    ? 'border-[#252525] ring-2 ring-[#252525]'
                    : 'border-[#DDD8CF] opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img.url} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
