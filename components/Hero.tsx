"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MagneticElement } from "./effects/MagneticElement";
import { useRef } from "react";
import { useParallax } from "@/hooks/useParallax";
import { useDistortionField } from "@/hooks/useDistortionField";
import RidgeParallax from "./originkit/ui/ridge-parallax-custom-style";

export default function Hero() {
  const rightSectionRef = useRef<HTMLDivElement>(null);
  const coreGraphicRef = useRef<HTMLDivElement>(null);

  useParallax(rightSectionRef, 0.2);
  useDistortionField(coreGraphicRef, { radius: 200, maxTranslate: 6, maxTilt: 1.5 });

  return (
    <section className="relative min-h-screen flex items-center pt-24 md:pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <RidgeParallax />
      </div>


      {/* Background Subtle Glows */}
      {/* <div className="absolute top-1/4 -left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-red-500/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-rose-500/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" /> */}

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              <span className="text-xs md:text-sm font-medium text-white/80">Available for new opportunities</span>
            </motion.div>

            <h2 className="fluid-h2 font-bold tracking-tight mb-8">
              Senior Fullstack <br className="hidden sm:block" />
              <span className="text-gradient">Engineer</span> building <br className="hidden sm:block" />
              scalable systems.
            </h2>

            <p className="fluid-p text-white/60 mb-10 max-w-xl leading-relaxed">
              Designing production-grade architectures that scale. Specialized in{" "}
              <span className="text-white">React, Next.js, and Node.js</span> with a deep
              focus on enterprise system design serving <span className="text-white">2000+ users</span>.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <MagneticElement strength={0.25} radius={100}>
                <Link
                  href="/case-studies"
                  className="btn-primary w-full sm:w-auto group"
                >
                  <span>View Case Studies</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </MagneticElement>

              <MagneticElement strength={0.25} radius={100}>
                <Link
                  href="/resume"
                  className="btn-secondary w-full sm:w-auto"
                >
                  View Experience
                </Link>
              </MagneticElement>
            </div>
          </motion.div>

          {/* Right Visual Area */}
          <motion.div
            ref={rightSectionRef}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative h-[400px] md:h-[600px] flex items-center justify-center lg:block"
          >
            <div className="relative w-full max-w-md mx-auto lg:max-w-none lg:inset-0 flex items-center justify-center">
              {/* Core Architecture Graphic – Distortion field applied */}
              <motion.div
                ref={coreGraphicRef}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-56 h-64 md:w-72 md:h-80 glass-panel rounded-2xl flex flex-col p-4 md:p-6 z-20"
              >
                <div className="flex justify-between items-center mb-6">
                  <div className="w-10 h-3 md:w-12 md:h-4 bg-white/20 rounded-sm" />
                  <div className="w-3 h-3 md:w-4 md:h-4 rounded-full border border-white/20" />
                </div>
                <div className="space-y-3 md:space-y-4">
                  <div className="h-1.5 md:h-2 w-3/4 bg-white/10 rounded-full" />
                  <div className="h-1.5 md:h-2 w-1/2 bg-white/10 rounded-full" />
                  <div className="h-1.5 md:h-2 w-5/6 bg-white/10 rounded-full" />
                </div>
                <div className="mt-auto h-16 md:h-24 rounded-lg bg-gradient-to-br from-white/5 to-white/[0.01] border border-white/10 flex items-center justify-center">
                  <div className="text-white/40 font-mono text-[10px] md:text-xs">System OK</div>
                </div>
              </motion.div>

              {/* Floating Element 1 */}
              <motion.div
                animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-4 md:top-20 -right-4 md:right-10 w-36 md:w-48 p-3 md:p-4 glass-panel rounded-xl z-30"
              >
                <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-400" />
                  <div className="text-[10px] md:text-xs text-white/60">Node.js API</div>
                </div>
                <div className="text-sm md:text-lg font-semibold text-white">99.9% Uptime</div>
              </motion.div>

              {/* Floating Element 2 */}
              <motion.div
                animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -bottom-4 md:bottom-20 -left-4 md:left-0 w-44 md:w-56 p-3 md:p-4 glass-panel rounded-xl z-10"
              >
                <div className="flex items-center justify-between mb-2 md:mb-3">
                  <div className="text-[10px] md:text-xs text-white/60">Active Users</div>
                  <div className="text-[10px] md:text-xs font-mono text-rose-400">+24%</div>
                </div>
                <div className="h-6 md:h-8 flex items-end gap-1">
                  {[40, 60, 45, 80, 50, 90, 70].map((h, i) => (
                    <div key={i} className="flex-1 bg-white/20 rounded-t-sm" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </motion.div>

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden md:block">
                <path d="M 150 300 Q 250 150 400 200" fill="none" stroke="url(#glow)" strokeWidth="2" strokeDasharray="4 4" className="opacity-30" />
                <path d="M 200 450 Q 350 400 450 450" fill="none" stroke="url(#glow)" strokeWidth="2" strokeDasharray="4 4" className="opacity-30" />
                <defs>
                  <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#dc2626" />
                    <stop offset="50%" stopColor="#e11d48" />
                    <stop offset="100%" stopColor="#f43f5e" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}