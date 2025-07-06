// Enhanced project data with specific brand identities and color themes

export interface ProjectBrand {
  name: string;
  description: string;
  details?: string;
  personality: string[];
  colorPalette: {
    primary: string;
    secondary: string;
    accent: string;
  };
  type: string;
}

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  category: string;
  year: string;
  client: string;
  brand: ProjectBrand;
  images: string[];
  tags: string[];
  journey?: ProjectJourneyStep[];
  collections?: ProjectCollection[];
}

export interface ProjectJourneyStep {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image?: string;
  type: 'intro' | 'process' | 'result' | 'showcase';
}

export interface ProjectCollection {
  id: string;
  title: string;
  images: string[];
  description: string;
}

// Social Media Projects Data
export const socialMediaProjects: ProjectData[] = [
  {
    id: 'zakuza',
    title: 'ZAKUZA',
    description: 'Nature-inspired café brand rooted in the essence of the forest. Focuses on bringing customers closer to nature with crafted beverages and a calming, earthy atmosphere.',
    category: 'Social Media Design',
    year: '2024',
    client: 'Zakuza Café',
    brand: {
      name: 'Zakuza',
      description: 'Nature-inspired café brand rooted in the essence of the forest',
      personality: ['Natural', 'Calming', 'Earthy', 'Authentic'],
      colorPalette: {
        primary: '#2D5016',
        secondary: '#8B4513', 
        accent: '#4A7C59'
      },
      type: 'Nature-inspired café'
    },
    images: [
      '/zakuza/zakuza-1.webp',
      '/zakuza/zakuza-2.webp',
      '/zakuza/zakuza-3.webp',
      '/zakuza/zakuza-4.webp',
      '/zakuza/zakuza-5.webp',
      '/zakuza/zakuza-6.webp',
      '/zakuza/zakuza-7.webp',
      '/zakuza/zakuza-8.webp',
      '/zakuza/zakuza-9.webp',
      '/zakuza/zakuza-10.webp',
      '/zakuza/zakuza-11.webp',
      '/zakuza/zakuza-12.webp',
    ],
    tags: ['Social Media', 'Brand Identity', 'Nature Design', 'Café Branding', 'Instagram', 'Facebook']
  },
  {
    id: 'zambo',
    title: 'ZAMBO',
    description: 'Barbershop with a focus on precision and style. Uses bold red tones for an energetic, distinctive vibe.',
    category: 'Social Media Design',
    year: '2024',
    client: 'Zambo Barbershop',
    brand: {
      name: 'Zambo',
      description: 'Precision barbershop with bold red energy',
      details: "A barbershop that pays attention to the finest details, offering a grooming experience defined by precision and style. The space is designed with bold red tones, creating a distinctive and energetic atmosphere",
      personality: ['Bold', 'Precise', 'Energetic', 'Distinctive'],
      colorPalette: {
        primary: '#DC2626',
        secondary: '#B91C1C',
        accent: '#EF4444'
      },
      type: 'Precision barbershop'
    },
    images: [
      '/zambo/zambo-1.webp',
      '/zambo/zambo-2.webp',
      '/zambo/zambo-3.webp',
      '/zambo/zambo-4.webp',
      '/zambo/zambo-5.webp',
      '/zambo/zambo-6.webp',
    ],
    tags: ['Social Media', 'Barbershop', 'Bold Design', 'Red Theme', 'Instagram', 'Facebook']
  },
  {
    id: 'mondy',
    title: 'MONDY',
    description: 'Modern barbershop where precision meets personality. Signature neon yellow theme for a bright, confident, modern look.',
    category: 'Social Media Design',
    year: '2024',
    client: 'Mondy Barbershop',
    brand: {
      name: 'Mondy',
      description: 'Modern barbershop with neon yellow confidence',
      details: "Mondy is a modern barbershop where precision meets personality. Every detail is crafted to create a bright, confident, and modern vibe. With signature yellow tones, Mondy makes every visit feel sharp and refreshing, setting a new standard for grooming.",
      personality: ['Modern', 'Confident', 'Bright', 'Personality'],
      colorPalette: {
        primary: '#FACC15',
        secondary: '#EAB308',
        accent: '#FDE047'
      },
      type: 'Modern barbershop'
    },
    images: [
      '/mondy/mondy-1.webp',
      '/mondy/mondy-2.webp',
      '/mondy/mondy-3.webp',
      '/mondy/mondy-4.webp',
      '/mondy/mondy-5.webp',
      '/mondy/mondy-6.webp',
    ],
    tags: ['Social Media', 'Barbershop', 'Modern Design', 'Yellow Theme', 'Instagram', 'Facebook']
  },
  {
    id: 'skyforce',
    title: 'SKYFORCE',
    description: 'Hardcore training gym for CrossFit, Boxing, and MMA. Bold red tones, intense and focused atmosphere.',
    category: 'Social Media Design',
    year: '2024',
    client: 'Skyforce Gym',
    brand: {
      name: 'Skyforce',
      description: 'Hardcore training gym with intense red energy',
      details: "A hardcore training space built for intensity-this gym specializes in CrossFit, Boxing, and MΜΑ. With bold red tones setting the mood, the atmosphere fuels focus, strength, and raw energy. It's not just a place to train, it's where limits get broken",
      personality: ['Hardcore', 'Intense', 'Focused', 'Powerful'],
      colorPalette: {
        primary: '#B91C1C',
        secondary: '#DC2626',
        accent: '#EF4444'
      },
      type: 'Hardcore training gym'
    },
    images: [
      '/skyforce/sky-force-1.webp',
      '/skyforce/sky-force-2.webp',
      '/skyforce/sky-force-3.webp',
      '/skyforce/sky-force-4.webp'
    ],
    tags: ['Social Media', 'Gym', 'CrossFit', 'Intense Design', 'Red Theme', 'Instagram']
  },
  {
    id: 'alpha',
    title: 'ALPHA',
    description: 'Gym with a yellow-themed identity designed to evoke motivation and energy.',
    category: 'Social Media Design',
    year: '2024',
    client: 'Alpha Gym',
    brand: {
      name: 'Alpha',
      description: 'Motivational gym with energetic yellow vibes',
      details: "Alpha is where strength meets sophistication. A premium fitness club with a sleek, modern aesthetic, featuring cool blue tones that inspire a calm, focused, and powerful mindset. We provide a cutting-edge training environment for those who are serious about their results and expect the best.",
      personality: ['Motivational', 'Energetic', 'Positive', 'Dynamic'],
      colorPalette: {
        primary: '#EAB308',
        secondary: '#FACC15',
        accent: '#FDE047'
      },
      type: 'Motivational gym'
    },
    images: [
      '/alpha/alpha-1.webp',
      '/alpha/alpha-2.webp',
      '/alpha/alpha-3.webp',
      '/alpha/alpha-4.webp',
    ],
    tags: ['Social Media', 'Gym', 'Motivation', 'Yellow Theme', 'Energy', 'Instagram']
  }
];

