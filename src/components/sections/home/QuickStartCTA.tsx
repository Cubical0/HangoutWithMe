'use client';

import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Brain, MessageSquare, Mic, Server } from 'lucide-react';
import Link from 'next/link';

export default function TradingHubCTA() {
  const tradingHubData = [
    { name: "Trading Signals", subtitle: "3 free, then paid", icon: TrendingUp, color: "text-green-500" },
    { name: "Mentorship", subtitle: "Expert traders", icon: Users, color: "text-green-500" },
    { name: "AI Analysis", subtitle: "Market insights", icon: Brain, color: "text-red-500" },
    { name: "ChatAI", subtitle: "Smart assistance", icon: MessageSquare, color: "text-green-500" },
    { name: "Voice AI", subtitle: "NLP powered", icon: Mic, color: "text-red-500" },
    { name: "Zero Downtime", subtitle: "99.9% uptime", icon: Server, color: "text-green-500" },
  ];

  const leftData = tradingHubData.filter((_, i) => i % 2 === 0); 
  const rightData = tradingHubData.filter((_, i) => i % 2 === 1); 

  // Create multiple duplicates for seamless infinite scroll
  const infiniteArray = (data: typeof tradingHubData) => [...data, ...data, ...data, ...data, ...data];

  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
              Advanced Trading Hub<br /> Powered by AI
            </span>
          </h2>
          <p className="text-lg text-gray-400 mt-6 max-w-xl">
            Experience professional trading with AI-powered signals, expert mentorship, 
            and zero-downtime infrastructure. Get 3 free signals to start your journey.
          </p>

          {/* Button */}
          <div className="mt-8">
            <Link href="/trading-hub">
              <button className="bg-white text-black flex items-center gap-2 py-3 px-6 rounded-full font-medium hover:bg-gray-200 transition">
                Start Trading
                <ArrowRight size={18} />
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Right Content (Infinite Scroll Columns) */}
        <div className="relative grid grid-cols-2 gap-4 h-80 overflow-hidden">
          
          {/* Left Column - Scroll Up */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex flex-col gap-4"
              animate={{ y: ["0%", "-60%"] }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {infiniteArray(leftData).map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={`left-${index}`}
                    className="bg-gray-900 rounded-xl p-4 flex flex-col shadow-lg min-h-[100px] flex-shrink-0"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <IconComponent className={`h-5 w-5 ${feature.color}`} />
                      <span className="text-gray-300 font-medium">{feature.name}</span>
                    </div>
                    <div className="text-white text-sm">{feature.subtitle}</div>
                  </div>
                );
              })}
            </motion.div>
            
            {/* Fade overlays */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
          </div>

          {/* Right Column - Scroll Down */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex flex-col gap-4"
              animate={{ y: ["-60%", "0%"] }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {infiniteArray(rightData.reverse()).map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={`right-${index}`}
                    className="bg-gray-900 rounded-xl p-4 flex flex-col shadow-lg min-h-[100px] flex-shrink-0"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <IconComponent className={`h-5 w-5 ${feature.color}`} />
                      <span className="text-gray-300 font-medium">{feature.name}</span>
                    </div>
                    <div className="text-white text-sm">{feature.subtitle}</div>
                  </div>
                );
              })}
            </motion.div>
            
            {/* Fade overlays */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}
