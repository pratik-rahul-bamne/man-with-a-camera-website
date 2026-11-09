import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { TrustIndicators } from './components/TrustIndicators';
import { FeaturedWeddingStories } from './components/FeaturedWeddingStories';
import { CinematicFilmsSection } from './components/CinematicFilmsSection';
import { ServicesSection } from './components/ServicesSection';
import { OurApproachSection } from './components/OurApproachSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { FinalBookingCTA } from './components/FinalBookingCTA';
import { ArchivalFooter } from './components/ArchivalFooter';
import { ExhibitionLightbox } from './components/ExhibitionLightbox';
import { ClientCommissionDrawer } from './components/ClientCommissionDrawer';
import { StoryItem } from './data/weddingData';

// Restrained cinematic scroll fade-in
const sectionFadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: {
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1] as const,
  },
};

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedStory, setSelectedStory] = useState<StoryItem | null>(null);
  const [lightboxInitialIndex, setLightboxInitialIndex] = useState(0);

  // Active section scroll spy
  useEffect(() => {
    const sectionIds = ['hero', 'portfolio', 'films', 'services', 'about', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenLightbox = (story: StoryItem, imageIndex: number = 0) => {
    setSelectedStory(story);
    setLightboxInitialIndex(imageIndex);
    setLightboxOpen(true);
  };

  const handleScrollTo = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      // Calculate top with responsive header offset so fixed header never covers section title
      const yOffset = window.innerWidth < 640 ? -56 : -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#68645E] font-sans selection:bg-[#A68B6A] selection:text-white">
      {/* Top Fixed Navigation (3-Zone Contract) */}
      <Navigation
        activeSection={activeSection}
        onNavigate={handleScrollTo}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      <main>
        {/* SECTION 01 – HERO */}
        <HeroSection
          onExploreStories={() => handleScrollTo('portfolio')}
          onCheckDate={() => setIsBookingOpen(true)}
        />

        {/* SECTION 02 – TRUST INDICATORS */}
        <motion.div
          variants={sectionFadeIn}
          initial="initial"
          whileInView="whileInView"
          viewport={sectionFadeIn.viewport}
          transition={sectionFadeIn.transition}
        >
          <TrustIndicators />
        </motion.div>

        {/* SECTION 03 – FEATURED WEDDING STORIES */}
        <motion.div
          variants={sectionFadeIn}
          initial="initial"
          whileInView="whileInView"
          viewport={sectionFadeIn.viewport}
          transition={sectionFadeIn.transition}
        >
          <FeaturedWeddingStories
            onSelectStoryForLightbox={handleOpenLightbox}
          />
        </motion.div>

        {/* SECTION 04 – CINEMATIC FILMS */}
        <motion.div
          variants={sectionFadeIn}
          initial="initial"
          whileInView="whileInView"
          viewport={sectionFadeIn.viewport}
          transition={sectionFadeIn.transition}
        >
          <CinematicFilmsSection />
        </motion.div>

        {/* SECTION 05 – PHOTOGRAPHY SERVICES */}
        <motion.div
          variants={sectionFadeIn}
          initial="initial"
          whileInView="whileInView"
          viewport={sectionFadeIn.viewport}
          transition={sectionFadeIn.transition}
        >
          <ServicesSection
            onInquireService={() => setIsBookingOpen(true)}
          />
        </motion.div>

        {/* SECTION 06 – OUR APPROACH (Warm Ivory Editorial Contrast) */}
        <motion.div
          variants={sectionFadeIn}
          initial="initial"
          whileInView="whileInView"
          viewport={sectionFadeIn.viewport}
          transition={sectionFadeIn.transition}
        >
          <OurApproachSection />
        </motion.div>

        {/* SECTION 07 – CLIENT TESTIMONIALS */}
        <motion.div
          variants={sectionFadeIn}
          initial="initial"
          whileInView="whileInView"
          viewport={sectionFadeIn.viewport}
          transition={sectionFadeIn.transition}
        >
          <TestimonialsSection />
        </motion.div>

        {/* SECTION 08 – FAQ */}
        <motion.div
          variants={sectionFadeIn}
          initial="initial"
          whileInView="whileInView"
          viewport={sectionFadeIn.viewport}
          transition={sectionFadeIn.transition}
        >
          <FAQSection />
        </motion.div>

        {/* SECTION 09 – FINAL BOOKING CTA */}
        <motion.div
          variants={sectionFadeIn}
          initial="initial"
          whileInView="whileInView"
          viewport={sectionFadeIn.viewport}
          transition={sectionFadeIn.transition}
        >
          <FinalBookingCTA
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        </motion.div>
      </main>

      {/* SECTION 10 – FOOTER */}
      <ArchivalFooter
        onOpenBooking={() => setIsBookingOpen(true)}
        onNavigate={handleScrollTo}
      />

      {/* Upgraded Fullscreen Photograph Lightbox */}
      <ExhibitionLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        activeStory={selectedStory}
        initialIndex={lightboxInitialIndex}
      />

      {/* Redesigned 3-Step Client Booking Drawer */}
      <ClientCommissionDrawer
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}
