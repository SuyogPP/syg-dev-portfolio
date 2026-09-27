"use client";

import { motion } from "motion/react";
import AnimatedGrid from "../case-studies/AnimatedGrid";
import { Cpu, Layers, Terminal, Box } from "lucide-react";

export default function ResumeHero() {
  return (
    <section className="relative min-h-[60vh] flex flex-col items-center justify-center pt-32 pb-20 px-4 overflow-hidden bg-background">
      <AnimatedGrid />
      
      {/* Engineering Visuals */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        {[
          { Icon: Cpu, x: "10%", y: "20%" },
          { Icon: Layers, x: "85%", y: "30%" },
          { Icon: Terminal, x: "15%", y: "70%" },
          { Icon: Box, x: "80%", y: "75%" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: i * 0.5 }}
            className="absolute"
            style={{ left: item.x, top: item.y }}
          >
            <item.Icon className="w-24 h-24 text-rose-500/30" />
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
            Professional Profile
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tighter text-white"
        >
          Resu<span className="text-gradient">me</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-2xl text-white/50 max-w-3xl mx-auto leading-relaxed font-medium"
        >
          Senior frontend engineer focused on enterprise systems, immersive experiences, scalable architectures, and production-grade operational platforms.
        </motion.p>
      </div>

      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-rose-500/10 blur-[150px] rounded-full pointer-events-none" />
    </section>
  );
}
