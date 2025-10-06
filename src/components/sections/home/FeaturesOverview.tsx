'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import beep from "../../../../public/assets/beep.svg"
import logo1 from '../../../../public/assets/Blue Full (1).svg'
import logo2 from '../../../../public/assets/logo (1680×720).svg' 
import logo3 from '../../../../public/assets/MetroVerse.png' 
import logo4 from '../../../../public/assets/photo_2025-08-28_15-54-16.svg'

const logos = [
  { src: beep, alt: 'Beep' },
  { src: logo1, alt: 'Blue Full' },
  { src: logo2, alt: 'Hangout Codex' },
  { src: logo3, alt: 'Partner Logo' },
  { src: logo4, alt: 'Partner Logo 2' }
];

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
    <section className="px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-white to-gray-900 bg-clip-text text-transparent">
            Our Partners
          </h2>
        </motion.div>

     {/* Continuous Carousel */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-16 items-center"
            animate={{
              x: [0, -100 * logos.length]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            style={{
              width: `${200 * logos.length}%`
            }}
          >
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div key={`first-${index}`} className="flex-shrink-0">
                   <Image 
                  src={logo.src} 
                  alt={logo.alt} 
                  height={60} 
                  width={120} 
                  className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                  style={{ objectFit: 'contain' }}
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div key={`second-${index}`} className="flex-shrink-0">
                <Image 
                  src={logo.src} 
                  alt={logo.alt} 
                  height={60} 
                  width={120} 
                  className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                  style={{ objectFit: 'contain' }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}