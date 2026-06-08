"use client";

import { motion } from "motion/react";
import { RESUME_DATA } from "@/data/resume";
import SectionHeading from "../case-studies/SectionHeading";
import { Calendar } from "lucide-react";

export default function ExperienceTimeline() {
  return (
    <section className="py-24 md:py-40 px-4 relative">
      <div className="container max-w-7xl mx-auto">
        <SectionHeading 
          label="Journey"
          title="Professional Experience"
          align="center"
        />

        <div className="mt-24 space-y-16">
          {RESUME_DATA.experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="relative group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                {/* Meta Column */}
                <div className="lg:col-span-3 space-y-4">
                  <div className="flex items-center gap-3 text-indigo-400">
                    <Calendar size={18} />
                    <span className="text-sm font-bold tracking-wider">{exp.period}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">{exp.company}</h3>
                  <div className="text-sm font-bold text-white/40 uppercase tracking-widest">{exp.role}</div>
                </div>

                {/* Content Column */}
                <div className="lg:col-span-9">
                  <div className="p-10 rounded-[3rem] glass-panel border border-white/5 bg-white/[0.01] group-hover:bg-white/[0.03] transition-all duration-500">
                    <p className="text-lg text-white/60 mb-10 leading-relaxed italic">
                      {exp.description}
                    </p>

                    <div className="space-y-6 mb-12">
                      <div className="text-[10px] font-bold text-white/20 uppercase tracking-[0.3em] mb-4">Engineering Highlights</div>
                      {exp.highlights.map((highlight, j) => (
                        <div key={j} className="flex gap-4 group/item">
                          <div className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500/40 group-hover/item:bg-indigo-500 transition-colors" />
                          <p className="text-sm text-white/50 leading-relaxed group-hover/item:text-white/80 transition-colors">
                            {highlight}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 pt-8 border-t border-white/5">
                      {exp.tech.map((t, k) => (
                        <span key={k} className="px-3 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] text-white/30 font-mono">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Connector line for large screens */}
              {i < RESUME_DATA.experience.length - 1 && (
                <div className="absolute left-[22px] top-12 bottom-[-64px] w-[1px] bg-gradient-to-b from-indigo-500/20 to-transparent hidden lg:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
