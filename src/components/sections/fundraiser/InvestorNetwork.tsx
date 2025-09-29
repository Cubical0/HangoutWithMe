'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Globe, TrendingUp, Award, Zap } from 'lucide-react';

const InvestorNetwork = () => {
  const networkStats = [
    {
      icon: Users,
      value: "500+",
      label: "Active Investors",
      description: "Angel investors, VCs, and institutional investors"
    },
    {
      icon: Building2,
      value: "150+",
      label: "Investment Firms",
      description: "Top-tier venture capital and private equity firms"
    },
    {
      icon: Globe,
      value: "25+",
      label: "Countries",
      description: "Global network spanning major markets"
    },
    {
      icon: TrendingUp,
      value: "$2B+",
      label: "Total AUM",
      description: "Combined assets under management"
    }
  ];

  const investorTypes = [
    {
      type: "Angel Investors",
      icon: Award,
      description: "High-net-worth individuals with startup experience",
      ticketSize: "$25K - $250K",
      focus: "Early-stage startups, product-market fit",
      gradient: "from-amber-500 to-orange-500"
    },
    {
      type: "Venture Capital",
      icon: Building2,
      description: "Professional investment firms focused on growth",
      ticketSize: "$500K - $50M",
      focus: "Series A to growth stage companies",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      type: "Strategic Investors",
      icon: Zap,
      description: "Corporate investors seeking strategic partnerships",
      ticketSize: "$1M - $100M",
      focus: "Market synergies and strategic value",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const sectors = [
    "FinTech", "HealthTech", "EdTech", "E-commerce", "SaaS", "AI/ML",
    "Blockchain", "IoT", "CleanTech", "Biotech", "Gaming", "Mobility"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
              Our Investor Network
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Connect with the right investors for your startup's stage and industry focus.
          </p>
        </motion.div>

        {/* Network Stats */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {networkStats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <div className="p-4 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 w-fit mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-emerald-300" />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
              <div className="text-sm text-gray-400">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Investor Types */}
        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-teal-300 to-emerald-300 bg-clip-text text-transparent">
              Investor Categories
            </span>
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {investorTypes.map((investor, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 h-full">
                  {/* Icon and Type */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${investor.gradient} bg-opacity-20`}>
                      <investor.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className={`text-2xl font-bold bg-gradient-to-r ${investor.gradient} bg-clip-text text-transparent`}>
                      {investor.type}
                    </h4>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 mb-6">{investor.description}</p>

                  {/* Details */}
                  <div className="space-y-4">
                    <div>
                      <span className="text-sm font-semibold text-emerald-300">Ticket Size: </span>
                      <span className="text-sm text-gray-300">{investor.ticketSize}</span>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-emerald-300">Focus: </span>
                      <span className="text-sm text-gray-300">{investor.focus}</span>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${investor.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sectors */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-8">
            <span className="bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
              Industry Focus Areas
            </span>
          </h3>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Our investor network covers all major sectors and emerging technologies.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {sectors.map((sector, index) => (
              <motion.span
                key={index}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 text-emerald-300 font-medium hover:bg-emerald-500/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                {sector}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestorNetwork;