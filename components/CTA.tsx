"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="relative py-24 md:py-40 overflow-hidden bg-[#050505]">
      {/* Immersive Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[300px] md:h-[400px] bg-gradient-to-r from-red-600/20 via-rose-500/20 to-orange-500/20 rounded-[100%] blur-[80px] md:blur-[100px] pointer-events-none" />
      
      {/* Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6 md:mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs md:text-sm font-medium text-white/80">Available for Enterprise Roles</span>
          </div>

          <h2 className="fluid-h1 font-bold text-white tracking-tight mb-6 md:mb-8 leading-tight">
            Let&apos;s build something <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">impactful.</span>
          </h2>
          
          <p className="text-base md:text-xl text-white/50 mb-8 md:mb-12 max-w-xl mx-auto px-4">
            Looking for a Senior Engineer to scale your architecture or lead your next major initiative? 
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="mailto:suyogsanjeevanpp@gmail.com"
              className="btn-primary w-full sm:w-auto"
            >
              <Mail size={18} />
              <span>Say Hello</span>
            </Link>

            <Link
              href="/case-studies"
              className="btn-secondary w-full sm:w-auto group"
            >
              <span>Explore Architecture</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform text-white/70" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}