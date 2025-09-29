'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Vortex } from '@/components/ui/vortex';
import { ArrowRight, TrendingUp, Users, Target, Lightbulb } from 'lucide-react';
import { Cover } from '@/components/ui/sparkles';

const FundraiserHero = () => {
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

  const fundraiserFeatures = [
    { icon: TrendingUp, text: "Proven Success Track Record" },
    { icon: Users, text: "Extensive Investor Network" },
    { icon: Target, text: "Strategic Business Planning" },
    { icon: Lightbulb, text: "Expert Mentorship Program" },
  ];

  return (
    <div className='flex flex-col items-center justify-center text-center overflow-hidden'>
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
            variants={containerVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 mb-8"
          >
            <div className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-300">Fuel Your Business Growth</span>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={containerVariants} className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                Fundraising
              </span>
              <br />
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                Made Simple for
              </span>
              <br />
              <Cover> 
                <span className="bg-gradient-to-r from-teal-300 via-emerald-300 to-green-300 bg-clip-text text-transparent">
                  Startups
                </span>
              </Cover>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={containerVariants}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Connect with investors, secure funding, and accelerate your startup journey.
            <br className="hidden md:block" />
            From seed funding to Series A and beyond we&apos;ve got you covered.
          </motion.p>

          {/* Feature Pills */}
          <motion.div
            variants={containerVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {fundraiserFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <feature.icon className="w-4 h-4 text-emerald-300" />
                <span className="text-sm text-gray-300">{feature.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={containerVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            {/* Primary CTA */}
            <motion.a
              href="#fundraising-services"
              className="group relative inline-flex h-16 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-black"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#10b981_0%,#06b6d4_50%,#10b981_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-8 py-4 text-lg font-semibold text-white backdrop-blur-3xl group-hover:bg-gray-900 transition-colors">
                Start Fundraising
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>

            {/* Secondary CTA */}
            <motion.button
              className="group inline-flex h-16 items-center justify-center rounded-full border-2 border-white/20 px-8 py-4 text-lg font-semibold text-white hover:border-white/40 hover:bg-white/5 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Consultation
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

export default FundraiserHero;