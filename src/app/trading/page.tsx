'use client';

import { Suspense } from 'react';
import TradingHero from '@/components/sections/trading/TradingHero';
import TradingDashboardHeader from '@/components/sections/trading/TradingDashboardHeader';
// import MarketOverview from '@/components/sections/trading/MarketOverview';

import { BarChart3, Bell, TrendingUp, Search, ClipboardList, CheckCircle, XCircle } from 'lucide-react';
import TrustedBy from '@/components/sections/trading/TrustedBy';
import { AnimatedTestimonialsDemo } from '@/components/sections/trading/TradingTools';
import QuickStartCTA from '@/components/sections/home/QuickStartCTA';
import FeaturesOverview from '@/components/sections/home/FeaturesOverview';
import ContactUs from '@/components/sections/home/ContactUs';
import PaymentNotification from '@/components/sections/trading/PaymentNotification';



export default function Trading() {
  return (
    <div className="">
      {/* Payment Notification */}
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