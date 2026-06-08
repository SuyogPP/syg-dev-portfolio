"use client";

import { motion } from "motion/react";
import { RESUME_DATA } from "@/data/resume";
import SectionHeading from "../case-studies/SectionHeading";

export default function SkillsEcosystem() {
  return (
    <section className="py-24 md:py-40 px-4 relative bg-black/40 overflow-hidden">
      {/* Background Topology Grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[length:40px_40px]" />
      </div>

      <div className="container max-w-7xl mx-auto relative z-10">
        <SectionHeading 
          label="Ecosystem"
          title="Technical Skills"
          subtitle="Categorized engineering expertise across the full frontend stack and beyond."
          align="center"
        />

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RESUME_DATA.skills.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="p-10 rounded-[3rem] glass-panel border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-500 group"
            >
              <div className="mb-8">
                <div className="text-[10px] font-bold text-indigo-400 uppercase tracking-[0.3em] mb-2">Category</div>
                <h4 className="text-xl font-bold text-white tracking-tight">{category.category}</h4>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.items.map((skill, j) => (
                  <motion.div
                    key={j}
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-sm text-white/60 font-medium cursor-default transition-colors"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
