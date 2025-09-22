'use client';

import { CardSpotlight } from '@/components/ui/card-spotlight';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const services = [
  { 
    title: "Portfolio Management", 
    description: "Follow these steps to optimize your investments:",
    icon: "📊",
    steps: [
      "Connect your trading accounts",
      "Set investment goals and risk tolerance",
      "Enable automated rebalancing",
      "Monitor performance metrics"
    ],
    note: "Advanced portfolio tracking helps you maintain optimal asset allocation across multiple investments."
  },
  { 
    title: "Market Analysis", 
    description: "Follow these steps to analyze the market:",
    icon: "📈",
    steps: [
      "Access real-time market data",
      "Review technical indicators",
      "Read comprehensive research reports",
      "Set up custom alerts"
    ],
    note: "Stay informed with professional-grade market insights and technical analysis tools."
  },
  { 
    title: "Trading Signals", 
    description: "Follow these steps to use trading signals:",
    icon: "🎯",
    steps: [
      "Configure signal preferences",
      "Review AI-powered recommendations",
      "Set up automated alerts",
      "Execute trades with confidence"
    ],
    note: "AI-powered signals help you identify profitable opportunities in volatile markets."
  },
  { 
    title: "Authentication Steps", 
    description: "Follow these steps to secure your account:",
    icon: "🔐",
    steps: [
      "Enter your email address",
      "Create a strong password",
      "Set up two-factor authentication",
      "Verify your identity"
    ],
    note: "Ensuring your account is properly secured helps protect your personal information and data."
  }
];

export default function PlatformStats() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
         <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent mb-6">
          Redefining the future of investing solutions
          </h2>
          <p className="text-xl text-gray-300">Join a growing community of successful crypto traders and investors</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${
                (Math.floor(index / 2) % 2 === 0) 
                  ? (index % 2 === 0 ? 'md:col-span-1' : 'md:col-span-2')
                  : (index % 2 === 0 ? 'md:col-span-2' : 'md:col-span-1')
              }`}
            >
              <CardSpotlight className="h-84 w-full p-6">
                <div className="relative z-20 h-full flex flex-col">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <p className="text-xl font-bold relative z-20 mt-2 text-white">
                    {service.title}
                  </p>
                  <div className="text-neutral-200 mt-4 relative z-20">
                    {service.description}
                    <ul className="list-none mt-2">
                   {service.steps.map((step, stepIndex) => (
                        <Step key={stepIndex} title={step} />
                      ))}
                       </ul>
                    <p className="text-neutral-300 mt-4 relative z-20 text-sm">
                      {service.note}
                    </p>
                  </div>
                </div>
              </CardSpotlight>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}


 
const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <Check className="h-4 w-4 text-blue-500 mt-1 shrink-0" />
      <p className="text-white">{title}</p>
    </li>
  );
};




