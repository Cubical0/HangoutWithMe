"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Build lamps <br /> the right way
      </motion.h1>
    </LampContainer>
  );
}

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex min-h-[60vh] flex-col items-center justify-center overflow-hidden bg-black w-full rounded-md",
        className
      )}
    >
      {/* Lamp Effects Section */}
      <div className="flex flex-col items-center justify-center w-full flex-1">
        {/* Top spacer */}
        <div className="flex-1 min-h-[2rem]" />
        
        {/* Main lamp visual container */}
        <div className="flex items-center justify-center w-full h-56 scale-y-125">
          {/* Left conic gradient */}
          <motion.div
            initial={{ opacity: 0.5, width: "15rem" }}
            whileInView={{ opacity: 1, width: "30rem" }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            style={{
              backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            }}
            className="flex h-56 overflow-visible w-[30rem] bg-gradient-conic from-purple-950 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top] opacity-60 -mr-60"
          >
            <div className="w-[100%] bg-black h-40 mt-auto [mask-image:linear-gradient(to_top,white,transparent)]" />
            <div className="w-40 h-[100%] bg-black [mask-image:linear-gradient(to_right,white,transparent)]" />
          </motion.div>
          
          {/* Right conic gradient */}
          <motion.div
            initial={{ opacity: 0.5, width: "15rem" }}
            whileInView={{ opacity: 1, width: "30rem" }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            style={{
              backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            }}
            className="flex h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-purple-950 text-white [--conic-position:from_290deg_at_center_top] opacity-60 -ml-60"
          >
            <div className="w-40 h-[100%] bg-black ml-auto [mask-image:linear-gradient(to_left,white,transparent)]" />
            <div className="w-[100%] bg-black h-40 mt-auto [mask-image:linear-gradient(to_top,white,transparent)]" />
          </motion.div>
        </div>
        
        {/* Layered blur effects */}
        <div className="flex items-center justify-center w-full -mt-32">
          <div className="h-48 w-full scale-x-150 bg-black blur-2xl"></div>
        </div>
        
        <div className="flex items-center justify-center w-full -mt-48">
          <div className="h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        </div>
        
        <div className="flex items-center justify-center w-full -mt-24">
          <div className="h-36 w-[28rem] rounded-full bg-purple-900 opacity-20 blur-3xl"></div>
        </div>
        
        <div className="flex items-center justify-center w-full -mt-36">
          <motion.div
            initial={{ width: "8rem" }}
            whileInView={{ width: "16rem" }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="h-36 w-64 rounded-full bg-purple-700 blur-2xl"
          ></motion.div>
        </div>
        
        <div className="flex items-center justify-center w-full -mt-20">
          <motion.div
            initial={{ width: "15rem" }}
            whileInView={{ width: "30rem" }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="h-0.5 w-[30rem] bg-purple-700"
          ></motion.div>
        </div>
        
        <div className="flex items-center justify-center w-full -mt-1">
          <div className="h-44 w-full bg-black"></div>
        </div>
        
        {/* Bottom spacer */}
        <div className="flex-1 min-h-[1rem]" />
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center px-5 pb-8">
        {children}
      </div>
    </div>
  );
};