// BREZEL Brand Identity Project
export const brezelProject: ProjectData = {
  id: 'brezel',
  title: 'BREZEL',
  description: 'Modern, cohesive brand with a focus on professional, vibrant identity across all touchpoints including logo, packaging, and brand guidelines.',
  category: 'Brand Identity',
  year: '2024',
  client: 'BREZEL Restaurant',
  brand: {
    name: 'BREZEL',
    description: 'Modern, cohesive brand with vibrant professional identity',
    personality: ['Modern', 'Vibrant', 'Professional', 'Cohesive'],
    colorPalette: {
      primary: '#FF6B35',
      secondary: '#F7931E',
      accent: '#FFD23F'
    },
    type: 'Restaurant brand'
  },
  images: [
    '/brezel/brand-guidline-sheet.webp',
    '/brezel/brezel-design-1.webp',
    '/brezel/brezel-design-2.webp',
    '/brezel/brezel-design-3.webp',
    '/brezel/brezel-design-4.webp',
    '/brezel/brezel-design-5.webp',
    '/brezel/brezel-design-6.webp',
    '/brezel/left-menu.webp',
    '/brezel/right-menu.webp',
  ],
  tags: ['Brand Identity', 'Logo Design', 'Packaging', 'Brand Guidelines', 'Restaurant', 'Complete System'],
  journey: [
    {
      id: 'intro',
      title: 'Ready for a quick journey',
      subtitle: 'BREZEL BRANDING NEEDS',
      description: "Let's explore the complete brand identity development process for BREZEL",
      type: 'intro'
    },
    {
      id: 'needs',
      title: 'Brand Requirements',
      subtitle: 'LOGO + DESIGN + PACKAGING + BRAND COLORS',
      description: '= BRAND IDENTITY',
      type: 'process'
    },
    {
      id: 'guidelines',
      title: 'Brand Guidelines Development',
      subtitle: 'Creating Comprehensive Standards',
      description: 'With colors finalized, logo completed, and designs in place, we developed a comprehensive brand guideline sheet to maintain consistency.',
      image: '/brezel/brand-guidline-sheet.webp',
      type: 'result'
    },
    {
      id: 'implementation',
      title: 'Final Implementation',
      subtitle: 'Complete Brand System',
      description: 'The menu and packaging have been finalized, bringing the brand system together.',
      image: '/brezel/left-menu.webp',
      type: 'showcase'
    }
  ]
};

