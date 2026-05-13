import { Metadata } from 'next';
import ContactUs from '@/components/sections/home/ContactUs';
import { generateWebPageSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Contact Us | HangoutCodeX - Get In Touch',
  description: 'Get in touch with HangoutCodeX. Whether you are a trader, entrepreneur, or developer, reach out to learn how we can help you build, trade, and innovate.',
  keywords: ['contact hangoutcodex', 'get in touch', 'support', 'trading community', 'business inquiry'],
  openGraph: {
    title: 'Contact Us | HangoutCodeX',
    description: 'Get in touch with HangoutCodeX. Reach out to learn how we can help you build, trade, and innovate.',
    url: 'https://hangoutcodex.com/contact',
    siteName: 'HangoutCodex',
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'Contact HangoutCodeX' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | HangoutCodeX',
    description: 'Get in touch with HangoutCodeX. Reach out to learn how we can help you build, trade, and innovate.',
    images: ['/og-default.png'],
    creator: '@HangoutCodex',
    site: '@HangoutCodex',
  },
  alternates: { canonical: 'https://hangoutcodex.com/contact' },
  robots: { index: true, follow: true },
};

export default function ContactPage() {
  const webpageSchema = generateWebPageSchema(
    'Contact Us | HangoutCodeX - Get In Touch',
    'Get in touch with HangoutCodeX. Whether you are a trader, entrepreneur, or developer, reach out to learn how we can help you build, trade, and innovate.',
    'https://hangoutcodex.com/contact'
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
        id="schema-webpage"
      />
      <main className="min-h-screen bg-black pt-24" id="main-content">
        <ContactUs />
      </main>
    </>
  );
}