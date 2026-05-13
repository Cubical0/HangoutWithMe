import { Metadata } from 'next';
import { ServicesGrid } from '@/components/sections/services/ServicesGrid';
import ServicesHero from '@/components/sections/services/ServicesHero';
import ContactUs from '@/components/sections/home/ContactUs';
import { services } from '@/lib/data/services';
import { generateServiceSchema, generateWebPageSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Our Services - ERP, DevOps, AI & Enterprise Solutions | HangoutCodex',
  description: 'Enterprise-grade technology services including ERP solutions, DevOps, healthcare tech, network security, Voice AI, NLP, micro-services architecture, and digital marketing solutions.',
  keywords: [
    'ERP solutions',
    'DevOps services',
    'healthcare technology',
    'manufacturing tech',
    'network security',
    'Voice AI',
    'NLP services',
    'micro-services architecture',
    'digital marketing',
    'inbound marketing',
    'enterprise solutions',
    'AI development',
    'cloud services',
    'tech consulting',
  ],
  openGraph: {
    title: 'Our Services - ERP, DevOps, AI & Enterprise Solutions | HangoutCodex',
    description: 'Enterprise-grade technology services including ERP, DevOps, AI, network security, and digital marketing solutions.',
    url: 'https://hangoutcodex.com/services',
    siteName: 'HangoutCodex',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'HangoutCodex Enterprise Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Services - Enterprise Solutions | HangoutCodex',
    description: 'Enterprise-grade technology services including ERP, DevOps, AI, and digital marketing solutions.',
    images: ['/og-default.png'],
    creator: '@HangoutCodex',
    site: '@HangoutCodex',
  },
  alternates: {
    canonical: 'https://hangoutcodex.com/services',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Services() {
  const serviceSchema = generateServiceSchema(
    services.map(s => ({ name: s.category, description: s.description }))
  );
  const webpageSchema = generateWebPageSchema(
    'Our Services - ERP, DevOps, AI & Enterprise Solutions | HangoutCodex',
    'Enterprise-grade technology services including ERP solutions, DevOps, healthcare tech, network security, Voice AI, NLP, micro-services architecture, and digital marketing solutions.',
    'https://hangoutcodex.com/services'
  );

  return (
    <main className="min-h-screen bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        id="schema-services"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
        id="schema-webpage"
      />
      <ServicesHero />
      <ServicesGrid/>
      <ContactUs />
    </main>
  );
}