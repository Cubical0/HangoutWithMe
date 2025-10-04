'use client';

import { Cover } from '@/components/ui/cover';
import { motion } from 'framer-motion';
import { ShoppingCart, Package, Users, TrendingUp } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: "E-commerce Fundamentals",
    description: "Complete guide to starting and scaling your online store from scratch.",
    price: "$149",
    level: "Beginner",
    icon: ShoppingCart
  },
  {
    id: 2,
    title: "Dropshipping Mastery",
    description: "Build a profitable dropshipping business with proven strategies.",
    price: "$199",
    level: "Intermediate",
    icon: Package
  },
  {
    id: 3,
    title: "Dropservicing Empire",
    description: "Scale service-based businesses using dropservicing methods.",
    price: "$179",
    level: "Intermediate",
    icon: Users
  },
  {
    id: 4,
    title: "Affiliate Marketing Pro",
    description: "Master affiliate marketing and create passive income streams.",
    price: "$129",
    level: "Beginner",
    icon: TrendingUp
  }
];

export default function CoursesGrid() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Master E-commerce & Digital Business
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Learn from industry experts with our comprehensive courses designed to help you build and scale profitable online businesses
        </p>
      </div>
      <div className="text-center mb-8">
        <Cover> 
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          We provide funds up to $5000
          </h2>
          </Cover>
      </div>

      {/* Courses Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
        {courses.map((course) => (
          <div key={course.id} className="backdrop-blur-lg bg-white/[0.08] border border-white/20 rounded-3xl p-8 hover:bg-white/[0.12] transition-all duration-500 hover:scale-[1.02] hover:border-white/30 shadow-xl hover:shadow-2xl relative overflow-hidden group">
            {/* Glass reflection effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            
            <div className="relative z-10">
              {/* Icon and level */}
              <div className="flex justify-between items-center mb-6">
                <course.icon className="w-8 h-8 text-purple-400 drop-shadow-lg" />
                <span className="text-xs bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-full text-white/90 border border-white/30 font-medium">
                  {course.level}
                </span>
              </div>
              
              {/* Title */}
              <h3 className="text-white font-bold mb-4 text-xl leading-tight">{course.title}</h3>
              
              {/* Description */}
              <p className="text-white/80 text-sm mb-6 line-clamp-3 leading-relaxed">{course.description}</p>
              
              {/* Price and button */}
              <div className="flex justify-between items-center">
                <span className="text-purple-300 font-bold text-xl drop-shadow-lg">{course.price}</span>
                <button className="bg-white/15 backdrop-blur-sm hover:bg-white/25 text-white text-sm px-5 py-2.5 rounded-xl transition-all duration-300 border border-white/30 hover:border-white/50 font-medium hover:shadow-lg">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}