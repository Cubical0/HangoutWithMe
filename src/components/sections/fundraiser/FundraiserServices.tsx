'use client';

import React, { useState } from 'react';
import { 
  DollarSign, 
  Users, 
  BookOpen,
  ArrowRight,
} from 'lucide-react';
import AdditionalSupportServices from './AdditionalSupportServices';
import FundraiserApplicationModal from '@/components/ui/FundraiserApplicationModal';

const FundraiserServices = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleGetStarted = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setIsModalOpen(true);
  };

  // Services data
  const services = [
    {
      id: 'fundraising',
      title: 'Raise Funds for Startups',
      description: 'Comprehensive fundraising support from pre-seed to Series A and beyond.',
      icon: DollarSign,
      amount: '$50M+',
      metric: 'Funds Raised',
      features: [
        'Funding Strategy Development',
        'Investor Pitch Preparation',
        'Due Diligence Support',
        'Term Sheet Negotiation',
      ]
    },
    {
      id: 'investors',
      title: 'Connect with Investors',
      description: 'Access our extensive network of angel investors, VCs, and institutional investors.',
      icon: Users,
      amount: '100+',
      metric: 'Active Investors',
      features: [
        'Investor Matching',
        'Network Access',
        'Introduction Support',
        'Relationship Building',
      ]
    },
    {
      id: 'mentorship',
      title: 'Mentor Support & Guidance',
      description: 'Learn from experienced entrepreneurs and industry experts who\'ve been there before.',
      icon: BookOpen,
      amount: '100+',
      metric: 'Expert Mentors',
      features: [
        '1-on-1 Mentorship',
        'Strategic Guidance',
        'Industry Insights',
        'Growth Planning',
      ]
    }
  ];

  return (
    <section id="fundraising-services" className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent">
              Fundraising Services
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            End-to-end fundraising support to help you secure the capital you need to grow your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="flex flex-wrap gap-8 mb-20 justify-center">
          {services.map((service) => (
            <article
              key={service.id}
              className="flex flex-col bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 rounded-3xl p-10 hover:bg-white/15 hover:border-white/30 hover:shadow-2xl hover:shadow-white/10 transition-all duration-500 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] shadow-xl shadow-black/20"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="inline-flex p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/30 shadow-lg shadow-white/10">
                  <service.icon className="w-10 h-10 text-white" />
                </div>
              </div>

              {/* Title & Metric */}
              <h3 className="text-2xl font-bold text-white mb-3">
                {service.title}
              </h3>
              
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold text-white">
                  {service.amount}
                </span>
                <span className="text-sm text-gray-400 font-medium">{service.metric}</span>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="flex flex-col gap-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-gray-200">
                    <div className="w-2 h-2 rounded-full bg-white shadow-sm shadow-white/50 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={() => handleGetStarted(service.title)}
                className="flex items-center justify-center gap-2 text-white font-semibold bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 px-6 py-3 rounded-xl shadow-lg shadow-white/10 hover:shadow-xl hover:shadow-white/20 hover:scale-105 transition-all duration-300 mt-auto"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </article>
          ))}
        </div>

        {/* Additional Services */}
        <AdditionalSupportServices />
      </div>

      {/* Fundraiser Application Modal */}
      <FundraiserApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceType={selectedService}
      />
    </section>
  );
};

export default FundraiserServices;