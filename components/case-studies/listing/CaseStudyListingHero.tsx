"use client";

import { motion } from "motion/react";
import AnimatedGrid from "../AnimatedGrid";
import { Cpu, Network, Layers } from "lucide-react";

export default function CaseStudyListingHero() {
  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center pt-32 pb-20 px-4 overflow-hidden bg-background">
      <AnimatedGrid />
      
      {/* Floating Engineering Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { Icon: Cpu, x: "15%", y: "25%", delay: 0 },
          { Icon: Network, x: "85%", y: "40%", delay: 0.5 },
          { Icon: Layers, x: "20%", y: "65%", delay: 1 },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.1, 1],
              y: ["0px", "-20px", "0px"]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              delay: item.delay,
              ease: "easeInOut"
            }}
            className="absolute hidden lg:block"
            style={{ left: item.x, top: item.y }}
          >
            <div className="p-4 rounded-2xl glass-panel border border-white/10 bg-rose-500/5">
              <item.Icon className="w-8 h-8 text-rose-400" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="container relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40">
            Showcase Index
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tighter text-white"
        >
          Case <span className="text-gradient">Studies</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-2xl text-white/50 max-w-3xl mx-auto leading-relaxed font-medium"
        >
          Enterprise systems, operational platforms, scalable workflows, and production engineering experiences.
        </motion.p>
      </div>

      {/* Decorative topology line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
