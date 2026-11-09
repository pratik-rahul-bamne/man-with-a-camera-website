export interface WeddingStory {
  id: string;
  couple: string;
  locations: string[];
  year: string;
  chapterTag: string;
  tagline: string;
  heroImage: string;
  aspectRatio: string;
  exif: {
    camera: string;
    lens: string;
    focalLength: string;
    aperture: string;
    iso: string;
    lut: string;
  };
  chapters: {
    title: string;
    timestamp: string;
    description: string;
    image: string;
  }[];
  synopsis: string;
  quote: string;
  gallery: {
    url: string;
    caption: string;
    lens: string;
    orientation: 'landscape' | 'portrait' | 'square';
    filmStock: string;
  }[];
}

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
  followersCount: string;
  followingCount: string;
  manifestoQuote: string;
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
  followersCount: '5.3K+',
  followingCount: '828',
  manifestoQuote: 'more than love — we loved with a love that was more than love',
};

export const STORY_HIGHLIGHTS = [
  {
    id: 'akash-pooja',
    couple: 'Akash // Pooja',
    label: 'Akash // Pooja',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=400&q=80',
    location: 'Sangli Heritage Royal Paithani',
  },
  {
    id: 'umesh-pooja',
    couple: 'UMESH // POOJA',
    label: 'UMESH // PO...',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&q=80',
    location: 'Minimalist Scenic Vows',
  },
  {
    id: 'akshay-arti',
    couple: 'Akshay // Arti',
    label: 'Akshay // Arti',
    image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=400&q=80',
    location: 'Temple Courtyard & Zardozi',
  },
  {
    id: 'abhi-rituja',
    couple: 'Abhi // Rituja',
    label: 'Abhi // Rituja',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=400&q=80',
    location: 'Monochrome Editorial & Sangeet',
  },
  {
    id: 'suraj-anita',
    couple: 'Suraj // Anita',
    label: 'Suraj // Anita',
    image: 'https://images.unsplash.com/photo-1519225429980-715cb0215aed?auto=format&fit=crop&w=400&q=80',
    location: 'Sunset Phere & Vineyards',
  },
  {
    id: 'nikhil-smita',
    couple: 'Nikhil // Smita',
    label: 'Nikhil // Smita',
    image: 'https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=400&q=80',
    location: 'Emerald Silk & Royal Mandap',
  },
  {
    id: 'aniket-dhanashree',
    couple: 'Aniket // Dhanashree',
    label: 'Aniket // Dha...',
    image: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=400&q=80',
    location: 'Candid Haldi & Sunset Gala',
  },
];

