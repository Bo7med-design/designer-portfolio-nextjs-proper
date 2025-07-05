import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://ahmed-elbaghdady.com'),
  title: 'Ahmed El-Baghdady | Graphic Designer & Art Director',
  description: 'Transforming brands through exceptional visual storytelling and innovative design solutions. 6+ years of experience in graphic design and art direction.',
  keywords: 'graphic designer, art director, visual design, branding, Ahmed El-Baghdady, portfolio, social media design, brand identity',
  authors: [{ name: 'Ahmed El-Baghdady' }],
  creator: 'Ahmed El-Baghdady',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ahmed-elbaghdady.com',
    title: 'Ahmed El-Baghdady | Graphic Designer & Art Director',
    description: 'Transforming brands through exceptional visual storytelling and innovative design solutions.',
    siteName: 'Ahmed El-Baghdady Portfolio',
    images: [
      {
        url: '/hero-image.webp',
        width: 1200,
        height: 630,
        alt: 'Ahmed El-Baghdady - Graphic Designer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahmed El-Baghdady | Graphic Designer & Art Director',
    description: 'Transforming brands through exceptional visual storytelling and innovative design solutions.',
    images: ['/hero-image.webp'],
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
  other: {
    'theme-color': '#000000',
    'color-scheme': 'dark',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Critical Resource Hints */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://vitals.vercel-analytics.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Critical Font Preloading - Highest Priority */}
        <link rel="preload" href="/fonts/Anton-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/ReadexPro-VariableFont_HEXP,wght.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* Critical Image Preloading - LCP Element */}
        <link rel="preload" href="/hero-image.webp" as="image" type="image/webp" fetchPriority="high" />
        
        {/* PWA & Performance */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        
        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no" />
        
        {/* Performance Hints */}
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body 
        className="font-readex antialiased bg-black text-white overflow-x-hidden"
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}