'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ContainerScroll } from '../../ui/container-scroll-animation';
import { Spotlight } from '../../ui/spotlight-new';
import { BackgroundBeamsWithCollision } from '../../ui/background-beams-with-collision';
import { AnimatedTooltip } from '@/components/ui/animated-tooltip';
import ContactUs from './ContactUs';

const HomeHero = () => {
  const discordRef = useRef<HTMLDivElement>(null!);
  const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

  return (
    <div className="flex flex-col relative min-h-screen overflow-x-hidden">
      <Spotlight />
      
      {/* Enhanced background with subtle gradients */}

      
      <BackgroundBeamsWithCollision collisionTargetRef={discordRef}>
        <ContainerScroll
          titleComponent={<>
            {/* Enhanced hero content with better spacing and styling */}
            <div className="relative z-10 px-4 py-12">

              {/* Subtle accent line above title */}
              <motion.div
                className="w- h-[4px] bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto mb-8"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 1, delay: 0.1 }} />

              <motion.h1
                className="text-[40px] md:text-[48px] bg-gradient-to-r from-purple-300 via-slate-300 to-blue-300 bg-clip-text text-transparent font-semibold leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* <span className="bg-gradient-to-r from-amber-300 via-orange-300 to-rose-300 bg-clip-text text-transparent text-6xl md:text-7xl font-bold tracking-tight"> */}
                Build, Trade, Innovate
                {/* </span> */}
              </motion.h1>


              <motion.p
                className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Learn fast, build bold, trade smart, and raise the bar all in one place where ideas meet mentors, tools, and a little bit of magic.              </motion.p>

              {/* Enhanced stats section */}
              <motion.div
                className="flex flex-wrap justify-center gap-8 mt-8 mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">100K+</div>
                  <div className="text-sm text-gray-300">Active Members</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent">$2.5B+</div>
                  <div className="text-sm text-gray-300">Volume Traded</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-rose-300 to-purple-300 bg-clip-text text-transparent">99.9%</div>
                  <div className="text-sm text-gray-300">Uptime</div>
                </div>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 mt-10 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {/* Enhanced primary button */}
                <a
                  href="https://discord.com/invite/hangoutcodex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex h-16 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black group"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a855f7_0%,#3b82f6_50%,#a855f7_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-8 py-4 text-lg font-semibold text-white backdrop-blur-3xl group-hover:bg-gray-900 transition-colors">
                    Join Discord
                  </span>
                </a>

                {/* Secondary button */}
                <ContactUs />
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                className="flex flex-wrap justify-center items-center gap-6 mt-12 opacity-60"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <div className="text-xs text-gray-300 uppercase tracking-wider">Trusted by</div>
                <div className="flex items-center gap-4 text-gray-300">
                  <AnimatedTooltip items={people} />
                </div>
              </motion.div>
            </div>
          </>}
          discordRef={discordRef}
        >
          {/* Discord interface content - this will be rendered inside the Card component */}
          <div className="p-4">
            <p className="text-gray-300 text-center">
              Join our community and start your journey!
            </p>
          </div>
        </ContainerScroll>
      </BackgroundBeamsWithCollision>
    </div>
  );
};

export default HomeHero;