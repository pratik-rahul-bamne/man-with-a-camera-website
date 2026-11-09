import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS, FAQItem, BUSINESS_PROFILE } from '../data/weddingData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#EDEAE3] border-b border-[#DDD8CF]">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-2 h-2 bg-[#A68B6A] inline-block" />
            <p className="text-xs tracking-[0.24em] text-[#A68B6A] uppercase font-semibold">
              Frequently Asked Questions
            </p>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#252525] tracking-tight">
            Common Inquiries &amp; Policies
          </h2>
          <p className="text-[#68645E] text-xs sm:text-sm font-light mt-3 max-w-xl mx-auto">
            Everything you need to know about booking your dates, delivery timelines, and destination coverage with {BUSINESS_PROFILE.name}.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 sm:space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const buttonId = `faq-button-${idx}`;
            const panelId = `faq-panel-${idx}`;

            return (
              <div
                key={idx}
                className="bg-[#F7F5F0] border border-[#DDD8CF] transition-all duration-200 overflow-hidden rounded-sm shadow-[0_2px_10px_rgba(37,37,37,0.02)]"
              >
                <button
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleAccordion(idx)}
                  className="w-full min-h-[52px] px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left cursor-pointer hover:bg-[#EDEAE3] transition-colors focus-visible:ring-1 focus-visible:ring-[#A68B6A]"
                >
                  <span className="font-serif text-base sm:text-lg text-[#252525] pr-3 font-normal leading-snug">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-[#A68B6A] transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="px-6 pb-6 pt-2 text-sm text-[#68645E] font-light leading-relaxed border-t border-[#DDD8CF]"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
