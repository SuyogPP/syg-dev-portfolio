"use client";

import { motion } from "motion/react";
import { Heart, Sparkles, Stars, History } from "lucide-react";
import AnimatedGrid from "@/components/case-studies/AnimatedGrid";

export default function CoupleOSHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-4 overflow-hidden bg-background">
      <AnimatedGrid />
      
      {/* Floating Memory Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.2, 1],
              x: ["0px", `${(i % 2 === 0 ? 1 : -1) * 40}px`, "0px"],
              y: ["0px", `${(i % 3 === 0 ? 1 : -1) * 60}px`, "0px"]
            }}
            transition={{ 
              duration: 10 + i, 
              repeat: Infinity, 
              delay: i * 0.8,
              ease: "easeInOut"
            }}
            className="absolute"
            style={{ 
              left: `${Math.random() * 100}%`, 
              top: `${Math.random() * 100}%`,
            }}
          >
            <div className="p-4 rounded-full glass-panel border border-white/10 bg-rose-500/5 blur-[2px]">
              {i % 3 === 0 ? <Heart className="w-4 h-4 text-pink-400/30" /> : <Sparkles className="w-4 h-4 text-rose-400/30" />}
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
          <div className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40">
            Emotional Ecosystem
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tighter text-white"
        >
          Couple<span className="text-gradient from-rose-400 via-red-500 to-amber-400 bg-gradient-to-r bg-clip-text text-transparent">OS</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-2xl text-white/50 max-w-3xl mx-auto leading-relaxed font-medium mb-12"
        >
          An AI-powered emotional platform designed to preserve memories, milestones, and shared experiences through immersive storytelling and realtime interactions.
        </motion.p>

        {/* Timeline Hints */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex items-center justify-center gap-8 mt-12"
        >
          {[
            { Icon: History, label: "Preservation" },
            { Icon: Sparkles, label: "AI Assisted" },
            { Icon: Stars, label: "Atmospheric" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2 opacity-30 hover:opacity-100 transition-opacity duration-500">
              <item.Icon className="w-6 h-6 text-rose-400" />
              <span className="text-[10px] uppercase tracking-widest font-bold text-white/40">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Atmospheric Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-gradient-to-r from-red-500/10 via-pink-500/10 to-rose-500/10 blur-[180px] rounded-full pointer-events-none" />
    </section>
  );
}
