import { Metadata } from 'next';
import FundraiserHero from '@/components/sections/fundraiser/FundraiserHero';
import FundraiserServices from '@/components/sections/fundraiser/FundraiserServices';
import { generateWebPageSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Startup Fundraising - Connect with 100+ Investors | HangoutCodex',
  description: 'Raise startup funds and connect with 100+ investors. Get mentor support, pitch deck review, global exposure, and launch campaign assistance. Bridge the gap between innovative ideas and investment opportunities.',
  keywords: [
    'startup fundraising',
    'investor network',
    'startup funding',
    'venture capital',
    'angel investors',
    'pitch deck review',
    'startup mentorship',
    'fundraising platform',
    'startup investment',
    'seed funding',
    'series A funding',
    'startup accelerator',
    'business funding',
    'investor matching',
  ],
  openGraph: {
    title: 'Startup Fundraising - Connect with 100+ Investors | HangoutCodex',
    description: 'Raise startup funds and connect with 100+ investors. Get mentor support, pitch deck review, and global exposure.',
    url: 'https://hangoutcodex.com/fundraiser',
    siteName: 'HangoutCodex',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'HangoutCodex Fundraiser - Connect Startups with Investors',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Startup Fundraising | HangoutCodex',
    description: 'Raise startup funds and connect with 100+ investors. Get mentor support and pitch deck review.',
    images: ['/og-default.png'],
    creator: '@HangoutCodex',
    site: '@HangoutCodex',
  },
  alternates: {
    canonical: 'https://hangoutcodex.com/fundraiser',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Fundraiser() {
  const webpageSchema = generateWebPageSchema(
    'Startup Fundraising - Connect with 100+ Investors | HangoutCodex',
    'Raise startup funds and connect with 100+ investors. Get mentor support, pitch deck review, and global exposure.',
    'https://hangoutcodex.com/fundraiser'
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
        id="schema-webpage"
      />
      <main className="min-h-screen bg-black">
        <FundraiserHero />
        <FundraiserServices />
      </main>
    </>
  );
}