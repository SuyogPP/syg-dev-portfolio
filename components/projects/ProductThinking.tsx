"use client";

import { motion } from "motion/react";
import SectionHeading from "../case-studies/SectionHeading";
import { Brain, Sparkles, Activity, Layers, MousePointer2, Code } from "lucide-react";

export default function ProductThinking() {
  const principles = [
    {
      title: "Emotional UX",
      desc: "Building digital spaces that prioritize sentiment and human resonance over purely functional utility.",
      icon: Brain
    },
    {
      title: "Immersive Interaction",
      desc: "Architecting tactile, physics-based UI that creates a sense of digital presence and weight.",
      icon: MousePointer2
    },
    {
      title: "Storytelling Systems",
      desc: "Utilizing modern frontend architecture to guide users through complex informational and emotional narratives.",
      icon: Sparkles
    },
    {
      title: "Realtime Architecture",
      desc: "Developing low-latency event systems that enable immediate, shared digital experiences.",
      icon: Activity
    },
    {
      title: "Frontend Craftsmanship",
      desc: "Maintaining production-grade engineering standards while pushing the boundaries of visual design.",
      icon: Code
    },
    {
      title: "Meaningful Experience",
      desc: "Focusing on the 'why' behind every pixel to ensure a lasting impact on the final user.",
      icon: Layers
    }
  ];

  return (
    <section className="py-24 md:py-48 px-4 bg-white/[0.01] border-y border-white/5 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-500/5 to-transparent pointer-events-none" />
      
      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl mb-24">
          <SectionHeading 
            label="Approach"
            title="Personal Product Thinking"
          />
          <p className="text-xl text-white/50 leading-relaxed font-medium">
            Independent projects are my laboratory for exploring the intersection of technical excellence and human emotion. My approach is rooted in the belief that modern engineering should serve the narrative.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="p-10 rounded-[2.5rem] glass-panel border border-white/5 bg-black/40 group hover:border-white/20 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all duration-500">
                <item.icon size={28} className="text-white/40 group-hover:text-indigo-400 transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{item.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed font-medium">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Final Quote */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-32 text-center"
        >
          <div className="inline-block px-8 py-4 rounded-3xl glass-panel border border-white/5 bg-white/[0.02]">
             <p className="text-sm font-bold text-white/20 uppercase tracking-[0.4em]">
               Quality over quantity. Meaning over metrics.
             </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
