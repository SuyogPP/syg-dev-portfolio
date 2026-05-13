"use client";

import { motion } from "motion/react";
import { Metric } from "@/data/caseStudies";

export default function MetricsStrip({ metrics }: { metrics: Metric[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {metrics.map((metric, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className={`relative group p-6 rounded-3xl glass-panel border ${metric.border || 'border-white/10'} overflow-hidden`}
        >
          {metric.color && (
            <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10`} />
          )}
          
          <div className="flex flex-col h-full gap-4 relative z-10 text-left">
            <div className="p-3 rounded-2xl bg-white/5 w-fit group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
              <metric.icon className="w-6 h-6 text-white" />
            </div>
            
            <div>
              <h3 className="text-3xl font-bold tracking-tight text-white mb-1">
                {metric.value}
              </h3>
              <p className="text-[10px] font-bold text-white/40 uppercase tracking-wider mb-1">
                {metric.label}
              </p>
              {metric.description && (
                <p className="text-[10px] text-white/30 leading-tight">
                  {metric.description}
                </p>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
