'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Vortex } from '@/components/ui/vortex';
import ContactUs from '../home/ContactUs';

const CoursesHero = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden'>
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-4 md:px-10 py-8 w-full h-full"
      >
        <motion.div className="max-w-6xl mx-auto">
          {/* Subtle accent line */}
          <motion.div
            className="w-32 h-[1px] bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto mb-8"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          />

          {/* Main Heading */}
          <motion.h1
            className="text-[40px] md:text-[48px] bg-gradient-to-r from-purple-300 via-pink-300 to-amber-300 bg-clip-text text-transparent font-semibold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Master E-commerce & Digital Business
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            From E-commerce basics to advanced digital business strategies. Build profitable online businesses with our comprehensive training programs.
          </motion.p>

          {/* Stats Section */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 mt-8 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                50+
              </div>
              <div className="text-sm text-gray-400 mt-1">Expert Courses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-300 to-amber-300 bg-clip-text text-transparent">
                5K+
              </div>
              <div className="text-sm text-gray-400 mt-1">Active Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent">
                95%
              </div>
              <div className="text-sm text-gray-400 mt-1">Success Rate</div>
            </div>
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

export default CoursesHero;