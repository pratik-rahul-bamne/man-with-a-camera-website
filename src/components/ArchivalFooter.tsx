import React, { useState } from 'react';
import { ArrowUp, Phone, Instagram, Youtube, MessageSquare, Shield, X } from 'lucide-react';
import { BUSINESS_PROFILE } from '../data/weddingData';

interface ArchivalFooterProps {
  onOpenBooking: () => void;
  onNavigate: (sectionId: string) => void;
}

export const ArchivalFooter: React.FC<ArchivalFooterProps> = ({
  onOpenBooking,
  onNavigate,
}) => {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#EDEAE3] border-t border-[#DDD8CF] pt-16 pb-12 text-[#252525]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 pb-12 sm:pb-16 border-b border-[#DDD8CF]">
          {/* Brand Col */}
          <div className="sm:col-span-2 lg:col-span-5 space-y-4">
            <span className="font-serif tracking-[0.22em] text-xl font-medium text-[#252525] block">
              {BUSINESS_PROFILE.name}
            </span>
            <p className="text-xs tracking-[0.22em] text-[#A68B6A] uppercase font-semibold">
              {BUSINESS_PROFILE.profession} · SINCE {BUSINESS_PROFILE.foundedYear}
            </p>
            <p className="text-xs text-[#68645E] font-light max-w-sm leading-relaxed">
              {BUSINESS_PROFILE.tagline}. Honoring authentic emotions, heritage traditions, and monumental wedding stories across Sangli, Mumbai, and worldwide destinations.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="bg-[#252525] text-[#FFFFFF] hover:bg-[#A68B6A] px-5 py-2.5 text-[11px] tracking-[0.2em] font-semibold uppercase transition-all duration-300 rounded-sm cursor-pointer shadow-sm"
              >
                Check Availability
              </button>

              <a
                href={BUSINESS_PROFILE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#252525] text-[#252525] bg-[#F7F5F0] hover:bg-[#252525] hover:text-[#FFFFFF] px-4 py-2.5 text-[11px] tracking-[0.2em] font-semibold uppercase transition-all flex items-center gap-1.5 rounded-sm shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="sm:col-span-1 lg:col-span-2 space-y-3">
            <p className="text-[11px] tracking-[0.22em] text-[#A68B6A] uppercase font-semibold mb-4">
              Explore
            </p>
            <ul className="space-y-2.5 text-xs text-[#68645E] font-light">
              <li>
                <button
                  onClick={() => onNavigate('hero')}
                  className="hover:text-[#252525] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('portfolio')}
                  className="hover:text-[#252525] transition-colors cursor-pointer"
                >
                  Featured Stories
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('films')}
                  className="hover:text-[#252525] transition-colors cursor-pointer"
                >
                  Wedding Films
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#252525] transition-colors cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#252525] transition-colors cursor-pointer"
                >
                  Our Approach
                </button>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div className="sm:col-span-1 lg:col-span-2 space-y-3">
            <p className="text-[11px] tracking-[0.22em] text-[#A68B6A] uppercase font-semibold mb-4">
              Service Bases
            </p>
            <ul className="space-y-2.5 text-xs text-[#68645E] font-light">
              <li>Sangli, Maharashtra</li>
              <li>Mumbai &amp; Suburbs</li>
              <li>Pune &amp; Lonavala</li>
              <li>Goa Beach Weddings</li>
              <li>Destination Weddings Across India</li>
            </ul>
          </div>

          {/* Direct Desk */}
          <div className="sm:col-span-2 lg:col-span-3 space-y-3">
            <p className="text-[11px] tracking-[0.22em] text-[#A68B6A] uppercase font-semibold mb-4">
              Direct Contact
            </p>
            <div className="space-y-3 text-xs text-[#68645E] font-light">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#A68B6A]" />
                <a
                  href={`tel:${BUSINESS_PROFILE.phone}`}
                  className="font-mono text-[#252525] hover:text-[#A68B6A]"
                >
                  {BUSINESS_PROFILE.formattedPhone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Instagram className="w-3.5 h-3.5 text-[#A68B6A]" />
                <a
                  href={BUSINESS_PROFILE.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#252525] hover:text-[#A68B6A]"
                >
                  {BUSINESS_PROFILE.handle}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Youtube className="w-3.5 h-3.5 text-[#A68B6A]" />
                <a
                  href={BUSINESS_PROFILE.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#252525] hover:text-[#A68B6A]"
                >
                  YouTube Channel
                </a>
              </p>
              <p className="text-[11px] text-[#68645E]/90 pt-1">
                Direct lead filmmaker access for all bookings and consultation inquiries.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#68645E]">
          <p>© {new Date().getFullYear()} {BUSINESS_PROFILE.name}. All Rights Reserved.</p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setPrivacyModalOpen(true)}
              className="hover:text-[#252525] transition-colors cursor-pointer text-xs"
            >
              Privacy &amp; Terms
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 border border-[#DDD8CF] bg-[#F7F5F0] text-[#68645E] hover:text-[#FFFFFF] hover:bg-[#252525] hover:border-[#252525] transition-all cursor-pointer rounded-sm shadow-sm"
              title="Return to Top"
              aria-label="Return to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {privacyModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#252525]/70 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div className="bg-[#EDEAE3] border border-[#DDD8CF] max-w-xl w-full p-6 sm:p-8 relative shadow-2xl rounded-sm">
            <div className="flex items-center justify-between pb-4 border-b border-[#DDD8CF] mb-4">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#A68B6A]" />
                <h3 className="font-serif text-lg text-[#252525]">Privacy &amp; Client Confidentiality</h3>
              </div>
              <button
                onClick={() => setPrivacyModalOpen(false)}
                className="p-1.5 text-[#68645E] hover:text-[#252525]"
                aria-label="Close Privacy Modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="text-xs text-[#68645E] leading-relaxed space-y-3 font-light max-h-[60vh] overflow-y-auto pr-2">
              <p>
                At <strong className="text-[#252525]">{BUSINESS_PROFILE.name}</strong>, we hold the highest standard of privacy and artistic confidentiality for all our wedding couples and their families.
              </p>
              <p>
                <strong>Information Collected:</strong> Any inquiry submitted via our website (couple names, wedding date, contact phone, venue) is used exclusively to evaluate calendar availability and provide photography consultation. We never sell or share client data with third-party vendors.
              </p>
              <p>
                <strong>Portfolio Publishing:</strong> We respect client preferences regarding online publication. Prior to featuring any wedding photographs or films on our website or social media channels, we obtain client consent.
              </p>
              <p>
                For any privacy questions or requests, you may contact our studio directly at <span className="font-mono text-[#A68B6A]">{BUSINESS_PROFILE.formattedPhone}</span>.
              </p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
