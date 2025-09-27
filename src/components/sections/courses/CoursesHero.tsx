'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Vortex } from '@/components/ui/vortex';
import { ArrowRight, BookOpen, GraduationCap, Users, Star } from 'lucide-react';
import { Cover } from '@/components/ui/sparkles';

const CoursesHero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const courseFeatures = [
    { icon: BookOpen, text: "Comprehensive Curriculum" },
    { icon: GraduationCap, text: "Expert Instructors" },
    { icon: Users, text: "Community Support" },
    { icon: Star, text: "5-Star Rated" },
  ];

  return (
    <div className='flex flex-col items-center justify-center text-center  overflow-hidden'>
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-4 md:px-10 py-8 w-full h-full"
      >
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 mb-8"
          >
            <div className="w-2 h-2 bg-amber-300 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-300">Over 50,000+ students enrolled worldwide</span>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-amber-300 bg-clip-text text-transparent">
                Master Crypto Trading
              </span>
              <br />
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                With Our Premium
              </span>
              <br />
              <Cover> 
              <span className="bg-gradient-to-r from-amber-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">
               Trading Courses
                </span>
                </Cover>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            From beginner fundamentals to advanced trading strategies.
            <br className="hidden md:block" />
            Learn at your own pace with our structured curriculum and expert mentorship.
          </motion.p>

          {/* Feature Pills */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {courseFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <feature.icon className="w-4 h-4 text-pink-300" />
                <span className="text-sm text-gray-300">{feature.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            {/* Primary CTA */}
            <motion.button
              className="group relative inline-flex h-16 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-black"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#d946ef_0%,#f59e0b_50%,#d946ef_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-8 py-4 text-lg font-semibold text-white backdrop-blur-3xl group-hover:bg-gray-900 transition-colors">
                Browse Courses
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>

            {/* Secondary CTA */}
            <motion.button
              className="group inline-flex h-16 items-center justify-center rounded-full border-2 border-white/20 px-8 py-4 text-lg font-semibold text-white hover:border-white/40 hover:bg-white/5 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Free Sample Lesson
              <div className="ml-2 w-5 h-5 rounded-full border-2 border-current flex items-center justify-center">
                <div className="w-0 h-0 border-l-[6px] border-l-current border-y-[4px] border-y-transparent ml-0.5"></div>
              </div>
            </motion.button>
          </motion.div>
        </motion.div>
      </Vortex>
    </div>
  );
};

export default CoursesHero;