'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import TradingHero from '@/components/sections/trading/TradingHero';
import TradingDashboardHeader from '@/components/sections/trading/TradingDashboardHeader';
import MarketOverview from '@/components/sections/trading/MarketOverview';

import { BarChart3, Bell, TrendingUp, Search, ClipboardList } from 'lucide-react';
import TrustedBy from '@/components/sections/trading/TrustedBy';
import { AnimatedTestimonialsDemo } from '@/components/sections/trading/TradingTools';
import QuickStartCTA from '@/components/sections/home/QuickStartCTA';
import FeaturesOverview from '@/components/sections/home/FeaturesOverview';



export default function Trading() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="">
      <TradingHero />
      {/* <MarketOverview /> */}
            <FeaturesOverview />
      
      <QuickStartCTA />

      <TrustedBy />
      


    </div>
  );
}