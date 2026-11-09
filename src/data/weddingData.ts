export interface BusinessProfile {
  name: string;
  handle: string;
  profession: string;
  tagline: string;
  foundedYear: string;
  locations: string[];
  phone: string;
  formattedPhone: string;
  whatsappUrl: string;
  instagramUrl: string;
  youtubeUrl: string;
  postsCount: string;
  manifestoQuote: string;
}


export interface TrustMetric {
  value: string;
  label: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  summary: string;
  deliverables: string[];
  featuredImage: string;
}

export interface StoryItem {
  id: string;
  couple: string;
  title: string;
  category: 'Traditional Weddings' | 'Pre-Wedding' | 'Candid Moments' | 'Wedding Films';
  location: string;
  year: string;
  heroImage: string;
  aspectRatio: string;
  caption: string;
  galleryImages: {
    url: string;
    caption: string;
  }[];
}

export interface CinematicFilm {
  id: string;
  title: string;
  couple: string;
  location: string;
  duration: string;
  aspectRatio: string;
  videoUrl: string;
  posterUrl: string;
  scoreDescription: string;
}

export interface ApproachPillar {
  number: string;
  title: string;
  description: string;
}

export interface TestimonialItem {
  quote: string;
  couple: string;
  venue: string;
  year: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const BUSINESS_PROFILE: BusinessProfile = {
  name: 'MAN WITH A CAMERA',
  handle: '@manwitha_camera',
  profession: 'Wedding Photographer & Filmmaker',
  tagline: 'Capturing Timeless Love Stories Since 2014',
  foundedYear: '2014',
  locations: ['Sangli', 'Mumbai', 'Destination Weddings'],
  phone: '9766066092',
  formattedPhone: '+91 97660 66092',
  whatsappUrl: 'https://wa.me/919766066092?text=Hello%20Man%20With%20A%20Camera%2C%20I%20would%20like%20to%20inquire%20about%20wedding%20photography%20and%20films.',
  instagramUrl: 'https://instagram.com/manwitha_camera',
  youtubeUrl: 'https://www.youtube.com/channel/UC217RoGmgFjK7PSRiIQUBmg',
  postsCount: '118+',
  manifestoQuote: 'more than love — we loved with a love that was more than love',
};

export const TRUST_METRICS: TrustMetric[] = [
  {
    value: '10+',
    label: 'Years of Craft',
    description: 'Documenting heartfelt celebrations & sacred rituals since 2014.',
  },
  {
    value: '118+',
    label: 'Weddings & Films',
    description: 'Bespoke love stories preserved across Maharashtra and India.',
  },
  {
    value: '2 Bases',
    label: 'Sangli & Mumbai',
    description: 'Rooted local presence with worldwide destination availability.',
  },
  {
    value: '100%',
    label: 'Lead Artist Access',
    description: 'Personalized attention from consultation through delivery.',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'wedding-photography',
    title: 'Wedding Photography',
    category: 'Full Celebration',
    summary: 'Comprehensive documentary and editorial photography covering pre-wedding ceremonies, haldi, baraat, phere, and reception.',
    deliverables: ['High-res color graded digital archives', 'Curated preview gallery within 7 days', 'Online archival gallery for family sharing'],
    featuredImage: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'cinematic-films',
    title: 'Cinematic Wedding Films',
    category: 'Motion Picture',
    summary: 'Emotional, story-driven films shot in 4K widescreen cinema format with rich ambient sound design and licensed music scoring.',
    deliverables: ['3-5 minute cinematic teaser for Instagram', '20-40 minute documentary feature film', 'Full sacred vows & speeches recorded with wireless audio'],
    featuredImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'pre-wedding',
    title: 'Pre-Wedding Photography',
    category: 'Intimate Story',
    summary: 'Relaxed, creative couple portraits in scenic landscapes, heritage palace architecture, or modern urban environments.',
    deliverables: ['Concept moodboard & location planning', '30-40 edited signature portraits', 'Cinematic save-the-date teaser option'],
    featuredImage: 'https://images.unsplash.com/photo-1519225429980-715cb0215aed?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'engagement',
    title: 'Engagement Photography',
    category: 'Milestone',
    summary: 'Capturing the ring ceremony, family blessings, and intimate celebration marking the formal beginning of your journey.',
    deliverables: ['Ring ceremony & rituals coverage', 'Couple portrait session at the venue', 'High-res downloadable master gallery'],
    featuredImage: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'traditional-rituals',
    title: 'Traditional Photography',
    category: 'Heritage',
    summary: 'Deep respect for authentic Vedic rituals, Antarpat traditions, family groups, and ancestral heirloom aesthetics.',
    deliverables: ['Complete stage & group portraits', 'Sacred ceremony details & decor documentation', 'Multi-camera coverage to miss zero rituals'],
    featuredImage: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'destination-weddings',
    title: 'Destination Weddings',
    category: 'Travel & Palaces',
    summary: 'Turnkey cinematography and photography team traveling to heritage palaces, beaches, and vineyard estates across India and worldwide.',
    deliverables: ['Travel & multi-day itinerary coordination', 'Drone aerial cinematography of destination venue', 'Rapid same-day preview edits for social sharing'],
    featuredImage: 'https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=1000&q=80',
  },
];

export const FEATURED_STORIES: StoryItem[] = [
  {
    id: 'akash-pooja',
    couple: 'Akash & Pooja',
    title: 'The Royal Sangli Paithani Celebration',
    category: 'Traditional Weddings',
    location: 'Sangli Heritage Palace',
    year: '2026',
    heroImage: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1400&q=85',
    aspectRatio: '4/5',
    caption: 'Pure scarlet red Paithani silk, heritage temple jewelry, and sacred Antarpat smiles.',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1400&q=85',
        caption: 'Pooja in traditional scarlet red Paithani with antique gold temple necklace.',
      },
      {
        url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1400&q=85',
        caption: 'Heirloom jewelry and intricate bridal henna detailing.',
      },
      {
        url: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1400&q=85',
        caption: 'Sacred saptapadi phere around the holy flame.',
      },
    ],
  },
  {
    id: 'abhi-rituja',
    couple: 'Abhi & Rituja',
    title: 'Sunset Sangeet & Editorial Monochrome Stills',
    category: 'Candid Moments',
    location: 'Mumbai Grand Ballroom',
    year: '2026',
    heroImage: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1400&q=85',
    aspectRatio: '16/9',
    caption: 'High-energy sangeet performances followed by quiet unscripted laughter under fairy lights.',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1400&q=85',
        caption: 'Abhi & Rituja sharing a quiet moment under candlelit chandeliers.',
      },
      {
        url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1400&q=85',
        caption: 'Editorial monochrome bridal portrait before the grand reception.',
      },
    ],
  },
  {
    id: 'suraj-anita',
    couple: 'Suraj & Anita',
    title: 'Vineyard Twilight Vows',
    category: 'Pre-Wedding',
    location: 'Nashik Vineyards & Escapes',
    year: '2025',
    heroImage: 'https://images.unsplash.com/photo-1519225429980-715cb0215aed?auto=format&fit=crop&w=1400&q=85',
    aspectRatio: '4/5',
    caption: 'Soft sunlight filtering through rolling green hills during their pre-wedding sunset session.',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1519225429980-715cb0215aed?auto=format&fit=crop&w=1400&q=85',
        caption: 'Warm golden hour portrait in the vineyard rows.',
      },
      {
        url: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1400&q=85',
        caption: 'Candid laughter amidst sun-drenched vineyard paths.',
      },
    ],
  },
  {
    id: 'akshay-arti',
    couple: 'Akshay & Arti',
    title: 'Devotional Grandeur in Stone Arches',
    category: 'Traditional Weddings',
    location: 'Sangli Heritage Temple',
    year: '2025',
    heroImage: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1400&q=85',
    aspectRatio: '16/9',
    caption: 'Centuries-old stone pillars echoing with sanai and ancestral family blessings.',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1400&q=85',
        caption: 'The couple framed beneath ancient temple carved stone pillars.',
      },
      {
        url: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1400&q=85',
        caption: 'Akshay arriving in hand-embroidered royal ivory sherwani.',
      },
    ],
  },
  {
    id: 'nikhil-smita',
    couple: 'Nikhil & Smita',
    title: 'Emerald Silk & Sunset Mandap',
    category: 'Traditional Weddings',
    location: 'Pune Heritage Resort',
    year: '2026',
    heroImage: 'https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=1400&q=85',
    aspectRatio: '4/5',
    caption: 'Handcrafted emerald Nauvari drape paired with delicate pearl mundavalya.',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=1400&q=85',
        caption: 'First look moment before the evening reception.',
      },
    ],
  },
  {
    id: 'umesh-pooja',
    couple: 'Umesh & Pooja',
    title: 'The Golden Mandap & Riverside Heritage Vows',
    category: 'Traditional Weddings',
    location: 'Sangli Heritage Ghats',
    year: '2025',
    heroImage: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1400&q=85',
    aspectRatio: '4/5',
    caption: 'Sunlight glimmering along sacred Krishna river ghats, royal saffron turbans, and joyous floral showers.',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1400&q=85',
        caption: 'Umesh & Pooja under the golden floral mandap.',
      },
      {
        url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1400&q=85',
        caption: 'Traditional bridal jewelry and turmeric rituals.',
      },
    ],
  },
  {
    id: 'aniket-dhanashree',
    couple: 'Aniket & Dhanashree',
    title: 'The Yellow Marigold Haldi Festival',
    category: 'Candid Moments',
    location: 'Sangli Riverfront Estate',
    year: '2025',
    heroImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=85',
    aspectRatio: '16/9',
    caption: 'Golden turmeric clouds, spontaneous splashes, and unfiltered sibling joy.',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=85',
        caption: 'The joyful explosion of turmeric and yellow marigold petals.',
      },
    ],
  },
  {
    id: 'film-story-akash',
    couple: 'Akash & Pooja',
    title: 'The Royal Paithani Wedding Film',
    category: 'Wedding Films',
    location: 'Sangli & Mumbai',
    year: '2026',
    heroImage: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1400&q=85',
    aspectRatio: '16/9',
    caption: 'A 4K anamorphic cinema cut blending traditional Shehnai and modern acoustic strings.',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1400&q=85',
        caption: 'Cinema still from the 4K feature film.',
      },
    ],
  },
];

