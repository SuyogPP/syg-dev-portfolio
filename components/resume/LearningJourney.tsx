"use client";

import { motion } from "motion/react";
import { RESUME_DATA } from "@/data/resume";
import SectionHeading from "../case-studies/SectionHeading";
import { Sparkles, ArrowRight } from "lucide-react";

export default function LearningJourney() {
  return (
    <section className="py-24 md:py-40 px-4 relative bg-black/20">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-4">
            <SectionHeading 
              label="Growth"
              title="Certifications & Active Learning"
            />
            <p className="text-lg text-white/50 leading-relaxed font-medium">
              Continuous upskilling in infrastructure, architecture, and intelligent systems to stay at the forefront of modern engineering.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-8">
            {RESUME_DATA.learning.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="p-10 rounded-[2.5rem] glass-panel border border-white/5 bg-white/[0.01] hover:bg-white/[0.04] transition-all duration-500 flex flex-col md:flex-row items-center justify-between gap-8 group"
              >
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0">
                    <Sparkles size={24} className="text-rose-400 opacity-40 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="text-xl font-bold text-white tracking-tight">{item.title}</h4>
                      <span className="px-2 py-0.5 rounded-md bg-rose-500/10 border border-rose-500/20 text-[8px] font-bold text-rose-400 uppercase tracking-widest">
                        {item.status}
                      </span>
                    </div>
                    <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                  <ArrowRight size={24} className="text-white/20" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
