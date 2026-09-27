"use client";

import { motion } from "motion/react";
import SectionHeading from "@/components/case-studies/SectionHeading";
import { History, Heart, Camera } from "lucide-react";

export default function CoupleOSTimeline() {
  const milestones = [
    { title: "First Interaction", date: "June 2018", icon: Heart, color: "text-pink-400" },
    { title: "The Proposal", date: "Dec 2021", icon: Camera, color: "text-rose-400" },
    { title: "Digital Union", date: "Present", icon: History, color: "text-emerald-400" }
  ];

  return (
    <section className="py-24 md:py-40 px-4 relative bg-black/20 overflow-hidden">
      <div className="container max-w-7xl mx-auto">
        <SectionHeading 
          label="The Memory Engine"
          title="Infinite Memory Timeline"
          subtitle="A chronological, multimedia-enriched storytelling system that scales as the relationship grows."
          align="center"
        />

        <div className="mt-24 relative">
          {/* Central Timeline Cable */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-rose-500/30 to-transparent hidden md:block" />

          <div className="space-y-24 md:space-y-40">
            {milestones.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center gap-12 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Milestone Node */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-rose-500 z-10 hidden md:block shadow-[0_0_20px_rgba(244,63,94,0.5)]" />

                {/* Content Card */}
                <div className="flex-1 w-full">
                  <div className="p-8 md:p-12 rounded-[3rem] glass-panel border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500 group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform ${item.color}`}>
                        <item.icon size={24} />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white/40 uppercase tracking-widest">{item.date}</div>
                        <h4 className="text-2xl font-bold text-white tracking-tight">{item.title}</h4>
                      </div>
                    </div>

                    <p className="text-sm text-white/50 leading-relaxed mb-8">
                      Experience the moment through high-fidelity multimedia preservation, AI-generated sentimental context, and interactive exploration layers.
                    </p>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 animate-pulse" />
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 animate-pulse" />
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Spacer for reverse layout */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decorative Grid hint */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[length:40px_40px]" />
        </div>
      </div>
    </section>
  );
}
