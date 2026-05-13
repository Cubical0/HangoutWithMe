import { Metadata } from 'next';
import { generateWebPageSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Privacy Policy | HangoutCodeX',
  description: 'Privacy Policy for HangoutCodeX. Learn how we collect, use, and protect your personal information when you use our platform and services.',
  keywords: ['privacy policy', 'data privacy', 'hangoutcodex privacy', 'data protection', 'user data'],
  openGraph: {
    title: 'Privacy Policy | HangoutCodeX',
    description: 'Privacy Policy for HangoutCodeX. Learn how we collect, use, and protect your personal information.',
    url: 'https://hangoutcodex.com/privacy',
    siteName: 'HangoutCodex',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'HangoutCodeX Privacy Policy',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | HangoutCodeX',
    description: 'Learn how HangoutCodeX collects, uses, and protects your personal information.',
    images: ['/og-default.png'],
    creator: '@HangoutCodex',
    site: '@HangoutCodex',
  },
  alternates: { canonical: 'https://hangoutcodex.com/privacy' },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  const webpageSchema = generateWebPageSchema(
    'Privacy Policy | HangoutCodeX',
    'Privacy Policy for HangoutCodeX. Learn how we collect, use, and protect your personal information.',
    'https://hangoutcodex.com/privacy'
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
        id="schema-webpage"
      />
      <main className="min-h-screen bg-black pt-28 text-gray-300 px-4 py-12" id="main-content">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
          <div className="prose prose-invert max-w-none space-y-6">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <p>Your privacy is important to us. This policy outlines how we collect, use, and protect your information.</p>
            <h2>Information We Collect</h2>
            <p>We collect information you provide directly, such as when you create an account, contact us, or use our services.</p>
            <h2>How We Use Your Information</h2>
            <p>We use your information to provide, maintain, and improve our services, and to communicate with you.</p>
            <h2>Contact</h2>
            <p>If you have questions, contact us through our website.</p>
          </div>
        </div>
      </main>
    </>
  );
}