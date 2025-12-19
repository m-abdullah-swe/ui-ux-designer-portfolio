export interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  image: string
  video?: string
  additionalImages?: string[]
  designTools: string[]
  category: 'mobile' | 'web' | 'branding'
  featured: boolean
  designHighlights?: string[]
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Battle It Out - Social Video Platform',
    description: 'A beautifully designed social video-battle platform with intuitive user flows and engaging visual design.',
    longDescription: `Battle It Out is a social video platform where users can create and participate in video battles. The design focuses on creating an engaging, competitive experience while maintaining simplicity and ease of use.

Design Highlights:
• Intuitive battle creation flow with clear visual hierarchy
• Engaging voting interface with real-time feedback
• Seamless video upload and playback experience
• Modern card-based UI for browsing battles
• Color-coded status indicators for battle states
• Smooth animations and micro-interactions

The design system emphasizes clarity, engagement, and user delight through thoughtful use of color, typography, and spacing.`,
    image: 'https://res.cloudinary.com/dh8bgvf4n/image/upload/v1766055827/Happenin_Mockup_2_lz7wyx.png',
    additionalImages: [
      'https://res.cloudinary.com/dh8bgvf4n/image/upload/v1766054873/Happenin_Mockup_1_mn4z4h.png',
    ],
    video: 'https://res.cloudinary.com/dh8bgvf4n/video/upload/v1766055827/Peer_Match_1_b6fxby.mp4',
    designTools: [
      'Figma',
      'Adobe XD',
      'Principle',
      'After Effects',
      'Illustrator',
    ],
    designHighlights: [
      'User-centered design approach',
      'Intuitive navigation patterns',
      'Engaging micro-interactions',
      'Accessible color palette',
      'Responsive design system',
    ],
    category: 'mobile',
    featured: true
  },
  {
    id: 2,
    title: 'PhishLock - Security App Design',
    description: 'Clean and trustworthy UI design for an AI-powered security application with focus on user trust and clarity.',
    longDescription: `PhishLock is a security application that helps users identify phishing emails. The design prioritizes trust, clarity, and ease of use in a security-sensitive context.

Design Highlights:
• Trust-building visual language with professional aesthetics
• Clear information hierarchy for security alerts
• Intuitive email classification visualization
• Accessible color coding (safe/fraud indicators)
• Streamlined authentication flow
• Clean, minimal interface reducing cognitive load

The design successfully balances security concerns with user-friendly interactions, making complex security information accessible and actionable.`,
    image: 'https://res.cloudinary.com/dh8bgvf4n/image/upload/v1760551158/3_pczovx.png',
    additionalImages: [
      'https://res.cloudinary.com/dh8bgvf4n/image/upload/v1760551159/4_cekee0.png',
    ],
    video: 'https://res.cloudinary.com/dh8bgvf4n/video/upload/v1760552648/Peer_Match_evjkmc.mp4',
    designTools: [
      'Figma',
      'Adobe XD',
      'Sketch',
      'Principle',
    ],
    designHighlights: [
      'Trust-focused design',
      'Clear visual hierarchy',
      'Accessible color system',
      'Intuitive information architecture',
      'Professional aesthetics',
    ],
    category: 'mobile',
    featured: true
  },
  {
    id: 3,
    title: 'GoTallin - Carpooling App Design',
    description: 'Modern carpooling app with elegant map integration, seat selection interface, and seamless booking flow.',
    longDescription: `GoTallin is a carpooling application designed for Tallinn, Estonia. The design focuses on creating a seamless, trustworthy experience for ride-sharing.

Design Highlights:
• Intuitive map-based interface with clear location markers
• Interactive seat selection with visual car overlay
• Smooth booking flow with clear progress indicators
• Integrated communication features (chat, video call)
• Rating and feedback system with delightful interactions
• Location-specific design considerations

The design successfully combines functionality with aesthetics, creating a delightful user experience that encourages trust and engagement.`,
    image: 'https://res.cloudinary.com/dh8bgvf4n/image/upload/v1761550845/7_aknvfy.png',
    additionalImages: [
      'https://res.cloudinary.com/dh8bgvf4n/image/upload/v1761550844/9_rtfgzl.png',
    ],
    video: 'https://res.cloudinary.com/dh8bgvf4n/video/upload/v1761550945/Go_Tallinn_qfxapb.mp4',
    designTools: [
      'Figma',
      'Adobe XD',
      'Principle',
      'After Effects',
    ],
    designHighlights: [
      'Map-based interface design',
      'Interactive seat selection',
      'Seamless booking flow',
      'Trust-building elements',
      'Location-aware design',
    ],
    category: 'mobile',
    featured: true
  },
  {
    id: 4,
    title: 'Happenin - Event Discovery App',
    description: 'Beautiful event discovery app with engaging visual design and intuitive discovery features.',
    longDescription: `Happenin is an event discovery application that helps users find and manage local events. The design emphasizes discovery, engagement, and community connection.

Design Highlights:
• Engaging event card designs with rich imagery
• Intuitive category-based browsing
• Location-based search with map integration
• Personalized recommendations interface
• Social features (RSVP, favorites) with clear CTAs
• Modern, vibrant visual language

The design creates an exciting, community-focused experience that makes event discovery enjoyable and effortless.`,
    image: 'https://res.cloudinary.com/dh8bgvf4n/image/upload/v1762194032/Happenin_Mockup_otqebe.png',
    additionalImages: [],
    video: '',
    designTools: [
      'Figma',
      'Adobe XD',
      'Principle',
      'Illustrator',
    ],
    designHighlights: [
      'Engaging visual design',
      'Intuitive discovery flow',
      'Rich imagery integration',
      'Social interaction design',
      'Community-focused aesthetics',
    ],
    category: 'mobile',
    featured: true
  },
  {
    id: 5,
    title: 'E-Commerce Dashboard Design',
    description: 'Modern dashboard design for e-commerce platform with data visualization and analytics.',
    longDescription: `A comprehensive dashboard design for an e-commerce platform focusing on data visualization, analytics, and business insights.

Design Highlights:
• Clear data visualization with intuitive charts
• Organized information architecture
• Efficient navigation and filtering
• Responsive grid layouts
• Accessible color schemes for data
• Professional business aesthetics`,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    designTools: [
      'Figma',
      'Adobe XD',
      'Tableau',
    ],
    designHighlights: [
      'Data visualization',
      'Information architecture',
      'Business-focused design',
      'Responsive layouts',
    ],
    category: 'web',
    featured: false
  },
  {
    id: 6,
    title: 'Brand Identity - Tech Startup',
    description: 'Complete brand identity design including logo, color system, typography, and brand guidelines.',
    longDescription: `A comprehensive brand identity project for a tech startup, including logo design, color palette, typography system, and complete brand guidelines.

Design Highlights:
• Modern, memorable logo design
• Cohesive color system
• Typography hierarchy
• Brand application examples
• Complete style guide`,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    designTools: [
      'Illustrator',
      'Photoshop',
      'Figma',
      'InDesign',
    ],
    designHighlights: [
      'Logo design',
      'Brand system',
      'Visual identity',
      'Style guide',
    ],
    category: 'branding',
    featured: true
  },
]

