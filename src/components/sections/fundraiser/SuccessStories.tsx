'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, TrendingUp, Users, Award } from 'lucide-react';

const SuccessStories = () => {
  const successStories = [
    {
      company: "TechFlow AI",
      sector: "Artificial Intelligence",
      fundingRound: "Series A",
      amountRaised: "$12M",
      description: "AI-powered workflow automation platform that raised Series A funding in just 4 months.",
      founder: "Sarah Chen",
      founderTitle: "CEO & Co-founder",
      testimonial: "The team's expertise in connecting us with the right investors was invaluable. They understood our vision and helped us craft a compelling narrative that resonated with VCs.",
      metrics: [
        { label: "Time to Close", value: "4 months" },
        { label: "Investor Meetings", value: "25+" },
        { label: "Term Sheets", value: "3" }
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      company: "GreenEnergy Solutions",
      sector: "CleanTech",
      fundingRound: "Seed",
      amountRaised: "$3.5M",
      description: "Renewable energy startup that secured seed funding to scale their solar panel technology.",
      founder: "Michael Rodriguez",
      founderTitle: "Founder & CTO",
      testimonial: "From pitch deck creation to investor introductions, the support was comprehensive. We couldn't have achieved this milestone without their guidance.",
      metrics: [
        { label: "Time to Close", value: "6 months" },
        { label: "Investor Meetings", value: "18" },
        { label: "Term Sheets", value: "2" }
      ],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      company: "HealthConnect",
      sector: "HealthTech",
      fundingRound: "Pre-Series A",
      amountRaised: "$8M",
      description: "Digital health platform connecting patients with healthcare providers raised pre-Series A funding.",
      founder: "Dr. Emily Watson",
      founderTitle: "CEO & Founder",
      testimonial: "The mentorship and strategic advice we received was game-changing. They helped us navigate complex healthcare regulations and find investors who understood our market.",
      metrics: [
        { label: "Time to Close", value: "5 months" },
        { label: "Investor Meetings", value: "22" },
        { label: "Term Sheets", value: "4" }
      ],
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const overallStats = [
    {
      icon: TrendingUp,
      value: "$50M+",
      label: "Total Funds Raised",
      description: "Across all portfolio companies"
    },
    {
      icon: Users,
      value: "100+",
      label: "Startups Funded",
      description: "Successfully completed funding rounds"
    },
    {
      icon: Award,
      value: "95%",
      label: "Success Rate",
      description: "Of startups that complete our program"
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "Client Rating",
      description: "Average satisfaction score"
    }
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
    <section className="py-20 px-4 bg-black">
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
              Success Stories
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real startups, real results. See how we&apos;ve helped entrepreneurs secure funding and grow their businesses.
          </p>
        </motion.div>

        {/* Overall Stats */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {overallStats.map((stat, index) => (
            <motion.div
              key={index}
          variants={containerVariants}
              className="text-center p-6 rounded-xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 backdrop-blur-sm"
            >
              <div className="p-3 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 w-fit mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-emerald-300" />
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-white mb-1">{stat.label}</div>
              <div className="text-xs text-gray-400">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Success Stories */}
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {successStories.map((story, index) => (
            <motion.div
              key={index}
          variants={containerVariants}
              className="relative group"
            >
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Company Info */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${story.gradient}`}></div>
                      <span className="text-sm text-gray-400 uppercase tracking-wide">{story.sector}</span>
                    </div>
                    <h3 className={`text-2xl font-bold bg-gradient-to-r ${story.gradient} bg-clip-text text-transparent mb-2`}>
                      {story.company}
                    </h3>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 rounded-full bg-white/10 text-sm text-white">
                        {story.fundingRound}
                      </span>
                      <span className={`text-xl font-bold bg-gradient-to-r ${story.gradient} bg-clip-text text-transparent`}>
                        {story.amountRaised}
                      </span>
                    </div>
                    <p className="text-gray-400 mb-6">{story.description}</p>
                    
                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4">
                      {story.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="text-center">
                          <div className={`text-lg font-bold bg-gradient-to-r ${story.gradient} bg-clip-text text-transparent`}>
                            {metric.value}
                          </div>
                          <div className="text-xs text-gray-400">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="lg:col-span-2">
                    <div className="relative">
                      <div className="text-6xl text-white/10 absolute -top-4 -left-2">&quot;</div>
                      <blockquote className="text-lg text-gray-300 leading-relaxed mb-6 relative z-10">
                        {story.testimonial}
                      </blockquote>
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${story.gradient} flex items-center justify-center`}>
                          <span className="text-white font-bold text-lg">
                            {story.founder.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <div className="font-semibold text-white">{story.founder}</div>
                          <div className="text-sm text-gray-400">{story.founderTitle}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${story.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-400 mb-8">
            Ready to become our next success story?
          </p>
          <motion.button
            className="group relative inline-flex h-14 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-black"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#10b981_0%,#06b6d4_50%,#10b981_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-8 py-3 text-lg font-semibold text-white backdrop-blur-3xl group-hover:bg-gray-900 transition-colors">
              Start Your Fundraising Journey
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStories;