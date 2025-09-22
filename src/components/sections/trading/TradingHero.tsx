'use client';

import React from 'react';
import { motion } from 'framer-motion';

const TradingHero = () => {
  return (
    <section className="relative min-h-[60vh] bg-black flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/20 via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-gray-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-gray-400 rounded-full animate-pulse"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Professional
            <span className="block bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent">
              Trading Terminal
            </span>
          </h1>
          
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Advanced tools, real-time data, and lightning-fast execution for serious traders
          </motion.p>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
              <div className="text-2xl font-bold text-white">$2.4T</div>
              <div className="text-sm text-gray-400">24h Volume</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
              <div className="text-2xl font-bold text-white">0.01s</div>
              <div className="text-sm text-gray-400">Execution Speed</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-sm text-gray-400">Trading Pairs</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
              <div className="text-2xl font-bold text-white">99.9%</div>
              <div className="text-sm text-gray-400">Uptime</div>
            </div>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="relative inline-flex h-16 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-base font-medium text-white backdrop-blur-3xl">
                Start Trading
              </span>
            </button>
            <button className="border border-gray-600 text-white py-4 px-8 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300">
              View Demo
            </button>
          </motion.div>
        </motion.div>

        {/* Live Market Ticker */}
        <motion.div 
          className="mt-12 bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <span className="text-gray-400">BTC/USD</span>
                <span className="text-green-400 font-semibold">$43,250.00</span>
                <span className="text-green-400 text-xs">+2.5%</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-400">ETH/USD</span>
                <span className="text-green-400 font-semibold">$2,680.50</span>
                <span className="text-green-400 text-xs">+1.8%</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-400">ADA/USD</span>
                <span className="text-red-400 font-semibold">$0.485</span>
                <span className="text-red-400 text-xs">-0.3%</span>
              </div>
            </div>
            <div className="text-xs text-gray-500">Live prices • Updated every second</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TradingHero;