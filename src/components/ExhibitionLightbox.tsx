import React, { useState, useEffect } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Info,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Minimize2,
  Camera,
  Film,
  Sliders,
  Grid,
  SunMoon,
  Share2,
  Download
} from 'lucide-react';
import { CONTACT_SHEET_ITEMS, WeddingStory, STORIES } from '../data/weddingData';

interface ExhibitionLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  activeStory?: WeddingStory | null;
  initialIndex?: number;
}

export const ExhibitionLightbox: React.FC<ExhibitionLightboxProps> = ({
  isOpen,
  onClose,
  activeStory,
  initialIndex = 0,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [showExif, setShowExif] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [viewMode, setViewMode] = useState<'gallery' | 'contact-sheet'>('gallery');
  const [invertNegative, setInvertNegative] = useState(false);

  // Use either activeStory gallery items or contact sheet items
  const items = activeStory
    ? activeStory.gallery.map((g, i) => ({
        url: g.url,
        title: `${activeStory.couple} — Image ${i + 1}`,
        caption: g.caption,
        camera: activeStory.exif.camera,
        lens: g.lens,
        aperture: activeStory.exif.aperture,
        iso: activeStory.exif.iso,
        filmStock: g.filmStock,
        lut: activeStory.exif.lut,
        frameNo: `0${i + 1}`,
      }))
    : CONTACT_SHEET_ITEMS.map((c) => ({
        url: c.url,
        title: c.title,
        caption: c.category,
        camera: 'Sony FX3 Cine Rig & A7R V',
        lens: c.meta.split('·')[0].trim(),
        aperture: c.meta.split('·')[1]?.trim() || 'f/1.4',
        iso: c.meta.split('·')[3]?.trim() || 'ISO 400',
        filmStock: c.filmRoll,
        lut: 'Man With A Camera Signature Warm Gold Tone',
        frameNo: c.frameNo,
      }));

  useEffect(() => {
    setCurrentIndex(initialIndex);
    setZoomLevel(1);
  }, [initialIndex, activeStory]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, items.length]);

  if (!isOpen) return null;

  const currentItem = items[currentIndex] || items[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
    setZoomLevel(1);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    setZoomLevel(1);
  };

  const toggleZoom = () => {
    setZoomLevel((prev) => (prev === 1 ? 1.5 : prev === 1.5 ? 2 : 1));
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#080808] flex flex-col justify-between overflow-hidden">
      {/* Top Bar with Darkroom Hairline Border */}
      <div className="flex items-center justify-between px-4 sm:px-8 py-3.5 bg-[#0e0e0e] border-b border-[rgba(198,164,119,0.22)] z-30">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#C6A477]"></span>
            <span className="text-[11px] tracking-[0.25em] text-[#C6A477] uppercase font-semibold">
              EXHIBITION LIGHTBOX
            </span>
          </div>

          <span className="text-[rgba(245,240,232,0.2)]">/</span>

          <span className="text-[11px] tracking-[0.2em] text-[#A6A19A] uppercase hidden sm:inline">
            FRAME {currentItem.frameNo} OF 0{items.length}
          </span>
        </div>

        {/* View mode toggles & controls */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Mode Switch: Gallery vs Contact Sheet */}
          <div className="flex items-center border border-[rgba(245,240,232,0.15)] text-[10px] tracking-[0.2em]">
            <button
              onClick={() => setViewMode('gallery')}
              className={`px-3 py-1.5 uppercase transition-all cursor-pointer ${
                viewMode === 'gallery'
                  ? 'bg-[#C6A477] text-[#080808] font-bold'
                  : 'text-[#A6A19A] hover:text-[#F5F0E8]'
              }`}
            >
              SOLO FRAME
            </button>
            <button
              onClick={() => setViewMode('contact-sheet')}
              className={`px-3 py-1.5 uppercase transition-all cursor-pointer flex items-center gap-1 ${
                viewMode === 'contact-sheet'
                  ? 'bg-[#C6A477] text-[#080808] font-bold'
                  : 'text-[#A6A19A] hover:text-[#F5F0E8]'
              }`}
            >
              <Grid className="w-3 h-3" />
              <span>120MM SHEET</span>
            </button>
          </div>

          {/* Film Inversion (Negative / Positive) */}
          <button
            onClick={() => setInvertNegative(!invertNegative)}
            title="Invert Film Negative / Positive"
            className={`hidden sm:flex items-center gap-1.5 p-1.5 border transition-all cursor-pointer ${
              invertNegative
                ? 'border-[#C6A477] text-[#C6A477] bg-[#C6A477]/10'
                : 'border-[rgba(245,240,232,0.15)] text-[#A6A19A] hover:text-[#F5F0E8]'
            }`}
          >
            <SunMoon className="w-3.5 h-3.5" />
            <span className="text-[9px] tracking-[0.18em] uppercase">NEGATIVE</span>
          </button>

          {/* EXIF Toggle */}
          <button
            onClick={() => setShowExif(!showExif)}
            title="Toggle EXIF Metadata Panel"
            className={`flex items-center gap-1.5 p-1.5 border transition-all cursor-pointer ${
              showExif
                ? 'border-[#C6A477] text-[#C6A477] bg-[#C6A477]/10'
                : 'border-[rgba(245,240,232,0.15)] text-[#A6A19A] hover:text-[#F5F0E8]'
            }`}
          >
            <Info className="w-3.5 h-3.5" />
            <span className="text-[9px] tracking-[0.18em] uppercase hidden sm:inline">EXIF DATA</span>
          </button>

          {/* Zoom Toggle */}
          <button
            onClick={toggleZoom}
            title="Toggle Zoom Level"
            className="p-1.5 border border-[rgba(245,240,232,0.15)] text-[#A6A19A] hover:text-[#F5F0E8] cursor-pointer"
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </button>

          {/* Close Lightbox */}
          <button
            onClick={onClose}
            className="p-1.5 bg-[#C6A477] text-[#080808] hover:bg-[#F5F0E8] transition-colors cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Exhibition Area */}
      <div className="relative flex-1 flex items-center justify-center p-4 sm:p-8 overflow-hidden bg-[#080808]">
        {viewMode === 'gallery' ? (
          /* Solo Viewport with 1px Champagne Boundary */
          <div className="relative max-w-6xl max-h-full flex flex-col items-center justify-center">
            {/* Film Edge Label */}
            <div className="w-full flex items-center justify-between text-[9px] font-mono tracking-widest text-[#A6A19A] px-2 py-1 bg-[#101010] border-t border-x border-[rgba(198,164,119,0.2)]">
              <span>ROLL: {currentItem.filmStock}</span>
              <span className="text-[#C6A477]">FRAME [{currentItem.frameNo}]</span>
              <span>ISO {currentItem.iso}</span>
            </div>

            {/* Image Canvas */}
            <div className="relative border border-[rgba(198,164,119,0.22)] bg-black overflow-hidden max-h-[72vh] flex items-center justify-center">
              <img
                src={currentItem.url}
                alt={currentItem.title}
                className={`max-h-[70vh] w-auto object-contain transition-all duration-300 ${
                  invertNegative ? 'invert contrast-125' : ''
                }`}
                style={{
                  transform: `scale(${zoomLevel})`,
                  cursor: zoomLevel > 1 ? 'grab' : 'zoom-in',
                }}
                onClick={toggleZoom}
              />

              {/* Prev / Next Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#080808]/80 hover:bg-[#C6A477] hover:text-[#080808] text-[#F5F0E8] border border-[rgba(198,164,119,0.3)] flex items-center justify-center transition-all cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#080808]/80 hover:bg-[#C6A477] hover:text-[#080808] text-[#F5F0E8] border border-[rgba(198,164,119,0.3)] flex items-center justify-center transition-all cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Captions and Narrative */}
            <div className="w-full bg-[#101010] border-b border-x border-[rgba(198,164,119,0.2)] p-3 text-left">
              <p className="font-serif text-base text-[#F5F0E8]">{currentItem.title}</p>
              <p className="text-xs text-[#A6A19A] mt-0.5 font-light">{currentItem.caption}</p>
            </div>
          </div>
        ) : (
          /* 120mm Film Contact Sheet Mode */
          <div className="w-full max-w-6xl h-full overflow-y-auto pr-2 py-4">
            <div className="p-4 bg-[#0e0e0e] border border-[rgba(198,164,119,0.25)] mb-6 text-center">
              <p className="text-[10px] tracking-[0.25em] text-[#C6A477] uppercase font-semibold">
                ARCHIVAL DARKROOM CONTACT SHEET · PROOF ROLL NO. 42
              </p>
              <p className="text-xs text-[#A6A19A] font-light mt-1">
                Click any contact exposure to inspect in high-resolution master lightbox.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {items.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setViewMode('gallery');
                  }}
                  className={`bg-[#141414] border p-2 cursor-pointer transition-all ${
                    currentIndex === idx
                      ? 'border-[#C6A477] ring-1 ring-[#C6A477]'
                      : 'border-[rgba(245,240,232,0.1)] hover:border-[#C6A477]/50'
                  }`}
                >
                  {/* Sprocket / Edge text simulation */}
                  <div className="flex justify-between text-[8px] font-mono text-[#A6A19A] uppercase mb-1">
                    <span>{item.filmStock.split('-')[0]}</span>
                    <span className="text-[#C6A477]">#{item.frameNo}</span>
                  </div>

                  <div className="aspect-[4/3] bg-black overflow-hidden relative">
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-cover filter brightness-90 hover:brightness-100 transition-all"
                    />
                    <div className="absolute bottom-1 right-1 bg-black/80 px-1 text-[8px] font-mono text-[#F5F0E8]">
                      {item.aperture}
                    </div>
                  </div>

                  <div className="mt-2 text-left">
                    <p className="text-[11px] font-serif text-[#F5F0E8] truncate">{item.title}</p>
                    <p className="text-[9px] text-[#A6A19A] tracking-wider truncate mt-0.5">{item.lens}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Floating EXIF Metadata Panel */}
        {showExif && viewMode === 'gallery' && (
          <aside className="hidden lg:block absolute right-8 top-12 w-72 bg-[#141414]/95 border border-[rgba(198,164,119,0.25)] p-5 backdrop-blur-md z-30 gold-halo">
            <div className="flex items-center justify-between pb-3 border-b border-[rgba(245,240,232,0.1)] mb-4">
              <span className="text-[10px] tracking-[0.24em] text-[#C6A477] uppercase font-semibold">
                CAMERA EXIF SPEC
              </span>
              <span className="text-[9px] font-mono text-[#A6A19A]">FRAME {currentItem.frameNo}</span>
            </div>

            <div className="space-y-3.5 text-[11px] font-sans">
              <div>
                <span className="text-[9px] tracking-[0.2em] text-[#A6A19A] uppercase block">CAMERA BODY</span>
                <span className="text-[#F5F0E8] font-medium block mt-0.5">{currentItem.camera}</span>
              </div>

              <div>
                <span className="text-[9px] tracking-[0.2em] text-[#A6A19A] uppercase block">OPTICAL PRIME</span>
                <span className="text-[#F5F0E8] block mt-0.5">{currentItem.lens}</span>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[rgba(245,240,232,0.06)]">
                <div>
                  <span className="text-[9px] tracking-[0.2em] text-[#A6A19A] uppercase block">APERTURE</span>
                  <span className="text-[#C6A477] font-mono">{currentItem.aperture}</span>
                </div>
                <div>
                  <span className="text-[9px] tracking-[0.2em] text-[#A6A19A] uppercase block">SENSITIVITY</span>
                  <span className="text-[#F5F0E8] font-mono">{currentItem.iso}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-[rgba(245,240,232,0.06)]">
                <span className="text-[9px] tracking-[0.2em] text-[#A6A19A] uppercase block">FILM EMULSION / LUT</span>
                <span className="text-[#F5F0E8] block mt-0.5 italic font-serif">{currentItem.filmStock}</span>
              </div>
            </div>
          </aside>
        )}
      </div>

      {/* Film Strip Thumbnails Navigation Bar at Bottom */}
      <div className="px-4 py-2 bg-[#0e0e0e] border-t border-[rgba(198,164,119,0.22)] z-30 flex items-center justify-between gap-4 overflow-x-auto">
        <div className="flex items-center gap-2">
          {items.map((item, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentIndex(idx);
                setViewMode('gallery');
              }}
              className={`w-12 h-9 flex-shrink-0 border overflow-hidden cursor-pointer transition-all ${
                currentIndex === idx
                  ? 'border-[#C6A477] ring-1 ring-[#C6A477]'
                  : 'border-[rgba(245,240,232,0.15)] opacity-60 hover:opacity-100'
              }`}
            >
              <img src={item.url} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

        <div className="hidden sm:flex items-center gap-4 text-[10px] tracking-[0.2em] text-[#A6A19A] uppercase flex-shrink-0">
          <span>USE ← / → KEYS TO NAVIGATE</span>
          <span className="text-[rgba(245,240,232,0.2)]">|</span>
          <span>ESC TO EXIT</span>
        </div>
      </div>
    </div>
  );
};
