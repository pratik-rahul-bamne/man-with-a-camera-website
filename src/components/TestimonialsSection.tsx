import React from 'react';
import { Quote, MapPin } from 'lucide-react';
import { TESTIMONIALS, BUSINESS_PROFILE } from '../data/weddingData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#F7F5F0] border-b border-[#DDD8CF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-2 h-2 bg-[#A68B6A] inline-block" />
            <p className="text-xs tracking-[0.24em] text-[#A68B6A] uppercase font-semibold">
              Words of Trust
            </p>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#252525] tracking-tight">
            Client Testimonials
          </h2>
          <p className="text-[#68645E] text-xs sm:text-sm font-light mt-3 max-w-lg mx-auto">
            Authentic reflections from couples who trusted {BUSINESS_PROFILE.name} with their once-in-a-lifetime celebrations.
          </p>
        </div>

        {/* Testimonials Cards Grid - Responsive on Tablets and Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#EDEAE3] p-6 sm:p-8 border border-[#DDD8CF] hover:border-[#A68B6A] flex flex-col justify-between relative rounded-sm shadow-[0_4px_20px_rgba(37,37,37,0.03)] hover:shadow-[0_12px_32px_rgba(166,139,106,0.14)] transition-all"
            >
              <Quote className="w-8 h-8 text-[#A68B6A]/30 mb-6" />

              <blockquote className="font-serif italic text-base sm:text-lg text-[#252525] leading-relaxed flex-1">
                “{t.quote}”
              </blockquote>

              <div className="mt-8 pt-6 border-t border-[#DDD8CF] flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-lg text-[#A68B6A] font-medium">
                    {t.couple}
                  </h3>
                  <p className="text-[11px] tracking-wider text-[#68645E] flex items-center gap-1 mt-1 font-sans">
                    <MapPin className="w-2.5 h-2.5 text-[#A68B6A]" />
                    <span>{t.venue}</span>
                  </p>
                </div>
                <span className="text-[10px] font-mono text-[#68645E] bg-[#F7F5F0] px-2.5 py-1 border border-[#DDD8CF] rounded-sm">
                  {t.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
