import React from 'react';
import { Calendar, MessageSquare, Phone } from 'lucide-react';
import { BUSINESS_PROFILE } from '../data/weddingData';

interface FinalBookingCTAProps {
  onOpenBooking: () => void;
}

export const FinalBookingCTA: React.FC<FinalBookingCTAProps> = ({
  onOpenBooking,
}) => {
  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 bg-[#F7F5F0] border-b border-[#DDD8CF] relative overflow-hidden">
      {/* Background Subtle Ambient Warm Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[350px] bg-gradient-to-r from-[#A68B6A]/15 via-[#A68B6A]/8 to-transparent pointer-events-none blur-3xl opacity-60" />

      <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 mb-4 text-xs tracking-[0.24em] uppercase text-[#A68B6A] font-semibold">
          <span>Inquire For 2026–2027 Celebrations</span>
        </div>

        <h2 className="font-serif text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-normal text-[#252525] tracking-tight leading-tight">
          Let's Make Your Story Timeless.
        </h2>

        <p className="font-sans text-sm sm:text-base md:text-lg font-light text-[#68645E] max-w-xl mx-auto mt-4 sm:mt-6 leading-relaxed">
          Tell us about your special day. Let's create something unforgettable.
        </p>

        {/* Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-5">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto min-h-[48px] bg-[#252525] text-[#FFFFFF] hover:bg-[#A68B6A] px-7 py-3.5 text-xs tracking-[0.2em] sm:tracking-[0.22em] font-semibold uppercase transition-all duration-300 gold-halo rounded-sm flex items-center justify-center gap-2.5 cursor-pointer shadow-sm"
          >
            <Calendar className="w-4 h-4 text-[#FFFFFF]" />
            <span>Check Availability</span>
          </button>

          <a
            href={BUSINESS_PROFILE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-h-[48px] border border-[#252525] text-[#252525] bg-[#EDEAE3] hover:bg-[#252525] hover:text-[#FFFFFF] px-7 py-3.5 text-xs tracking-[0.2em] sm:tracking-[0.22em] font-semibold uppercase transition-all duration-300 rounded-sm flex items-center justify-center gap-2.5 shadow-sm"
          >
            <MessageSquare className="w-4 h-4 text-[#252525] group-hover:text-white" />
            <span>Contact on WhatsApp</span>
          </a>
        </div>

        {/* Verified Phone & Direct Contact */}
        <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-[#DDD8CF] flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-[#68645E]">
          <span className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-[#A68B6A]" />
            <a href={`tel:${BUSINESS_PROFILE.phone}`} className="font-mono text-[#252525] hover:text-[#A68B6A]">
              {BUSINESS_PROFILE.formattedPhone}
            </a>
          </span>
          <span className="text-[#DDD8CF] hidden sm:inline">|</span>
          <span>Sangli · Mumbai · Destination Weddings</span>
          <span className="text-[#DDD8CF] hidden sm:inline">|</span>
          <span className="text-[#A68B6A] font-semibold">Strictly Limited Bookings / Season</span>
        </div>
      </div>
    </section>
  );
};
