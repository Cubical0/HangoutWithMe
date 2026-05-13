import { Metadata } from 'next';
import AboutPageClient from '@/components/pages/AboutPageClient';
import { generateWebPageSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'About Us - HangoutCodex | Empowering Traders, Entrepreneurs & Developers',
  description: 'Learn about HangoutCodex - empowering 100K+ traders, entrepreneurs, and businesses with AI-powered solutions, expert mentorship, and cutting-edge technology. Meet our team of innovators.',
  keywords: [
    'about hangoutcodex',
    'crypto trading company',
    'startup mentorship',
    'tech innovation',
    'trading platform team',
    'blockchain experts',
    'ecommerce mentors',
    'AI development team',
    'startup founders',
    'tech entrepreneurs',
  ],
  openGraph: {
    title: 'About Us - HangoutCodex | Empowering Traders, Entrepreneurs & Developers',
    description: 'Empowering 100K+ traders, entrepreneurs, and businesses with AI-powered solutions, expert mentorship, and cutting-edge technology.',
    url: 'https://hangoutcodex.com/about',
    siteName: 'HangoutCodex',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'HangoutCodex Team - Innovation Driven, Community Powered',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us - HangoutCodex',
    description: 'Empowering 100K+ traders, entrepreneurs, and businesses with AI-powered solutions and expert mentorship.',
    images: ['/og-default.png'],
    creator: '@HangoutCodex',
    site: '@HangoutCodex',
  },
  alternates: {
    canonical: 'https://hangoutcodex.com/about',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  const webpageSchema = generateWebPageSchema(
    'About Us - HangoutCodex | Empowering Traders, Entrepreneurs & Developers',
    'Empowering 100K+ traders, entrepreneurs, and businesses with AI-powered solutions, expert mentorship, and cutting-edge technology.',
    'https://hangoutcodex.com/about'
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
        id="schema-webpage"
      />
      <AboutPageClient />
    </>
  );
}
