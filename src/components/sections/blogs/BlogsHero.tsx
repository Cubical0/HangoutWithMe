'use client';

import { motion } from 'framer-motion';

export default function BlogsHero() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent"
        >
          Crypto Insights
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-300 max-w-3xl mx-auto"
        >
          Stay ahead of the crypto market with expert analysis, trading strategies, 
          and the latest insights from industry professionals.
        </motion.p>
      </div>
    </section>
  );
}