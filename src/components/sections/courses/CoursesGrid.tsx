'use client';

import { motion } from 'framer-motion';
import { GraduationCap, BarChart3, Building2, Palette, Briefcase, Code, Check } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: "Cryptocurrency Fundamentals",
    description: "Complete beginner's guide to understanding cryptocurrencies and blockchain technology.",
    price: "$79",
    duration: "3 weeks",
    level: "Beginner",
    icon: GraduationCap,
    features: [
      "Blockchain technology basics",
      "How cryptocurrencies work",
      "Wallet setup and security",
      "Understanding market basics"
    ]
  },
  {
    id: 2,
    title: "Technical Analysis Mastery",
    description: "Learn to read charts, identify patterns, and make informed trading decisions.",
    price: "$149",
    duration: "5 weeks",
    level: "Intermediate",
    icon: BarChart3,
    features: [
      "Chart pattern recognition",
      "Technical indicators",
      "Support and resistance",
      "Risk management"
    ]
  },
  {
    id: 3,
    title: "DeFi Deep Dive",
    description: "Comprehensive course on decentralized finance protocols and strategies.",
    price: "$199",
    duration: "6 weeks",
    level: "Advanced",
    icon: Building2,
    features: [
      "DeFi protocols overview",
      "Yield farming strategies",
      "Liquidity provision",
      "Smart contract risks"
    ]
  },
  {
    id: 4,
    title: "NFT & Digital Assets",
    description: "Understanding the NFT ecosystem, creation, and investment strategies.",
    price: "$129",
    duration: "4 weeks",
    level: "Intermediate",
    icon: Palette,
    features: [
      "NFT marketplace navigation",
      "Creating and minting NFTs",
      "Valuation techniques",
      "Investment strategies"
    ]
  },
  {
    id: 5,
    title: "Crypto Portfolio Management",
    description: "Advanced strategies for building and managing a diversified crypto portfolio.",
    price: "$179",
    duration: "5 weeks",
    level: "Advanced",
    icon: Briefcase,
    features: [
      "Portfolio theory",
      "Asset allocation",
      "Rebalancing strategies",
      "Tax optimization"
    ]
  },
  {
    id: 6,
    title: "Blockchain Development Basics",
    description: "Introduction to blockchain development and smart contract programming.",
    price: "$249",
    duration: "8 weeks",
    level: "Advanced",
    icon: Code,
    features: [
      "Solidity programming",
      "Smart contract development",
      "Web3 integration",
      "dApp deployment"
    ]
  }
];

export default function CoursesGrid() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-gray-600 transition-colors duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <course.icon className="w-16 h-16 text-gray-300" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{course.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      course.level === 'Beginner' ? 'bg-gray-800 text-gray-300' :
                      course.level === 'Intermediate' ? 'bg-gray-700 text-white' :
                      'bg-gray-600 text-gray-200'
                    }`}>
                      {course.level}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-white">{course.price}</div>
                    <div className="text-gray-400 text-sm">{course.duration}</div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{course.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">What you'll learn:</h4>
                  <ul className="space-y-2">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <Check className="w-4 h-4 text-gray-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-6 py-3 text-sm font-medium text-white backdrop-blur-3xl">
                    Enroll Now
                  </span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}