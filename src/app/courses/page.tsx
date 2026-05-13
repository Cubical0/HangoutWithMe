import { Metadata } from 'next';
import { Suspense } from 'react';
import CoursesHero from '@/components/sections/courses/CoursesHero';
import CoursesGrid from '@/components/sections/courses/CoursesGrid';
import LearningPath from '@/components/sections/courses/LearningPath';
import ContactUs from '@/components/sections/home/ContactUs';
import PaymentNotification from '@/components/sections/courses/PaymentNotification';

export const metadata: Metadata = {
  title: 'E-commerce Courses - Dropshipping, SaaS & Affiliate Marketing | HangoutCodex',
  description: 'Master e-commerce with expert courses in dropshipping, dropservicing, affiliate marketing, SaaS development, and digital business. Get 24/7 support, real-time case studies, and funding opportunities.',
  keywords: [
    'ecommerce courses',
    'dropshipping course',
    'dropservicing training',
    'affiliate marketing course',
    'SaaS development course',
    'digital business training',
    'online business courses',
    'ecommerce education',
    'startup courses',
    'business mentorship',
    'ecommerce launchpad',
    'online store course',
    'digital marketing course',
    'business funding',
  ],
  openGraph: {
    title: 'E-commerce Courses - Dropshipping, SaaS & Affiliate Marketing | HangoutCodex',
    description: 'Master e-commerce with expert courses in dropshipping, SaaS development, and affiliate marketing. Get 24/7 support and funding opportunities.',
    url: 'https://hangoutcodex.com/courses',
    siteName: 'HangoutCodex',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'HangoutCodex E-commerce Courses',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-commerce Courses | HangoutCodex',
    description: 'Master e-commerce with expert courses in dropshipping, SaaS development, and affiliate marketing.',
    images: ['/og-default.png'],
    creator: '@HangoutCodex',
    site: '@HangoutCodex',
  },
  alternates: {
    canonical: 'https://hangoutcodex.com/courses',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Courses() {
  return (
    <div className="min-h-screen bg-black">
      {/* Payment Notification */}
      <Suspense fallback={null}>
        <PaymentNotification />
      </Suspense>

      <CoursesHero />
      <CoursesGrid />
      <LearningPath />
      <ContactUs />
    </div>
  );
}