'use client';

import { Target, TrendingUp, Rocket } from 'lucide-react';

export default function LearningPath() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-gray-900/20 to-gray-800/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent mb-12 text-center">Recommended Learning Path</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Target className="w-16 h-16 text-gray-300 mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-white mb-4">1. Start with Basics</h3>
            <p className="text-gray-300">
              Begin with Cryptocurrency Fundamentals to understand the foundation of blockchain technology and digital assets.
            </p>
          </div>
          <div className="text-center">
            <TrendingUp className="w-16 h-16 text-gray-300 mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-white mb-4">2. Learn Analysis</h3>
            <p className="text-gray-300">
              Master Technical Analysis to make informed decisions and understand market movements and patterns.
            </p>
          </div>
          <div className="text-center">
            <Rocket className="w-16 h-16 text-gray-300 mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-white mb-4">3. Specialize</h3>
            <p className="text-gray-300">
              Choose your specialization: DeFi, NFTs, Portfolio Management, or Blockchain Development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}