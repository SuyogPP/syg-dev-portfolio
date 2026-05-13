"use client";

import { motion } from "motion/react";
import { 
  Shield, Server, Globe, Database, 
  Network, Activity, Lock, Cpu
} from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function MultiTenantArchitecture() {
  return (
    <section className="py-24 md:py-40 px-4 relative overflow-hidden bg-black/20">
      <div className="container max-w-7xl mx-auto relative z-10">
        <SectionHeading 
          label="System Architecture"
          title="Multi-Tenant Architecture"
          subtitle="A high-performance orchestration layer designed for organizational scale, distributed operational branches, and enterprise-grade security."
          align="center"
        />

        {/* Cinematic Architecture Visual */}
        <div className="mt-20 relative min-h-[600px] rounded-[3rem] glass-panel border border-white/5 bg-white/[0.01] p-8 md:p-16 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.05),transparent_70%)]" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Column: Distributed Organizations */}
            <div className="lg:col-span-3 space-y-6">
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30 mb-8 block text-center lg:text-left">Distributed Operations</div>
              {[
                { name: "Global HQ", icon: Globe, status: "Active" },
                { name: "Regional Branch", icon: Network, status: "Active" },
                { name: "Field Office", icon: MapPin, status: "Connected" }
              ].map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-5 rounded-2xl glass-panel border border-white/5 bg-black/40 flex items-center gap-4 group hover:border-indigo-500/30 transition-all duration-500"
                >
                  <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{item.name}</div>
                    <div className="text-[10px] text-indigo-400 font-mono tracking-tighter uppercase">{item.status}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Middle Column: The Orchestration Core */}
            <div className="lg:col-span-6 relative flex items-center justify-center py-20 lg:py-0">
              {/* Central Core Visual */}
              <div className="relative">
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="w-48 h-48 md:w-64 md:h-64 rounded-full border border-indigo-500/20 bg-indigo-500/5 flex items-center justify-center relative"
                >
                  <div className="absolute inset-0 bg-indigo-500/10 blur-3xl rounded-full" />
                </motion.div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    className="p-6 rounded-[2rem] glass-panel border-indigo-500/30 bg-black/60 shadow-[0_0_50px_rgba(99,102,241,0.2)]"
                  >
                    <Server className="w-12 h-12 text-indigo-400 mb-2 mx-auto" />
                    <div className="text-xs font-bold text-white uppercase tracking-widest">Multi-Tenant</div>
                    <div className="text-[10px] text-indigo-400 font-bold uppercase mt-1">Orchestrator</div>
                  </motion.div>
                </div>

                {/* Pulsing Signal Rings */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      scale: [1, 2],
                      opacity: [0.5, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 1
                    }}
                    className="absolute inset-0 rounded-full border border-indigo-500/30"
                  />
                ))}
              </div>
            </div>

            {/* Right Column: Data Persistence & Auth */}
            <div className="lg:col-span-3 space-y-6">
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30 mb-8 block text-center lg:text-right">Core Services</div>
              {[
                { name: "Encrypted DB", icon: Database, label: "Persistence" },
                { name: "Azure MSAL", icon: Shield, label: "Identity" },
                { name: "Real-time Sync", icon: Activity, label: "Operational" }
              ].map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-5 rounded-2xl glass-panel border border-white/5 bg-black/40 flex items-center lg:flex-row-reverse gap-4 group hover:border-indigo-500/30 transition-all duration-500"
                >
                  <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
                    <item.icon size={20} />
                  </div>
                  <div className="lg:text-right">
                    <div className="text-sm font-bold text-white">{item.name}</div>
                    <div className="text-[10px] text-indigo-400 font-mono tracking-tighter uppercase">{item.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[
            { 
              title: "Hierarchical RBAC", 
              desc: "Deeply nested role-based access control allowing fine-grained permissions across organizational levels.",
              icon: Lock
            },
            { 
              title: "Adaptive Data Layer", 
              desc: "High-performance data synchronization ensuring sub-second updates across distributed workforce nodes.",
              icon: Cpu
            },
            { 
              title: "Operational Resilience", 
              desc: "Engineered for 99.9% uptime with offline-first capabilities for mission-critical workforce tracking.",
              icon: Activity
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="p-8 rounded-[2rem] glass-panel border border-white/5 bg-black/40 group hover:border-indigo-500/30 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-indigo-400" />
              </div>
              <h4 className="text-lg font-bold text-white mb-3">{feature.title}</h4>
              <p className="text-sm text-white/50 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MapPin({ size }: { size: number }) {
  return (
    <svg 
      width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" 
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
