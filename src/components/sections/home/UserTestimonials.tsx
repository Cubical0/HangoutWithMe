'use client';

import { GlowingEffect } from "@/components/ui/glowing-effect";
import { motion } from 'framer-motion';
import { Shield, TrendingUp, BookOpen, Users, Star, Zap } from "lucide-react";

export default function UserTestimonials() {
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
            Powerful features built for
            <br/>crypto confidence
          </h2>
          <p className="text-xl text-gray-300">Streamline your experience with tools designed to keep you secure,<br/> informed, and in control every step of the way.</p>
        </motion.div>
        
        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
          <GridItem 
            area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]" 
            icon={<Shield className="h-4 w-4 text-black dark:text-neutral-400" />} 
            title="Secure Trading Platform" 
            description="This platform transformed my trading strategy. The tools are incredibly powerful and easy to use." 
            author="Sarah Johnson"
            role="Professional Trader"
          />
          <GridItem 
            area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]" 
            icon={<BookOpen className="h-4 w-4 text-black dark:text-neutral-400" />} 
            title="Educational Excellence" 
            description="The educational content is top-notch. I went from beginner to confident trader in just 3 months." 
            author="Mike Chen"
            role="Crypto Investor"
          />
          <GridItem 
            area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]" 
            icon={<TrendingUp className="h-4 w-4 text-black dark:text-neutral-400" />} 
            title="Market Intelligence" 
            description="Best platform for staying updated with market trends and making informed decisions." 
            author="Alex Rodriguez"
            role="DeFi Enthusiast"
          />
          <GridItem 
            area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]" 
            icon={<Users className="h-4 w-4 text-black dark:text-neutral-400" />} 
            title="Community Driven" 
            description="The community support and insights have been invaluable for my trading journey." 
            author="Emma Davis"
            role="Retail Trader"
          />
          <GridItem 
            area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]" 
            icon={<Zap className="h-4 w-4 text-black dark:text-neutral-400" />} 
            title="Lightning Fast Execution" 
            description="The speed and reliability of trade execution gives me the edge I need in volatile markets." 
            author="James Wilson"
            role="Day Trader"
          />
        </ul>
      </div>
    </section>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  author: string;
  role: string;
}

const GridItem = ({ area, icon, title, description, author, role }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect 
          spread={40} 
          glow={true} 
          disabled={false} 
          proximity={64} 
          inactiveZone={0.01} 
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <p className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 italic">
                "{description}"
              </p>
              <div className="flex items-center gap-2 pt-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-sm text-neutral-500">
                  <span className="font-medium text-neutral-300">{author}</span> - {role}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};