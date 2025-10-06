'use client';

import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { TrendingUp, Shield, Users, Award, BarChart3, DollarSign } from 'lucide-react';
import { EvervaultCard, Icon } from '@/components/ui/evervault-card';
import PaymentModal from '@/components/ui/PaymentModal';


const TrustedBy = () => {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  return (
      <section className=" px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center "
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent mb-6">
          Trusted by the best brands in the world
          </h2>
              </motion.div>
                  {/* Stats Section */}
   

      {/* Features Grid */}


    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto my-12">
      {/* Free User Card */}
      <div className="border border-white/[0.2] flex flex-col p-6 relative rounded-lg bg-black/20 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
        <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white " />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white " />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white " />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white " />
   

        <h2 className="text-white text-xl font-bold mb-2">
          Free Plan
        </h2>
        <p className="text-gray-400 text-sm mb-6">
          Perfect for getting started with trading
        </p>
        
        <div className="flex-1 space-y-3 mb-8">
          <div className="flex items-center gap-3 text-sm text-gray-300 ">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Basic trading signals</span>
              </div>
              <div className="flex items-center gap-3 text-sm ßtext-gray-300 ">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>1 Trading signal everyday</span>
          </div>
          <div className="flex items-center gap-3 text-sm ßtext-gray-300 ">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Limited market analysis</span>
          </div>
          <div className="flex items-center gap-3 text-sm ßtext-gray-300 ">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Community access</span>
          </div>
          <div className="flex items-center gap-3 text-sm ßtext-gray-300 ">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Email support</span>
          </div>
        </div>
         <a
              href="https://discord.com/invite/hangoutcodex"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex h-16 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black group"
            >
        <button className="w-full cursor-pointer py-3 px-6 border  border-white/[0.2] rounded-lg text-white font-medium hover:bg-white/5 transition-colors">
          Get Started For Free
              </button>
              </a>
      </div>

      {/* Pro User Card */}
      <div className="border-2 border-yellow-400/[0.5] flex flex-col p-6 relative  rounded-lg bg-gradient-to-br from-yellow-50/10 to-orange-50/10 backdrop-blur-sm hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-300 transform hover:-translate-y-1">
        <Icon className="absolute h-6 w-6 -top-3 -left-3 text-yellow-500" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-yellow-500" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 text-yellow-500" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-yellow-500" />
        
        {/* Popular Badge */}
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          MOST POPULAR
        </div>
   
   
        <h2 className="text-white text-xl font-bold mb-2 flex items-center gap-2">
          Pro Plan
          <Award className="h-5 w-5 text-yellow-500" />
        </h2>
        <p className="text-gray-400 text-sm mb-6">
          Advanced tools for serious traders
        </p>
        
        <div className="flex-1 space-y-3 mb-8">
          <div className="flex items-center gap-3 text-sm text-gray-300 ">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <span>Multiple trading signals everyday</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-300 ">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <span>Real-time market analysis</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-300 ">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <span>Priority support & alerts</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-300 ">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <span>Exclusive trading strategies</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-300 ">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <span>Portfolio optimization tools</span>
          </div>
        </div>
        
        <button 
          onClick={() => setIsPaymentModalOpen(true)}
          className="w-full cursor-pointer py-3 px-6 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Upgrade to Pro
        </button>
      </div>
    </div>
        
      {/* Payment Modal */}
      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        planName="Pro Plan"
        amount="49.99"
        currency="USD"
      />
     
      </div>
    </section>
  )
}

export default TrustedBy