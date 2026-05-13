"use client";

import { motion } from "motion/react";

export default function PhilosophyMarquee() {
  const items = [
    "Frontend Architecture",
    "Product Thinking",
    "Realtime Systems",
    "UX Engineering",
    "Design Systems",
    "Interactive Experiences",
    "Performance Engineering",
    "Motion Systems",
    "AI-Powered Workflows"
  ];

  return (
    <div className="py-12 relative overflow-hidden border-y border-white/5 bg-black/20">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none" />
      
      <motion.div
        animate={{ x: [0, -1200] }}
        transition={{ 
          duration: 40, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="flex whitespace-nowrap gap-16 items-center"
      >
        {[...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-16">
            <span className="text-xl md:text-2xl font-bold text-white/20 uppercase tracking-[0.2em] hover:text-indigo-500/50 transition-colors duration-500 cursor-default">
              {item}
            </span>
            <div className="w-2 h-2 rounded-full bg-indigo-500/30" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
