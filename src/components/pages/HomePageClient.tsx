'use client';

import dynamic from 'next/dynamic';

// All client-side animated components are dynamically imported here
// This wrapper component isolates the ssr: false from the server page
const HomeHero = dynamic(() => import('@/components/sections/home/HomeHero'), {
  ssr: false,
  loading: () => null,
});

const FeaturesOverview = dynamic(() => import('@/components/sections/home/FeaturesOverview'), {
  ssr: false,
  loading: () => null,
});

const PlatformStats = dynamic(() => import('@/components/sections/home/PlatformStats'), {
  ssr: false,
  loading: () => null,
});

const FAQ = dynamic(() => import('@/components/sections/home/FAQ'), {
  ssr: false,
  loading: () => null,
});

const ContactUs = dynamic(() => import('@/components/sections/home/ContactUs'), {
  ssr: false,
  loading: () => null,
});

const UserTestimonials = dynamic(() => import('@/components/sections/home/UserTestimonials'), {
  ssr: false,
  loading: () => null,
});

export default function HomePageClient() {
  return (
    <>
      <HomeHero />
      <FeaturesOverview />
      <PlatformStats />
      <FAQ />
      <ContactUs />
      <UserTestimonials />
    </>
  );
}