import React from 'react';
import { APPROACH_PILLARS, BUSINESS_PROFILE } from '../data/weddingData';

export const OurApproachSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 bg-[#EDEAE3] text-[#252525] border-b border-[#DDD8CF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start lg:items-center mb-12 sm:mb-20">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-[#A68B6A] inline-block" />
              <p className="text-xs tracking-[0.24em] text-[#A68B6A] uppercase font-semibold">
                Our Editorial Philosophy
              </p>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#252525] tracking-tight leading-[1.12]">
              More Than Photographs. <br className="hidden sm:inline" />
              <span className="italic text-[#A68B6A]">Memories</span> That Last Forever.
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-[#68645E] font-light leading-relaxed">
              We reject fleeting social media trends and over-posed clichés. Since {BUSINESS_PROFILE.foundedYear}, our work has focused on the quiet, unscripted truth of your day — the joyful tears, the sacred Vedic blessings, and the quiet glance that needs no staging.
            </p>
            <p className="font-serif italic text-sm sm:text-base text-[#A68B6A] mt-3 sm:mt-4">
              “{BUSINESS_PROFILE.manifestoQuote}”
            </p>
          </div>
        </div>

        {/* 4 Pillars Grid with Elegant Offset */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {APPROACH_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="bg-[#F7F5F0] p-6 sm:p-8 border border-[#DDD8CF] hover:border-[#A68B6A] flex flex-col justify-between rounded-sm shadow-[0_4px_20px_rgba(37,37,37,0.03)] hover:shadow-[0_12px_32px_rgba(166,139,106,0.14)] transition-all"
            >
              <div>
                <span className="font-serif text-4xl text-[#A68B6A] font-normal block mb-4">
                  {pillar.number}
                </span>
                <h3 className="font-serif text-xl text-[#252525] font-normal mb-3">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#68645E] font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#DDD8CF] text-[10px] tracking-[0.2em] uppercase font-semibold text-[#A68B6A]">
                Pillar {pillar.number} · {BUSINESS_PROFILE.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
