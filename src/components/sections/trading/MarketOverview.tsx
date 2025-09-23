'use client';

import { MaskContainer } from '@/components/ui/svg-mask-effect';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';

export default function MarketOverview() {
  return (
    <div className="bg-black ">
      <MaskContainer
        revealText={
          <p className="mx-auto max-w-4xl text-center text-4xl font-bold text-slate-800 dark:text-white">
            Real-time market insights and advanced analytics to help you make 
            informed investment decisions and build lasting wealth.
          </p>
        }
        className="h-[40rem] rounded-md border border-purple-900/20 text-white dark:text-black bg-black"
      >
        Track live market data with{" "}
        <span className="text-purple-400">advanced analytics</span> and get 
        personalized investment recommendations powered by
        <span className="text-purple-400"> AI-driven insights</span>.
      </MaskContainer>


    </div>
  );
}