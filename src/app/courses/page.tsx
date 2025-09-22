'use client';

import { motion } from 'framer-motion';
import CoursesHero from '@/components/sections/courses/CoursesHero';
import CoursesGrid from '@/components/sections/courses/CoursesGrid';
import LearningPath from '@/components/sections/courses/LearningPath';
import { GraduationCap, BarChart3, Building2, Palette, Briefcase, Code } from 'lucide-react';

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

export default function Courses() {
  return (
    <div className="pt-32 min-h-screen bg-black">
      <CoursesHero />
      <CoursesGrid />
      <LearningPath />

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent mb-6">Ready to Start Your Learning Journey?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of students who have mastered cryptocurrency and blockchain technology. 
            Get lifetime access and start learning today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="relative inline-flex h-16 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-base font-medium text-white backdrop-blur-3xl">
                Browse All Courses
              </span>
            </button>
            <button className="border border-gray-600 text-gray-300 py-4 px-8 rounded-lg font-semibold text-lg hover:border-white hover:text-white transition-colors duration-300">
              Free Preview
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}