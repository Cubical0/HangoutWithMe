'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function MarketCTA() {
  const cryptoData = [
    { name: "NEM", price: "$0.0193", change: "-24.80%", color: "text-red-500" },
    { name: "XRP", price: "$2.14", change: "+13.45%", color: "text-green-500" },
    { name: "EDR", price: "$0.0049", change: "-4.80%", color: "text-red-500" },
    { name: "BNB", price: "$604.76", change: "+7.40%", color: "text-green-500" },
    { name: "ETH", price: "$1829.04", change: "+14.80%", color: "text-green-500" },
    { name: "HOT", price: "$0.0948", change: "-7.25%", color: "text-red-500" },
  ];

  const leftData = cryptoData.filter((_, i) => i % 2 === 0); 
  const rightData = cryptoData.filter((_, i) => i % 2 === 1); 

  // Create multiple duplicates for seamless infinite scroll
  const infiniteArray = (data: typeof cryptoData) => [...data, ...data, ...data, ...data, ...data];

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
              Stay on top of market<br /> moves in real time
            </span>
          </h2>
          <p className="text-lg text-gray-400 mt-6 max-w-xl">
            Track live price changes, market shifts, and key events as they happen.
            Never miss an opportunity or a critical update again.
          </p>

          {/* Button */}
          <div className="mt-8">
            <Link href="/invest">
              <button className="bg-white text-black flex items-center gap-2 py-3 px-6 rounded-full font-medium hover:bg-gray-200 transition">
                Start investing
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
              {infiniteArray(leftData).map((coin, index) => (
                <div
                  key={`left-${index}`}
                  className="bg-gray-900 rounded-xl p-4 flex flex-col shadow-lg min-h-[100px] flex-shrink-0"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 font-medium">{coin.name}</span>
                    <span className={`text-sm font-semibold ${coin.color}`}>{coin.change}</span>
                  </div>
                  <div className="mt-2 text-white text-lg font-bold">{coin.price}</div>
                </div>
              ))}
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
              {infiniteArray(rightData.reverse()).map((coin, index) => (
                <div
                  key={`right-${index}`}
                  className="bg-gray-900 rounded-xl p-4 flex flex-col shadow-lg min-h-[100px] flex-shrink-0"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 font-medium">{coin.name}</span>
                    <span className={`text-sm font-semibold ${coin.color}`}>{coin.change}</span>
                  </div>
                  <div className="mt-2 text-white text-lg font-bold">{coin.price}</div>
                </div>
              ))}
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
