'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    id: 1,
    question: "What is Hangout Codex?",
    answer: "Hangout Codex is a global ecosystem where traders, founders, and innovators connect to learn, build, and grow. It combines community learning, trading education, startup fundraising, and enterprise-grade IT solutions under one platform."
  },
  {
    id: 2,
    question: "Who can join Hangout Codex?",
    answer: "Hangout Codex is open to traders, entrepreneurs, startups, and established businesses. Whether you want to master trading, scale your business, raise capital, or explore AI and IT solutions, you’ll find opportunities tailored to your goals."
  },
  {
    id: 3,
    question: "What services does Hangout Codex provide?",
    answer: "Hangout Codex bridges education, technology, and business growth. Members access trading signals, e-commerce and SaaS programs, startup funding support, and advisory guidance. Our IT division builds enterprise solutions like ERP systems, DevOps pipelines, AI automation, and cybersecurity frameworks."
  },
  {
    id: 4,
    question: "Do you offer trading and educational programs?",
    answer: "Yes. Members can access structured trading courses, daily signals, webinars, and mentorship sessions led by experienced professionals. Our goal is to make trading and business education simple, practical, and results-driven."
  },
  {
    id: 5,
    question: "Can startups and Web3 projects collaborate with you?",
    answer: "Absolutely. Hangout Codex partners with Web3, AI, and fintech startups for cross-promotions, sponsorships, advisory onboarding, and fundraising. We help projects reach audiences, build trust, and scale through genuine community engagement."
  },
  {
    id: 6,
    question: "What IT and AI solutions do you offer?",
    answer: "We deliver a wide range of enterprise and AI-driven solutions, including ERP integration, DevOps, healthcare software, microservices, and business intelligence. Our AI team also develops generative AI, chatbots, voice assistants, and predictive analytics tools."
  },
  {
    id: 7,
    question: "Do you create custom software or digital solutions?",
    answer: "Yes. Every project is custom-built to match business goals. From automation tools to full-scale analytics and AI systems, we design solutions that integrate seamlessly with your existing workflows."
  },
  {
    id: 8,
    question: "Can I raise funds for my startup through Hangout Codex?",
    answer: "Yes. We connect founders with investors and advisors. Our team reviews your pitch deck, arranges investor meetings, and supports negotiations. We charge only a small success-based commission once funding is secured."
  },
  {
    id: 9,
    question: "Do you onboard advisors and experts?",
    answer: "Yes. Experienced professionals can join our advisory network to mentor startups and contribute to projects within the Hangout Codex ecosystem. There’s no cost to join, and it’s a great way to share expertise with emerging founders."
  },
  {
    id: 10,
    question: "How can I become a premium member?",
    answer: "Premium members gain access to advanced trading signals, investor introductions, private groups, and personalized support. You can upgrade directly through our website or via Discord."
  },
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-20 px-4 relative">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent pointer-events-none" />
      
      <div className="max-w-3xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-slate-200 via-white to-slate-200 bg-clip-text text-transparent mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-gray-400">
              Everything you need to know about our platform
            </p>
          </motion.div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqData.map((item, index) => {
            const isOpen = openItems.includes(item.id);
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div
                  className={`
                    relative overflow-hidden rounded-xl
                    bg-white/5 backdrop-blur-md
                    border border-white/10
                    transition-all duration-300
                    ${isOpen ? 'shadow-lg shadow-purple-500/10' : 'hover:bg-white/[0.07]'}
                  `}
                >
                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-purple-500/5 group-hover:via-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500" />
                  
                  {/* Question */}
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="relative w-full px-5 py-4 text-left flex items-center justify-between group"
                  >
                    <h3 className="text-base font-medium text-white/90 pr-4 group-hover:text-white transition-colors">
                      {item.question}
                    </h3>
                    
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="flex-shrink-0"
                    >
                      <div className={`
                        w-8 h-8 rounded-full flex items-center justify-center
                        bg-white/5 border border-white/10
                        group-hover:bg-white/10 group-hover:border-white/20
                        transition-all duration-300
                      `}>
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                      </div>
                    </motion.div>
                  </button>

                  {/* Answer */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="relative px-5 pb-4">
                          {/* Subtle divider */}
                          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-4" />
                          
                          <p className="text-sm text-gray-300/90 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;