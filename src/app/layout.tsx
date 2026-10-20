import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://routesandroots.com'),
  title: 'Routes & Roots — Premium Group Travel Experiences',
  description:
    'Routes & Roots organizes premium group travel experiences for college students, young professionals, and adventure enthusiasts. Join our Jaisalmer desert journey and future trips.',
  keywords: ['group travel', 'Jaisalmer trip', 'Rajasthan tour', 'desert safari', 'Routes and Roots', 'budget group travel India'],
  authors: [{ name: 'Routes & Roots' }],
  openGraph: {
    title: 'Routes & Roots — Somewhere Between the Dunes and the Stars',
    description:
      'Golden sands, desert sunsets, cultural nights, new friendships, and stories worth bringing home. Join our Jaisalmer group trip.',
    images: ['/jaisalmer-hero.jpg'],
    type: 'website',
    siteName: 'Routes & Roots',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Routes & Roots — Premium Group Travel',
    description: 'Jaisalmer group trip — 4 Days / 3 Nights starting at ₹6,999 per person.',
    images: ['/jaisalmer-hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,600&family=Inter:wght@300;400;500;600;700&family=Cinzel:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
