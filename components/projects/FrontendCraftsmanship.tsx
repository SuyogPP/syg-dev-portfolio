"use client";

import { motion } from "motion/react";
import { Layout, Palette, MousePointer2, Smartphone, Cpu, Lock } from "lucide-react";
import SectionHeading from "../case-studies/SectionHeading";

export default function FrontendCraftsmanship() {
  const pillars = [
    { title: "Motion Systems", icon: MousePointer2, desc: "Building fluid, cinematic transitions that guide the user through the project's architectural story." },
    { title: "Design Engineering", icon: Palette, desc: "Bridging the gap between high-fidelity design and production-grade frontend implementation." },
    { title: "Immersive UI", icon: Layout, desc: "Architecting glassmorphism surfaces and lighting systems for a premium product feel." },
    { title: "Responsive Scale", icon: Smartphone, desc: "Ensuring complex operational layouts collapse gracefully without losing technical integrity." },
  ];

  return (
    <section className="py-24 md:py-40 px-4 relative">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <SectionHeading 
              label="Engineering Maturity"
              title="Frontend Engineering & UX Craftsmanship"
            />
            <p className="text-lg text-white/50 mb-12 leading-relaxed">
              My approach to independent builds focuses on the intersection of technical excellence and design maturity. I believe every independent project is an opportunity to explore new architectural paradigms and refine interaction systems.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pillars.map((pillar, i) => (
                <div key={i} className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center">
                    <pillar.icon size={20} className="text-rose-400" />
                  </div>
                  <h5 className="text-sm font-bold text-white uppercase tracking-wider">{pillar.title}</h5>
                  <p className="text-xs text-white/40 leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-[3rem] glass-panel border border-white/10 p-12 bg-rose-500/5 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(244,63,94,0.1),transparent_50%)]" />
              <div className="relative z-10 grid grid-cols-2 gap-4">
                {[Cpu, Lock, Layout, Palette].map((Icon, i) => (
                  <motion.div
                    key={i}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                    className="aspect-square w-24 rounded-2xl glass-panel border border-white/5 bg-black/40 flex items-center justify-center"
                  >
                    <Icon size={32} className="text-rose-400/40" />
                  </motion.div>
                ))}
              </div>
            </div>
            {/* Background Glow */}
            <div className="absolute -inset-20 bg-rose-500/10 blur-[120px] rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