// PALM Fashion Collections
export const palmProject: ProjectData = {
  id: 'palm-collections',
  title: 'PALM COLLECTIONS',
  description: 'Three distinct clothing design series showcasing versatility in fashion design and brand storytelling through apparel.',
  category: 'Fashion Design',
  year: '2024',
  client: 'PALM Fashion Brand',
  brand: {
    name: 'PALM',
    description: 'Versatile fashion design collections',
    personality: ['Trendy', 'Versatile', 'Creative', 'Contemporary'],
    colorPalette: {
      primary: '#2D3748',
      secondary: '#4A5568',
      accent: '#ED8936'
    },
    type: 'Fashion brand'
  },
  images: [
    '/PALM1/palm1-1.webp',
    '/PALM2/palm2-1.webp',
    '/PALM3/palm3-1.webp',
  ],
  tags: ['Fashion Design', 'Clothing', 'Collections', 'Apparel', 'Brand Storytelling'],
  collections: [
    {
      id: 'palm1',
      title: 'PALM Collection 1',
      description: 'First collection showcasing modern streetwear aesthetics',
      images: [
        '/PALM1/palm1-1.webp',
        '/PALM1/palm1-2.webp',
        '/PALM1/palm1-3.webp',
        '/PALM1/palm1-4.webp',
        '/PALM1/palm1-5.webp',
      ]
    },
    {
      id: 'palm2',
      title: 'PALM Collection 2',
      description: 'Second collection exploring contemporary fashion trends',
      images: [
        '/PALM2/palm2-1.webp',
        '/PALM2/palm2-2.webp',
        '/PALM2/palm2-3.webp',
        '/PALM2/palm2-4.webp',
        '/PALM2/palm2-5.webp',
        '/PALM2/palm2-6.webp',
        '/PALM2/palm2-7.webp',
      ]
    },
    {
      id: 'palm3',
      title: 'PALM Collection 3',
      description: 'Third collection featuring innovative design approaches',
      images: [
        '/PALM3/palm3-1.webp',
        '/PALM3/palm3-2.webp',
        '/PALM3/palm3-3.webp',
        '/PALM3/palm3-4.webp',
        '/PALM3/palm3-5.webp',
        '/PALM3/palm3-6.webp',
      ]
    }
  ]
};

// Combined projects data
export const allProjects = [
  ...socialMediaProjects,
  brezelProject,
  palmProject
];