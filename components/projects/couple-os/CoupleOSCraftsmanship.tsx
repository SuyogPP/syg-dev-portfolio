"use client";

import { motion } from "motion/react";
import SectionHeading from "@/components/case-studies/SectionHeading";
import { Sparkles, Palette, Zap, Layout } from "lucide-react";

export default function CoupleOSCraftsmanship() {
  return (
    <section className="py-24 md:py-40 px-4 relative bg-black/20">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
             <div className="aspect-video rounded-[3rem] glass-panel border border-white/10 bg-rose-500/5 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-rose-500/10" />
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="p-12 rounded-[2rem] glass-panel border border-white/5 bg-black/40 text-center"
                >
                   <Sparkles className="w-12 h-12 text-rose-400 mx-auto mb-4" />
                   <div className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">Craftsmanship Detail</div>
                </motion.div>
             </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <SectionHeading 
              label="The Craft"
              title="Frontend Engineering Excellence"
            />
            <p className="text-lg text-white/50 mb-12 leading-relaxed font-medium">
              Every interaction in CoupleOS is a study in frontend excellence. From the physics-based motion systems to the complex state management required for realtime emotional synchronization, the project demonstrates a high level of technical maturity.
            </p>

            <div className="space-y-8">
              {[
                { title: "Design Maturity", desc: "A custom design system built with emotional intelligence at the forefront.", icon: Palette },
                { title: "Technical Performance", desc: "Optimized rendering pipelines for complex cinematic transitions.", icon: Zap },
                { title: "Scalable Architecture", desc: "A modular, production-grade frontend structure that supports growth.", icon: Layout }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                    <item.icon className="w-5 h-5 text-rose-400" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white uppercase tracking-wider mb-2">{item.title}</h5>
                    <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
