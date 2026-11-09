import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { ScreeningRoom } from './components/ScreeningRoom';
import { EditorialShowcase } from './components/EditorialShowcase';
import { ExhibitionGallerySection } from './components/ExhibitionGallerySection';
import { VaultAndPhilosophy } from './components/VaultAndPhilosophy';
import { ExhibitionLightbox } from './components/ExhibitionLightbox';
import { ClientCommissionDrawer } from './components/ClientCommissionDrawer';
import { ArchivalFooter } from './components/ArchivalFooter';
import { WeddingStory, STORIES } from './data/weddingData';

// Cinematic editorial transition curve
const cinematicFadeIn = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: {
    duration: 0.9,
    ease: [0.22, 1, 0.36, 1] as const, // Smooth luxury cubic-bezier ease-out
  },
};

export default function App() {
  const [activeTab, setActiveTab] = useState('showcase');
  const [aspectRatio, setAspectRatio] = useState<'2.39:1' | '16:9'>('2.39:1');
  const [isCommissionOpen, setIsCommissionOpen] = useState(false);

  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxStory, setLightboxStory] = useState<WeddingStory | null>(null);
  const [lightboxInitialIndex, setLightboxInitialIndex] = useState(0);

  const handleOpenStoryLightbox = (story: WeddingStory, imageIndex: number = 0) => {
    setLightboxStory(story);
    setLightboxInitialIndex(imageIndex);
    setLightboxOpen(true);
  };

  const handleOpenContactSheetLightbox = (index: number) => {
    setLightboxStory(null); // uses CONTACT_SHEET_ITEMS
    setLightboxInitialIndex(index);
    setLightboxOpen(true);
  };

  const handleScrollTo = (sectionId: string) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#F5F0E8] font-sans selection:bg-[#C6A477] selection:text-[#080808]">
      {/* Top Fixed Navigation */}
      <Navigation
        activeTab={activeTab}
        setActiveTab={handleScrollTo}
        onOpenCommission={() => setIsCommissionOpen(true)}
        aspectRatio={aspectRatio}
        setAspectRatio={setAspectRatio}
      />

      <main>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <HeroSection
            onPlayFeatureReel={() => handleScrollTo('screening')}
            onExploreArchives={() => handleScrollTo('showcase')}
            onOpenCommission={() => setIsCommissionOpen(true)}
            aspectRatio={aspectRatio}
            onSelectHighlight={(coupleId) => {
              const foundStory = STORIES.find((s) => s.id === coupleId);
              if (foundStory) {
                handleOpenStoryLightbox(foundStory, 0);
              } else {
                handleScrollTo('showcase');
              }
            }}
          />
        </motion.div>

        {/* Screening Room (Interactive Film Player) */}
        <motion.div
          variants={cinematicFadeIn}
          initial="initial"
          whileInView="whileInView"
          viewport={cinematicFadeIn.viewport}
          transition={cinematicFadeIn.transition}
        >
          <ScreeningRoom
            aspectRatio={aspectRatio}
            setAspectRatio={setAspectRatio}
            onOpenCommission={() => setIsCommissionOpen(true)}
          />
        </motion.div>

        {/* Curated Editorial Stories Showcase */}
        <motion.div
          variants={cinematicFadeIn}
          initial="initial"
          whileInView="whileInView"
          viewport={cinematicFadeIn.viewport}
          transition={cinematicFadeIn.transition}
        >
          <EditorialShowcase
            onSelectStoryForLightbox={handleOpenStoryLightbox}
            onOpenCommission={() => setIsCommissionOpen(true)}
          />
        </motion.div>

        {/* Exhibition Gallery & 120mm Contact Sheet */}
        <motion.div
          variants={cinematicFadeIn}
          initial="initial"
          whileInView="whileInView"
          viewport={cinematicFadeIn.viewport}
          transition={cinematicFadeIn.transition}
        >
          <ExhibitionGallerySection
            onOpenLightboxWithContactSheet={handleOpenContactSheetLightbox}
            onOpenCommission={() => setIsCommissionOpen(true)}
          />
        </motion.div>

        {/* Vault, Optics & Philosophy */}
        <motion.div
          variants={cinematicFadeIn}
          initial="initial"
          whileInView="whileInView"
          viewport={cinematicFadeIn.viewport}
          transition={cinematicFadeIn.transition}
        >
          <VaultAndPhilosophy />
        </motion.div>
      </main>

      {/* Footer */}
      <motion.div
        variants={cinematicFadeIn}
        initial="initial"
        whileInView="whileInView"
        viewport={cinematicFadeIn.viewport}
        transition={cinematicFadeIn.transition}
      >
        <ArchivalFooter
          onOpenCommission={() => setIsCommissionOpen(true)}
          onNavigate={handleScrollTo}
        />
      </motion.div>

      {/* Fullscreen Darkroom Exhibition Lightbox */}
      <ExhibitionLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        activeStory={lightboxStory}
        initialIndex={lightboxInitialIndex}
      />

      {/* Slide-in Client Commission Drawer */}
      <ClientCommissionDrawer
        isOpen={isCommissionOpen}
        onClose={() => setIsCommissionOpen(false)}
      />
    </div>
  );
}
