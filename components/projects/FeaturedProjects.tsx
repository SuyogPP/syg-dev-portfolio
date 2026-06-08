"use client";

import { motion } from "motion/react";
import { PROJECTS } from "@/data/projects";
import { Code, ArrowUpRight, Heart, Sparkles, History, Stars } from "lucide-react";
import Link from "next/link";

export default function FeaturedProjects() {
  const project = PROJECTS[0]; // CoupleOS is the only one
  if (!project) return null;

  return (
    <section className="py-24 md:py-48 px-4 overflow-hidden relative">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-pink-500/5 blur-[200px] rounded-full pointer-events-none" />
      
      <div className="container max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-center"
        >
          {/* Project Content */}
          <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-[10px] font-bold uppercase tracking-[0.3em]">
                {project.category}
              </div>
              <div className="text-[10px] font-bold text-white/20 uppercase tracking-[0.3em]">
                Featured Independent Build
              </div>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-6xl md:text-8xl font-bold text-white mb-10 tracking-tighter leading-[0.9]"
            >
              Couple<span className="bg-gradient-to-r from-pink-400 via-rose-400 to-indigo-400 bg-clip-text text-transparent">OS</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-white/50 mb-12 leading-relaxed font-medium max-w-xl"
            >
              {project.description}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="p-8 rounded-[2.5rem] glass-panel border border-white/5 bg-white/[0.02] mb-12 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <p className="text-lg text-white/70 leading-relaxed italic relative z-10">
                &quot;{project.summary}&quot;
              </p>
            </motion.div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-16">
              {project.tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] text-white/30 font-bold uppercase tracking-widest">
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-8">
              <Link
                href="/projects/couple-os"
                className="group/btn flex items-center gap-4 px-12 py-6 bg-white text-black rounded-full font-bold hover:scale-105 transition-all duration-500 shadow-[0_0_50px_rgba(255,255,255,0.1)]"
              >
                Explore Project
                <ArrowUpRight size={22} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </Link>
              <Link
                href="/projects/couple-os#architecture"
                className="group/btn flex items-center gap-4 px-12 py-6 glass-panel border border-white/10 text-white rounded-full font-bold hover:bg-white/5 transition-all duration-500"
              >
                View Architecture
              </Link>
            </div>
          </div>

          {/* Immersive Visual Showcase */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative aspect-square lg:aspect-[4/5] rounded-[4rem] overflow-hidden glass-panel border border-white/10 bg-white/[0.01] flex items-center justify-center p-16 group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(244,114,182,0.1),transparent_70%)] opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
              
              {/* Floating UI Fragments & Memory Particles */}
              <div className="absolute inset-0 overflow-hidden">
                {[Heart, Sparkles, History, Stars].map((Icon, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      y: [-20, 20, -20],
                      x: [-10, 10, -10],
                      opacity: [0.1, 0.3, 0.1]
                    }}
                    transition={{ 
                      duration: 6 + i, 
                      repeat: Infinity, 
                      delay: i * 0.8,
                      ease: "easeInOut"
                    }}
                    className="absolute"
                    style={{ 
                      left: `${20 + i * 20}%`, 
                      top: `${15 + i * 15}%` 
                    }}
                  >
                    <Icon className="w-12 h-12 text-pink-400/20 blur-[1px]" />
                  </motion.div>
                ))}
              </div>

              {/* Central Core Visual */}
              <div className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-16">
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  className="p-12 md:p-16 rounded-[3.5rem] glass-panel border border-white/10 bg-black/60 shadow-2xl relative group/core"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-indigo-500/20 blur-2xl opacity-50 group-hover/core:opacity-100 transition-opacity duration-700" />
                  <project.icon className="w-24 h-24 md:w-32 md:h-32 text-pink-400 relative z-10" />
                  
                  <div className="absolute -top-6 -right-6 w-16 h-16 rounded-3xl bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30 backdrop-blur-xl">
                    <Code className="w-8 h-8 text-indigo-400" />
                  </div>
                </motion.div>
                
                {/* Tech Stack Chips */}
                <div className="flex flex-wrap justify-center gap-4">
                  {project.tech.map((t, j) => (
                    <motion.span 
                      key={j}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + j * 0.1 }}
                      className="px-5 py-2 rounded-xl bg-white/5 border border-white/5 text-xs text-white/40 font-mono tracking-wider"
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Subtle Timeline Visual */}
              <div className="absolute bottom-12 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent">
                <motion.div
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-24 h-full bg-gradient-to-r from-transparent via-pink-500/40 to-transparent"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
