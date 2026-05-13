import { Metadata } from 'next';
import HomeHero from '@/components/sections/home/HomeHero';
import FeaturesOverview from '@/components/sections/home/FeaturesOverview';
import PlatformStats from '@/components/sections/home/PlatformStats';
import UserTestimonials from '@/components/sections/home/UserTestimonials';
import FAQ from '@/components/sections/home/FAQ';
import ContactUs from '@/components/sections/home/ContactUs';

export const metadata: Metadata = {
  title: 'HangoutCodex - Build, Trade, Innovate | Trading, E-commerce & Development',
  description: 'Join 100K+ hustlers, traders & founders at HangoutCodex. Master crypto trading, e-commerce, dropshipping, SaaS development, and connect with 100+ investors. Your all-in-one platform for building, trading, and innovating.',
  keywords: [
    'crypto trading platform',
    'trading signals',
    'e-commerce courses',
    'dropshipping training',
    'SaaS development',
    'startup fundraising',
    'ERP solutions',
    'DevOps services',
    'AI development',
    'blockchain education',
    'affiliate marketing',
    'digital business',
    'investor network',
    'trading community',
    'crypto mentorship',
    'trading hub',
    'ecommerce launchpad',
  ],
  openGraph: {
    title: 'HangoutCodex - Build, Trade, Innovate | Trading, E-commerce & Development',
    description: 'Join 100K+ hustlers, traders & founders. Master crypto trading, e-commerce, dropshipping, SaaS development, and connect with 100+ investors.',
    url: 'https://hangoutcodex.com',
    siteName: 'HangoutCodex',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'HangoutCodex - Where Hustlers, Traders & Founders Collide',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HangoutCodex - Build, Trade, Innovate',
    description: 'Join 100K+ hustlers, traders & founders. Master crypto trading, e-commerce, and connect with 100+ investors.',
    images: ['/og-default.png'],
    creator: '@HangoutCodex',
    site: '@HangoutCodex',
  },
  alternates: {
    canonical: 'https://hangoutcodex.com',
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
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <HomeHero />
      <FeaturesOverview />
      <PlatformStats />
      <FAQ />
      <ContactUs />
      <UserTestimonials />
    </main>
  );
}