export const CINEMATIC_FILMS: CinematicFilm[] = [
  {
    id: 'film-1',
    title: 'Akash & Pooja // The Royal Sangli Paithani Film',
    couple: 'Akash & Pooja',
    location: 'Sangli & Mumbai',
    duration: '04:18',
    aspectRatio: '2.39:1',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1600&q=85',
    scoreDescription: 'Authentic Marathi Shehnai & Cinematic Acoustic Cello',
  },
  {
    id: 'film-2',
    title: 'Abhi & Rituja // Sangeet Crescendo & Sunset Vows',
    couple: 'Abhi & Rituja',
    location: 'Mumbai Grand Ballroom',
    duration: '03:45',
    aspectRatio: '2.39:1',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=85',
    scoreDescription: 'Atmospheric Tabla & Ambient String Harmonics',
  },
  {
    id: 'film-3',
    title: 'Suraj & Anita // Sunset Vows in the Vineyards',
    couple: 'Suraj & Anita',
    location: 'Nashik Vineyards & Escapes',
    duration: '05:32',
    aspectRatio: '2.39:1',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1519225429980-715cb0215aed?auto=format&fit=crop&w=1600&q=85',
    scoreDescription: 'Golden Hour Santoor & Acoustic Guitar Reverberations',
  },
];

