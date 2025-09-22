'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const features = [
  {
    icon: "📊",
    title: "Advanced Trading Tools",
    description: "Professional-grade charts, indicators, and real-time market data",
    link: "/trading"
  },
  {
    icon: "🎓",
    title: "Expert Education",
    description: "Learn from industry professionals with comprehensive courses",
    link: "/courses"
  },
  {
    icon: "📰",
    title: "Market Insights",
    description: "Stay updated with latest crypto news and expert analysis",
    link: "/blogs"
  }
];

export default function FeaturesOverview() {
  return (
    <section className=" px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent mb-6">
            Support top 30+ chains
          </h2>
        </motion.div>
        
     
      </div>
    </section>
  );
}