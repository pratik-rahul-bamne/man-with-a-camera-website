import React, { useState } from 'react';
import { Grid, Eye, Camera, Film, SunMoon, Maximize2 } from 'lucide-react';
import { CONTACT_SHEET_ITEMS } from '../data/weddingData';

interface ExhibitionGallerySectionProps {
  onOpenLightboxWithContactSheet: (index: number) => void;
  onOpenCommission: () => void;
}

export const ExhibitionGallerySection: React.FC<ExhibitionGallerySectionProps> = ({
  onOpenLightboxWithContactSheet,
  onOpenCommission,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [viewMode, setViewMode] = useState<'editorial' | 'contact-strip'>('editorial');

  const categories = ['ALL', 'Bride', 'Details', 'Heritage', 'Vows', 'Night', 'Groom', 'Celebration'];

  const filteredItems =
    activeCategory === 'ALL'
      ? CONTACT_SHEET_ITEMS
      : CONTACT_SHEET_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="exhibition" className="py-24 bg-[#080808] border-b border-[rgba(198,164,119,0.18)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[rgba(245,240,232,0.08)]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-[#C6A477]" />
              <p className="text-[11px] tracking-[0.25em] text-[#C6A477] uppercase font-semibold">
                ARCHIVAL STILLS &amp; CONTACT SHEETS · MAN WITH A CAMERA
              </p>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#F5F0E8] tracking-tight">
              Curated Wedding Stills &amp; Proof Rolls
            </h2>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-3">
            <div className="flex items-center border border-[rgba(245,240,232,0.15)] text-[10px] tracking-[0.2em]">
              <button
                onClick={() => setViewMode('editorial')}
                className={`px-3 py-1.5 uppercase transition-all cursor-pointer ${
                  viewMode === 'editorial'
                    ? 'bg-[#C6A477] text-[#080808] font-bold'
                    : 'text-[#A6A19A] hover:text-[#F5F0E8]'
                }`}
              >
                EDITORIAL PLATES
              </button>
              <button
                onClick={() => setViewMode('contact-strip')}
                className={`px-3 py-1.5 uppercase transition-all cursor-pointer flex items-center gap-1.5 ${
                  viewMode === 'contact-strip'
                    ? 'bg-[#C6A477] text-[#080808] font-bold'
                    : 'text-[#A6A19A] hover:text-[#F5F0E8]'
                }`}
              >
                <Grid className="w-3 h-3" />
                <span>120MM CONTACT ROLL</span>
              </button>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[rgba(245,240,232,0.06)]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1 text-[10px] tracking-[0.2em] uppercase font-semibold border transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'border-[#C6A477] bg-[#C6A477] text-[#080808]'
                  : 'border-[rgba(245,240,232,0.1)] text-[#A6A19A] hover:text-[#F5F0E8] bg-[#101010]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Content */}
        {viewMode === 'editorial' ? (
          /* Editorial Masonry/Staggered Layout */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredItems.map((item, idx) => (
              <div
                key={idx}
                onClick={() => onOpenLightboxWithContactSheet(idx)}
                className="group relative bg-[#101010] border border-[rgba(198,164,119,0.18)] hover:border-[#C6A477] transition-all cursor-pointer overflow-hidden p-2 flex flex-col justify-between"
              >
                {/* Micro Film Mark */}
                <div className="flex items-center justify-between text-[8px] font-mono tracking-widest text-[#A6A19A] mb-1.5 px-1 uppercase">
                  <span>FRAME {item.frameNo}</span>
                  <span className="text-[#C6A477]">{item.filmRoll.split('-')[0]}</span>
                </div>

                {/* Image */}
                <div className="aspect-[4/5] bg-black overflow-hidden relative">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-70" />

                  {/* Hover Inspect Pill */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-[#080808]/90 border border-[#C6A477] text-[#F5F0E8] text-[9px] tracking-[0.2em] uppercase px-3 py-1.5 backdrop-blur-md flex items-center gap-1.5">
                      <Maximize2 className="w-3 h-3 text-[#C6A477]" />
                      INSPECT EXIF
                    </span>
                  </div>
                </div>

                {/* Caption Details */}
                <div className="mt-3 px-1 pb-1 text-left">
                  <h4 className="font-serif text-sm text-[#F5F0E8] group-hover:text-[#C6A477] transition-colors truncate">
                    {item.title}
                  </h4>
                  <p className="text-[10px] text-[#A6A19A] tracking-wider mt-1 truncate font-mono">
                    {item.meta}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* 120mm Film Contact Roll Mode */
          <div className="bg-[#0c0c0c] border border-[rgba(198,164,119,0.25)] p-6 sm:p-10">
            {/* Film Edge Border Header */}
            <div className="flex items-center justify-between text-[9px] font-mono tracking-[0.25em] text-[#C6A477] uppercase pb-4 mb-6 border-b border-[rgba(198,164,119,0.2)]">
              <span>◄◄ MAN WITH A CAMERA · SANGLI | MUMBAI PROOF ROLL ◄◄</span>
              <span>EST. 2014 · PHONE: 9766066092</span>
              <span>ARCHIVAL CONTACT SHEET</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {filteredItems.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => onOpenLightboxWithContactSheet(idx)}
                  className="bg-black border border-[rgba(245,240,232,0.15)] hover:border-[#C6A477] p-2.5 cursor-pointer transition-all group"
                >
                  <div className="flex justify-between text-[8px] font-mono text-[#A6A19A] uppercase mb-1">
                    <span>PORTRA 400</span>
                    <span className="text-[#C6A477]">EXP [{item.frameNo}]</span>
                  </div>

                  <div className="aspect-square bg-black overflow-hidden relative">
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-cover filter brightness-85 group-hover:brightness-100 transition-all"
                    />
                    {/* Darkroom red crop marker simulation */}
                    <div className="absolute top-1 left-1 w-2.5 h-2.5 border-t border-l border-red-500/80" />
                    <div className="absolute bottom-1 right-1 w-2.5 h-2.5 border-b border-r border-red-500/80" />
                  </div>

                  <div className="mt-2 text-left">
                    <p className="text-[11px] font-serif text-[#F5F0E8] truncate group-hover:text-[#C6A477]">
                      {item.title}
                    </p>
                    <p className="text-[8px] font-mono text-[#A6A19A] truncate mt-0.5">{item.meta}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between text-[9px] font-mono tracking-[0.25em] text-[#C6A477] uppercase pt-6 mt-6 border-t border-[rgba(198,164,119,0.2)]">
              <span>PROOFS VERIFIED BY LEAD COLORIST</span>
              <span>CLICK TO EXPAND INTO 4K MASTER LIGHTBOX</span>
            </div>
          </div>
        )}

        {/* Gallery Bottom Banner */}
        <div className="mt-16 p-8 bg-[#101010] border border-[rgba(198,164,119,0.18)] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <span className="text-[10px] tracking-[0.22em] text-[#C6A477] uppercase font-semibold">
              COMMISSION COMPREHENSIVE COVERAGE
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-[#F5F0E8] font-normal mt-1">
              Every commission receives both high-resolution digital master files and physical 35mm negatives.
            </h3>
          </div>
          <button
            onClick={onOpenCommission}
            className="bg-[#C6A477] text-[#080808] hover:bg-[#F5F0E8] px-6 py-3 text-[11px] tracking-[0.22em] font-semibold uppercase transition-all duration-300 gold-halo flex-shrink-0 cursor-pointer"
          >
            INQUIRE STILLS &amp; FILMS
          </button>
        </div>
      </div>
    </section>
  );
};
