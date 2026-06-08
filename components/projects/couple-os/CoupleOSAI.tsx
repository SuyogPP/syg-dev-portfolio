"use client";

import { motion } from "motion/react";
import SectionHeading from "@/components/case-studies/SectionHeading";
import { MessageCircle, Brain, Heart } from "lucide-react";

export default function CoupleOSAI() {
  const features = [
    { title: "Memory Awareness", icon: Brain, desc: "AI that remembers shared history, preferences, and emotional context." },
    { title: "Sentiment Analysis", icon: Heart, desc: "Intelligently detecting emotional shifts to provide supportive interactions." },
    { title: "Conversational History", icon: MessageCircle, desc: "A natural dialogue system that evolves through past conversations." }
  ];

  return (
    <section className="py-24 md:py-40 px-4 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-square rounded-[3rem] glass-panel border border-white/10 p-12 bg-indigo-500/5 relative overflow-hidden flex flex-col justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-rose-500/10" />
              
              {/* Animated AI Nodes */}
              <div className="space-y-6 relative z-10">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.2 }}
                    className="p-6 rounded-2xl glass-panel border border-white/5 bg-black/40 flex items-center gap-4"
                  >
                    <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                    <div className="h-2 w-32 md:w-64 bg-white/10 rounded-full" />
                  </motion.div>
                ))}
              </div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full border border-indigo-500/10"
              />
            </div>
            {/* Background Glow */}
            <div className="absolute -inset-20 bg-rose-500/5 blur-[120px] rounded-full -z-10" />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <SectionHeading 
              label="Intelligence"
              title="Emotionally Aware AI Ecosystem"
            />
            <p className="text-lg text-white/50 mb-12 leading-relaxed font-medium">
              CoupleOS integrates a specialized AI layer designed for emotional resonance. It doesn&apos;t just process data; it understands context, recalls past shared moments, and provides a conversational experience that feels deeply personal and supportive.
            </p>

            <div className="grid grid-cols-1 gap-8">
              {features.map((feature, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                    <feature.icon className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <h5 className="text-lg font-bold text-white mb-2 tracking-tight">{feature.title}</h5>
                    <p className="text-sm text-white/40 leading-relaxed">{feature.desc}</p>
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
