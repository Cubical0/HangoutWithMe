import Link from 'next/link';
import type { Metadata } from 'next';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: '404 - Page Not Found | HangoutCodex',
  description: 'The page you are looking for does not exist or has been moved. Return to HangoutCodex homepage.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  const notFoundSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: '404 - Page Not Found | HangoutCodex',
    description: 'The page you are looking for does not exist or has been moved.',
    url: 'https://hangoutcodex.com/404',
    isPartOf: {
      '@id': 'https://hangoutcodex.com/#website',
    },
    mainEntity: {
      '@type': 'ImageObject',
      contentUrl: 'https://hangoutcodex.com/og-default.png',
      caption: 'HangoutCodex 404 Page Not Found',
    },
  };

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-4" id="main-content">
      <JsonLd schema={notFoundSchema} id="schema-404" />
      <div className="text-center max-w-lg">
        <div className="text-8xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
          404
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-400 mb-8 text-lg leading-relaxed">
          The page you are looking for does not exist, has been moved, or is temporarily unavailable.
          Let us get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-all hover:-translate-y-0.5 inline-block"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all inline-block"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </main>
  );
}