export const STORIES: WeddingStory[] = [
  {
    id: 'akash-pooja',
    couple: 'Akash & Pooja',
    locations: ['Sangli Palace Estate', 'Mumbai'],
    year: '2026',
    chapterTag: 'ROYAL MAHARANI PORTRAITURE',
    tagline: 'Deep crimson royal Paithani silk, heritage gold jewellery, and soulful Maharashtrian vows.',
    heroImage: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1600&q=85',
    aspectRatio: '2.39:1',
    exif: {
      camera: 'Sony FX3 Cine Rig & A7R V',
      lens: 'Sony G-Master 50mm f/1.2 & 85mm f/1.4',
      focalLength: '50mm',
      aperture: 'f/1.4',
      iso: '400',
      lut: 'Man With A Camera — Signature Warm Gold Film Emulation',
    },
    chapters: [
      {
        title: 'I. The Haldi Rituals & Desi Marigolds',
        timestamp: '00:30',
        description: 'Vibrant yellow turmeric showers and joyful laughter in the ancestral Sangli courtyard.',
        image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80',
      },
      {
        title: 'II. The Royal Paithani Drape & Mundavalya',
        timestamp: '03:15',
        description: 'Pooja adorning handwoven pure silk Paithani with pearl mundavalya and heirloom nose ring.',
        image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1000&q=80',
      },
      {
        title: 'III. Antarpat & The Golden Hour Saptapadi',
        timestamp: '07:45',
        description: 'The sacred cloth drops to tearful smiles and sacred Vedic mantras under torchlight.',
        image: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1000&q=80',
      },
    ],
    synopsis: 'A heartfelt tribute to royal Maharashtrian traditions filmed in Sangli. From the sacred sound of sanai and dhol tasha to intimate quiet glances behind the Antarpat, every frame was crafted with cinematic reverence.',
    quote: '“Man With A Camera didn’t just film our wedding — they immortalized the real tears, laughs, and sacred moments our families will treasure forever.”',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85',
        caption: 'Pooja in traditional scarlet red Paithani with antique gold temple necklace.',
        lens: 'G-Master 50mm f/1.2',
        orientation: 'portrait',
        filmStock: 'Man With A Camera 35mm Gold Profile',
      },
      {
        url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=85',
        caption: 'Intricate mehendi details and family heirloom rings.',
        lens: 'Sony 90mm Macro f/2.8',
        orientation: 'square',
        filmStock: 'Kodak Portra 400 Tone',
      },
      {
        url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85',
        caption: 'Akash arriving in royal ivory kurta and embroidered pheta turban.',
        lens: 'Sony 35mm f/1.4 GM',
        orientation: 'landscape',
        filmStock: 'Warm Cine Film Profile',
      },
      {
        url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80',
        caption: 'Sacred phere ceremony around the Agni flame.',
        lens: 'Sony 85mm f/1.4 GM',
        orientation: 'portrait',
        filmStock: 'Natural Grain Tone',
      },
    ],
  },
  {
    id: 'abhi-rituja',
    couple: 'Abhi & Rituja',
    locations: ['Mumbai Grand Ballroom', 'Sangli'],
    year: '2026',
    chapterTag: 'SANGLI & ROYAL SANGEET',
    tagline: 'High-energy sangeet beats transitioning into soulful twilight ceremonies.',
    heroImage: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=85',
    aspectRatio: '2.39:1',
    exif: {
      camera: 'Sony FX6 Cine Line',
      lens: 'Cooke 40mm Cine Lens & 85mm T1.5',
      focalLength: '40mm',
      aperture: 'T1.5',
      iso: '800',
      lut: 'Cinematic Noir & Warm Tungsten',
    },
    chapters: [
      {
        title: 'I. The Sangeet Choreography & Flashmob',
        timestamp: '00:45',
        description: 'An electric night of dancing with theatrical stage lights in Mumbai.',
        image: 'https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=1000&q=80',
      },
      {
        title: 'II. Sunset Portraiture by the Shoreline',
        timestamp: '04:20',
        description: 'Golden hour breeze catching the emerald dupatta with gentle cinematic lens flare.',
        image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1000&q=80',
      },
    ],
    synopsis: 'A fusion of urban Mumbai contemporary elegance and rooted Sangli warmth. Captured with dynamic camera motion, gimbal moves, and intimate prime lens close-ups.',
    quote: '“They made us feel completely natural in front of the lens. The film looks like a Bollywood cinema release!”',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85',
        caption: 'Abhi and Rituja sharing a quiet moment under fairy lights.',
        lens: 'Sony 50mm f/1.2 GM',
        orientation: 'landscape',
        filmStock: 'Kodak Vision3 500T',
      },
      {
        url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1000&q=80',
        caption: 'Editorial monochrome bride portrait before the reception.',
        lens: 'Leica 50mm f/0.95',
        orientation: 'portrait',
        filmStock: 'Ilford HP5 B&W',
      },
    ],
  },
  {
    id: 'suraj-anita',
    couple: 'Suraj & Anita',
    locations: ['Nashik Vineyards & Sangli Escapes'],
    year: '2025',
    chapterTag: '4K ANAMORPHIC FILMS',
    tagline: 'An open-air sun-drenched celebration surrounded by rolling green hills and rustic stone.',
    heroImage: 'https://images.unsplash.com/photo-1519225429980-715cb0215aed?auto=format&fit=crop&w=1600&q=85',
    aspectRatio: '2.39:1',
    exif: {
      camera: 'Sony FX3 + DJI Ronin RS3 Pro',
      lens: 'Sirui Anamorphic 50mm T2.9 1.6x',
      focalLength: '50mm',
      aperture: 'T2.9',
      iso: '640',
      lut: 'Mediterranean Sunset Gold',
    },
    chapters: [
      {
        title: 'I. Morning Mist & First Look',
        timestamp: '00:25',
        description: 'Anita walking through the lush vineyard rows in a pastel blush pink lehenga.',
        image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1000&q=80',
      },
      {
        title: 'II. The Vows at Dusky Sunset',
        timestamp: '05:00',
        description: 'Exchanging garlands with golden flares reflecting in the wine country horizon.',
        image: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1000&q=80',
      },
    ],
    synopsis: 'Shot in true 2.39:1 anamorphic widescreen. The soft bokeh and natural flares brought out the romantic European-style vineyard backdrop right in Maharashtra.',
    quote: '“The attention to lighting and candid storytelling is second to none. Man With A Camera captures real raw emotion.”',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1519225429980-715cb0215aed?auto=format&fit=crop&w=1200&q=85',
        caption: 'The couple surrounded by warm golden hour illumination.',
        lens: 'Sirui Anamorphic 50mm',
        orientation: 'landscape',
        filmStock: 'Fuji Pro 400H Tone',
      },
    ],
  },
  {
    id: 'akshay-arti',
    couple: 'Akshay & Arti',
    locations: ['Sangli Heritage Temple', 'Pune'],
    year: '2025',
    chapterTag: 'ARCHIVAL 35MM GRAIN',
    tagline: 'Centuries of devotional grandeur, antique brass lamps, and timeless Marathi heritage.',
    heroImage: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1600&q=85',
    aspectRatio: '2.39:1',
    exif: {
      camera: 'Sony A7S III & Sony FX3',
      lens: 'Zeiss Batis 40mm & 85mm f/1.8',
      focalLength: '85mm',
      aperture: 'f/1.8',
      iso: '500',
      lut: 'Heritage 35mm Celluloid Tone',
    },
    chapters: [
      {
        title: 'I. The Sacred Temple Entry',
        timestamp: '00:15',
        description: 'Temple bells reverberating through the carved stone pillars of Sangli.',
        image: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1000&q=80',
      },
    ],
    synopsis: 'A devotional and heritage wedding focused on deep cultural traditions, handcrafted jewellery, and authentic emotional connections between two close-knit families.',
    quote: '“more than love — we loved with a love that was more than love.”',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1200&q=85',
        caption: 'The newlywed couple framed within the ancient stone arches.',
        lens: 'Zeiss 40mm f/2',
        orientation: 'landscape',
        filmStock: 'Man With A Camera Heritage Grain',
      },
    ],
  },
];