export const APPROACH_PILLARS: ApproachPillar[] = [
  {
    number: '01',
    title: "Understanding Each Couple's Story",
    description: 'Before lifting the camera, we invest time to learn your personality, family dynamics, and the personal memories that matter most to you.',
  },
  {
    number: '02',
    title: 'Capturing Authentic Emotions',
    description: 'We believe genuine smiles and happy tears happen naturally. Our unobtrusive presence allows you to be fully immersed in your celebration without stiff, forced poses.',
  },
  {
    number: '03',
    title: 'Documenting Meaningful Moments',
    description: 'From sacred Vedic mantras and the Antarpat drop to quiet glances across a crowded ballroom, we document the rituals that will matter fifty years from today.',
  },
  {
    number: '04',
    title: 'Delivering Timeless Memories',
    description: 'Every photograph and cinema reel is individually hand-graded with natural skin tones and organic warmth, delivered in archival albums and 4K digital vaults.',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote: 'Man With A Camera captured our royal Paithani wedding with so much soul. Watching our film brings back every happy tear and the energy of the dhol tasha in Sangli! Our entire family was moved to tears.',
    couple: 'Akash & Pooja',
    venue: 'Sangli Heritage Palace',
    year: '2026',
  },
  {
    quote: 'From the chaotic Mumbai baraat to the quiet emotional moments with our parents before the vidai, their team felt like close friends who happened to create cinematic magic.',
    couple: 'Abhi & Rituja',
    venue: 'Grand Ballroom, Mumbai',
    year: '2026',
  },
  {
    quote: 'The attention to natural lighting and candid emotion is unmatched. They made us feel completely relaxed, and our vineyard pre-wedding and wedding film look like a cinema production!',
    couple: 'Suraj & Anita',
    venue: 'Nashik Vineyards',
    year: '2025',
  },
];

export const FAQS: FAQItem[] = [
  {
    question: 'How do we book a wedding date?',
    answer: 'You can check your date using our website inquiry drawer or reach out directly on WhatsApp at +91 97660 66092. Once we confirm availability for your date and location, we finalize the package and lock your date with a booking advance.',
  },
  {
    question: 'How early should we book?',
    answer: 'Because we accept a limited number of weddings per season to maintain personal artistic quality, we recommend inquiring 4 to 8 months in advance, especially for peak winter wedding dates between November and February.',
  },
  {
    question: 'Do you travel for destination weddings?',
    answer: 'Yes! Based in Sangli and Mumbai, we travel extensively across Maharashtra, Goa, Rajasthan, and destination wedding venues throughout India and internationally.',
  },
  {
    question: 'What photography packages are available?',
    answer: 'We offer customizable packages tailored to your celebration scale, ranging from single-day traditional weddings to multi-day royal celebrations. Packages can include senior photography, 4K cinematic films, pre-wedding sessions, drone coverage, and handcrafted heirloom albums.',
  },
  {
    question: 'How long does photo delivery take?',
    answer: 'We provide a curated preview of 30-50 signature highlight photos within 7 to 10 days after your wedding. Complete color-graded photograph collections and cinematic films are carefully polished and delivered within 4 to 8 weeks.',
  },
  {
    question: 'Do you provide cinematic wedding films?',
    answer: 'Yes. We specialize in both photography and cinema. Our film packages include an emotional 3-5 minute cinematic teaser suitable for sharing with loved ones, alongside an extended 25-45 minute documentary film preserving vows, speeches, and complete rituals.',
  },
];
