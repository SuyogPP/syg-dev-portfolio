"use client";

import { motion } from "motion/react";
import { useState } from "react";

const TECH_STACK = [
  "REACT", "NEXTJS", "TYPESCRIPT", "NODEJS", "MSSQL", 
  "AZURE", "DEVOPS", "TAILWIND", "REACT NATIVE", "SYSTEM DESIGN"
];

export default function TechMarquee() {
  const [isHovered, setIsHovered] = useState(false);

  // Duplicate array multiple times to ensure seamless scrolling
  const scrollItems = [...TECH_STACK, ...TECH_STACK, ...TECH_STACK, ...TECH_STACK];

  return (
    <div className="relative py-8 md:py-12 flex overflow-hidden bg-white/[0.01] border-y border-white/[0.05]">
      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex whitespace-nowrap items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ animationPlayState: isHovered ? "paused" : "running" }}
      >
        {scrollItems.map((tech, index) => (
          <div key={index} className="flex items-center">
            <span className="text-2xl md:text-5xl font-bold text-white/10 tracking-widest px-4 md:px-8 transition-colors duration-300 hover:text-white/40 cursor-default">
              {tech}
            </span>
            <span className="text-white/20 text-sm md:text-xl">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
