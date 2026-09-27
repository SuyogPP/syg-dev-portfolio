"use client";

import { motion } from "motion/react";
import { Users, ShieldCheck, Layers, GitBranch } from "lucide-react";

interface MetricItem {
  icon: typeof Users;
  value: string;
  label: string;
  description: string;
}

const METRICS: MetricItem[] = [
  {
    icon: Users,
    value: "2,000+",
    label: "Enterprise Scale",
    description: "Active users in production",
  },
  {
    icon: Layers,
    value: "Fullstack",
    label: "Distributed Systems",
    description: "React, Next.js, Node & .NET",
  },
  {
    icon: ShieldCheck,
    value: "99.9%",
    label: "System Resilience",
    description: "High availability architecture",
  },
  {
    icon: GitBranch,
    value: "DevOps",
    label: "Production Delivery",
    description: "CI/CD & Azure Infrastructure",
  },
];

export default function Stats() {
  return (
    <section className="py-8 md:py-14 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl md:rounded-3xl overflow-hidden border border-white/[0.06] shadow-2xl backdrop-blur-sm"
        >
          {METRICS.map((metric, i) => (
            <div
              key={i}
              className="bg-[#050505]/90 p-5 md:p-8 flex flex-col justify-between group hover:bg-[#090909] transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/[0.03] rounded-full blur-2xl group-hover:bg-rose-500/[0.08] transition-colors pointer-events-none" />
              
              <div className="flex items-center justify-between mb-6">
                <div className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-white/50 group-hover:text-rose-400 group-hover:border-rose-500/30 group-hover:bg-rose-500/5 transition-all duration-300">
                  <metric.icon size={16} />
                </div>
                <span className="text-[10px] md:text-xs font-mono text-white/30 tracking-wider">
                  0{i + 1}
                </span>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-1.5 group-hover:text-rose-400 transition-colors duration-300">
                  {metric.value}
                </div>
                <div className="text-xs md:text-sm font-semibold text-white/80 mb-1">
                  {metric.label}
                </div>
                <p className="text-[11px] md:text-xs text-white/40 leading-relaxed">
                  {metric.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}