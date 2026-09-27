"use client";

import { motion } from "motion/react";
import AnimatedGrid from "../case-studies/AnimatedGrid";
import { Sparkles, Code, Layout, Cpu } from "lucide-react";

export default function ProjectsHero() {
  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center pt-32 pb-20 px-4 overflow-hidden bg-background">
      <AnimatedGrid />
      
      {/* Floating UI Fragments */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { Icon: Sparkles, x: "10%", y: "30%", delay: 0 },
          { Icon: Code, x: "80%", y: "20%", delay: 0.5 },
          { Icon: Layout, x: "15%", y: "70%", delay: 1 },
          { Icon: Cpu, x: "85%", y: "65%", delay: 1.5 },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.1, 1],
              y: ["0px", "-30px", "0px"]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              delay: item.delay,
              ease: "easeInOut"
            }}
            className="absolute hidden lg:block"
            style={{ left: item.x, top: item.y }}
          >
            <div className="p-5 rounded-3xl glass-panel border border-white/10 bg-rose-500/5 shadow-2xl">
              <item.Icon className="w-10 h-10 text-rose-400" />
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
          <div className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40">
            Independent Engineering
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tighter text-white"
        >
          Projects & <span className="text-gradient">Experiments</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-2xl text-white/50 max-w-3xl mx-auto leading-relaxed font-medium"
        >
          Independent engineering explorations focused on immersive experiences, realtime systems, emotional UX, and modern frontend architecture.
        </motion.p>
      </div>

      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-rose-500/10 blur-[150px] rounded-full pointer-events-none" />
    </section>
  );
}
