"use client";

import { motion } from "motion/react";
import { TechItem } from "@/data/caseStudies";

export default function TechStackSection({ techStack }: { techStack: TechItem[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
      {techStack.map((tech, i) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.5, 
            delay: i * 0.05,
            type: "spring",
            stiffness: 100
          }}
          whileHover={{ 
            scale: 1.1,
            rotate: i % 2 === 0 ? 2 : -2,
          }}
          className="glass-panel px-6 py-3 rounded-full flex items-center gap-3 cursor-default group border-white/5"
        >
          <div className="w-2 h-2 rounded-full bg-indigo-500 group-hover:animate-pulse" />
          <div className="flex flex-col">
            <span className="text-sm font-bold text-white tracking-tight">
              {tech.name}
            </span>
            <span className="text-[8px] uppercase tracking-widest text-white/40">
              {tech.category}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
