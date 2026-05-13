"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ProjectsPreview() {
  const projects = [
    {
      title: "Fintech Dashboard",
      impact: "Reduced data latency by 40%",
      tech: ["Next.js", "TypeScript", "Tailwind", "WebSockets"],
      color: "from-indigo-500/20 to-purple-500/20"
    },
    {
      title: "Logistics API Gateway",
      impact: "Handles 5M+ daily requests",
      tech: ["Node.js", "Express", "Redis", "Docker"],
      color: "from-cyan-500/20 to-blue-500/20"
    }
  ];

  return (
    <section id="projects" className="section-padding relative border-t border-white/[0.03] bg-[#020202]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-16 gap-6 text-center md:text-left">
          <div>
            <h2 className="text-xs md:text-sm font-semibold tracking-widest text-white/40 uppercase mb-3">Selected Projects</h2>
            <h3 className="fluid-h2 font-bold text-white tracking-tight">Recent Work</h3>
          </div>
          <Link href="/projects" className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors">
            <span className="font-medium text-sm md:text-base">View All Projects</span>
            <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        <div className="flex flex-col gap-6 md:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="group block relative rounded-3xl overflow-hidden glass-panel border-white/5"
            >
              {/* Animated Background - Subtle on mobile */}
              <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex flex-col md:flex-row min-h-[300px] md:min-h-[350px]">
                {/* Visual Side */}
                <div className="w-full md:w-5/12 lg:w-1/2 relative overflow-hidden bg-[#0a0a0a] border-b md:border-b-0 md:border-r border-white/5 flex items-center justify-center p-6 md:p-8">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-40 transition-opacity duration-700 blur-3xl`} />
                  
                  {/* Abstract placeholder for project visual */}
                  <div className="w-full max-w-[240px] md:max-w-xs aspect-[4/3] rounded-lg border border-white/10 bg-white/5 shadow-2xl overflow-hidden relative group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    <div className="absolute top-0 inset-x-0 h-4 md:h-6 border-b border-white/10 flex items-center px-2 md:px-3 gap-1 md:gap-1.5">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white/20" />
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white/20" />
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white/20" />
                    </div>
                    <div className="p-3 md:p-4 mt-4 md:mt-6 flex flex-col gap-2 md:gap-3">
                      <div className="h-3 md:h-4 w-3/4 bg-white/10 rounded" />
                      <div className="h-3 md:h-4 w-1/2 bg-white/10 rounded" />
                      <div className="h-16 md:h-24 w-full bg-white/5 rounded mt-2" />
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-7/12 lg:w-1/2 p-6 md:p-10 lg:p-16 flex flex-col justify-center relative z-10">
                  <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                    {project.tech.map(t => (
                      <span key={t} className="px-2 md:px-3 py-1 text-[10px] md:text-xs font-medium text-white/50 bg-white/5 rounded-full border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <h4 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 md:mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h4>
                  
                  <p className="text-white/60 text-sm md:text-lg mb-6 md:mb-8">
                    {project.impact}
                  </p>

                  <div className="mt-auto">
                    <span className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-white/80 group-hover:text-white">
                      View Details
                      <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}