import React from 'react';
import { TRUST_METRICS, BUSINESS_PROFILE } from '../data/weddingData';

export const TrustIndicators: React.FC = () => {
  return (
    <section className="bg-[#EDEAE3] border-y border-[#DDD8CF] py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {TRUST_METRICS.map((metric, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-center text-center p-4 sm:p-2 ${
                idx > 0 ? 'lg:border-l lg:border-[#DDD8CF]' : ''
              }`}
            >
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#A68B6A] tracking-tight">
                {metric.value}
              </span>
              <h3 className="font-sans text-[11px] sm:text-xs tracking-[0.18em] sm:tracking-[0.2em] uppercase font-semibold text-[#252525] mt-2">
                {metric.label}
              </h3>
              <p className="font-sans text-[11px] sm:text-xs text-[#68645E] font-light mt-1 max-w-[200px] sm:max-w-[220px] mx-auto leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
