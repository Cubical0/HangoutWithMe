'use client';

import { ShoppingCart, TrendingUp, Rocket } from 'lucide-react';

export default function LearningPath() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-gray-900/20 to-gray-800/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent mb-12 text-center">Your E-commerce Success Path</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <ShoppingCart className="w-16 h-16 text-gray-300 mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-white mb-4">1. Master E-commerce Basics</h3>
            <p className="text-gray-300">
              Start with E-commerce Fundamentals to understand online business foundations and customer acquisition strategies.
            </p>
          </div>
          <div className="text-center">
            <TrendingUp className="w-16 h-16 text-gray-300 mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-white mb-4">2. Scale Your Business</h3>
            <p className="text-gray-300">
              Learn Dropshipping, Affiliate Marketing, or Dropservicing to build scalable income streams.
            </p>
          </div>
          <div className="text-center">
            <Rocket className="w-16 h-16 text-gray-300 mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-white mb-4">3. Advanced Growth</h3>
            <p className="text-gray-300">
              Specialize in SaaS, App Development, UI/UX Design, or get comprehensive Tech Stack Support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}