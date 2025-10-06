'use client';

import { CardSpotlight } from '@/components/ui/card-spotlight';
import { motion } from 'framer-motion';
import { 
  TrendingUp, BarChart3, Users, Brain, Layers, LineChart,
  ShoppingCart, Store, Target, Laptop, Video, Headphones, Rocket,
  Settings, Cpu, Shield, Bot, Network, Grid, Globe,
  DollarSign, ArrowUpRight, Handshake, UserCheck, FileText, Star,
  LucideIcon
} from "lucide-react";

const services = [
  { 
    title: "Trading Hub", 
    description: "Advanced trading platform with signals and mentorship.",
    icon: BarChart3,
    steps: [
      { text: "Trading Signals", icon: TrendingUp },
      { text: "Trader Mentorship", icon: Users },
      { text: "Market Analysis", icon: Brain },
      { text: "Strategy Backtesting", icon: Layers },
      { text: "Performance Tracking", icon: LineChart },
      { text: "Zero Down Time Infrastructure", icon: Shield },
    ],
    note: "Professional trading tools with AI-driven insights and expert guidance."
  },
  { 
    title: "Ecom Launchpad", 
    description: "Complete e-commerce ecosystem with courses and development support.",
    icon: ShoppingCart,
    steps: [
      { text: "Dropshipping & Dropservicing", icon: Store },
      { text: "Affiliate Marketing", icon: Target },
      { text: "SaaS Development", icon: Laptop },
      { text: "Real-Time Case Studies", icon: Video },
      { text: "Expert Support (24/7)", icon: Headphones },
      { text: "Funding Opportunities", icon: Rocket }
    ],
    note: "Everything you need to launch and scale your e-commerce business."
  },
  { 
    title: "Services", 
    description: "Enterprise solutions and cutting-edge technology services.",
    icon: Settings,
    steps: [
      { text: "ERP & DevOps Solutions", icon: Cpu },
      { text: "Healthcare & Manufacturing Tech", icon: Globe },
      { text: "Network Security & Resilience", icon: Shield },
      { text: "Voice AI & NLP", icon: Bot },
      { text: "Micro-Services Architecture", icon: Network },
      { text: "Digital & Inbound Marketing", icon: Grid },
    ],
    note: "Comprehensive enterprise solutions with advanced AI technologies."
  },
  { 
    title: "Fundraiser", 
    description: "Connect startups with investors and provide mentorship support.",
    icon: DollarSign,
    steps: [
      { text: "Raise Startup Funds", icon: ArrowUpRight },
      { text: "Connect with Investors", icon: Handshake },
      { text: "Mentor Support & Guidance", icon: UserCheck },
      { text: "Pitch Deck Review", icon: FileText },
      { text: "Global Exposure", icon: Star },
      { text: "Launch Campaign Assistance", icon: Rocket }
    ],
    note: "Bridge the gap between innovative ideas and investment opportunities."
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
  <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-white to-gray-900 bg-clip-text text-transparent mb-6">
    Learn, Build, and Trade<br/> with Confidence
  </h2>
  <p className="text-xl text-gray-300">
    Explore our <span className="text-white font-semibold">Trading Hub</span>, launch your dream venture with <span className="text-white font-semibold">Ecom Launchpad</span>, 
    grow with powerful <span className="text-white font-semibold">Services</span>, and secure funding through our <span className="text-white font-semibold">Fundraiser</span> platform.
  </p>
</motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <CardSpotlight className="h-full w-full p-8 hover:border-blue-500/50 transition-all duration-300">
                <div className="relative z-20 h-full flex flex-col">
                  {/* Icon with gradient background */}


                  {/* Title */}
                  <h3 className="text-2xl font-bold relative z-20 mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-300 text-sm mb-6 relative z-20 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Steps list */}
                  <ul className="list-none space-y-3 mb-6 flex-grow">
                    {service.steps.map((step, stepIndex) => (
                      <motion.li
                        key={stepIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + stepIndex * 0.05 }}
                      >
                        <Step title={step.text} icon={step.icon} />
                      </motion.li>
                    ))}
                  </ul>

                  {/* Note with accent border */}
                  <div className="relative z-20 mt-auto pt-4 border-t border-neutral-800 group-hover:border-blue-900/50 transition-colors duration-300">
                    <p className="text-neutral-400 text-xs leading-relaxed italic">
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


 
const Step = ({ title, icon: Icon }: { title: string; icon: LucideIcon }) => {
  return (
    <div className="flex gap-3 items-start group/step hover:translate-x-1 transition-transform duration-200">
      <div className="mt-0.5 p-1.5 rounded-md bg-blue-500/10 border border-blue-500/20 group-hover/step:bg-blue-500/20 group-hover/step:border-blue-400/40 transition-all duration-200">
        <Icon className="h-3.5 w-3.5 text-blue-400 group-hover/step:text-blue-300 transition-colors duration-200 shrink-0" />
      </div>
      <p className="text-neutral-200 text-sm leading-relaxed group-hover/step:text-white transition-colors duration-200">
        {title}
      </p>
    </div>
  );
};




