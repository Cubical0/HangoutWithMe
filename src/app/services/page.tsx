'use client';


import { ServicesGrid } from '@/components/sections/services/ServicesGrid';
import ServicesHero from '@/components/sections/services/ServicesHero';
import ContactUs from '@/components/sections/home/ContactUs';



export default function Services() {
  return (
    <div className="min-h-screen bg-black">
      <ServicesHero />
      <ServicesGrid/>
      <ContactUs />
    </div>
  );
}