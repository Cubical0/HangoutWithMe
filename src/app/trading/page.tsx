'use client';

import { Suspense } from 'react';
import TradingHero from '@/components/sections/trading/TradingHero';
import TrustedBy from '@/components/sections/trading/TrustedBy';
import QuickStartCTA from '@/components/sections/home/QuickStartCTA';
import FeaturesOverview from '@/components/sections/home/FeaturesOverview';
import ContactUs from '@/components/sections/home/ContactUs';
import PaymentNotification from '@/components/sections/trading/PaymentNotification';

export default function Trading() {
  return (
    <div className="">
      {/* Payment Notification wrapped in Suspense */}
      <Suspense fallback={null}>
        <PaymentNotification />
      </Suspense>

      <TradingHero />
      {/* <MarketOverview /> */}
      <FeaturesOverview />
      
      <QuickStartCTA />

      <TrustedBy />
      
      <ContactUs />
    </div>
  );
}