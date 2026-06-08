"use client";

import { motion } from "motion/react";
import SectionHeading from "@/components/case-studies/SectionHeading";
import { MousePointer2, Layers, Zap, Layout } from "lucide-react";

export default function CoupleOSUXEngineering() {
  const pillars = [
    { title: "Cinematic Motion", icon: Zap, desc: "Fluid transitions that create a sense of digital atmosphere." },
    { title: "Layered Depth", icon: Layers, desc: "A complex glassmorphism architecture for spatial storytelling." },
    { title: "Tactile Interactions", icon: MousePointer2, desc: "Responses that feel alive and emotionally resonant." },
    { title: "Scalable Layouts", icon: Layout, desc: "A responsive system that maintains emotional intent across devices." }
  ];

  return (
    <section className="py-24 md:py-40 px-4 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeading 
              label="Engineering"
              title="Immersive UX Engineering"
            />
            <p className="text-lg text-white/50 mb-12 leading-relaxed font-medium">
              The frontend of CoupleOS is a testament to the power of immersive design engineering. Every pixel and animation is calibrated to contribute to the platform&apos;s emotional atmosphere, utilizing advanced interaction systems to build a sense of digital presence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pillars.map((pillar, i) => (
                <div key={i} className="space-y-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <pillar.icon size={20} className="text-indigo-400" />
                  </div>
                  <h5 className="text-sm font-bold text-white uppercase tracking-wider">{pillar.title}</h5>
                  <p className="text-xs text-white/40 leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative">
            <div className="aspect-square rounded-[3.5rem] glass-panel border border-white/10 p-1 bg-white/[0.01] overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-transparent to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="w-full h-full bg-black/60 rounded-[3.4rem] flex items-center justify-center p-12">
                <div className="relative w-full h-full border border-white/5 rounded-3xl overflow-hidden flex flex-col items-center justify-center gap-12">
                   <div className="flex gap-4">
                     {[...Array(3)].map((_, i) => (
                       <motion.div
                         key={i}
                         animate={{ scale: [1, 1.1, 1] }}
                         transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                         className="w-16 h-16 rounded-2xl glass-panel border border-white/10 bg-indigo-500/10"
                       />
                     ))}
                   </div>
                   <div className="w-3/4 h-2 bg-indigo-500/20 rounded-full relative overflow-hidden">
                     <motion.div
                       animate={{ x: ["-100%", "100%"] }}
                       transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                       className="absolute inset-0 bg-indigo-500"
                     />
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
