'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    id: 1,
    question: "How secure is your trading platform?",
    answer: "Our platform uses bank-grade encryption, multi-factor authentication, and cold storage for digital assets."
  },
  {
    id: 2,
    question: "What trading tools do you offer?",
    answer: "We provide advanced charting tools, real-time market data, technical indicators, and automated trading bots."
  },
  {
    id: 3,
    question: "Do you offer educational resources?",
    answer: "Yes! We have comprehensive courses taught by industry experts, live webinars, and trading guides."
  },
  {
    id: 4,
    question: "What are your trading fees?",
    answer: "We offer competitive fees starting from 0.1% for makers and 0.15% for takers with volume discounts."
  },
  {
    id: 5,
    question: "How fast are deposits and withdrawals?",
    answer: "Deposits are processed within 1-3 confirmations. Withdrawals are instant for most cryptocurrencies."
  },
  {
    id: 6,
    question: "Can I access market insights?",
    answer: "Absolutely! Our experts provide daily market insights, technical analysis, and trend predictions."
  }
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