'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target,
  Presentation,
  FileText,
  Handshake,
  TrendingUp,
} from 'lucide-react';

const AdditionalSupportServices = () => {
  const supportServices = [
    {
      icon: Target,
      title: 'Business Planning',
      description: ' Create structured, investor-focused plans that define clear goals and growth pathways.'
    },
    {
      icon: Presentation,
      title: 'Pitch Deck Design',
      description: ' Craft visually compelling decks that communicate your story and attract investors.'
    },
    {
      icon: FileText,
      title: 'Financial Analysis',
      description: ' Build reliable financial models that project stability, potential, and profitability.'
    },
    {
      icon: Handshake,
      title: 'Partner Relations',
      description: ' Forge meaningful connections with advisors, investors, and strategic collaborators.'
    },
    {
      icon: TrendingUp,
      title: 'Growth Strategy',
      description: ' Develop scalable, data-backed strategies for long-term business sustainability.'
    }
  ];

  return (
    <div className="mb-16">
      <h3 className="text-3xl font-bold text-center mb-12">
        <span className="bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent">
         Strategic Business Support

        </span>
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {supportServices.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1,  }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md shadow-lg text-center hover:bg-white/15 transition-all duration-300 hover:border-white/30"
          >
            <div className="p-3 rounded-lg bg-black/20 backdrop-blur-sm border border-white/10 w-fit mx-auto mb-4">
              <service.icon className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">{service.title}</h4>
            <p className="text-sm text-gray-300">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AdditionalSupportServices;