'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Vortex } from '@/components/ui/vortex';
import { ArrowRight, TrendingUp, Shield, Zap } from 'lucide-react';
import ContactUs from '../home/ContactUs';

const TradingHero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const features = [
    { icon: TrendingUp, text: "Smart Trading" },
    { icon: Shield, text: "Secure Platform" },
    { icon: Zap, text: "Real Time Analysis" },
  ];

  return (
    <div className='min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden'>
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-4 md:px-10 py-8 w-full h-full"
      >
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
          variants={containerVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 mb-8"
          >
            <div className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-300">Trusted by 10,000+ traders worldwide</span>
          </motion.div>


          {/* Main Heading */}
          <motion.h1
            className="text-[40px] md:text-[48px] bg-gradient-to-r from-purple-300 via-slate-300 to-blue-300 bg-clip-text text-transparent font-semibold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Master the Art of Trading
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform your financial future with our cutting-edge trading platform. 
            <br className="hidden md:block" />
            Expert guidance, powerful tools, and proven strategies to build lasting wealth.
          </motion.p>

          {/* Feature Pills */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <feature.icon className="w-4 h-4 text-purple-300" />
                <span className="text-sm text-gray-300">{feature.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-10 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Enhanced primary button */}
            <a
              href="https://discord.com/invite/hangoutcodex"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex h-16 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black group"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a855f7_0%,#3b82f6_50%,#a855f7_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-8 py-4 text-lg font-semibold text-white backdrop-blur-3xl group-hover:bg-gray-900 transition-colors">
                Join Discord
              </span>
            </a>

            {/* Secondary button */}
            <ContactUs />
          </motion.div>


        </motion.div>
      </Vortex>
    </div>
  );
};

export default TradingHero;