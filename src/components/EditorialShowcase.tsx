import React, { useState } from 'react';
import { Camera, Film, ArrowRight, Expand, MessageSquare } from 'lucide-react';
import { STORIES, WeddingStory, BUSINESS_PROFILE } from '../data/weddingData';

interface EditorialShowcaseProps {
  onSelectStoryForLightbox: (story: WeddingStory, imageIndex?: number) => void;
  onOpenCommission: () => void;
  selectedStoryId?: string | null;
}

export const EditorialShowcase: React.FC<EditorialShowcaseProps> = ({
  onSelectStoryForLightbox,
  onOpenCommission,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('ALL ARCHIVES');

  const categories = [
    'ALL ARCHIVES',
    'ROYAL MAHARANI PORTRAITURE',
    'SANGLI & ROYAL SANGEET',
    '4K ANAMORPHIC FILMS',
    'ARCHIVAL 35MM GRAIN',
  ];

  const filteredStories =
    selectedFilter === 'ALL ARCHIVES'
      ? STORIES
      : STORIES.filter((story) => story.chapterTag === selectedFilter);

  return (
    <section id="showcase" className="py-24 bg-[#080808] border-b border-[rgba(198,164,119,0.18)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Headline */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 bg-[#C6A477]" />
            <p className="text-[11px] tracking-[0.25em] text-[#C6A477] uppercase font-semibold">
              CURATED STORIES · {BUSINESS_PROFILE.name}
            </p>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#F5F0E8] tracking-tight leading-tight">
            Timeless Love Stories Since {BUSINESS_PROFILE.foundedYear}
          </h2>
          <p className="text-[#A6A19A] text-sm sm:text-base font-light mt-4 leading-relaxed">
            From monumental royal Maharashtrian weddings in Sangli and grand ballroom celebrations in Mumbai, to scenic vineyard ceremonies and destination vows.
          </p>
        </div>

        {/* Exhibition Filter Chips */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-16 pb-6 border-b border-[rgba(245,240,232,0.08)]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-3 sm:px-4 py-2 text-[10px] sm:text-[11px] tracking-[0.22em] font-semibold uppercase border transition-all cursor-pointer ${
                selectedFilter === cat
                  ? 'border-[#C6A477] bg-[#C6A477] text-[#080808]'
                  : 'border-[rgba(245,240,232,0.15)] text-[#A6A19A] hover:text-[#F5F0E8] hover:border-[#C6A477]/40 bg-[#101010]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Asymmetric 12-Column Editorial Stories Layout */}
        <div className="space-y-24">
          {filteredStories.map((story, index) => {
            const isReversed = index % 2 === 1;

            return (
              <article
                key={story.id}
                id={story.id}
                className="relative bg-[#101010] border border-[rgba(198,164,119,0.18)] p-4 sm:p-8 transition-all duration-300"
              >
                {/* Story Top Metadata Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[rgba(245,240,232,0.08)]">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] tracking-[0.25em] text-[#C6A477] font-semibold uppercase">
                      FOLIO {index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </span>
                    <span className="text-[rgba(245,240,232,0.2)]">/</span>
                    <span className="text-[10px] tracking-[0.22em] text-[#F5F0E8] uppercase">
                      {story.chapterTag}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-[10px] tracking-[0.2em] text-[#A6A19A] uppercase">
                    <span>{story.locations.join(' · ')}</span>
                    <span className="text-[rgba(245,240,232,0.2)]">|</span>
                    <span className="text-[#C6A477]">{story.year}</span>
                  </div>
                </div>

                {/* 12-Column Asymmetric Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Primary 8-Column Frame */}
                  <div
                    className={`${
                      isReversed ? 'lg:col-span-7 lg:order-2' : 'lg:col-span-8 lg:order-1'
                    }`}
                  >
                    <div
                      onClick={() => onSelectStoryForLightbox(story, 0)}
                      className="group relative cursor-pointer overflow-hidden border border-[rgba(245,240,232,0.1)] aspect-[16/9] bg-black"
                    >
                      <img
                        src={story.heroImage}
                        alt={`${story.couple} wedding photograph by ${BUSINESS_PROFILE.name}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-80" />

                      <div className="absolute bottom-4 right-4 z-20 bg-[#080808]/85 border border-[#C6A477]/40 px-3 py-1.5 backdrop-blur-md flex items-center gap-2 text-[10px] tracking-[0.2em] text-[#F5F0E8] group-hover:bg-[#C6A477] group-hover:text-[#080808] transition-all">
                        <Expand className="w-3 h-3" />
                        <span>OPEN FULL LIGHTBOX</span>
                      </div>

                      <div className="absolute bottom-4 left-4 right-20 z-20">
                        <p className="font-serif italic text-sm sm:text-base text-[#F5F0E8] line-clamp-2">
                          {story.quote}
                        </p>
                      </div>
                    </div>

                    {/* Camera & Specs Bar */}
                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-[10px] tracking-[0.18em] text-[#A6A19A] uppercase bg-[#080808] p-3 border border-[rgba(245,240,232,0.06)]">
                      <div className="flex items-center gap-2">
                        <Camera className="w-3.5 h-3.5 text-[#C6A477]" />
                        <span className="text-[#F5F0E8] font-medium">{story.exif.camera}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Film className="w-3.5 h-3.5 text-[#C6A477]" />
                        <span>{story.exif.lens}</span>
                      </div>
                      <div className="hidden sm:block text-[#C6A477]">
                        LUT: {story.exif.lut}
                      </div>
                    </div>
                  </div>

                  {/* Offset Narrative Column */}
                  <div
                    className={`${
                      isReversed ? 'lg:col-span-5 lg:order-1' : 'lg:col-span-4 lg:order-2'
                    } flex flex-col justify-between`}
                  >
                    <div>
                      <h3 className="font-serif text-3xl sm:text-4xl text-[#F5F0E8] font-normal tracking-tight">
                        {story.couple}
                      </h3>
                      <p className="text-xs tracking-[0.22em] text-[#C6A477] uppercase font-semibold mt-2">
                        {story.locations.join(' & ')}
                      </p>

                      <p className="text-[#A6A19A] text-sm font-light mt-4 leading-relaxed">
                        {story.synopsis}
                      </p>

                      {/* Chapters Breakdown */}
                      <div className="mt-6 pt-6 border-t border-[rgba(245,240,232,0.08)] space-y-3">
                        <p className="text-[10px] tracking-[0.25em] text-[#C6A477] uppercase font-semibold">
                          WEDDING CHAPTERS
                        </p>
                        {story.chapters.map((ch, chIdx) => (
                          <div
                            key={chIdx}
                            onClick={() => onSelectStoryForLightbox(story, chIdx)}
                            className="p-2.5 bg-[#080808] border border-[rgba(245,240,232,0.06)] hover:border-[#C6A477]/40 transition-all cursor-pointer group"
                          >
                            <div className="flex items-center justify-between text-[10px] tracking-[0.2em] text-[#A6A19A]">
                              <span className="text-[#F5F0E8] group-hover:text-[#C6A477] transition-colors font-medium">
                                {ch.title}
                              </span>
                              <span className="text-[#C6A477] font-mono">{ch.timestamp}</span>
                            </div>
                            <p className="text-[11px] text-[#A6A19A] font-light mt-1 line-clamp-1">
                              {ch.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Actions */}
                    <div className="mt-8 pt-6 border-t border-[rgba(245,240,232,0.08)] flex items-center justify-between gap-3">
                      <button
                        onClick={() => onSelectStoryForLightbox(story, 0)}
                        className="text-[11px] tracking-[0.22em] text-[#C6A477] uppercase font-semibold hover:underline flex items-center gap-1.5 cursor-pointer"
                      >
                        <span>EXAMINE STILLS ({story.gallery.length})</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <a
                        href={`https://wa.me/919766066092?text=Hello%20Man%20With%20A%20Camera%2C%20I%20love%20the%20${encodeURIComponent(story.couple)}%20wedding%20film%20and%20would%20like%20to%20inquire.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-[#C6A477] text-[#C6A477] hover:bg-[#C6A477] hover:text-[#080808] px-3 py-1.5 text-[10px] tracking-[0.2em] uppercase font-semibold transition-all flex items-center gap-1"
                      >
                        <MessageSquare className="w-3 h-3" />
                        <span>WHATSAPP</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Staggered Gallery Thumbnails Strip */}
                <div className="mt-8 pt-6 border-t border-[rgba(245,240,232,0.08)]">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {story.gallery.map((item, gIdx) => (
                      <div
                        key={gIdx}
                        onClick={() => onSelectStoryForLightbox(story, gIdx)}
                        className="group relative aspect-[4/3] overflow-hidden bg-black border border-[rgba(245,240,232,0.08)] hover:border-[#C6A477] cursor-pointer"
                      >
                        <img
                          src={item.url}
                          alt={item.caption}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-85 group-hover:brightness-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-80" />
                        <div className="absolute bottom-2 left-2 right-2 text-[9px] tracking-[0.16em] text-[#A6A19A] truncate uppercase">
                          {item.caption}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
