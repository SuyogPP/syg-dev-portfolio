"use client";

import { motion } from "motion/react";
import { Challenge } from "@/data/caseStudies";

export default function ChallengeCards({ challenges }: { challenges: Challenge[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {challenges.map((challenge, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          whileHover={{ y: -5 }}
          className="glass-panel p-8 rounded-[2rem] border border-white/5 hover:border-white/20 transition-all flex flex-col gap-6 group"
        >
          <div className="flex items-center justify-between">
            <div className="p-3 rounded-2xl bg-white/5 group-hover:bg-indigo-500/10 transition-colors">
              <challenge.icon className="w-6 h-6 text-indigo-400" />
            </div>
            <span className="text-[10px] font-mono text-white/20">0{i + 1}</span>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-3">
              {challenge.title}
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1 font-bold">The Problem</p>
                <p className="text-sm text-white/70 leading-relaxed italic">
                  &quot;{challenge.problem}&quot;
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-indigo-400/60 mb-1 font-bold">The Solution</p>
                <p className="text-sm text-white/90 leading-relaxed">
                  {challenge.solution}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-auto pt-6 border-t border-white/5">
            <p className="text-[10px] font-mono text-white/30 uppercase tracking-tighter">
              {challenge.technical}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
