import React from 'react';
import { Play, Sparkles, Phone, MessageSquare, ArrowDownRight, Instagram, Youtube, Heart } from 'lucide-react';
import { BUSINESS_PROFILE, STORY_HIGHLIGHTS } from '../data/weddingData';

interface HeroSectionProps {
  onPlayFeatureReel: () => void;
  onExploreArchives: () => void;
  onOpenCommission: () => void;
  aspectRatio: '2.39:1' | '16:9';
  onSelectHighlight?: (coupleId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onPlayFeatureReel,
  onExploreArchives,
  onOpenCommission,
  aspectRatio,
  onSelectHighlight,
}) => {
  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 border-b border-[rgba(198,164,119,0.18)] bg-[#080808] overflow-hidden">
      {/* Subtle cinema projector beam effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85vw] h-[360px] bg-gradient-to-b from-[#C6A477]/12 via-transparent to-transparent pointer-events-none blur-3xl opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Profile Status & Social Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[rgba(245,240,232,0.08)]">
          <div className="flex items-center gap-3">
            <span className="text-[10px] sm:text-xs tracking-[0.24em] text-[#C6A477] font-semibold uppercase">
              {BUSINESS_PROFILE.handle}
            </span>
            <span className="text-[rgba(245,240,232,0.2)]">/</span>
            <span className="text-[10px] tracking-[0.2em] text-[#A6A19A] uppercase hidden md:inline">
              {BUSINESS_PROFILE.profession}
            </span>
            <span className="text-[rgba(245,240,232,0.2)] hidden md:inline">/</span>
            <span className="text-[10px] tracking-[0.2em] text-[#F5F0E8] uppercase hidden md:inline">
              SINCE {BUSINESS_PROFILE.foundedYear}
            </span>
          </div>

          <div className="flex items-center gap-4 text-[10px] tracking-[0.18em] text-[#A6A19A] uppercase">
            <span className="text-[#C6A477] font-medium">
              SANGLI · MUMBAI · DESTINATIONS
            </span>
            <span className="text-[rgba(245,240,232,0.2)]">|</span>
            <a
              href={`tel:${BUSINESS_PROFILE.phone}`}
              className="text-[#F5F0E8] hover:text-[#C6A477] font-mono flex items-center gap-1 transition-colors"
            >
              <Phone className="w-2.5 h-2.5 text-[#C6A477]" />
              <span>{BUSINESS_PROFILE.phone}</span>
            </a>
          </div>
        </div>

        {/* Profile Header & Bio block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-[#C6A477]"></span>
              <p className="text-[11px] tracking-[0.25em] text-[#C6A477] uppercase font-semibold">
                {BUSINESS_PROFILE.profession} · EST. {BUSINESS_PROFILE.foundedYear}
              </p>
            </div>
            
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-[4.5rem] font-normal leading-[1.08] tracking-[-0.02em] text-[#F5F0E8]">
              {BUSINESS_PROFILE.name}
            </h1>

            <p className="font-serif italic text-lg sm:text-2xl text-[#C6A477] mt-2 font-normal">
              “{BUSINESS_PROFILE.tagline}”
            </p>

            <p className="text-xs sm:text-sm text-[#A6A19A] font-light max-w-2xl mt-4 leading-relaxed">
              Based in Sangli and Mumbai, documenting real laughter, sacred rituals, and monumental celebrations across Maharashtra and luxury destination weddings worldwide.
            </p>
          </div>

          {/* Quick Metrics / Instagram Connect Box */}
          <div className="lg:col-span-4 bg-[#101010] border border-[rgba(198,164,119,0.22)] p-5 gold-halo">
            <div className="flex items-center justify-between pb-3 border-b border-[rgba(245,240,232,0.08)] mb-4">
              <div>
                <p className="text-sm font-serif text-[#F5F0E8] font-medium">{BUSINESS_PROFILE.handle}</p>
                <p className="text-[9px] text-[#A6A19A] tracking-wider uppercase">Instagram Verified Archive</p>
              </div>
              <a
                href={BUSINESS_PROFILE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 text-[9px] tracking-[0.16em] uppercase font-semibold border border-[#C6A477] text-[#C6A477] hover:bg-[#C6A477] hover:text-[#080808] transition-colors"
              >
                FOLLOW
              </a>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center pb-4 border-b border-[rgba(245,240,232,0.08)]">
              <div>
                <span className="font-serif text-lg text-[#F5F0E8] font-medium block">{BUSINESS_PROFILE.postsCount}</span>
                <span className="text-[9px] tracking-wider text-[#A6A19A] uppercase block">Films &amp; Posts</span>
              </div>
              <div>
                <span className="font-serif text-lg text-[#C6A477] font-medium block">{BUSINESS_PROFILE.followersCount}</span>
                <span className="text-[9px] tracking-wider text-[#A6A19A] uppercase block">Patrons</span>
              </div>
              <div>
                <span className="font-serif text-lg text-[#F5F0E8] font-medium block">{BUSINESS_PROFILE.followingCount}</span>
                <span className="text-[9px] tracking-wider text-[#A6A19A] uppercase block">Following</span>
              </div>
            </div>

            <div className="pt-3 flex items-center justify-between gap-2">
              <a
                href={BUSINESS_PROFILE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#C6A477] text-[#080808] hover:bg-[#F5F0E8] py-2 text-[10px] tracking-[0.18em] font-semibold uppercase transition-all flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3 h-3" />
                <span>WHATSAPP CHAT</span>
              </a>

              <a
                href={`tel:${BUSINESS_PROFILE.phone}`}
                className="border border-[rgba(198,164,119,0.4)] text-[#F5F0E8] hover:bg-[#C6A477]/10 p-2 transition-colors"
                title="Direct Phone Call"
              >
                <Phone className="w-3.5 h-3.5 text-[#C6A477]" />
              </a>
            </div>
          </div>
        </div>

        {/* Story Highlights Circles (Faithfully adapted from Instagram profile highlights) */}
        <div className="mb-12 pb-6 border-b border-[rgba(245,240,232,0.08)]">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] tracking-[0.24em] text-[#C6A477] uppercase font-semibold">
              FEATURED STORY HIGHLIGHTS
            </span>
            <span className="text-[9px] tracking-[0.18em] text-[#A6A19A] uppercase">
              CLICK TO EXPLORE FOLIOS
            </span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto pb-2 scrollbar-none">
            {STORY_HIGHLIGHTS.map((h) => (
              <button
                key={h.id}
                onClick={() => {
                  if (onSelectHighlight) onSelectHighlight(h.id);
                  onExploreArchives();
                }}
                className="flex-shrink-0 flex flex-col items-center group cursor-pointer focus:outline-none"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 p-0.5 border border-[#C6A477] group-hover:border-[#F5F0E8] transition-all bg-[#141414] overflow-hidden">
                  <img
                    src={h.image}
                    alt={h.couple}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                  />
                </div>
                <span className="text-[10px] tracking-[0.12em] text-[#F5F0E8] group-hover:text-[#C6A477] transition-colors mt-2 text-center max-w-[80px] truncate uppercase font-sans">
                  {h.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Featured Cinema Reel Frame */}
        <div className="relative group border border-[rgba(198,164,119,0.22)] bg-[#101010] p-1.5 sm:p-2.5">
          {/* Top Frame Label */}
          <div className="absolute top-2 left-4 z-20 flex items-center gap-3 text-[9px] tracking-[0.22em] text-[#F5F0E8]/80 uppercase bg-[#080808]/85 px-2.5 py-1 backdrop-blur-sm border border-[rgba(198,164,119,0.2)]">
            <span className="text-[#C6A477] font-semibold">FEATURED REEL</span>
            <span>·</span>
            <span>AKASH &amp; POOJA</span>
            <span>·</span>
            <span>SANGLI PALACE WEDDING</span>
          </div>

          <div className="absolute top-2 right-4 z-20 flex items-center gap-2 text-[9px] tracking-[0.2em] text-[#C6A477] uppercase bg-[#080808]/85 px-2.5 py-1 backdrop-blur-sm border border-[rgba(198,164,119,0.2)]">
            <span>FORMAT: {aspectRatio} CINEMASCOPE</span>
          </div>

          {/* Video Container */}
          <div
            className={`w-full overflow-hidden relative cursor-pointer ${
              aspectRatio === '2.39:1' ? 'aspect-[2.39/1]' : 'aspect-[16/9]'
            }`}
            onClick={onPlayFeatureReel}
          >
            <img
              src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=2000&q=90"
              alt="Akash & Pooja Royal Sangli Paithani wedding film"
              className="w-full h-full object-cover object-center filter brightness-[0.85] contrast-[1.05] transition-transform duration-1000 group-hover:scale-[1.02]"
            />

            {/* Darkroom Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-black/30 pointer-events-none" />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#080808]/80 border border-[#C6A477] backdrop-blur-md flex items-center justify-center text-[#C6A477] group-hover:bg-[#C6A477] group-hover:text-[#080808] transition-all duration-300 gold-halo">
                <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-current translate-x-0.5" />
              </div>
            </div>

            {/* Bottom Info Overlay */}
            <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-[10px] tracking-[0.24em] text-[#C6A477] uppercase font-semibold">
                  FEATURED CINEMA TRAILER · 04:18
                </p>
                <h3 className="font-serif text-xl sm:text-2xl text-[#F5F0E8] font-normal mt-1">
                  Akash &amp; Pooja // The Royal Sangli Paithani Film
                </h3>
              </div>

              {/* Technical Optics Badge */}
              <div className="hidden sm:flex items-center gap-3 bg-[#080808]/85 backdrop-blur-md px-3 py-1.5 border border-[rgba(245,240,232,0.1)] text-[9px] tracking-[0.18em] text-[#A6A19A]">
                <span>SONY FX3 CINE RIG</span>
                <span className="text-[#C6A477]">/</span>
                <span>50MM G-MASTER F/1.2</span>
                <span className="text-[#C6A477]">/</span>
                <span>WARM GOLD FILM TONE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Pinned Quote from Instagram screenshot */}
        <div className="mt-8 pt-6 border-t border-[rgba(245,240,232,0.06)] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <Heart className="w-3.5 h-3.5 text-[#C6A477] fill-current" />
            <p className="font-serif italic text-sm text-[#F5F0E8]">
              “more than love — we loved with a love that was more than love”
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onPlayFeatureReel}
              className="bg-[#C6A477] text-[#080808] hover:bg-[#F5F0E8] px-4 py-2 text-[10px] tracking-[0.2em] font-semibold uppercase transition-all"
            >
              SCREEN REELS
            </button>
            <button
              onClick={onOpenCommission}
              className="border border-[rgba(198,164,119,0.4)] text-[#F5F0E8] hover:bg-[#C6A477]/10 px-4 py-2 text-[10px] tracking-[0.2em] font-semibold uppercase transition-all"
            >
              BOOK DATES
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
