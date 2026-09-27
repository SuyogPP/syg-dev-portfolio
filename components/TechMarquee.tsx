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
    <div className="relative py-8 md:py-12 flex overflow-hidden bg-black/40 border-y border-rose-500/10">
      {/* Subtle hairline accent on top border */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-rose-500/20 to-transparent pointer-events-none" />

      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-36 bg-gradient-to-r from-[#000000] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-36 bg-gradient-to-l from-[#000000] to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex whitespace-nowrap items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 32,
          ease: "linear",
          repeat: Infinity,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ animationPlayState: isHovered ? "paused" : "running" }}
      >
        {scrollItems.map((tech, index) => (
          <div key={index} className="flex items-center group cursor-default">
            <span className="text-2xl md:text-5xl font-bold tracking-widest px-4 md:px-8 text-white/15 transition-colors duration-300 group-hover:text-rose-300/70">
              {tech}
            </span>
            <span className="text-rose-500/30 text-xs md:text-sm transition-colors duration-300 group-hover:text-rose-400/60">
              ✦
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
