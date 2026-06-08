"use client";

import { motion } from "motion/react";
import { RESUME_DATA } from "@/data/resume";
import SectionHeading from "../case-studies/SectionHeading";

export default function ArchitectureExpertise() {
  return (
    <section className="py-24 md:py-40 px-4 relative">
      <div className="container max-w-7xl mx-auto">
        <SectionHeading 
          label="Maturity"
          title="Systems & Architecture"
        />

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {RESUME_DATA.expertise.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="p-10 rounded-[2.5rem] glass-panel border border-white/5 bg-white/[0.01] hover:border-indigo-500/30 transition-all duration-500 group overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-3xl bg-indigo-500/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <item.icon className="w-8 h-8 text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 tracking-tight leading-tight">{item.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
