export interface Testimonial {
  id: number
  projectName: string
  clientName: string
  clientRole?: string
  rating: number // 1-5
  testimonial: string
  platform: 'upwork' | 'fiverr' | 'direct' | 'linkedin'
  date?: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    projectName: 'Battle It Out',
    clientName: 'Jasmine P',
    clientRole: 'Product Manager',
    rating: 5,
    testimonial: 'Muhammad created an absolutely stunning design for our app. The user experience is intuitive, and the visual design exceeded our expectations. The attention to detail and design thinking is remarkable.',
    platform: 'fiverr'
  },
  {
    id: 2,
    projectName: 'GoTallin',
    clientName: 'Client',
    clientRole: 'Startup Founder',
    rating: 5,
    testimonial: 'Working with Muhammad was a pleasure. He understood our vision and translated it into a beautiful, user-friendly design. The design system he created is scalable and the user flows are seamless.',
    platform: 'upwork'
  },
  {
    id: 3,
    projectName: 'PhishLock',
    clientName: 'Razan R',
    clientRole: 'Tech Lead',
    rating: 5,
    testimonial: 'The design work is exceptional! Muhammad has a great eye for detail and creates designs that are both beautiful and functional. The security-focused design approach was exactly what we needed.',
    platform: 'direct'
  },
  {
    id: 4,
    projectName: 'Happenin',
    clientName: 'Client',
    clientRole: 'Product Owner',
    rating: 5,
    testimonial: 'Muhammad delivered a design that perfectly captures our brand and user needs. The design is modern, engaging, and the user experience is delightful. Highly recommend!',
    platform: 'direct'
  }
]

