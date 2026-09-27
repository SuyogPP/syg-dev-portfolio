"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { CaseStudy } from "@/data/caseStudies";
import { ArrowUpRight } from "lucide-react";

interface CaseStudyItemProps {
  caseStudy: CaseStudy;
  featured?: boolean;
}

export default function CaseStudyItem({ caseStudy, featured = false }: CaseStudyItemProps) {
  if (!caseStudy) return null;

  const gridClass = featured ? 'col-span-full' : '';
  const MainIcon = caseStudy.metrics && caseStudy.metrics[0] ? caseStudy.metrics[0].icon : null;

  return (
    <div className={`group relative ${gridClass}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="h-full"
      >
        <Link href={`/case-studies/${caseStudy.slug}`}>
          <div className={`relative overflow-hidden rounded-[2.5rem] glass-panel border-white/5 transition-all duration-500 hover:border-rose-500/30 hover:shadow-[0_0_80px_rgba(244,63,94,0.15)] ${featured ? 'min-h-[500px] flex flex-col md:flex-row' : 'flex flex-col h-full'}`}>
            
            <div className={`${featured ? 'w-full md:w-3/5' : 'w-full aspect-[16/10]'} relative overflow-hidden bg-black/40`}>
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-rose-500/10" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_70%)]" />
              
              <div className="absolute inset-0 flex items-center justify-center p-12 pointer-events-none">
                <div className="w-full h-full border border-white/5 rounded-3xl relative opacity-40 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-rose-500/50 to-transparent blur-[1px]" />
                  <div className="absolute top-1/4 left-1/4 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {MainIcon && (
                      <MainIcon className="w-5 h-5 text-rose-400" />
                    )}
                  </div>
                </div>
              </div>

              <div className="absolute top-6 left-6 px-4 py-2 rounded-full glass-panel border-white/10 text-[10px] font-bold uppercase tracking-widest text-rose-400">
                {caseStudy.category}
              </div>
            </div>

            <div className={`p-8 md:p-12 flex flex-col justify-between ${featured ? 'w-full md:w-2/5' : 'w-full flex-grow'}`}>
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className={`${featured ? 'text-4xl' : 'text-2xl'} font-bold text-white tracking-tight leading-tight group-hover:text-rose-400 transition-colors`}>
                    {caseStudy.title}
                  </h3>
                  <div className="p-3 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 group-hover:bg-rose-500/10 transition-all">
                    <ArrowUpRight className="w-5 h-5 text-rose-400" />
                  </div>
                </div>
                <p className="text-white/50 text-sm md:text-base leading-relaxed mb-8 line-clamp-3">
                  {caseStudy.description}
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  {caseStudy.metrics && caseStudy.metrics.slice(0, 2).map((m, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-xl font-bold text-white">{m.value}</span>
                      <span className="text-[10px] uppercase tracking-widest text-white/30">{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-8">
                  {caseStudy.techStack && caseStudy.techStack.slice(0, 3).map((tech) => (
                    <span key={tech.name} className="text-[8px] font-mono px-2 py-1 rounded bg-white/5 text-white/40 uppercase">
                      {tech.name}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-2 text-sm font-bold text-white group-hover:gap-4 transition-all">
                  Explore Case Study
                  <ArrowUpRight className="w-4 h-4 text-rose-400" />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    </div>
  );
}
