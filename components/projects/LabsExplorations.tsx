"use client";

import { motion } from "motion/react";
import { Cpu, Target, Layers, Workflow, Code, Zap } from "lucide-react";

export default function LabsExplorations() {
  const explorations = [
    { title: "Arch Exploration 01", icon: Cpu },
    { title: "UI Prototype 04", icon: Workflow },
    { title: "Motion Lab 02", icon: Zap },
    { title: "State Engine 01", icon: Layers },
    { title: "Product Lab 03", icon: Target },
    { title: "Design Lab 01", icon: Code },
  ];

  return (
    <section className="py-24 md:py-40 px-4 bg-black/40">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight uppercase tracking-[0.2em]">The Labs</h2>
          <p className="text-white/40 max-w-2xl mx-auto text-sm">Visual experiments and architectural prototypes exploring the boundaries of modern frontend engineering.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {explorations.map((lab, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, scale: 1.05 }}
              className="aspect-square rounded-3xl glass-panel border border-white/5 bg-white/[0.01] flex flex-col items-center justify-center gap-4 group transition-all duration-500 hover:border-rose-500/30"
            >
              <div className="p-4 rounded-2xl bg-rose-500/5 text-rose-500/40 group-hover:text-rose-400 group-hover:bg-rose-500/10 transition-all">
                <lab.icon size={24} />
              </div>
              <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest group-hover:text-white/60 transition-colors">
                {lab.title}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
