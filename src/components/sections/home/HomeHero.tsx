'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ContainerScroll } from '../../ui/container-scroll-animation';
import { Spotlight } from '../../ui/spotlight-new';
import { BackgroundBeamsWithCollision } from '../../ui/background-beams-with-collision';

const HomeHero = () => {
  const discordRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col overflow-hidden">
      <Spotlight />
      <BackgroundBeamsWithCollision collisionTargetRef={discordRef}>
        <ContainerScroll
          titleComponent={
            <>
              <motion.h1
  className="text-[32px] bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent font-semibold "
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  Take control of your <br />
  <span className="bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent text-6xl font-bold">
    Crypto Investments
  </span>
</motion.h1>

<motion.p
  className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  Join thousands of traders who trust our platform for secure, fast, and profitable cryptocurrency trading
</motion.p>

             <motion.div 
  className="flex flex-col sm:flex-row gap-4 mt-8 justify-center"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.4 }}
>
 
<button className="relative inline-flex h-16 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-base font-medium text-white backdrop-blur-3xl">
    Start for free
  </span>
</button>


</motion.div>

            </>
          }
          discordRef={discordRef}
        >
        
        </ContainerScroll>
      </BackgroundBeamsWithCollision>
    </div>
  );
};

export default HomeHero;