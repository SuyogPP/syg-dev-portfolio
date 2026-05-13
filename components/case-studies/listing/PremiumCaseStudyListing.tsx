"use client";

import { motion } from "motion/react";
import { CASE_STUDIES } from "@/data/caseStudies";
import CaseStudyListingBlock from "./CaseStudyListingBlock";
import { 
  Database, Shield, 
  Workflow, Layout, Activity, Lock,
  Server
} from "lucide-react";

export default function PremiumCaseStudyListing() {
  const workforce = CASE_STUDIES.find(s => s.slug === "workforce-management")!;
  const visitor = CASE_STUDIES.find(s => s.slug === "visitor-management")!;

  return (
    <section className="relative bg-background">
      <div className="container max-w-7xl mx-auto px-4">
        
        {/* Project 1: Workforce Management */}
        <CaseStudyListingBlock 
          study={workforce}
          visual={
            <div className="relative w-full h-full">
              {/* Architecture Topology Visual */}
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <div className="relative w-full max-w-sm">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border border-indigo-500/10"
                  />
                  
                  <div className="grid grid-cols-2 gap-8 relative z-10">
                    {[
                      { icon: Activity, label: "Real-time" },
                      { icon: Database, label: "Enterprise DB" },
                      { icon: Lock, label: "RBAC Auth" },
                      { icon: Layout, label: "Operational" },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.1, border: 'rgba(99,102,241,0.5)' }}
                        className="p-6 rounded-[2rem] glass-panel border border-white/5 bg-black/40 flex flex-col items-center gap-3 transition-all duration-500"
                      >
                        <item.icon className="w-8 h-8 text-indigo-400" />
                        <span className="text-[8px] font-bold text-white/40 uppercase tracking-widest">{item.label}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
                <line x1="25%" y1="25%" x2="75%" y2="75%" stroke="white" strokeWidth="1" />
                <line x1="75%" y1="25%" x2="25%" y2="75%" stroke="white" strokeWidth="1" />
              </svg>
            </div>
          }
        />

        {/* Project 2: Visitor Management */}
        <CaseStudyListingBlock 
          study={visitor}
          reversed
          visual={
            <div className="relative w-full h-full">
              {/* Workflow Engine Visual */}
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <div className="w-full space-y-4 max-w-md">
                  {[
                    { icon: Workflow, label: "Visitor Registration", status: "Digital" },
                    { icon: Shield, label: "Access Control Sync", status: "Hardware" },
                    { icon: Server, label: "Host Approval Flow", status: "Operational" },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ x: 20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="p-6 rounded-2xl glass-panel border border-white/5 bg-black/40 flex items-center justify-between group hover:border-indigo-500/30 transition-all duration-500"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:scale-110 transition-transform">
                          <item.icon size={20} />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white">{item.label}</div>
                          <div className="text-[10px] text-indigo-400 font-mono tracking-tighter uppercase">{item.status}</div>
                        </div>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Background Flow Particles */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      y: [-20, 20, -20],
                      opacity: [0.1, 0.3, 0.1]
                    }}
                    transition={{ 
                      duration: 4 + i, 
                      repeat: Infinity,
                      delay: i * 0.5
                    }}
                    className="absolute w-1 h-1 bg-white/20 rounded-full blur-[1px]"
                    style={{ left: `${20 * i}%`, top: `${15 * i}%` }}
                  />
                ))}
              </div>
            </div>
          }
        />

      </div>
    </section>
  );
}