export const FILM_CLIPS = [
  {
    id: 'film-1',
    title: 'Akash & Pooja // The Royal Sangli Paithani Film',
    couple: 'Akash & Pooja',
    location: 'Sangli & Mumbai',
    duration: '04:18',
    aspectRatio: '2.39:1',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1600&q=85',
    camera: 'Sony FX3 Cine Rig · 50mm f/1.2 GM',
    audioTrack: 'Original Marathi Shehnai & Cinematic Acoustic Cello',
    youtubeId: 'UC217RoGmgFjK7PSRiIQUBmg',
  },
  {
    id: 'film-2',
    title: 'Abhi & Rituja // Sangeet Crescendo & Sunset Vows',
    couple: 'Abhi & Rituja',
    location: 'Mumbai & Sangli',
    duration: '03:45',
    aspectRatio: '2.39:1',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=85',
    camera: 'Sony FX6 · Cooke Cine Primes 40mm',
    audioTrack: 'Atmospheric Tabla Beats & Ambient Synth Strings',
    youtubeId: 'UC217RoGmgFjK7PSRiIQUBmg',
  },
  {
    id: 'film-3',
    title: 'Suraj & Anita // Sunset Vows in the Vineyards',
    couple: 'Suraj & Anita',
    location: 'Nashik & Destination Maharashtra',
    duration: '05:32',
    aspectRatio: '2.39:1',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1519225429980-715cb0215aed?auto=format&fit=crop&w=1600&q=85',
    camera: 'Sirui Anamorphic 50mm · 2.39:1 Scope',
    audioTrack: 'Golden Hour Santoor & Acoustic Guitar Melodies',
    youtubeId: 'UC217RoGmgFjK7PSRiIQUBmg',
  },
];

