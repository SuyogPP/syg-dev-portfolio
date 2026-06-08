"use client";

import { motion } from "motion/react";
import { RESUME_DATA } from "@/data/resume";
import SectionHeading from "../case-studies/SectionHeading";

export default function ProfessionalSummary() {
  return (
    <section className="py-24 md:py-32 px-4 relative overflow-hidden bg-white/[0.01]">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-4">
            <SectionHeading 
              label="Profile"
              title="Professional Summary"
            />
          </div>
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-10 rounded-[3rem] glass-panel border border-white/5 bg-black/40 relative"
            >
              <div className="absolute top-8 left-8 w-12 h-1 bg-indigo-500 rounded-full" />
              <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-medium italic">
                &quot;{RESUME_DATA.summary}&quot;
              </p>
              
              <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 pt-12 border-t border-white/5">
                {[
                  "Frontend Architecture",
                  "Enterprise Systems",
                  "Scalable UI",
                  "Operational Platforms",
                  "Immersive UX",
                  "Product Thinking"
                ].map((tag, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/50" />
                    <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">{tag}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
