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
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent mb-6">
            FAQ
          </h2>
          <p className="text-lg text-gray-400">
            Common questions about our platform
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item) => {
            const isOpen = openItems.includes(item.id);
            
            return (
              <div
                key={item.id}
                className="border border-gray-800 rounded-lg bg-gray-900/50 overflow-hidden"
              >
                {/* Question */}
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full p-6 text-left flex items-center justify-between transition-colors"
                >
                  <h3 className="text-lg font-medium text-white">
                    {item.question}
                  </h3>
                  
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 ml-4"
                  >
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-gray-300 pt-4">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;