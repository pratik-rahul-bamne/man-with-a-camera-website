import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, MessageSquare, Phone } from 'lucide-react';
import { BUSINESS_PROFILE } from '../data/weddingData';

interface NavigationProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenBooking: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeSection,
  onNavigate,
  onOpenBooking,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'films', label: 'Wedding Films' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  // Lock body scroll on mobile menu open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-[#F7F5F0]/95 backdrop-blur-md border-[#DDD8CF] py-3 sm:py-3.5 shadow-[0_2px_12px_rgba(37,37,37,0.04)]'
          : 'bg-[#F7F5F0]/90 backdrop-blur-sm border-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-3 sm:gap-8">
        {/* Zone 1: Brand wordmark */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('hero');
          }}
          className="text-left group cursor-pointer focus:outline-none whitespace-nowrap shrink-0"
        >
          <span className="font-serif tracking-[0.16em] sm:tracking-[0.22em] text-sm xs:text-base sm:text-lg font-medium text-[#252525] group-hover:text-[#A68B6A] transition-colors">
            {BUSINESS_PROFILE.name}
          </span>
        </a>

        {/* Zone 2: Desktop / Large Tablet Navigation Links */}
        <nav
          className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs tracking-[0.16em] uppercase font-medium text-[#68645E]"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`py-1 relative transition-colors whitespace-nowrap shrink-0 hover:text-[#252525] cursor-pointer ${
                  isActive ? 'text-[#A68B6A] font-semibold' : ''
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#A68B6A]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary CTA + Mobile/Tablet Hamburger */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={onOpenBooking}
            className="bg-[#252525] text-[#FFFFFF] hover:bg-[#A68B6A] px-3.5 sm:px-5 py-2.5 text-[10px] sm:text-[11px] tracking-[0.16em] sm:tracking-[0.2em] font-semibold uppercase transition-all duration-300 gold-halo cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-1.5 sm:gap-2 rounded-sm"
          >
            <Calendar className="w-3.5 h-3.5 text-[#FFFFFF]" />
            <span className="hidden xs:inline">Check Availability</span>
            <span className="xs:hidden">Book Date</span>
          </button>

          {/* Mobile / Tablet menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#252525] border border-[#DDD8CF] hover:border-[#A68B6A] bg-[#EDEAE3]/60 transition-colors rounded-sm cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Fullscreen Dropdown Drawer with Backdrop */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[57px] sm:top-[65px] z-50 bg-[#252525]/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="bg-[#EDEAE3] border-b border-[#DDD8CF] px-6 py-8 flex flex-col gap-6 shadow-2xl max-h-[calc(100dvh-65px)] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col divide-y divide-[#DDD8CF]/80">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-left text-sm sm:text-base tracking-[0.18em] uppercase py-3.5 transition-colors cursor-pointer flex items-center justify-between ${
                    activeSection === link.id
                      ? 'text-[#A68B6A] font-semibold'
                      : 'text-[#68645E] hover:text-[#252525]'
                  }`}
                >
                  <span>{link.label}</span>
                  {activeSection === link.id && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A68B6A]" />
                  )}
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-[#DDD8CF] space-y-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-[#252525] text-[#FFFFFF] hover:bg-[#A68B6A] py-3.5 text-xs tracking-[0.2em] font-semibold uppercase transition-all rounded-sm flex items-center justify-center gap-2 shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Check Your Wedding Date</span>
              </button>

              <div className="flex items-center justify-between gap-3 pt-2">
                <a
                  href={`tel:${BUSINESS_PROFILE.phone}`}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 bg-[#F7F5F0] border border-[#DDD8CF] rounded-sm text-xs tracking-wider text-[#252525]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#A68B6A]" />
                  <span className="font-mono text-[11px] sm:text-xs">{BUSINESS_PROFILE.formattedPhone}</span>
                </a>

                <a
                  href={BUSINESS_PROFILE.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 bg-[#F7F5F0] border border-[#DDD8CF] rounded-sm text-xs tracking-wider text-[#252525] font-semibold"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#A68B6A]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
