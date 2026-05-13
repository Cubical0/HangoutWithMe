import { Metadata } from 'next';
import { Suspense } from 'react';
import TradingHero from '@/components/sections/trading/TradingHero';
import TrustedBy from '@/components/sections/trading/TrustedBy';
import QuickStartCTA from '@/components/sections/home/QuickStartCTA';
import PaymentNotification from '@/components/sections/trading/PaymentNotification';

export const metadata: Metadata = {
  title: 'Crypto Trading Hub - Signals, Mentorship & Market Analysis | HangoutCodex',
  description: 'Professional crypto trading platform with real-time signals, expert mentorship, advanced market analysis, strategy backtesting, and performance tracking. Join 100K+ traders with 99.9% uptime.',
  keywords: [
    'crypto trading',
    'trading signals',
    'crypto mentorship',
    'market analysis',
    'trading strategies',
    'crypto trading platform',
    'bitcoin trading',
    'ethereum trading',
    'trading education',
    'technical analysis',
    'trading community',
    'crypto signals',
    'day trading',
    'swing trading',
    'trading tools',
  ],
  openGraph: {
    title: 'Crypto Trading Hub - Signals, Mentorship & Market Analysis | HangoutCodex',
    description: 'Professional crypto trading platform with real-time signals, expert mentorship, and advanced market analysis. Join 100K+ traders.',
    url: 'https://hangoutcodex.com/trading',
    siteName: 'HangoutCodex',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'HangoutCodex Trading Hub - Professional Crypto Trading',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crypto Trading Hub | HangoutCodex',
    description: 'Professional crypto trading platform with real-time signals, expert mentorship, and advanced market analysis.',
    images: ['/og-default.png'],
    creator: '@HangoutCodex',
    site: '@HangoutCodex',
  },
  alternates: {
    canonical: 'https://hangoutcodex.com/trading',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Trading() {
  return (
    <main className="min-h-screen bg-black">
      {/* Payment Notification */}
      <Suspense fallback={null}>
        <PaymentNotification />
      </Suspense>

      <TradingHero />
      {/* <MarketOverview /> */}
            {/* <FeaturesOverview /> */}
      
      <QuickStartCTA />

      <TrustedBy />
    </main>
  );
}