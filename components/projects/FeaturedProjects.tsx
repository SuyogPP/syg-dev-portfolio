"use client";

import { motion } from "motion/react";
import { PROJECTS } from "@/data/projects";
import { Code, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function FeaturedProjects() {
  return (
    <section className="py-24 md:py-40 px-4">
      <div className="container max-w-7xl mx-auto space-y-32 md:space-y-48">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center`}
          >
            {/* Project Content */}
            <div className={`lg:col-span-6 flex flex-col justify-center ${i % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'}`}>
              <div className="flex items-center gap-3 mb-8">
                <div className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-bold uppercase tracking-widest">
                  {project.category}
                </div>
                <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest">
                  Personal Build
                </div>
              </div>

              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
                {project.title.split(" ").slice(0, -1).join(" ")} <span className="text-gradient">{project.title.split(" ").pop()}</span>
              </h2>

              <p className="text-lg md:text-xl text-white/50 mb-8 leading-relaxed font-medium">
                {project.description}
              </p>

              <div className="p-6 rounded-[2rem] glass-panel border border-white/5 bg-white/[0.02] mb-10">
                <p className="text-sm text-white/70 leading-relaxed italic">
                  &quot;{project.summary}&quot;
                </p>
              </div>

              {/* Engineering Highlights */}
              <div className="grid grid-cols-2 gap-6 mb-12 py-8 border-y border-white/5">
                {project.architectureHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-3 text-xs text-white/40 font-bold uppercase tracking-tight">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    {highlight}
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-6">
                {project.link && (
                  <Link
                    href={project.link}
                    target="_blank"
                    className="group/btn flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold hover:scale-105 transition-all duration-300"
                  >
                    View Project
                    <ArrowUpRight size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </Link>
                )}
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    className="group/btn flex items-center gap-3 px-8 py-4 glass-panel border border-white/10 text-white rounded-full font-bold hover:bg-white/5 transition-all duration-300"
                  >
                    <Code size={18} />
                    View GitHub
                  </Link>
                )}
              </div>
            </div>

            {/* Visual Preview */}
            <div className={`lg:col-span-6 relative ${i % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'}`}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-square md:aspect-video lg:aspect-square rounded-[3rem] overflow-hidden glass-panel border border-white/10 bg-white/[0.01] flex items-center justify-center p-12 group"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.05),transparent_70%)]" />
                
                {/* Immersive Architecture Visual */}
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-12">
                  <div className="p-8 rounded-[2.5rem] glass-panel border border-white/10 bg-black/60 shadow-2xl relative">
                    <project.icon className="w-16 h-16 text-indigo-400" />
                    <div className="absolute -top-4 -right-4 w-12 h-12 rounded-2xl bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
                      <Code className="w-6 h-6 text-indigo-400" />
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap justify-center gap-3">
                    {project.tech.map((t, j) => (
                      <span key={j} className="px-3 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] text-white/30 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Animated Particles */}
                {[...Array(6)].map((_, j) => (
                  <motion.div
                    key={j}
                    animate={{ 
                      y: [-20, 20, -20],
                      opacity: [0.1, 0.3, 0.1]
                    }}
                    transition={{ duration: 4 + j, repeat: Infinity, delay: j * 0.5 }}
                    className="absolute w-1 h-1 bg-white/20 rounded-full blur-[1px]"
                    style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
