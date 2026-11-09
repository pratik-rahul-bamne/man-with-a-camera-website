import React from 'react';
import { ArrowDown, Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_PROFILE } from '../data/weddingData';

interface HeroSectionProps {
  onExploreStories: () => void;
  onCheckDate: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreStories,
  onCheckDate,
}) => {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#F7F5F0]"
    >
      {/* Background Photograph with Luminous Editorial Wash */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=2200&q=90"
          alt="Royal wedding celebration photograph by Man With A Camera"
          fetchPriority="high"
          loading="eager"
          className="w-full h-full object-cover object-center filter contrast-[1.02] brightness-[0.98]"
        />

        {/* Warm Editorial Overlays for High Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#F7F5F0] via-[#F7F5F0]/75 to-[#F7F5F0]/40 pointer-events-none" />
        <div className="absolute inset-0 bg-[#F7F5F0]/35 backdrop-blur-[1px] pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 text-center pt-28 sm:pt-36 pb-20 sm:pb-24">
        {/* Verified Location Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex flex-wrap items-center justify-center gap-2 mb-4 sm:mb-6 text-[11px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.24em] uppercase text-[#A68B6A] font-semibold"
        >
          <span>Sangli</span>
          <span className="text-[#68645E]/40" aria-hidden="true">·</span>
          <span>Mumbai</span>
          <span className="text-[#68645E]/40" aria-hidden="true">·</span>
          <span>Destination Weddings</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.12] sm:leading-[1.14] tracking-[-0.015em] text-[#252525] max-w-4xl mx-auto"
          style={{ textWrap: 'balance' }}
        >
          Every Love Story Deserves to Be Remembered.
        </motion.h1>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="font-sans text-sm sm:text-lg md:text-xl font-light text-[#68645E] max-w-2xl mx-auto mt-4 sm:mt-6 leading-relaxed"
        >
          Wedding Photography &amp; Cinematic Films Crafted with Emotion.
        </motion.p>

        {/* CTA Buttons - Immediate, responsive touch targets */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-5"
        >
          <button
            onClick={onExploreStories}
            className="w-full sm:w-auto min-h-[48px] bg-[#252525] text-[#FFFFFF] hover:bg-[#A68B6A] px-7 py-3.5 text-xs tracking-[0.2em] sm:tracking-[0.22em] font-semibold uppercase transition-all duration-300 gold-halo rounded-sm flex items-center justify-center gap-2 cursor-pointer shadow-sm"
          >
            <span>Explore Our Stories</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onCheckDate}
            className="w-full sm:w-auto min-h-[48px] border border-[#252525] text-[#252525] bg-[#EDEAE3]/80 hover:bg-[#252525] hover:text-[#FFFFFF] px-7 py-3.5 text-xs tracking-[0.2em] sm:tracking-[0.22em] font-semibold uppercase transition-all duration-300 rounded-sm flex items-center justify-center gap-2 cursor-pointer shadow-sm"
          >
            <Calendar className="w-3.5 h-3.5 text-[#252525] group-hover:text-white" />
            <span>Check Your Wedding Date</span>
          </button>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity">
        <button
          onClick={onExploreStories}
          className="text-[10px] tracking-[0.22em] uppercase text-[#68645E] flex items-center gap-1 cursor-pointer focus:outline-none p-2"
          aria-label="Scroll to portfolio stories"
        >
          <ArrowDown className="w-3.5 h-3.5 text-[#A68B6A] animate-bounce" />
        </button>
      </div>
    </section>
  );
};