export const CONTACT_SHEET_ITEMS = [
  {
    frameNo: '01',
    title: 'Pooja in Crimson Paithani Silk',
    couple: 'Akash // Pooja',
    filmRoll: 'MAN WITH A CAMERA - SANGLI',
    url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
    meta: '50mm · f/1.4 · 1/500s · ISO 200',
    category: 'Bride',
  },
  {
    frameNo: '02',
    title: 'Handcrafted Gold Kolhapuri Saaj',
    couple: 'Akshay // Arti',
    filmRoll: 'MAN WITH A CAMERA - DETAILS',
    url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=800&q=80',
    meta: '90mm · f/2.8 · 1/250s · ISO 400',
    category: 'Details',
  },
  {
    frameNo: '03',
    title: 'Sacred Antarpat Drops with Smiles',
    couple: 'Suraj // Anita',
    filmRoll: 'MAN WITH A CAMERA - MOMENTS',
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    meta: '35mm · f/1.4 · 1/800s · ISO 320',
    category: 'Vows',
  },
  {
    frameNo: '04',
    title: 'Nocturne Sangeet Under Fairy Lights',
    couple: 'Abhi // Rituja',
    filmRoll: 'MAN WITH A CAMERA - MUMBAI',
    url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
    meta: '85mm · f/1.4 · 1/160s · ISO 800',
    category: 'Night',
  },
  {
    frameNo: '05',
    title: 'Sunlit Vineyard Walk & Laughter',
    couple: 'UMESH // POOJA',
    filmRoll: 'MAN WITH A CAMERA - ESCAPES',
    url: 'https://images.unsplash.com/photo-1519225429980-715cb0215aed?auto=format&fit=crop&w=800&q=80',
    meta: '50mm · f/1.8 · 1/1200s · ISO 100',
    category: 'Moments',
  },
  {
    frameNo: '06',
    title: 'Emerald Nauvari Saree & Mundavalya',
    couple: 'Nikhil // Smita',
    filmRoll: 'MAN WITH A CAMERA - HERITAGE',
    url: 'https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=800&q=80',
    meta: '50mm · f/1.2 · 1/1000s · ISO 200',
    category: 'Heritage',
  },
  {
    frameNo: '07',
    title: 'Groom Entry with Royal Pheta Turban',
    couple: 'Aniket // Dhanashree',
    filmRoll: 'MAN WITH A CAMERA - GROOM',
    url: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=800&q=80',
    meta: '85mm · f/1.8 · 1/400s · ISO 400',
    category: 'Groom',
  },
  {
    frameNo: '08',
    title: 'Desi Gulab Petal Rain Over Phere',
    couple: 'Akash // Pooja',
    filmRoll: 'MAN WITH A CAMERA - CEREMONY',
    url: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=800&q=80',
    meta: '35mm · f/1.4 · 1/2000s · ISO 400',
    category: 'Celebration',
  },
];

export const VAULT_SPECS = [
  {
    category: 'CINEMA CAMERAS & SENSORS',
    items: [
      { name: 'Sony FX3 & FX6 Full-Frame Cinema Line', note: 'Dual native ISO, 15+ stops dynamic range, delivering true cinematic depth even in dimly-lit traditional mandaps.' },
      { name: 'Sony A7R V High-Resolution Still Body', note: '61 megapixels of uncompressed detail for heirloom bridal portraits and printed albums.' },
      { name: 'DJI Ronin RS3 Pro & Wireless Transmission', note: 'Buttery smooth tracking shots through vibrant baraat processions and energetic sangeet dances.' },
    ],
  },
  {
    category: 'PRIME GLASS & OPTICS',
    items: [
      { name: 'Sony G-Master 50mm f/1.2 & 85mm f/1.4 GM', note: 'Creamy bokeh isolating couples from crowds with razor-sharp iris focus on bridal jewelry.' },
      { name: 'Sirui Anamorphic 1.6x 50mm & 75mm', note: 'Widescreen 2.39:1 horizontal flare and cinematic oval bokeh for showstopper films.' },
      { name: 'Sony FE 90mm f/2.8 Macro G OSS', note: 'Precision macro capture for wedding rings, mangalsutra, and intricate bridal mehendi.' },
    ],
  },
  {
    category: 'COLOR SCIENCE & EDITORIAL POST',
    items: [
      { name: 'Signature Warm Gold Film Tone', note: 'Crafted over 10 years to honor Indian skin tones, vibrant paithani dyes, and warm candlelight.' },
      { name: '4K Ultra-HD Master Delivery & RAW Archive', note: 'Complete archival preservation formatted for large 4K OLED screens and future generations.' },
    ],
  },
];
