'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Vortex } from '@/components/ui/vortex';
import { Code, Shield, Zap, Brain } from 'lucide-react';
import { Cover } from '@/components/ui/sparkles';
import ContactUs from '../home/ContactUs';

const ServicesHero = () => {
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

  const serviceFeatures = [
    { icon: Code, text: "Custom Development Solutions" },
    { icon: Shield, text: "Enterprise Security" },
    { icon: Zap, text: "High Performance Systems" },
    { icon: Brain, text: "AI-Powered Solutions" },
  ];

  return (
    <div className='flex flex-col items-center justify-center text-center overflow-hidden'>
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 mb-8"
          >
            <div className="w-2 h-2 bg-cyan-300 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-300">Enterprise-Grade Solutions</span>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={containerVariants} className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                Professional
              </span>
              <br />
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                Development
              </span>
              <br />
              <Cover> 
                <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                  Services
                </span>
              </Cover>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={containerVariants}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            From ERP solutions to AI-powered applications.
            <br className="hidden md:block" />
            We deliver cutting-edge technology solutions for modern businesses.
          </motion.p>

          {/* Feature Pills */}
          <motion.div
            variants={containerVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {serviceFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <feature.icon className="w-4 h-4 text-cyan-300" />
                <span className="text-sm text-gray-300">{feature.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
         <motion.div
                                   className="flex flex-col sm:flex-row gap-4  justify-center items-center"
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

export default ServicesHero;