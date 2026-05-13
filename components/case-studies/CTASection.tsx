"use client";

import { motion } from "motion/react";
import { Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

export default function CTASection({ 
  title = "Interested in building scalable systems together?",
  subtitle = "I'm currently open to new opportunities to lead engineering teams and architect complex production systems."
}: CTASectionProps) {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="fluid-h1 font-bold text-white mb-8 tracking-tight">
            {title}
          </h2>
          
          <p className="text-white/50 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="mailto:suyogsanjeevanpp@gmail.com"
              className="group relative px-10 py-5 bg-white text-black rounded-full font-bold flex items-center gap-3 hover:scale-105 transition-transform"
            >
              <Mail size={18} />
              Say Hello
            </Link>
            
            <Link
              href="/#contact"
              className="group flex items-center gap-2 text-white font-semibold hover:text-indigo-400 transition-colors"
            >
              Discuss Architecture
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
