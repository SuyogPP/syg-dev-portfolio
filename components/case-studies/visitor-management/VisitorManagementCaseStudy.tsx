"use client";

import { motion } from "motion/react";
import { 
  Shield, Zap, Workflow, Layout, 
  CheckCircle2, QrCode, Bell, Smartphone, 
  Database, Cpu, Lock, Server, Network,
  Activity, Search, Building2
} from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import AnimatedGrid from "@/components/case-studies/AnimatedGrid";
import MetricsStrip from "@/components/case-studies/MetricsStrip";
import SectionHeading from "@/components/case-studies/SectionHeading";
import CTASection from "@/components/case-studies/CTASection";
import { CASE_STUDIES } from "@/data/caseStudies";

export default function VisitorManagementCaseStudy() {
  const study = CASE_STUDIES.find((s) => s.slug === "visitor-management")!;

  return (
    <PageWrapper>
      <div className="bg-background text-foreground selection:bg-indigo-500/30">
        
        {/* Cinematic Hero */}
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 px-4 overflow-hidden">
          <AnimatedGrid />
          <div className="container relative z-10 max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-white/60">
                Enterprise Operations Platform
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="fluid-h1 font-bold mb-6 tracking-tight leading-[1.1] text-white"
            >
              Enterprise Visitor <span className="text-gradient">Management Platform</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="fluid-p text-white/60 max-w-3xl mx-auto mb-16"
            >
              {study.subtitle}
            </motion.p>

            <MetricsStrip metrics={study.metrics} />
          </div>

          {/* Background Decorative Visuals */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-64 bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.1),transparent_70%)] pointer-events-none" />
        </section>

        {/* Overview Section */}
        <section className="py-24 md:py-40 px-4 relative">
          <div className="container max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
              <div className="lg:col-span-5">
                <SectionHeading 
                  label="The Challenge"
                  title="Securing Modern Facilities"
                />
              </div>
              <div className="lg:col-span-7">
                <div className="relative">
                  <div className="absolute -left-12 top-0 bottom-0 w-[1px] bg-gradient-to-b from-indigo-500/50 to-transparent hidden lg:block" />
                  <p className="fluid-p text-white/80 mb-12">
                    Modern enterprise facilities face significant operational friction in managing visitor throughput. Manual registration, approval bottlenecks, and lack of real-time visibility create security vulnerabilities and inefficient lobby operations. 
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {[
                      { icon: Shield, title: "Security First", desc: "Eliminating unauthorized access through mandatory verification gates." },
                      { icon: Zap, title: "Operational Velocity", desc: "Reducing lobby wait times through digital pre-registration." }
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col gap-4">
                        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-indigo-400" />
                        </div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider">{item.title}</h4>
                        <p className="text-xs text-white/50 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visitor Workflow Section */}
        <section className="py-24 md:py-40 px-4 relative bg-black/20 overflow-hidden">
          <div className="container max-w-7xl mx-auto relative z-10">
            <SectionHeading 
              label="Operational Pipeline"
              title="End-to-End Visitor Lifecycle"
              subtitle="A seamless orchestration of digital identity and physical access control."
              align="center"
            />

            <div className="mt-20 relative">
              {/* Flow Line SVG */}
              <svg className="absolute top-1/2 left-0 w-full h-[2px] -translate-y-1/2 opacity-20 hidden lg:block">
                <motion.line 
                  x1="0" y1="0" x2="100%" y2="0"
                  stroke="url(#flow-gradient)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
                <defs>
                  <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#4f46e5" stopOpacity="0" />
                    <stop offset="50%" stopColor="#818cf8" stopOpacity="1" />
                    <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
                {[
                  { icon: QrCode, label: "Registration", sub: "Digital Pre-Check" },
                  { icon: Bell, label: "Notification", sub: "Host Alert" },
                  { icon: CheckCircle2, label: "Approval", sub: "Security Gate" },
                  { icon: Smartphone, label: "Verification", sub: "QR Scan" },
                  { icon: Activity, label: "Tracking", sub: "Live Monitoring" },
                  { icon: Lock, label: "Check-Out", sub: "Access Revoked" },
                ].map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col items-center gap-6"
                  >
                    <div className="w-16 h-16 rounded-2xl glass-panel border border-white/10 flex items-center justify-center relative z-10 group hover:border-indigo-500/50 transition-all duration-500">
                      <div className="absolute inset-0 bg-indigo-500/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      <step.icon className="w-7 h-7 text-indigo-400" />
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-white mb-1 uppercase tracking-tight">{step.label}</div>
                      <div className="text-[10px] text-white/40 uppercase tracking-widest">{step.sub}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Registration & Approval System */}
        <section className="py-24 md:py-40 px-4 relative">
          <div className="container max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
                  <Workflow className="w-3 h-3 text-indigo-400" />
                  <span className="text-[10px] uppercase tracking-widest font-semibold text-white/70">Workflow Engine</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                  Automated Host <span className="text-gradient">Approval Flows</span>
                </h3>
                <p className="fluid-p text-white/60 mb-10">
                  The platform digitizes the host-visitor relationship, allowing employees to pre-register guests and manage approvals via real-time notifications. This decentralized approval model removes reception bottlenecks while maintaining strict security protocols.
                </p>
                <ul className="space-y-6">
                  {[
                    "Instant host notifications via SMS/Email",
                    "Dynamic visitor validation against security watchlists",
                    "Time-restricted QR access credentials",
                    "Hierarchical approval chains for sensitive facilities"
                  ].map((text, i) => (
                    <li key={i} className="flex items-center gap-4 text-sm text-white/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                      {text}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-square rounded-[3rem] glass-panel border border-white/10 overflow-hidden p-8 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent" />
                  {/* Approval UI Mockup Concept */}
                  <div className="w-full max-w-xs space-y-4">
                    {[
                      { name: "John Cooper", time: "10:30 AM", status: "Pending", color: "bg-amber-500/20 text-amber-400" },
                      { name: "Sarah Miller", time: "11:15 AM", status: "Approved", color: "bg-emerald-500/20 text-emerald-400" },
                      { name: "Mark Wilson", time: "01:00 PM", status: "Pending", color: "bg-amber-500/20 text-amber-400" },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ x: 20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="p-4 rounded-2xl glass-panel border border-white/5 bg-black/40 flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-[10px] font-bold text-indigo-400">
                            {item.name[0]}
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white">{item.name}</div>
                            <div className="text-[10px] text-white/40">{item.time}</div>
                          </div>
                        </div>
                        <div className={`px-2 py-1 rounded-full text-[8px] font-bold uppercase tracking-wider ${item.color}`}>
                          {item.status}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Access Control Integration Section */}
        <section className="py-24 md:py-40 px-4 relative bg-white/[0.02]">
          <div className="container max-w-7xl mx-auto">
            <SectionHeading 
              label="Hardware Integration"
              title="HIKVISION Ecosystem Sync"
              subtitle="Bridging software authorizations with physical security infrastructure."
              align="center"
            />

            <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                { 
                  icon: Shield, 
                  title: "Credential Sync", 
                  desc: "Automatic synchronization of approved visitor QR codes and face templates to HIKVISION access controllers." 
                },
                { 
                  icon: Network, 
                  title: "Network Resiliency", 
                  desc: "Edge-based authorization ensuring physical access remains operational even during network outages." 
                },
                { 
                  icon: Search, 
                  title: "Entry Validation", 
                  desc: "Real-time verification of visitor credentials against live operational schedule and host approval status." 
                }
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-[2rem] glass-panel border border-white/5 bg-black/40 hover:border-indigo-500/30 transition-all duration-500 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <card.icon className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3">{card.title}</h4>
                  <p className="text-sm text-white/50 leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Dashboard & Operations Section */}
        <section className="py-24 md:py-40 px-4 relative overflow-hidden">
          <div className="container max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1 relative"
              >
                <div className="aspect-video rounded-[2.5rem] glass-panel border border-white/10 p-4 bg-black/60 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent" />
                  {/* Dashboard Visual Mockup */}
                  <div className="h-full w-full flex flex-col gap-4">
                    <div className="h-12 w-full flex items-center justify-between px-4 border-b border-white/5">
                      <div className="w-24 h-3 bg-white/5 rounded-full" />
                      <div className="flex gap-2">
                        <div className="w-8 h-8 rounded-lg bg-indigo-500/20" />
                        <div className="w-8 h-8 rounded-lg bg-white/5" />
                      </div>
                    </div>
                    <div className="flex-1 grid grid-cols-12 gap-4">
                      <div className="col-span-8 space-y-4">
                        <div className="h-24 w-full bg-indigo-500/5 rounded-2xl border border-white/5" />
                        <div className="h-40 w-full bg-white/5 rounded-2xl border border-white/5" />
                      </div>
                      <div className="col-span-4 space-y-4">
                        <div className="h-full w-full bg-white/5 rounded-2xl border border-white/5" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Floating Stats */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-10 -right-10 p-6 rounded-2xl glass-panel border border-white/10 bg-black/80 backdrop-blur-2xl shadow-2xl z-20"
                >
                  <div className="flex items-center gap-4">
                    <Activity className="w-6 h-6 text-emerald-400" />
                    <div>
                      <div className="text-[10px] text-white/40 uppercase tracking-widest">Active Visitors</div>
                      <div className="text-xl font-bold text-white">128</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
                  <Layout className="w-3 h-3 text-indigo-400" />
                  <span className="text-[10px] uppercase tracking-widest font-semibold text-white/70">Operational Visibility</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                  Real-Time Visitor <span className="text-gradient">Intelligence</span>
                </h3>
                <p className="fluid-p text-white/60 mb-8">
                  Receptionists and security personnel gain complete situational awareness through a high-performance operational dashboard. Monitor active visitor density, track historical trends, and manage check-in queues with sub-second data updates.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-2xl font-bold text-white mb-1">100%</div>
                    <div className="text-xs text-white/40 uppercase tracking-wider">Visibility</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white mb-1">&lt;1s</div>
                    <div className="text-xs text-white/40 uppercase tracking-wider">Data Latency</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Multi-Location Architecture */}
        <section className="py-24 md:py-40 px-4 relative bg-black/40">
          <div className="container max-w-7xl mx-auto">
            <SectionHeading 
              label="Enterprise Scale"
              title="Multi-Location Topology"
              subtitle="Distributed operational support across corporate headquarters and regional branches."
              align="center"
            />

            <div className="mt-20 h-[400px] md:h-[600px] relative rounded-[3rem] glass-panel border border-white/5 overflow-hidden p-12 flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.05),transparent_70%)]" />
              
              {/* Topology Map Concept */}
              <div className="relative w-full max-w-4xl flex items-center justify-between">
                <div className="flex flex-col gap-12">
                  {[1, 2].map((i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="p-6 rounded-2xl glass-panel border border-white/10 flex items-center gap-4 bg-black/40 relative z-10"
                    >
                      <Building2 className="w-6 h-6 text-indigo-400" />
                      <div className="text-xs font-bold text-white uppercase tracking-widest">Branch {i === 1 ? 'NYC' : 'LDN'}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Central Core */}
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  className="w-40 h-40 rounded-full border border-indigo-500/30 bg-black/60 flex items-center justify-center relative z-20"
                >
                  <div className="absolute inset-0 bg-indigo-500/10 blur-2xl rounded-full" />
                  <Server className="w-12 h-12 text-indigo-400" />
                </motion.div>

                <div className="flex flex-col gap-12 text-right">
                  {[1, 2].map((i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="p-6 rounded-2xl glass-panel border border-white/10 flex items-center gap-4 bg-black/40 relative z-10"
                    >
                      <div className="text-xs font-bold text-white uppercase tracking-widest">Facility {i === 1 ? 'North' : 'South'}</div>
                      <Building2 className="w-6 h-6 text-indigo-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Connection Lines (Static placeholder for logic) */}
                <svg className="absolute inset-0 w-full h-full -z-10 opacity-20 pointer-events-none">
                  <line x1="20%" y1="20%" x2="50%" y2="50%" stroke="white" strokeWidth="1" />
                  <line x1="20%" y1="80%" x2="50%" y2="50%" stroke="white" strokeWidth="1" />
                  <line x1="80%" y1="20%" x2="50%" y2="50%" stroke="white" strokeWidth="1" />
                  <line x1="80%" y1="80%" x2="50%" y2="50%" stroke="white" strokeWidth="1" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Frontend Engineering Section */}
        <section className="py-24 md:py-40 px-4 relative">
          <div className="container max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <SectionHeading 
                  label="Frontend Systems"
                  title="Architecting Operational UI"
                />
                <p className="fluid-p text-white/60 mb-8 mt-12">
                  Building an enterprise visitor platform requires a focus on workflow-heavy interfaces and real-time data synchronization. The frontend is architected as a collection of modular service layers, ensuring that security-critical actions remain consistent and performant across the entire organizational lifecycle.
                </p>
                <div className="space-y-6">
                  {[
                    { label: "Modular State Machine", icon: Cpu },
                    { label: "Real-Time Event Streams", icon: Zap },
                    { label: "Adaptive Component Library", icon: Layout }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-xl glass-panel border border-white/5">
                      <item.icon className="w-5 h-5 text-indigo-400" />
                      <span className="text-sm font-semibold text-white uppercase tracking-widest">{item.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              <div className="flex items-center justify-center">
                <div className="w-full max-w-md aspect-square rounded-[3rem] glass-panel border border-white/10 p-12 bg-indigo-500/5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(79,70,229,0.1),transparent_50%)]" />
                  <div className="relative z-10 grid grid-cols-2 gap-4">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="aspect-square rounded-2xl glass-panel border border-white/5 bg-black/40 flex items-center justify-center">
                        <BoxIcon className="w-8 h-8 text-white/10" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Engineering Challenges */}
        <section className="py-24 md:py-40 px-4 relative bg-black/20">
          <div className="container max-w-7xl mx-auto">
            <SectionHeading 
              label="Technical Depth"
              title="Engineering Challenges"
              align="left"
            />
            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
              {study.challenges.map((challenge, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative p-10 rounded-[2.5rem] glass-panel border border-white/5 bg-black/40 hover:bg-white/[0.02] transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <challenge.icon className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4 tracking-tight">{challenge.title}</h4>
                  <div className="space-y-6">
                    <div>
                      <div className="text-[10px] text-indigo-400 uppercase tracking-widest font-bold mb-2">The Problem</div>
                      <p className="text-xs text-white/50 leading-relaxed">{challenge.problem}</p>
                    </div>
                    <div>
                      <div className="text-[10px] text-emerald-400 uppercase tracking-widest font-bold mb-2">The Solution</div>
                      <p className="text-xs text-white/80 leading-relaxed font-medium">{challenge.solution}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* System Thinking Section */}
        <section className="py-24 md:py-40 px-4 relative">
          <div className="container max-w-7xl mx-auto">
            <SectionHeading 
              label="Philosophy"
              title="Designing Operationally Efficient Systems"
              align="center"
            />
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {study.principles.map((principle, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-[2rem] glass-panel border border-white/5 bg-black/40 relative overflow-hidden group"
                >
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <principle.icon className="w-8 h-8 text-indigo-400 mb-6" />
                  <h4 className="text-lg font-bold text-white mb-2">{principle.title}</h4>
                  <div className="text-xs text-indigo-400/60 font-bold mb-4 uppercase tracking-widest">{principle.philosophy}</div>
                  <p className="text-sm text-white/50 leading-relaxed mb-6">{principle.description}</p>
                  <div className="text-[10px] text-white/30 italic uppercase tracking-wider">&quot;{principle.mindset}&quot;</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Production Engineering Section */}
        <section className="py-24 md:py-40 px-4 relative bg-white/[0.01]">
          <div className="container max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: "Deployment", value: "Production", icon: Server },
                    { label: "Uptime", value: "99.9%", icon: Activity },
                    { label: "Sync", value: "Real-Time", icon: Zap },
                    { label: "Storage", value: "Distributed", icon: Database }
                  ].map((item, i) => (
                    <div key={i} className="p-6 rounded-2xl glass-panel border border-white/5 bg-black/40">
                      <item.icon className="w-5 h-5 text-indigo-400 mb-4" />
                      <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">{item.label}</div>
                      <div className="text-lg font-bold text-white">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-6 order-1 lg:order-2">
                <SectionHeading 
                  label="Engineering Standards"
                  title="Production Reliability"
                />
                <p className="fluid-p text-white/60 mb-8 mt-12">
                  Building for enterprise visitor operations means building for reliability. The platform is designed with operational continuity in mind, ensuring that physical security checkpoints remain functional even during peak organizational traffic or intermittent connectivity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <CTASection 
          title="Interested in building operational systems at scale?"
          subtitle="I enjoy building enterprise-grade operational platforms focused on workflow efficiency, usability, and scalable architecture."
        />
      </div>
    </PageWrapper>
  );
}

function BoxIcon({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    >
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}
