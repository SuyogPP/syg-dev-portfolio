"use client";

import { motion } from "motion/react";
import { Zap, Activity, Box } from "lucide-react";
import SectionHeading from "../case-studies/SectionHeading";

export default function ExperimentalBuilds() {
  const experiments = [
    { title: "Motion System 2.0", icon: Zap, desc: "High-performance animation pipelines for immersive UI storytelling." },
    { title: "Realtime WebSocket Hub", icon: Activity, desc: "Event-driven architecture experiments with zero-latency state sync." },
    { title: "Glassmorphism UI Kit", icon: Box, desc: "Next-gen surface architecture with dynamic blur and lighting." },
  ];

  return (
    <section className="py-24 md:py-40 px-4 bg-black/20 overflow-hidden">
      <div className="container max-w-7xl mx-auto">
        <SectionHeading 
          label="The Lab"
          title="Experimental Builds"
          subtitle="Interaction experiments, animation systems, and realtime architectural concepts."
          align="center"
        />

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiments.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[2.5rem] glass-panel border border-white/5 bg-white/[0.01] group hover:border-indigo-500/30 transition-all duration-500 overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <exp.icon size={24} className="text-indigo-400" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{exp.title}</h4>
                <p className="text-sm text-white/50 leading-relaxed">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
