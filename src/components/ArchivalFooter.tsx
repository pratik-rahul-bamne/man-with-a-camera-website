import React from 'react';
import { ArrowUp, Mail, Phone, Instagram, Youtube, MessageSquare } from 'lucide-react';
import { BUSINESS_PROFILE } from '../data/weddingData';

interface ArchivalFooterProps {
  onOpenCommission: () => void;
  onNavigate: (sectionId: string) => void;
}

export const ArchivalFooter: React.FC<ArchivalFooterProps> = ({
  onOpenCommission,
  onNavigate,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080808] border-t border-[rgba(198,164,119,0.22)] pt-16 pb-12 text-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[rgba(245,240,232,0.08)]">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#C6A477]"></span>
              <span className="font-serif tracking-[0.2em] text-xl font-medium text-[#F5F0E8]">
                {BUSINESS_PROFILE.name}
              </span>
            </div>
            <p className="text-[10px] tracking-[0.25em] text-[#C6A477] uppercase font-semibold">
              {BUSINESS_PROFILE.profession} · EST. {BUSINESS_PROFILE.foundedYear}
            </p>
            <p className="text-xs text-[#A6A19A] font-light max-w-sm leading-relaxed">
              {BUSINESS_PROFILE.tagline}. Based in Sangli and Mumbai, documenting love stories, sacred rituals, and candid joys with timeless cinematic art.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenCommission}
                className="bg-[#C6A477] text-[#080808] hover:bg-[#F5F0E8] px-5 py-2.5 text-[10px] tracking-[0.22em] font-semibold uppercase transition-all duration-300 gold-halo cursor-pointer"
              >
                BOOKINGS &amp; INQUIRIES
              </button>

              <a
                href={BUSINESS_PROFILE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#C6A477] text-[#C6A477] hover:bg-[#C6A477] hover:text-[#080808] px-4 py-2 text-[10px] tracking-[0.2em] font-semibold uppercase transition-all flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WHATSAPP</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-2 space-y-3">
            <p className="text-[10px] tracking-[0.25em] text-[#C6A477] uppercase font-semibold mb-4">
              PORTFOLIO
            </p>
            <ul className="space-y-2 text-xs text-[#A6A19A] font-light">
              <li>
                <button
                  onClick={() => onNavigate('showcase')}
                  className="hover:text-[#F5F0E8] transition-colors cursor-pointer"
                >
                  Stories &amp; Folios
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('screening')}
                  className="hover:text-[#F5F0E8] transition-colors cursor-pointer"
                >
                  Cinema Reels
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('exhibition')}
                  className="hover:text-[#F5F0E8] transition-colors cursor-pointer"
                >
                  Stills &amp; Contact Sheets
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('vault')}
                  className="hover:text-[#F5F0E8] transition-colors cursor-pointer"
                >
                  Camera Gear Vault
                </button>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div className="md:col-span-2 space-y-3">
            <p className="text-[10px] tracking-[0.25em] text-[#C6A477] uppercase font-semibold mb-4">
              LOCATIONS
            </p>
            <ul className="space-y-2 text-xs text-[#A6A19A] font-light">
              <li>Sangli, Maharashtra</li>
              <li>Mumbai &amp; Suburbs</li>
              <li>Pune &amp; Lonavala</li>
              <li>Goa Beach Weddings</li>
              <li>Destination Weddings</li>
            </ul>
          </div>

          {/* Direct Desk */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-[10px] tracking-[0.25em] text-[#C6A477] uppercase font-semibold mb-4">
              DIRECT DESK
            </p>
            <div className="space-y-2 text-xs text-[#A6A19A] font-light">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C6A477]" />
                <a href={`tel:${BUSINESS_PROFILE.phone}`} className="font-mono text-[#F5F0E8] hover:text-[#C6A477]">
                  {BUSINESS_PROFILE.formattedPhone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Instagram className="w-3.5 h-3.5 text-[#C6A477]" />
                <a
                  href={BUSINESS_PROFILE.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F5F0E8] hover:text-[#C6A477]"
                >
                  {BUSINESS_PROFILE.handle}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Youtube className="w-3.5 h-3.5 text-[#C6A477]" />
                <a
                  href={BUSINESS_PROFILE.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F5F0E8] hover:text-[#C6A477]"
                >
                  YouTube Channel
                </a>
              </p>
              <p className="text-[10px] text-[#A6A19A]/80 pt-2 font-mono">
                Available on Call &amp; WhatsApp 24/7 for wedding date inquiries.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] tracking-[0.2em] text-[#A6A19A] uppercase">
          <p>© 2026 {BUSINESS_PROFILE.name} · {BUSINESS_PROFILE.handle} · ALL RIGHTS RESERVED.</p>

          <div className="flex items-center gap-4">
            <span>SANGLI · MUMBAI · DESTINATIONS</span>
            <button
              onClick={scrollToTop}
              className="p-2 border border-[rgba(245,240,232,0.15)] text-[#A6A19A] hover:text-[#080808] hover:bg-[#C6A477] transition-all cursor-pointer"
              title="Return to Peak"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
