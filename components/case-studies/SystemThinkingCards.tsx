"use client";

import { motion } from "motion/react";
import { Principle } from "@/data/caseStudies";

export default function SystemThinkingCards({ principles }: { principles: Principle[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {principles.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: i * 0.1 }}
          className="group p-8 rounded-[2rem] glass-panel border border-white/5 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10 text-left">
            <div className="p-4 rounded-2xl bg-white/5 w-fit mb-8 group-hover:scale-110 transition-transform duration-500">
              <item.icon className="w-8 h-8 text-rose-400" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
            <p className="text-xs uppercase tracking-widest text-rose-400/60 font-bold mb-6">
              {item.philosophy}
            </p>
            
            <p className="text-sm text-white/60 leading-relaxed mb-8">
              {item.description}
            </p>
            
            <div className="pt-6 border-t border-white/5">
              <p className="text-[10px] italic text-white/40 font-mono">
                {"// "} {item.mindset}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
