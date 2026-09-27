"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { 
  ArrowRight, 
  Users, 
  ShieldCheck, 
  Cpu, 
  Radio, 
  Activity, 
  Zap
} from "lucide-react";

export default function CaseStudyPreview() {
  const metrics = [
    {
      icon: Users,
      value: "2,000+",
      label: "Active Personnel",
      sub: "Daily enterprise operations",
    },
    {
      icon: Zap,
      value: "<100ms",
      label: "UI Response Time",
      sub: "Virtualized DOM & SWR polling",
    },
    {
      icon: ShieldCheck,
      value: "Azure MSAL",
      label: "Enterprise Auth",
      sub: "Hierarchical RBAC policies",
    },
    {
      icon: Radio,
      value: "Hardware IoT",
      label: "Biometric Gates",
      sub: "Real-time access sync",
    },
  ];

  return (
    <section id="case-study" className="section-padding relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rose-500/20 bg-rose-500/5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
            <span className="text-xs font-semibold tracking-widest text-rose-400 uppercase">Featured Architecture</span>
          </div>
          <h3 className="fluid-h2 font-bold text-white tracking-tight">
            Enterprise Scale. <br className="hidden md:block"/>
            <span className="text-white/40">Production Grade.</span>
          </h3>
        </div>

        {/* Showcase Card */}
        <Link href="/case-studies/workforce-management" className="block group">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-[2rem] md:rounded-[2.5rem] glass-panel border border-white/[0.08] hover:border-rose-500/30 overflow-hidden transition-all duration-700 bg-[#060606] shadow-2xl group-hover:shadow-[0_20px_80px_-20px_rgba(244,63,94,0.15)]"
          >
            {/* Ambient Background Gradient on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-rose-500/[0.04] via-transparent to-red-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[540px]">
              
              {/* Left Content Side (7 cols) */}
              <div className="lg:col-span-7 p-6 sm:p-10 md:p-14 flex flex-col justify-between relative z-10">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 text-[11px] font-mono tracking-wider text-rose-400/90 bg-rose-500/10 rounded-full border border-rose-500/20">
                      ENTERPRISE WORKFORCE
                    </span>
                    <span className="text-xs text-white/30 font-mono">
                      CASE STUDY 01
                    </span>
                  </div>

                  <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6 leading-tight group-hover:text-rose-50 transition-colors">
                    Workforce Management &amp; Enterprise Scheduling
                  </h4>

                  <p className="text-white/60 text-sm sm:text-base md:text-lg mb-8 md:mb-10 leading-relaxed max-w-xl">
                    Architected and engineered the frontend ecosystem supporting 2,000+ daily distributed personnel, live attendance telemetry, and conflict-aware shift scheduling matrices.
                  </p>

                  {/* 2x2 Metric Grid */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8 md:mb-10">
                    {metrics.map((item, i) => (
                      <div 
                        key={i} 
                        className="p-3.5 sm:p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] group-hover:border-white/[0.09] transition-colors"
                      >
                        <div className="flex items-center gap-2 mb-1.5 text-white/50 group-hover:text-rose-400 transition-colors">
                          <item.icon size={15} />
                          <span className="text-[11px] uppercase tracking-wider font-semibold text-white/40">
                            {item.label}
                          </span>
                        </div>
                        <div className="text-base sm:text-lg font-bold text-white">
                          {item.value}
                        </div>
                        <div className="text-[11px] text-white/40 truncate">
                          {item.sub}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Indicator */}
                <div className="pt-2 flex items-center gap-3">
                  <div className="btn-primary !px-6 !py-3 text-sm">
                    <span>Explore Case Study</span>
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                  <span className="text-xs text-white/30 hidden sm:inline-block">
                    Architecture • Schemas • Telemetry
                  </span>
                </div>
              </div>

              {/* Right Visual Architecture Side (5 cols) */}
              <div className="lg:col-span-5 bg-[#0a0a0a] relative overflow-hidden border-t lg:border-t-0 lg:border-l border-white/[0.06] flex items-center justify-center p-6 sm:p-8 min-h-[380px] lg:min-h-full">
                {/* Tech Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(244,63,94,0.1),transparent_70%)] pointer-events-none" />

                {/* Top Status Strip inside visual */}
                <div className="absolute top-4 inset-x-4 flex items-center justify-between px-3 py-1.5 rounded-lg bg-black/60 border border-white/5 backdrop-blur-md z-20">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-mono text-white/60 tracking-wider">TOPOLOGY: PRODUCTION</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-rose-400/80">
                    <Activity size={11} />
                    <span>2.4K REQ/S</span>
                  </div>
                </div>

                {/* Central Multi-Node Architecture Graph */}
                <div className="relative w-full max-w-[320px] aspect-square flex items-center justify-center">
                  
                  {/* Concentric Orbital Rings */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-2 border border-white/5 rounded-full"
                  />
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-10 border border-rose-500/10 rounded-full border-dashed"
                  />

                  {/* Connecting Axis Lines */}
                  <div className="absolute inset-x-8 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <div className="absolute inset-y-8 left-1/2 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />

                  {/* Satellite Node 1: Attendance/Users (Top) */}
                  <motion.div 
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-4 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-xl bg-black/80 border border-white/10 shadow-lg flex items-center gap-2 group-hover:border-rose-500/40 transition-colors z-10"
                  >
                    <div className="w-5 h-5 rounded-md bg-rose-500/10 flex items-center justify-center text-rose-400">
                      <Users size={11} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-white">2,000+ Personnel</div>
                      <div className="text-[8px] font-mono text-white/40">Geofence Verified</div>
                    </div>
                  </motion.div>

                  {/* Satellite Node 2: Biometric Access (Bottom Left) */}
                  <motion.div 
                    animate={{ y: [0, 4, 0] }}
                    transition={{ duration: 5, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-6 left-0 px-3 py-1.5 rounded-xl bg-black/80 border border-white/10 shadow-lg flex items-center gap-2 group-hover:border-rose-500/40 transition-colors z-10"
                  >
                    <div className="w-5 h-5 rounded-md bg-rose-500/10 flex items-center justify-center text-rose-400">
                      <Radio size={11} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-white">HIKVISION IoT</div>
                      <div className="text-[8px] font-mono text-emerald-400">Sync Active</div>
                    </div>
                  </motion.div>

                  {/* Satellite Node 3: Azure MSAL (Bottom Right) */}
                  <motion.div 
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 4.5, delay: 1, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-6 right-0 px-3 py-1.5 rounded-xl bg-black/80 border border-white/10 shadow-lg flex items-center gap-2 group-hover:border-rose-500/40 transition-colors z-10"
                  >
                    <div className="w-5 h-5 rounded-md bg-rose-500/10 flex items-center justify-center text-rose-400">
                      <ShieldCheck size={11} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-white">Azure MSAL</div>
                      <div className="text-[8px] font-mono text-white/40">RBAC Enforced</div>
                    </div>
                  </motion.div>

                  {/* Center Core Engine */}
                  <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-b from-[#18080a] to-[#0c0304] border border-rose-500/30 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(244,63,94,0.25)] group-hover:scale-105 transition-transform duration-500 z-10">
                    <div className="w-9 h-9 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400 mb-1 shadow-inner">
                      <Cpu size={18} />
                    </div>
                    <span className="text-[9px] font-mono font-bold text-white tracking-wider">
                      DISPATCH
                    </span>
                    <span className="text-[7px] font-mono text-rose-400/80">
                      99.9% UPTIME
                    </span>
                  </div>

                </div>

                {/* Bottom live stats pill */}
                <div className="absolute bottom-3 inset-x-4 flex items-center justify-between text-[9px] font-mono text-white/30 border-t border-white/5 pt-2">
                  <span>DISPATCH LATENCY: 42MS</span>
                  <span className="text-emerald-400/80">SOCKET CONNECTED</span>
                </div>

              </div>

            </div>
          </motion.div>
        </Link>
      </div>
    </section>
  );
}