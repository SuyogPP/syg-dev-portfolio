"use client";

import { motion } from "motion/react";
import { CaseStudy } from "@/data/caseStudies";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface CaseStudyListingBlockProps {
  study: CaseStudy;
  reversed?: boolean;
  visual: ReactNode;
}

export default function CaseStudyListingBlock({ study, reversed, visual }: CaseStudyListingBlockProps) {
  return (
    <div className="py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center ${reversed ? 'lg:direction-rtl' : ''}`}>
          
          {/* Content Column */}
          <div className={`lg:col-span-6 flex flex-col justify-center ${reversed ? 'lg:order-2' : 'lg:order-1'}`}>
            <div className="flex items-center gap-3 mb-8">
              <div className="px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-[10px] font-bold uppercase tracking-widest">
                Enterprise Platform
              </div>
              <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest">
                {study.category}
              </div>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
              {study.title.split(" ").slice(0, -1).join(" ")} <span className="text-gradient">{study.title.split(" ").pop()}</span>
            </h2>

            <p className="text-lg md:text-xl text-white/50 mb-10 leading-relaxed font-medium">
              {study.subtitle}
            </p>

            {/* Impact/Scale Strip */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12 py-8 border-y border-white/5">
              {study.metrics.slice(0, 3).map((metric, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <div className="text-2xl font-bold text-white tracking-tight">{metric.value}</div>
                  <div className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">{metric.label}</div>
                </div>
              ))}
            </div>

            {/* Tech Ecosystem */}
            <div className="flex flex-wrap gap-2 mb-12">
              {study.techStack.slice(0, 4).map((tech, i) => (
                <span key={i} className="text-[10px] px-3 py-1 rounded-full bg-white/5 border border-white/5 text-white/40 font-mono tracking-tighter">
                  {tech.name}
                </span>
              ))}
            </div>

            <Link
              href={`/case-studies/${study.slug}`}
              className="btn-primary w-fit group"
            >
              <span>Explore Case Study</span>
              <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </div>

          {/* Visual Column */}
          <div className={`lg:col-span-6 relative ${reversed ? 'lg:order-1' : 'lg:order-2'}`}>
            <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-[3rem] overflow-hidden glass-panel border border-white/5 bg-white/[0.01] flex items-center justify-center p-8 md:p-12">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(244,63,94,0.05),transparent_70%)]" />
              {visual}
            </div>
            
            {/* Background Glow */}
            <div className="absolute -inset-10 bg-rose-500/5 blur-[120px] rounded-full -z-10" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
