"use client";

import { motion } from "motion/react";
import SectionHeading from "@/components/case-studies/SectionHeading";
import { Server, Database, Zap, Cpu } from "lucide-react";

export default function CoupleOSArchitecture() {
  const specs = [
    { label: "Frontend", value: "Next.js 15 (App Router)" },
    { label: "Realtime", value: "Supabase Realtime" },
    { label: "Intelligence", value: "OpenAI GPT-4o" },
    { label: "State", value: "Zustand Persistence" }
  ];

  return (
    <section className="py-24 md:py-40 px-4 relative bg-black/40">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <SectionHeading 
            label="Under the Hood"
            title="Emotional Infrastructure"
            align="center"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Tech Stack Column */}
          <div className="lg:col-span-4 space-y-6">
            {specs.map((spec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl glass-panel border border-white/5 bg-white/[0.01] flex items-center justify-between"
              >
                <div className="text-[10px] uppercase tracking-widest font-bold text-white/30">{spec.label}</div>
                <div className="text-sm font-bold text-white">{spec.value}</div>
              </motion.div>
            ))}
          </div>

          {/* Architecture Visualization */}
          <div className="lg:col-span-8">
            <div className="h-full rounded-[3rem] glass-panel border border-white/5 bg-black/60 p-12 relative overflow-hidden flex items-center justify-center">
               <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-transparent" />
               
               <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10 w-full text-center">
                  {[
                    { icon: Server, label: "Edge Functions" },
                    { icon: Database, label: "Vector Store" },
                    { icon: Zap, label: "Event Bus" },
                    { icon: Cpu, label: "LLM Orchestrator" }
                  ].map((Node, i) => (
                    <div key={i} className="space-y-4">
                       <div className="w-16 h-16 rounded-3xl glass-panel border border-white/10 bg-rose-500/5 flex items-center justify-center mx-auto text-rose-400 group hover:scale-110 transition-transform duration-500">
                          <Node.icon size={24} />
                       </div>
                       <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{Node.label}</div>
                    </div>
                  ))}
               </div>

               {/* Connection Lines (Static SVG) */}
               <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">
                  <line x1="25%" y1="50%" x2="75%" y2="50%" stroke="white" strokeWidth="1" />
                  <line x1="50%" y1="25%" x2="50%" y2="75%" stroke="white" strokeWidth="1" />
               </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
