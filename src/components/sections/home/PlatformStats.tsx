'use client';

import { CardSpotlight } from '@/components/ui/card-spotlight';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  Brain, 
  Server, 
  ShoppingCart, 
  Package, 
  Zap, 
  Target, 
  DollarSign, 
  Code, 
  Palette, 
  Wrench, 
  Settings, 
  Cloud, 
  Heart, 
  Factory, 
  Network, 
  Shield, 
  Megaphone, 
  ArrowUpRight, 
  Handshake, 
  UserCheck, 
  MessageSquare, 
  Mic, 
  Sparkles,
  type LucideIcon
} from 'lucide-react';

const services = [
  { 
    title: "Trading Hub", 
    description: "Advanced trading platform with AI-powered signals and mentorship.",
    icon: TrendingUp,
    steps: [
      { text: "Trading Signals (3 free, then paid)", icon: TrendingUp },
      { text: "Mentorship for Traders", icon: Users },
      { text: "AI-Powered Market Analysis", icon: Brain },
      { text: "ChatAI & Generative AI", icon: MessageSquare },
      { text: "Voice AI & NLP", icon: Mic },
      { text: "Zero Down Time Infrastructure", icon: Server }
    ],
    note: "Professional trading tools with AI-driven insights and expert guidance."
  },
  { 
    title: "Ecom Launchpad", 
    description: "Complete e-commerce ecosystem with courses and development support.",
    icon: ShoppingCart,
    steps: [
      { text: "E-commerce Courses", icon: ShoppingCart },
      { text: "Dropshipping & Dropservicing", icon: Package },
      { text: "Affiliate Marketing", icon: Target },
      { text: "SaaS Development", icon: Zap },
      { text: "Application Development", icon: Code },
      { text: "Beautiful UI/UX Design", icon: Palette },
      { text: "Tech Stack Support", icon: Wrench }
    ],
    note: "Everything you need to launch and scale your e-commerce business."
  },
  { 
    title: "Services", 
    description: "Enterprise solutions and cutting-edge technology services.",
    icon: Settings,
    steps: [
      { text: "ERP Solutions", icon: Settings },
      { text: "DevOps Services", icon: Cloud },
      { text: "Health Care Solutions", icon: Heart },
      { text: "Manufacturing Industry Support", icon: Factory },
      { text: "Micro-services Architecture", icon: Network },
      { text: "Voice AI & Generative AI", icon: Sparkles },
      { text: "Natural Language Processing", icon: MessageSquare },
      { text: "Secured Network Security", icon: Shield },
      { text: "Digital & Inbound Marketing", icon: Megaphone }
    ],
    note: "Comprehensive enterprise solutions with advanced AI technologies."
  },
  { 
    title: "Fundraiser", 
    description: "Connect startups with investors and provide mentorship support.",
    icon: DollarSign,
    steps: [
      { text: "Raise Funds for Startups & Businesses", icon: ArrowUpRight },
      { text: "Connect with Investors", icon: Handshake },
      { text: "Mentor Support & Guidance", icon: UserCheck }
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
  <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent mb-6">
    Learn, Build, and Trade<br/> with Confidence
  </h2>
  <p className="text-xl text-gray-300">
    Explore our <span className="text-white font-semibold">Trading Hub</span>, launch your dream venture with <span className="text-white font-semibold">Ecom Launchpad</span>, 
    grow with powerful <span className="text-white font-semibold">Services</span>, and secure funding through our <span className="text-white font-semibold">Fundraiser</span> platform.
  </p>
</motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}

            >
              <CardSpotlight className="h-full w-full p-6">
                <div className="relative z-20 h-full flex flex-col">
                  <div className="mb-4">
                    <service.icon className="h-10 w-10 text-blue-400" />
                  </div>
                  <p className="text-xl font-bold relative z-20 mt-2 text-white">
                    {service.title}
                  </p>
                  <div className="text-neutral-200 mt-4 relative z-20">
                    {service.description}
                    <ul className="list-none mt-4 space-y-2">
                      {service.steps.map((step, stepIndex) => (
                        <Step key={stepIndex} title={step.text} icon={step.icon} />
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


 
const Step = ({ title, icon: Icon }: { title: string; icon: LucideIcon }) => {
  return (
    <li className="flex gap-3 items-start">
      <Icon className="h-4 w-4 text-blue-400 mt-1 shrink-0" />
      <p className="text-white text-sm">{title}</p>
    </li>
  );
};




