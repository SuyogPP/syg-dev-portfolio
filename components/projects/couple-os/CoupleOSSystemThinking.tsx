"use client";

import { motion } from "motion/react";
import { Heart, Activity, History } from "lucide-react";
import SectionHeading from "@/components/case-studies/SectionHeading";

export default function CoupleOSSystemThinking() {
  const cards = [
    {
      title: "Emotional UX",
      icon: Heart,
      desc: "Architecting interaction systems that prioritize sentiment over speed, creating a calm and resonant digital environment."
    },
    {
      title: "Realtime Sync",
      icon: Activity,
      desc: "Developing low-latency event synchronization that enables immediate emotional connection regardless of physical distance."
    },
    {
      title: "Storytelling Systems",
      icon: History,
      desc: "Building extensible timeline architectures that grow organically with the relationship history they preserve."
    }
  ];

  return (
    <section className="py-24 md:py-40 px-4 relative">
      <div className="container max-w-7xl mx-auto">
        <SectionHeading 
          label="Philosophy"
          title="Engineering Emotional Context"
          align="center"
        />

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="p-12 rounded-[3rem] glass-panel border border-white/5 bg-white/[0.01] group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-3xl bg-indigo-500/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <card.icon className="w-8 h-8 text-indigo-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{card.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed italic">&quot;{card.desc}&quot;</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
