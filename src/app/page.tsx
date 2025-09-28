'use client';

import HomeHero from '@/components/sections/home/HomeHero';
import FeaturesOverview from '@/components/sections/home/FeaturesOverview';
import PlatformStats from '@/components/sections/home/PlatformStats';
import UserTestimonials from '@/components/sections/home/UserTestimonials';
import FAQ from '@/components/sections/home/FAQ';
import ContactUs from '@/components/sections/home/ContactUs';
import QuickStartCTA from '@/components/sections/home/QuickStartCTA';
import { AnimatedTestimonialsDemo } from '@/components/sections/trading/TradingTools';


export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <HomeHero />
      <FeaturesOverview />
      <PlatformStats />
      
      <AnimatedTestimonialsDemo/>
      <UserTestimonials />
      <FAQ />
      <ContactUs />
    </div>
  );
}
