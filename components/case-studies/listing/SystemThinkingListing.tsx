"use client";

import { motion } from "motion/react";
import { Scale, ShieldCheck, Settings } from "lucide-react";
import SectionHeading from "../SectionHeading";

export default function SystemThinkingListing() {
  const approaches = [
    {
      title: "Scalability",
      icon: Scale,
      label: "Growth Architecture",
      desc: "Architecting frontend systems that handle growth—not just in data volume, but in state complexity and organizational scale.",
      quote: "Performance is a foundational feature, not an afterthought."
    },
    {
      title: "Operational Reliability",
      icon: ShieldCheck,
      label: "Production Resilience",
      desc: "Implementing robust error boundaries, defensive state management, and real-time monitoring for critical enterprise workflows.",
      quote: "Reliability is built through defensive engineering."
    },
    {
      title: "Maintainability",
      icon: Settings,
      label: "Modular Engineering",
      desc: "Ensuring codebases remain evolvable through strict prop typing, component encapsulation, and architectural documentation.",
      quote: "Build for the developer who comes after you."
    }
  ];

  return (
    <section className="py-24 md:py-40 px-4 relative">
      <div className="container max-w-7xl mx-auto">
        <SectionHeading 
          label="Philosophy"
          title="How I Approach Systems"
          align="center"
        />

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {approaches.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="p-10 rounded-[3rem] glass-panel border border-white/5 bg-black/40 hover:bg-white/[0.02] transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="p-4 rounded-2xl bg-indigo-500/10 w-fit mb-8 group-hover:scale-110 transition-transform duration-500">
                  <item.icon className="w-8 h-8 text-indigo-400" />
                </div>
                
                <div className="text-[10px] text-indigo-400 font-bold uppercase tracking-[0.2em] mb-2">
                  {item.label}
                </div>
                <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">
                  {item.title}
                </h3>
                
                <p className="text-sm text-white/50 leading-relaxed mb-10">
                  {item.desc}
                </p>
                
                <div className="pt-6 border-t border-white/5">
                  <p className="text-[10px] text-white/30 italic uppercase tracking-wider">
                    &quot;{item.quote}&quot;
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
