'use client';

import {
  TrendingUp,
  Users,
  Target,
  Sparkles,
  Heart,
  Zap,
  Shield,
  Rocket,
  Award,
  Code,
  Brain,
  Linkedin,
  Github,
} from 'lucide-react';
import { motion } from "framer-motion";
import { Vortex } from '@/components/ui/vortex';
import ContactUs from '@/components/sections/home/ContactUs';

const values = [
  {
    title: "Innovation First",
    description: "We constantly push boundaries with solutions and cutting-edge technology.",
    icon: <Sparkles className="h-8 w-8 text-white" />,
  },
  {
    title: "Community Driven",
    description: "Building a supportive ecosystem where traders, entrepreneurs, and developers thrive together.",
    icon: <Heart className="h-8 w-8 text-white" />,
  },
  {
    title: "Excellence & Quality",
    description: "Delivering premium services with zero downtime infrastructure and expert guidance.",
    icon: <Award className="h-8 w-8 text-white" />,
  },
  {
    title: "Security & Trust",
    description: "Enterprise-grade security with secured network infrastructure protecting your data.",
    icon: <Shield className="h-8 w-8 text-white" />,
  },
];

export default function AboutPageClient() {
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
  
  const features = [
    { icon: TrendingUp, text: "Innovation Driven" },
    { icon: Shield, text: "Community Powered" },
    { icon: Zap, text: "Opportunity Focused" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className='min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden'>
        <Vortex
          backgroundColor="black"
          className="flex items-center flex-col justify-center px-4 md:px-10 py-8 w-full h-full"
        >
          <motion.div className="max-w-6xl mx-auto">
            {/* Subtle accent line */}
            <motion.div
              className="w-32 h-[1px] bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto mb-8"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            />
            <motion.div
              variants={containerVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 mb-8"
            >
              <div className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-300">Empowering 100K+ builders across trading, startups & e-commerce</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-[40px] md:text-[48px] bg-gradient-to-r from-purple-300 via-slate-300 to-blue-300 bg-clip-text text-transparent font-semibold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              About HangoutCodex
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Empowering traders, entrepreneurs, and businesses with AI-powered solutions, expert mentorship, and cutting-edge technology.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4 my-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                  <feature.icon className="w-4 h-4 text-purple-300" />
                  <span className="text-sm text-gray-300">{feature.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
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
          </motion.div>
        </Vortex>
      </div>

      {/* Our Values */}
      <section className="flex flex-col items-center py-12 px-4">
        <div className="flex flex-col items-center max-w-7xl w-full">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl">
              The principles that guide everything we do at HangoutCodex.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 w-full">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex flex-col p-8 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-colors duration-300 flex-1 min-w-[250px]"
              >
                <div className="mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
          {/* Our Team */}
      <section className="flex flex-col items-center py-12 px-4">
        <div className="flex flex-col items-center max-w-7xl w-full">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl">
              The visionaries and innovators driving HangoutCodex forward.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 w-full">
            {/* Sparsh Gupta - Founder */}
            <div className="group flex flex-col items-center p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg hover:bg-white/10 transition-colors duration-300 flex-1 min-w-[250px] max-w-[300px]">
              <div className="flex flex-col items-center mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden bg-white/10 backdrop-blur-sm border-2 border-white/20 p-1">
                  <img 
                    src="/assets/sparsh3.jpeg" 
                    alt="Sparsh Gupta"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">Sparsh Gupta</h3>
              <p className="text-sm font-semibold text-gray-300 mb-3">Founder & CEO</p>
              <p className="text-sm text-gray-400 text-center   leading-relaxed mb-4">
                Founder turning ideas into thriving digital ecosystems.</p>
              <a 
                  href="https://www.linkedin.com/in/sparsh-gupta-72306b22b/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/15 hover:border-white/20 transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4 text-gray-300" />
                </a>
            </div>

            {/* Yuvraj Singh Rathore - Co-Founder */}
            <div className="group flex flex-col items-center p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg hover:bg-white/10 transition-colors duration-300 flex-1 min-w-[250px] max-w-[300px]">
              <div className="flex flex-col items-center mb-6">
                <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 p-1">
                  <img 
                    src="/assets/yuvraj.jpeg" 
                    alt="Yuvraj Singh Rathore"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">Yuvraj Singh Rathore</h3>
              <p className="text-sm font-semibold text-gray-300 mb-3">Co-Founder</p>
              <p className="text-sm text-gray-400 text-center leading-relaxed mb-4">
                The knight building revolutionary products that change the game.
              </p>
              <a 
                  href="www.linkedin.com/in/yuvraj-singh-rathore-1998381ab" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/15 hover:border-white/20 transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4 text-gray-300" />
                </a>
            </div>

            {/* Vikram - CTO */}
            <div className="group flex flex-col items-center p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg hover:bg-white/10 transition-colors duration-300 flex-1 min-w-[250px] max-w-[300px]">
              <div className="flex flex-col items-center mb-6">
                <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 p-1">
                  <img 
                    src="/assets/vikram.png" 
                    alt="Vikram"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">Vikram</h3>
              <p className="text-sm font-semibold text-gray-300 mb-3">Chief Technology Officer</p>
              <p className="text-sm text-gray-400 text-center leading-relaxed mb-4">
                10+ years architecting scalable AI-driven platforms across industries.
              </p>
              
              {/* Social Links */}
              <div className="flex items-center gap-3">
                <a 
                  href="https://github.com/glowhard" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/15 hover:border-white/20 transition-all duration-300"
                >
                  <Github className="w-4 h-4 text-gray-300" />
                </a>
              </div>
            </div>

            {/* Puneet Tiwari - Tech Lead */}
            <div className="group flex flex-col items-center p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg hover:bg-white/10 transition-colors duration-300 flex-1 min-w-[250px] max-w-[300px]">
              <div className="flex flex-col items-center mb-6">
                <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 p-1">
                  <img 
                    src="/assets/puneet.png" 
                    alt="Puneet Tiwari"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">Puneet Tiwari</h3>
              <p className="text-sm font-semibold text-gray-300 mb-3">Tech Lead</p>
              <p className="text-sm text-gray-400 text-center leading-relaxed mb-4">
                Blockchain wizard serving 70,000+ users with Web3 innovation.
              </p>
              
              {/* Social Links */}
              <div className="flex items-center gap-3">
                <a 
                  href="https://www.linkedin.com/in/heyitspuneet/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/15 hover:border-white/20 transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4 text-gray-300" />
                </a>
                <a 
                  href="https://github.com/puneettiwari61" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/15 hover:border-white/20 transition-all duration-300"
                >
                  <Github className="w-4 h-4 text-gray-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Investors */}
      <section className="flex flex-col items-center py-12 px-4">
        <div className="flex flex-col items-center max-w-7xl w-full">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent">
              Backed By Visionaries
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl">
              Strategic investors who believe in our mission to revolutionize the ecosystem.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 max-w-4xl">
            {/* Yogesh Nogia */}
            <div className="group flex flex-col items-center p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg hover:bg-white/10 transition-colors duration-300 flex-1 min-w-[280px] max-w-[320px]">
              <div className="flex flex-col items-center mb-6">
                <div className="w-28 h-28 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 p-1">
                  <img 
                    src="/assets/yogesh.png" 
                    alt="Yogesh Nogia"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">Yogesh Nogia</h3>
              <p className="text-sm font-semibold text-gray-300 mb-3">Strategic Investo, 3x founder</p>
              <p className="text-sm text-gray-400 text-center leading-relaxed mb-4">
                Empowering innovation with strategic vision and capital.

              </p>
            
              <a 
                  href="https://www.linkedin.com/in/yogesh-nogia-8816561a5/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/15 hover:border-white/20 transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4 text-gray-300" />
                </a>
            </div>

            {/* Mukul Choudary */}
            <div className="group flex flex-col items-center p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg hover:bg-white/10 transition-colors duration-300 flex-1 min-w-[280px] max-w-[320px]">
              <div className="flex flex-col items-center mb-6">
                <div className="w-28 h-28 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 p-1">
                  <img 
                    src="/assets/mukul.jpeg" 
                    alt="Mukul Choudary"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">Mukul Choudary</h3>
              <p className="text-sm font-semibold text-gray-300 mb-3">Strategic Investor</p>
              <p className="text-sm text-gray-400 text-center leading-relaxed mb-4">
                Fueling growth with expertise and investment acumen.
              </p>
               <div className="flex items-center gap-3">
                <a 
                  href="https://www.linkedin.com/in/viralmukul/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/15 hover:border-white/20 transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4 text-gray-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}