import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Muhammad Abdullah — UI/UX Designer & Creative Strategist',
  description: 'Portfolio of Muhammad Abdullah, UI/UX Designer from Pakistan, specializing in user-centered design, digital experiences, and creative problem-solving.',
  keywords: 'UI/UX Designer, User Experience, User Interface Design, Product Design, Design Systems, Figma, Adobe XD, Creative Design',
  authors: [{ name: 'Muhammad Abdullah' }],
  creator: 'Muhammad Abdullah',
  publisher: 'Muhammad Abdullah',
  openGraph: {
    title: 'Muhammad Abdullah — UI/UX Designer & Creative Strategist',
    description: 'Portfolio of Muhammad Abdullah, UI/UX Designer focused on creating beautiful, functional, and user-centered digital experiences.',
    url: 'https://muhammadabdullah.design',
    siteName: 'Muhammad Abdullah',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Muhammad Abdullah UI/UX Design Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Abdullah — UI/UX Designer & Creative Strategist',
    description: 'UI/UX Designer from Pakistan, specializing in user-centered design and digital experiences.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/profile.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

