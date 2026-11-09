import React, { useState } from 'react';
import { Expand, MapPin, Film, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FEATURED_STORIES, StoryItem, BUSINESS_PROFILE } from '../data/weddingData';

interface FeaturedWeddingStoriesProps {
  onSelectStoryForLightbox: (story: StoryItem, imageIndex?: number) => void;
}

type FilterCategory = 'All Stories' | 'Traditional Weddings' | 'Pre-Wedding' | 'Candid Moments' | 'Wedding Films';

// Exactly matching the story highlights on @manwitha_camera Instagram
const INSTAGRAM_STORY_HIGHLIGHTS = [
  { couple: 'Akash // Pooja', storyId: 'akash-pooja', image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=300&q=80' },
  { couple: 'UMESH // POOJA', storyId: 'umesh-pooja', image: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=300&q=80' },
  { couple: 'Akshay // Arti', storyId: 'akshay-arti', image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=300&q=80' },
  { couple: 'Abhi // Rituja', storyId: 'abhi-rituja', image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=300&q=80' },
  { couple: 'Suraj // Anita', storyId: 'suraj-anita', image: 'https://images.unsplash.com/photo-1519225429980-715cb0215aed?auto=format&fit=crop&w=300&q=80' },
  { couple: 'Nikhil // Smita', storyId: 'nikhil-smita', image: 'https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=300&q=80' },
  { couple: 'Aniket // Dhanashree', storyId: 'aniket-dhanashree', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=300&q=80' },
];

export const FeaturedWeddingStories: React.FC<FeaturedWeddingStoriesProps> = ({
  onSelectStoryForLightbox,
}) => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All Stories');

  const categories: FilterCategory[] = [
    'All Stories',
    'Traditional Weddings',
    'Pre-Wedding',
    'Candid Moments',
    'Wedding Films',
  ];

  const filteredStories =
    activeFilter === 'All Stories'
      ? FEATURED_STORIES
      : FEATURED_STORIES.filter((story) => story.category === activeFilter);

  const handleHighlightClick = (storyId: string) => {
    const match = FEATURED_STORIES.find((s) => s.id === storyId) || FEATURED_STORIES[0];
    onSelectStoryForLightbox(match, 0);
  };

  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-[#F7F5F0] border-b border-[#DDD8CF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-[#A68B6A] inline-block" />
              <p className="text-xs tracking-[0.24em] text-[#A68B6A] uppercase font-semibold">
                Selected Works &amp; Portfolio
              </p>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#252525] tracking-tight leading-tight">
              Featured Wedding Stories
            </h2>
            <p className="text-[#68645E] text-sm sm:text-base font-light mt-4 leading-relaxed max-w-2xl">
              Real couples, authentic ceremonies, and heartfelt celebrations documented across Sangli, Mumbai, and destination locations.
            </p>
          </div>

          <a
            href={BUSINESS_PROFILE.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start md:self-end px-4 py-2 bg-[#EDEAE3] border border-[#DDD8CF] hover:border-[#A68B6A] text-[#252525] text-xs font-medium tracking-wider transition-colors rounded-sm shadow-sm"
          >
            <Instagram className="w-3.5 h-3.5 text-[#A68B6A]" />
            <span>{BUSINESS_PROFILE.handle}</span>
          </a>
        </div>

        {/* Real Instagram Story Highlights Strip */}
        <div className="mb-12 p-4 sm:p-6 bg-[#EDEAE3] border border-[#DDD8CF] rounded-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[11px] font-sans tracking-[0.2em] uppercase font-semibold text-[#68645E]">
              Archived Wedding Highlights
            </span>
            <span className="text-[11px] font-mono text-[#A68B6A]">
              Click any couple to view gallery
            </span>
          </div>

          <div className="flex items-center gap-4 sm:gap-7 overflow-x-auto pb-2 pt-1 scrollbar-none snap-x overscroll-x-contain">
            {INSTAGRAM_STORY_HIGHLIGHTS.map((hl, i) => (
              <button
                key={i}
                onClick={() => handleHighlightClick(hl.storyId)}
                className="flex flex-col items-center gap-2 shrink-0 group cursor-pointer focus:outline-none snap-start"
              >
                <div className="relative p-0.5 rounded-full ring-2 ring-[#A68B6A] ring-offset-2 ring-offset-[#EDEAE3] group-hover:scale-105 transition-transform duration-200">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 rounded-full overflow-hidden border border-[#DDD8CF] bg-[#DDD8CF]">
                    <img
                      src={hl.image}
                      alt={hl.couple}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
                <span className="text-[10px] sm:text-xs font-medium text-[#252525] group-hover:text-[#A68B6A] transition-colors whitespace-nowrap">
                  {hl.couple}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Category Filters - Horizontally scrollable on mobile */}
        <div
          className="flex items-center gap-2 sm:gap-3 mb-10 sm:mb-14 pb-3 border-b border-[#DDD8CF] overflow-x-auto scrollbar-none overscroll-x-contain"
          role="tablist"
          aria-label="Portfolio Category Filter"
        >
          {categories.map((cat) => {
            const isSelected = activeFilter === cat;
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 sm:px-4 py-2 text-[11px] sm:text-xs tracking-[0.14em] sm:tracking-[0.18em] uppercase font-medium transition-all duration-200 cursor-pointer rounded-sm whitespace-nowrap shrink-0 ${
                  isSelected
                    ? 'bg-[#252525] text-[#FFFFFF] font-semibold shadow-sm'
                    : 'text-[#68645E] hover:text-[#252525] bg-[#EDEAE3] border border-[#DDD8CF] hover:border-[#A68B6A]/70'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Asymmetric Editorial Masonry Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 items-start"
        >
          <AnimatePresence>
            {filteredStories.map((story, index) => {
              // Asymmetric editorial spans: some 7-cols, some 5-cols, some 8-cols, some 4-cols
              const isWide = index % 3 === 0;
              const colSpanClass = isWide
                ? 'lg:col-span-7'
                : index % 3 === 1
                ? 'lg:col-span-5'
                : 'lg:col-span-6';

              return (
                <motion.article
                  key={story.id}
                  layout
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className={`group relative bg-[#EDEAE3] border border-[#DDD8CF] hover:border-[#A68B6A] transition-all duration-300 overflow-hidden cursor-pointer rounded-sm shadow-[0_4px_20px_rgba(37,37,37,0.03)] hover:shadow-[0_12px_32px_rgba(166,139,106,0.14)] ${colSpanClass}`}
                  onClick={() => onSelectStoryForLightbox(story, 0)}
                >
                  {/* Image container */}
                  <div
                    className={`relative w-full overflow-hidden bg-[#DDD8CF] ${
                      story.aspectRatio === '4/5' ? 'aspect-[4/5]' : 'aspect-[16/10]'
                    }`}
                  >
                    <img
                      src={story.heroImage}
                      alt={`${story.couple} - ${story.title}`}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-all duration-700"
                    />

                    {/* Category unboxed tag */}
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase font-semibold text-[#252525] bg-[#F7F5F0]/92 backdrop-blur-sm px-3 py-1 border border-[#DDD8CF] shadow-sm">
                      {story.category === 'Wedding Films' && <Film className="w-3 h-3 text-[#A68B6A]" />}
                      <span>{story.category}</span>
                    </div>

                    {/* Hover expand hint */}
                    <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-[#F7F5F0]/95 text-[#A68B6A] p-2 border border-[#A68B6A]/50 shadow-sm">
                      <Expand className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Caption & Story Details */}
                  <div className="p-6 sm:p-7 bg-[#EDEAE3] flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs tracking-wider text-[#68645E] mb-2 font-sans">
                        <span className="flex items-center gap-1.5 text-[#A68B6A] font-semibold">
                          <MapPin className="w-3 h-3" />
                          <span>{story.location}</span>
                        </span>
                        <span>{story.year}</span>
                      </div>

                      <h3 className="font-serif text-xl sm:text-2xl text-[#252525] font-normal group-hover:text-[#A68B6A] transition-colors">
                        {story.couple}
                      </h3>

                      <p className="text-xs text-[#68645E] font-light mt-2 line-clamp-2 leading-relaxed">
                        {story.caption}
                      </p>
                    </div>

                    <div className="mt-5 pt-3.5 border-t border-[#DDD8CF] flex items-center justify-between text-xs">
                      <span className="text-[11px] tracking-[0.16em] uppercase text-[#A68B6A] font-semibold group-hover:text-[#252525] transition-colors">
                        View Full Story ({story.galleryImages.length} Photographs)
                      </span>
                      <span className="text-[11px] text-[#68645E] font-light">
                        {story.galleryImages.length > 1 ? 'Multi-Image Gallery' : 'Featured Still'}
                      </span>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
