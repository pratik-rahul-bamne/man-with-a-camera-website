import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Film, Calendar, Phone, Instagram, Youtube } from 'lucide-react';
import { ambientSound } from '../utils/ambientAudio';
import { BUSINESS_PROFILE } from '../data/weddingData';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenCommission: () => void;
  aspectRatio: '2.39:1' | '16:9';
  setAspectRatio: (ar: '2.39:1' | '16:9') => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeTab,
  setActiveTab,
  onOpenCommission,
  aspectRatio,
  setAspectRatio,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [soundActive, setSoundActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleSound = () => {
    const nextState = ambientSound.toggle();
    setSoundActive(nextState);
  };

  const navLinks = [
    { id: 'showcase', label: 'STORIES' },
    { id: 'screening', label: 'CINEMA REELS' },
    { id: 'exhibition', label: 'STILLS & CONTACT' },
    { id: 'vault', label: 'GEAR VAULT' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-[#080808]/95 backdrop-blur-md border-[rgba(198,164,119,0.22)] py-2.5'
            : 'bg-[#080808]/50 backdrop-blur-sm border-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Brand Monogram */}
          <button
            onClick={() => {
              setActiveTab('showcase');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-left group cursor-pointer focus:outline-none"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#C6A477] inline-block"></span>
              <span className="font-serif tracking-[0.2em] text-base sm:text-lg font-medium text-[#F5F0E8] group-hover:text-[#C6A477] transition-colors">
                {BUSINESS_PROFILE.name}
              </span>
            </div>
            <p className="text-[9px] tracking-[0.24em] text-[#A6A19A] uppercase mt-0.5 font-sans font-light">
              {BUSINESS_PROFILE.profession} · SINCE {BUSINESS_PROFILE.foundedYear}
            </p>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setActiveTab(link.id);
                  const el = document.getElementById(link.id);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`text-[10px] tracking-[0.22em] font-semibold transition-all relative py-1 cursor-pointer ${
                  activeTab === link.id
                    ? 'text-[#C6A477]'
                    : 'text-[#A6A19A] hover:text-[#F5F0E8]'
                }`}
              >
                {link.label}
                {activeTab === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#C6A477]" />
                )}
              </button>
            ))}
          </nav>

          {/* Social Links, Phone & CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Direct Social Links */}
            <a
              href={BUSINESS_PROFILE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram @manwitha_camera"
              className="hidden sm:flex items-center justify-center p-1.5 text-[#A6A19A] hover:text-[#C6A477] border border-[rgba(245,240,232,0.12)] hover:border-[#C6A477]/40 transition-colors"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>

            <a
              href={BUSINESS_PROFILE.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="YouTube Channel"
              className="hidden sm:flex items-center justify-center p-1.5 text-[#A6A19A] hover:text-[#C6A477] border border-[rgba(245,240,232,0.12)] hover:border-[#C6A477]/40 transition-colors"
            >
              <Youtube className="w-3.5 h-3.5" />
            </a>

            {/* Direct Phone Call / WhatsApp */}
            <a
              href={`tel:${BUSINESS_PROFILE.phone}`}
              className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 text-[10px] tracking-[0.16em] border border-[rgba(198,164,119,0.3)] text-[#C6A477] hover:bg-[#C6A477]/10 transition-colors"
              title="Call for Bookings & Inquiries"
            >
              <Phone className="w-3 h-3" />
              <span>{BUSINESS_PROFILE.formattedPhone}</span>
            </a>

            {/* Ambient Sound Toggle */}
            <button
              onClick={handleToggleSound}
              title={soundActive ? 'Mute Atmospheric Audio' : 'Play Atmospheric Audio'}
              className={`flex items-center gap-1.5 px-2 py-1.5 text-[9px] tracking-[0.18em] uppercase font-semibold border transition-all cursor-pointer ${
                soundActive
                  ? 'border-[#C6A477] text-[#C6A477] bg-[#C6A477]/10'
                  : 'border-[rgba(245,240,232,0.15)] text-[#A6A19A] hover:text-[#F5F0E8]'
              }`}
            >
              {soundActive ? (
                <>
                  <Volume2 className="w-3 h-3 animate-pulse text-[#C6A477]" />
                  <span className="hidden sm:inline">AUDIO</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3 h-3" />
                  <span className="hidden sm:inline">MUTE</span>
                </>
              )}
            </button>

            {/* Aspect Ratio Switch */}
            <button
              onClick={() => setAspectRatio(aspectRatio === '2.39:1' ? '16:9' : '2.39:1')}
              title="Toggle Cinema Aspect Ratio"
              className="hidden xl:flex items-center gap-1 px-2 py-1.5 text-[9px] tracking-[0.18em] border border-[rgba(245,240,232,0.15)] text-[#A6A19A] hover:text-[#F5F0E8] uppercase cursor-pointer"
            >
              <Film className="w-3 h-3 text-[#C6A477]" />
              <span>{aspectRatio}</span>
            </button>

            {/* Primary Editorial Button */}
            <button
              onClick={onOpenCommission}
              className="bg-[#C6A477] text-[#080808] hover:bg-[#F5F0E8] px-3.5 sm:px-4 py-1.5 text-[10px] tracking-[0.22em] font-semibold uppercase transition-all duration-300 gold-halo cursor-pointer flex items-center gap-1.5"
            >
              <Calendar className="w-3 h-3 text-[#080808]" />
              <span>BOOKINGS</span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#F5F0E8] border border-[rgba(245,240,232,0.15)]"
              aria-label="Toggle navigation menu"
            >
              <div className="w-4 h-3 flex flex-col justify-between">
                <span className="w-full h-0.5 bg-[#F5F0E8]"></span>
                <span className="w-full h-0.5 bg-[#F5F0E8]"></span>
                <span className="w-full h-0.5 bg-[#F5F0E8]"></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#101010] border-b border-[#C6A477]/20 px-6 py-5 flex flex-col gap-4 mt-2">
            <div className="flex items-center justify-between pb-3 border-b border-[rgba(245,240,232,0.08)]">
              <div>
                <p className="text-[11px] font-serif text-[#F5F0E8] font-medium">{BUSINESS_PROFILE.name}</p>
                <p className="text-[9px] text-[#C6A477] tracking-wider">{BUSINESS_PROFILE.handle}</p>
              </div>
              <a
                href={`tel:${BUSINESS_PROFILE.phone}`}
                className="text-[10px] text-[#C6A477] border border-[#C6A477]/40 px-2 py-1 flex items-center gap-1"
              >
                <Phone className="w-2.5 h-2.5" />
                <span>{BUSINESS_PROFILE.phone}</span>
              </a>
            </div>

            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setActiveTab(link.id);
                  setMobileMenuOpen(false);
                  const el = document.getElementById(link.id);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`text-left text-[11px] tracking-[0.22em] font-medium py-1 ${
                  activeTab === link.id ? 'text-[#C6A477]' : 'text-[#A6A19A]'
                }`}
              >
                {link.label}
              </button>
            ))}

            <div className="pt-2 border-t border-[rgba(245,240,232,0.1)] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <a href={BUSINESS_PROFILE.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-[#A6A19A] hover:text-[#C6A477]">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href={BUSINESS_PROFILE.youtubeUrl} target="_blank" rel="noopener noreferrer" className="text-[#A6A19A] hover:text-[#C6A477]">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
              <button
                onClick={() => setAspectRatio(aspectRatio === '2.39:1' ? '16:9' : '2.39:1')}
                className="text-[10px] tracking-[0.2em] text-[#C6A477] border border-[#C6A477]/40 px-2 py-1"
              >
                RATIO: {aspectRatio}
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
