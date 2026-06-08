"use client";

import { motion } from "motion/react";
import SectionHeading from "@/components/case-studies/SectionHeading";
import { Share2, Activity, Radio } from "lucide-react";

export default function CoupleOSRealtime() {
  return (
    <section className="py-24 md:py-40 px-4 relative bg-black/20 overflow-hidden">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <SectionHeading 
            label="Connectivity"
            title="Realtime Emotional Sync"
            align="center"
          />
          <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed font-medium">
            Stay connected across distances with a low-latency event synchronization system that pulses with the heartbeat of your shared digital life.
          </p>
        </div>

        <div className="relative h-[400px] md:h-[600px] rounded-[3rem] glass-panel border border-white/5 bg-white/[0.01] overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/5 via-transparent to-transparent" />
          
          {/* Animated Topology Nodes */}
          <div className="relative w-full max-w-2xl px-8 h-full flex items-center justify-center">
            {/* Connection Lines (SVG) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
              <motion.path
                d="M100 300 Q 300 100 500 300 T 900 300"
                stroke="white"
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 3, ease: "easeInOut" }}
              />
              <motion.circle
                r="4"
                fill="indigo"
                initial={{ offset: 0 }}
                animate={{ offset: 1 }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              >
                <animateMotion path="M100 300 Q 300 100 500 300 T 900 300" dur="5s" repeatCount="indefinite" />
              </motion.circle>
            </svg>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full relative z-10">
              {[
                { icon: Radio, label: "Live Streams" },
                { icon: Activity, label: "Shared Pulse" },
                { icon: Share2, label: "Sync Engine" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="p-8 rounded-3xl glass-panel border border-white/5 bg-black/40 text-center space-y-4 group hover:border-indigo-500/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center mx-auto text-indigo-400 group-hover:scale-110 transition-transform">
                    <item.icon size={24} />
                  </div>
                  <div className="text-sm font-bold text-white uppercase tracking-widest">{item.label}</div>
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mx-auto animate-pulse" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
