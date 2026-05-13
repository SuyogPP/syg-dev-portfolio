"use client";

import { motion } from "motion/react";
import { 
  Shield, Workflow, Database, Box,
  Cpu, Activity, Layers, Settings
} from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function VisualStorytelling() {
  const cards = [
    {
      title: "Production Infrastructure",
      subtitle: "Enterprise Reliability",
      icon: Database,
      desc: "Architected for high-availability workforce operations, ensuring operational continuity across distributed nodes.",
      metrics: [
        { label: "Sync Latency", value: "< 250ms" },
        { label: "Storage", value: "Encrypted" }
      ]
    },
    {
      title: "Operational Dashboards",
      subtitle: "System Visibility",
      icon: Activity,
      desc: "Real-time monitoring of workforce distribution and attendance metrics through performance-optimized UI layers.",
      metrics: [
        { label: "Refresh Rate", value: "Real-time" },
        { label: "Data Volume", value: "2k+ Nodes" }
      ]
    },
    {
      title: "Security & Compliance",
      subtitle: "Architectural Integrity",
      icon: Shield,
      desc: "Rigorous authorization protocols and role-based access systems integrated with corporate identity providers.",
      metrics: [
        { label: "Auth Provider", value: "Azure MSAL" },
        { label: "Protocol", value: "RBAC" }
      ]
    }
  ];

  return (
    <section className="py-24 md:py-40 px-4 relative bg-black/40">
      <div className="container max-w-7xl mx-auto relative z-10">
        <SectionHeading 
          label="The Production Standard"
          title="Engineering for Operational Scale"
          subtitle="Beyond the interface—building robust architectural foundations for real-world enterprise requirements."
          align="center"
        />

        <div className="mt-24 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-10 rounded-[3rem] glass-panel border border-white/5 bg-white/[0.01] hover:border-indigo-500/30 transition-all duration-500 flex flex-col"
            >
              <div className="w-16 h-16 rounded-[1.5rem] bg-indigo-500/10 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                <card.icon className="w-8 h-8 text-indigo-400" />
              </div>

              <div className="mb-8">
                <div className="text-[10px] text-indigo-400 font-bold uppercase tracking-[0.2em] mb-2">{card.subtitle}</div>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{card.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed font-medium">
                  {card.desc}
                </p>
              </div>

              <div className="mt-auto pt-8 border-t border-white/5 grid grid-cols-2 gap-4">
                {card.metrics.map((m, j) => (
                  <div key={j}>
                    <div className="text-lg font-bold text-white mb-1">{m.value}</div>
                    <div className="text-[10px] text-white/30 uppercase tracking-widest">{m.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Detail Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-[2rem] glass-panel border border-white/5 bg-indigo-500/[0.02] flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-6">
            <div className="p-4 rounded-2xl bg-indigo-500/10">
              <Cpu className="w-6 h-6 text-indigo-400" />
            </div>
            <div>
              <div className="text-sm font-bold text-white mb-1">Production-Grade Lifecycle Management</div>
              <div className="text-xs text-white/40">Automated deployment pipelines and sub-second operational monitoring.</div>
            </div>
          </div>
          <div className="flex -space-x-4">
            {[Box, Layers, Settings, Workflow].map((Icon, i) => (
              <div key={i} className="w-12 h-12 rounded-full border-4 border-background bg-black/40 flex items-center justify-center text-white/40">
                <Icon size={18} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
