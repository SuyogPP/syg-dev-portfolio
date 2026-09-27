"use client";

import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { Contribution } from "@/data/caseStudies";

export default function TimelineSection({ contributions }: { contributions: Contribution[] }) {
  return (
    <div className="relative">
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-rose-500/50 via-white/10 to-transparent transform -translate-x-1/2 hidden md:block" />

      <div className="space-y-12 md:space-y-24">
        {contributions.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-0 ${
              i % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="w-full md:w-1/2 flex flex-col px-4 md:px-12">
              <div className={`p-8 rounded-[2rem] glass-panel border border-white/5 hover:border-white/20 transition-all ${
                i % 2 === 0 ? "md:text-right" : "md:text-left"
              }`}>
                <div className={`flex items-center gap-3 mb-4 ${
                  i % 2 === 0 ? "md:justify-end" : "md:justify-start"
                }`}>
                  <CheckCircle2 className="w-5 h-5 text-rose-400 shrink-0" />
                  <h3 className="text-xl font-bold text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-white/60 leading-relaxed mb-6">
                  {item.description}
                </p>
                <div className={`flex flex-wrap gap-2 ${
                  i % 2 === 0 ? "md:justify-end" : "md:justify-start"
                }`}>
                  {item.tags.map((tag, j) => (
                    <span key={j} className="text-[10px] px-2 py-1 rounded-md bg-white/5 text-white/40 font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute left-0 md:left-1/2 top-1/2 w-4 h-4 rounded-full bg-rose-500 border-4 border-background transform -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
