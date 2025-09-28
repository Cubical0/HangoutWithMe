'use client';

import { GlowingEffect } from "@/components/ui/glowing-effect";
import { motion } from 'framer-motion';
import { TrendingUp, Wallet, Bot, Home, ExternalLink } from "lucide-react";

export default function OurProducts() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent mb-6">
            Our Products
          </h2>
          <p className="text-xl text-gray-300">Innovative solutions powered by AI and blockchain technology<br/> to transform your digital experience.</p>
        </motion.div>
        
        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-2 lg:gap-4">
          <GridItem 
            area="md:[grid-area:1/1/2/7]" 
            icon={<TrendingUp className="h-4 w-4 text-black dark:text-neutral-400" />} 
            title="Ypredict" 
            description="More than a prediction tool. It's a comprehensive, AI-powered companion for anyone looking to navigate the complex and dynamic world of cryptocurrency investing. Whether you're a beginner or a pro, CryptoPredictor equips you with the knowledge, tools, and confidence to make smarter investment decisions." 
            url="https://ypredict.ai/app/"
          />
          <GridItem 
            area="md:[grid-area:1/7/2/13]" 
            icon={<Wallet className="h-4 w-4 text-black dark:text-neutral-400" />} 
            title="XDCPay" 
            description="An innovative cryptocurrency pay application designed to offer functionalities akin to the renowned MetaMask, providing users with a secure and user-friendly platform for managing their digital assets." 
            url="https://chromewebstore.google.com/detail/xdcpay/bocpokimicclpaiekenaeelehdjllofo?pli=1"
          />
          <GridItem 
            area="md:[grid-area:2/1/3/7]" 
            icon={<Bot className="h-4 w-4 text-black dark:text-neutral-400" />} 
            title="Dr Chatbot" 
            description="A sophisticated chatbot system designed to enhance patient care through the power of artificial intelligence and machine learning. This innovative chatbot is engineered to interact with patients, ask pertinent health-related questions, and provide curative advice." 
            url="https://dr-quro-final.onrender.com/"
          />
          <GridItem 
            area="md:[grid-area:2/7/3/13]" 
            icon={<Home className="h-4 w-4 text-black dark:text-neutral-400" />} 
            title="Move In Today.com" 
            description="A standout feature of MIT Homes is its commitment to listing only ready-to-move-in properties. This guarantees that buyers and renters can move in on the same day they close the deal, a significant advantage for those needing immediate accommodation." 
            url="https://dev.moveintoday.com/"
          />
        </ul>
      </div>
    </section>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  url: string;
}

const GridItem = ({ area, icon, title, description, url }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3 transition-transform hover:scale-[1.02] cursor-pointer"
      >
        <GlowingEffect 
          spread={40} 
          glow={true} 
          disabled={false} 
          proximity={64} 
          inactiveZone={0.01} 
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                  {title}
                </h3>
                <ExternalLink className="h-4 w-4 text-gray-400 opacity-70" />
              </div>
              <p className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400">
                {description}
              </p>
              <div className="flex items-center gap-2 pt-2">
                <div className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                  Visit Product →
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </li>
  );
};