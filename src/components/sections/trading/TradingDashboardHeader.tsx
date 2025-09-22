'use client';

import { motion } from 'framer-motion';

export default function TradingDashboardHeader() {
  return (
    <section className="py-12 px-4 bg-gradient-to-r from-green-900/30 to-blue-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent"
            >
              Trading Terminal
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-300"
            >
              Professional trading environment with institutional-grade tools
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-4 mt-4 lg:mt-0"
          >
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Go Live
            </button>
            <button className="border border-gray-600 text-gray-300 px-6 py-2 rounded-lg font-semibold hover:border-white hover:text-white transition-colors">
              Demo Mode
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}