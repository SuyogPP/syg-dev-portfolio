"use client";

import { motion } from "motion/react";
import SectionHeading from "@/components/case-studies/SectionHeading";

export default function CoupleOSVision() {
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
              label="The Core Intent"
              title="Emotional Continuity & Memory Preservation"
            />
            <div className="space-y-6 text-lg text-white/50 leading-relaxed font-medium">
              <p>
                CoupleOS was conceived not as a tool, but as a digital emotional ecosystem. In a world of fleeting interactions, it serves as a persistent space for preserving the depth of a shared life.
              </p>
              <p>
                The platform was built as a highly personalized experience for my wife, focusing on the philosophy that memories are the foundation of relationship storytelling. By digitizing milestones and emotional milestones, we create a living archive that evolves with us.
              </p>
              <p>
                Every interaction, from AI-assisted memory retrieval to realtime timeline updates, is designed with emotional intelligence at its core.
              </p>
            </div>
          </motion.div>

          <div className="relative">
            <div className="aspect-square rounded-[3rem] glass-panel border border-white/10 p-12 bg-white/[0.01] relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-indigo-500/10" />
              
              <div className="relative z-10 text-center">
                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-48 h-48 rounded-full bg-pink-500/10 border border-pink-500/20 blur-xl absolute -top-12 -left-12"
                />
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="w-64 h-64 rounded-full bg-indigo-500/10 border border-indigo-500/20 blur-2xl absolute -bottom-24 -right-24"
                />
                
                <div className="text-sm font-bold text-white/40 uppercase tracking-[0.3em] mb-4">Vision Statement</div>
                <div className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight italic">
                  &quot;Preserving the texture of our life through intelligent, atmospheric engineering.&quot;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
