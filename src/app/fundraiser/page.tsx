'use client';

import FundraiserHero from '@/components/sections/fundraiser/FundraiserHero';
import FundraiserServices from '@/components/sections/fundraiser/FundraiserServices';

export default function Fundraiser() {
  return (
    <div className="min-h-screen bg-black">
      <FundraiserHero />
      <FundraiserServices />
    </div>
  );
}