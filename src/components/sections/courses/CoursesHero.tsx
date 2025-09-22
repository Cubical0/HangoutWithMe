'use client';

import React from 'react';
import { motion } from 'framer-motion';

const CoursesHero = () => {
  const learningStats = [
    { number: '50+', label: 'Expert Courses' },
    { number: '10K+', label: 'Students' },
    { number: '95%', label: 'Success Rate' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <section className="relative min-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/20 via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
      
      {/* Floating Learning Icons */}
      <div className="absolute top-20 left-16 w-8 h-8 bg-gray-400/20 rounded-full flex items-center justify-center">
        <span className="text-gray-400 text-sm">📚</span>
      </div>
      <div className="absolute top-32 right-24 w-6 h-6 bg-gray-400/20 rounded-full flex items-center justify-center">
        <span className="text-gray-400 text-xs">🎓</span>
      </div>
      <div className="absolute bottom-40 left-1/4 w-10 h-10 bg-gray-400/20 rounded-full flex items-center justify-center">
        <span className="text-gray-400 text-sm">💡</span>
      </div>
      <div className="absolute bottom-20 right-1/3 w-7 h-7 bg-gray-400/20 rounded-full flex items-center justify-center">
        <span className="text-gray-400 text-sm">⭐</span>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center bg-gray-900/30 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-gray-700/50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gray-400 text-sm font-medium">🚀 New Course: Advanced DeFi Strategies</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Master
            <span className="block bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent">
              Crypto Trading
            </span>
          </h1>
          
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Learn from industry experts with comprehensive courses designed to take you from beginner to professional trader
          </motion.p>

          {/* Learning Path Preview */}
          <motion.div 
            className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-gray-700 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent mb-4">Your Learning Journey</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-700/50 rounded-lg p-4 border-l-4 border-gray-400">
                <div className="text-gray-300 font-semibold mb-2">Beginner</div>
                <div className="text-sm text-gray-400">Crypto Fundamentals, Wallet Setup, Basic Trading</div>
              </div>
              <div className="bg-gray-700/50 rounded-lg p-4 border-l-4 border-white">
                <div className="text-white font-semibold mb-2">Intermediate</div>
                <div className="text-sm text-gray-400">Technical Analysis, Risk Management, Portfolio Strategy</div>
              </div>
              <div className="bg-gray-700/50 rounded-lg p-4 border-l-4 border-gray-300">
                <div className="text-gray-300 font-semibold mb-2">Advanced</div>
                <div className="text-sm text-gray-400">DeFi, Algorithmic Trading, Market Making</div>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {learningStats.map((stat, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
                <div className="text-2xl font-bold text-white">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button className="relative inline-flex h-16 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-base font-medium text-white backdrop-blur-3xl">
                Start Learning Today
              </span>
            </button>
            <button className="border border-gray-600 text-white py-4 px-8 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300">
              Browse Courses
            </button>
          </motion.div>

          {/* Instructor Highlight */}
          <motion.div 
            className="mt-12 flex items-center justify-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="flex -space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-gray-400 to-white rounded-full border-2 border-gray-800"></div>
              <div className="w-10 h-10 bg-gradient-to-r from-white to-gray-300 rounded-full border-2 border-gray-800"></div>
              <div className="w-10 h-10 bg-gradient-to-r from-gray-300 to-gray-500 rounded-full border-2 border-gray-800"></div>
            </div>
            <div className="text-left">
              <div className="text-white font-semibold">Expert Instructors</div>
              <div className="text-gray-400 text-sm">Industry professionals with 10+ years experience</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesHero;