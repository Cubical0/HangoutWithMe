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
            icon={<TrendingUp className="h-4 w-4 text-white" />} 
            title="Ypredict" 
            description="More than a prediction tool. It's a comprehensive, companion for anyone looking to navigate the complex and dynamic world of cryptocurrency investing. Whether you're a beginner or a pro, CryptoPredictor equips you with the knowledge, tools, and confidence to make smarter investment decisions." 
            url="https://ypredict.ai/app/"
            backgroundImage="https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&h=600&fit=crop&crop=center"
          />
          <GridItem 
            area="md:[grid-area:1/7/2/13]" 
            icon={<Wallet className="h-4 w-4 text-white" />} 
            title="XDCPay" 
            description="An innovative cryptocurrency pay application designed to offer functionalities akin to the renowned MetaMask, providing users with a secure and user-friendly platform for managing their digital assets." 
            url="https://chromewebstore.google.com/detail/xdcpay/bocpokimicclpaiekenaeelehdjllofo?pli=1"
            backgroundImage="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&crop=center"
          />
          <GridItem 
            area="md:[grid-area:2/1/3/7]" 
            icon={<Bot className="h-4 w-4 text-white" />} 
            title="Dr Chatbot" 
            description="A sophisticated chatbot system designed to enhance patient care through the power of artificial intelligence and machine learning. This innovative chatbot is engineered to interact with patients, ask pertinent health-related questions, and provide curative advice." 
            url="https://dr-quro-final.onrender.com/"
            backgroundImage="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&crop=center"
          />
          <GridItem 
            area="md:[grid-area:2/7/3/13]" 
            icon={<Home className="h-4 w-4 text-white" />} 
            title="Move In Today.com" 
            description="A standout feature of MIT Homes is its commitment to listing only ready-to-move-in properties. This guarantees that buyers and renters can move in on the same day they close the deal, a significant advantage for those needing immediate accommodation." 
            url="https://dev.moveintoday.com/"
            backgroundImage="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop&crop=center"
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
  backgroundImage?: string;
}

const GridItem = ({ area, icon, title, description, url, backgroundImage }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3 transition-transform hover:scale-[1.02] cursor-pointer overflow-hidden"
      >
        {/* Background Image */}
        {backgroundImage && (
          <div 
            className="absolute inset-0 rounded-xl bg-cover bg-center bg-no-repeat opacity-60"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        )}
        
        {/* Light overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/10 to-black/30 rounded-xl" />
        
        <GlowingEffect 
          spread={40} 
          glow={true} 
          disabled={false} 
          proximity={64} 
          inactiveZone={0.01} 
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] z-10">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600/50 bg-black/30 backdrop-blur-sm p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-white md:text-2xl/[1.875rem] drop-shadow-lg">
                  {title}
                </h3>
                <ExternalLink className="h-4 w-4 text-white/70 opacity-70" />
              </div>
              <p className="font-sans text-sm/[1.125rem] text-gray-200 md:text-base/[1.375rem] drop-shadow-md">
                {description}
              </p>
              <div className="flex items-center gap-2 pt-2">
                <div className="text-sm text-blue-300 hover:text-blue-200 transition-colors drop-shadow-sm">
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