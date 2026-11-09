import React from 'react';
import { Camera, Film, Heart, Sparkles, MapPin, Check } from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/weddingData';

interface ServicesSectionProps {
  onInquireService: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onInquireService,
}) => {
  return (
    <section id="services" className="py-16 sm:py-24 lg:py-32 bg-[#F7F5F0] border-b border-[#DDD8CF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 bg-[#A68B6A] inline-block" />
            <p className="text-xs tracking-[0.24em] text-[#A68B6A] uppercase font-semibold">
              Bespoke Photography &amp; Cinema
            </p>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#252525] tracking-tight leading-tight">
            Our Photography Services
          </h2>
          <p className="text-[#68645E] text-sm sm:text-base font-light mt-4 leading-relaxed max-w-2xl">
            Tailored coverage designed around your wedding events, cultural rituals, and destination celebrations.
          </p>
        </div>

        {/* 6 Services Grid - Responsive on Mobile, Tablet & PC */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className="group bg-[#EDEAE3] border border-[#DDD8CF] hover:border-[#A68B6A] transition-all duration-300 flex flex-col justify-between overflow-hidden rounded-sm shadow-[0_4px_20px_rgba(37,37,37,0.03)] hover:shadow-[0_12px_32px_rgba(166,139,106,0.14)]"
            >
              {/* Service Visual Header */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#DDD8CF]">
                <img
                  src={service.featuredImage}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-4 left-4 z-10 text-[10px] tracking-[0.2em] uppercase font-semibold text-[#A68B6A] bg-[#F7F5F0]/92 backdrop-blur-sm px-3 py-1 border border-[#DDD8CF] shadow-sm">
                  {service.category}
                </div>
              </div>

              {/* Service Description & Deliverables */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between bg-[#EDEAE3]">
                <div>
                  <h3 className="font-serif text-2xl text-[#252525] font-normal group-hover:text-[#A68B6A] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#68645E] font-light mt-3 leading-relaxed">
                    {service.summary}
                  </p>

                  <div className="mt-6 pt-5 border-t border-[#DDD8CF] space-y-2.5">
                    <p className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#A68B6A]">
                      What's Included
                    </p>
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs text-[#252525]/90 font-light">
                        <Check className="w-3.5 h-3.5 text-[#A68B6A] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#DDD8CF] flex items-center justify-between">
                  <button
                    onClick={onInquireService}
                    className="text-xs tracking-[0.18em] uppercase text-[#A68B6A] font-semibold hover:text-[#252525] cursor-pointer"
                  >
                    Inquire For This Service →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
