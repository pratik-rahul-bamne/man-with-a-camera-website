import React, { useState } from 'react';
import { Camera, Film, Sparkles, Heart } from 'lucide-react';
import { VAULT_SPECS, BUSINESS_PROFILE } from '../data/weddingData';

export const VaultAndPhilosophy: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const testimonials = [
    {
      quote:
        '“Man With A Camera captured our royal Paithani wedding with so much warmth and soul. Looking back at our film brings back all the happy tears and the energy of the dhol tasha in Sangli!”',
      author: 'Akash & Pooja',
      venue: 'Sangli Heritage Palace Wedding',
      press: 'STORY HIGHLIGHT // 2026',
    },
    {
      quote:
        '“From the chaotic Mumbai baraat to the quiet emotional moments with our parents, their team was invisible yet captured every tear and every smile. Truly timeless cinema.”',
      author: 'Abhi & Rituja',
      venue: 'Grand Ballroom, Mumbai',
      press: 'FEATURED CINEMA REEL',
    },
  ];

  return (
    <section id="vault" className="py-24 bg-[#080808] border-b border-[rgba(198,164,119,0.18)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Curatorial Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 pb-16 border-b border-[rgba(245,240,232,0.08)]">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-[#C6A477]" />
              <p className="text-[11px] tracking-[0.25em] text-[#C6A477] uppercase font-semibold">
                OUR PHILOSOPHY SINCE {BUSINESS_PROFILE.foundedYear}
              </p>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F0E8] font-normal tracking-tight leading-tight">
              {BUSINESS_PROFILE.name}
            </h2>
            <p className="font-serif italic text-lg text-[#C6A477] mt-2">
              “{BUSINESS_PROFILE.tagline}”
            </p>
            <p className="text-[#A6A19A] text-sm font-light mt-4 leading-relaxed">
              For over a decade, we have believed that wedding photography is not about staged stiffness. It is about catching the glance your father gives you right before the kanyadaan, the burst of laughter in the haldi, and the holy flame that marks your beginning.
            </p>
          </div>

          <div className="lg:col-span-7 bg-[#101010] p-6 sm:p-8 border border-[rgba(198,164,119,0.2)]">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              <div className="space-y-2">
                <span className="font-serif text-3xl text-[#C6A477] block">10+</span>
                <h4 className="text-xs tracking-[0.18em] uppercase font-semibold text-[#F5F0E8]">
                  YEARS OF CRAFT
                </h4>
                <p className="text-xs text-[#A6A19A] font-light leading-relaxed">
                  Documenting love stories across Sangli, Mumbai, and royal destinations since 2014.
                </p>
              </div>

              <div className="space-y-2">
                <span className="font-serif text-3xl text-[#C6A477] block">118+</span>
                <h4 className="text-xs tracking-[0.18em] uppercase font-semibold text-[#F5F0E8]">
                  FILMS DELIVERED
                </h4>
                <p className="text-xs text-[#A6A19A] font-light leading-relaxed">
                  Every film is color-graded individually with our custom warm gold cinematic profile.
                </p>
              </div>

              <div className="space-y-2">
                <span className="font-serif text-3xl text-[#C6A477] block">4K</span>
                <h4 className="text-xs tracking-[0.18em] uppercase font-semibold text-[#F5F0E8]">
                  CINE CAMERAS
                </h4>
                <p className="text-xs text-[#A6A19A] font-light leading-relaxed">
                  Sony FX Cinema line and G-Master prime glass capturing true skin tones and emotions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* The Technical Optics Chamber */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-[10px] tracking-[0.25em] text-[#C6A477] uppercase font-semibold mb-1">
                EQUIPMENT &amp; CINE RIGS
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F0E8] font-normal">
                Inside The Camera Vault
              </h3>
            </div>

            {/* Chamber Category Tabs */}
            <div className="flex items-center gap-2">
              {VAULT_SPECS.map((spec, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`px-3 py-1.5 text-[10px] tracking-[0.2em] uppercase font-semibold transition-all border cursor-pointer ${
                    activeTab === i
                      ? 'border-[#C6A477] bg-[#C6A477] text-[#080808]'
                      : 'border-[rgba(245,240,232,0.15)] text-[#A6A19A] hover:text-[#F5F0E8]'
                  }`}
                >
                  {spec.category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VAULT_SPECS[activeTab].items.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#101010] p-6 border border-[rgba(198,164,119,0.18)] hover:border-[#C6A477] transition-all"
              >
                <div className="flex items-center gap-2 text-[#C6A477] mb-2">
                  <Camera className="w-4 h-4" />
                  <span className="text-[10px] tracking-[0.2em] font-mono">SPEC // 0{idx + 1}</span>
                </div>
                <h4 className="font-serif text-lg text-[#F5F0E8] mb-2">{item.name}</h4>
                <p className="text-xs text-[#A6A19A] font-light leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Client Praise & Press Excerpts */}
        <div className="bg-[#101010] border border-[rgba(198,164,119,0.22)] p-6 sm:p-12 gold-halo">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[10px] tracking-[0.25em] text-[#C6A477] uppercase font-semibold">
              REAL CLIENT LOVE
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F0E8] font-normal mt-2">
              Words From Our Couples
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-[#080808] p-6 border border-[rgba(245,240,232,0.08)] flex flex-col justify-between"
              >
                <p className="font-serif italic text-base sm:text-lg text-[#F5F0E8] leading-relaxed">
                  {t.quote}
                </p>

                <div className="mt-6 pt-4 border-t border-[rgba(245,240,232,0.08)] flex items-center justify-between">
                  <div>
                    <span className="font-serif text-sm text-[#C6A477] block">{t.author}</span>
                    <span className="text-[10px] tracking-[0.16em] text-[#A6A19A] uppercase block mt-0.5">
                      {t.venue}
                    </span>
                  </div>
                  <span className="text-[9px] tracking-[0.2em] text-[#C6A477] uppercase bg-[#C6A477]/10 border border-[#C6A477]/30 px-2 py-1">
                    {t.press}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
