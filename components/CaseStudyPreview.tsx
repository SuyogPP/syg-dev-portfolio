"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Cpu, Users, Lock, Smartphone } from "lucide-react";

export default function CaseStudyPreview() {
  const features = [
    { icon: <Users size={16} />, text: "Real-time attendance" },
    { icon: <Cpu size={16} />, text: "Multi-tenant architecture" },
    { icon: <Lock size={16} />, text: "Enterprise authentication" },
    { icon: <Smartphone size={16} />, text: "Hardware integrations" },
  ];

  return (
    <section id="case-study" className="section-padding relative">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-xs md:text-sm font-semibold tracking-widest text-cyan-400 uppercase mb-3">Featured Work</h2>
          <h3 className="fluid-h2 font-bold text-white tracking-tight">Enterprise Scale. <br className="hidden md:block"/>Production Grade.</h3>
        </div>

        <Link href="/case-studies/workforce-management" className="block group">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="relative p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-transparent overflow-hidden transition-transform duration-500 hover:md:-translate-y-2 group-hover:shadow-[0_20px_80px_-20px_rgba(34,211,238,0.15)]"
          >
            {/* Animated Glow Border - Subtle on mobile */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl md:blur-2xl" />
            
            <div className="relative bg-[#0a0a0a] rounded-xl overflow-hidden border border-white/5 flex flex-col lg:flex-row">
              
              {/* Content Side */}
              <div className="flex-1 p-6 md:p-10 lg:p-16 flex flex-col justify-center relative z-10">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
                
                <div className="relative z-10">
                  <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6 leading-tight">
                    Enterprise Workforce <br className="hidden sm:block" />Management Platform
                  </h4>
                  
                  <p className="text-white/60 text-base md:text-lg mb-8 md:mb-10 max-w-lg leading-relaxed">
                    A highly scalable platform engineered for enterprise operations. 
                    Built to handle complex organizational structures and real-time data flow.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 md:mb-12">
                    {features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 text-white/70">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                          {feature.icon}
                        </div>
                        <span className="text-xs md:text-sm font-medium">{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="inline-flex items-center gap-2 text-white font-semibold group/btn text-sm md:text-base">
                    <span>Explore Case Study</span>
                    <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1 text-cyan-400" />
                  </div>
                </div>
              </div>

              {/* Visual Side - Simplified/Reduced on mobile */}
              <div className="w-full lg:w-[45%] bg-[#0f0f0f] relative overflow-hidden border-t lg:border-t-0 lg:border-l border-white/5 min-h-[300px] md:min-h-[400px]">
                {/* Abstract Architecture UI */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="w-full max-w-[280px] md:max-w-sm aspect-square relative">
                    <motion.div 
                      className="absolute inset-0 border border-white/10 rounded-full"
                      animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div 
                      className="absolute inset-6 md:inset-8 border border-white/5 rounded-full border-dashed"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    />
                    
                    {/* Core Hub */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-indigo-500/20 to-cyan-400/20 rounded-2xl border border-white/20 backdrop-blur-md flex items-center justify-center shadow-[0_0_40px_rgba(34,211,238,0.2)]">
                      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/20 animate-pulse" />
                    </div>

                    {/* Nodes - Reduced for mobile */}
                    {[0, 120, 240].map((deg, i) => (
                      <motion.div
                        key={i}
                        className="absolute top-1/2 left-1/2 w-8 h-8 md:w-12 md:h-12 -ml-4 md:-ml-6 -mt-4 md:-mt-6 bg-[#111] border border-white/10 rounded-lg md:rounded-xl flex items-center justify-center shadow-lg"
                        style={{
                          transform: `rotate(${deg}deg) translateX(80px) md:translateX(120px) rotate(-${deg}deg)`,
                        }}
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                      >
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-purple-400 rounded-full" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </Link>
      </div>
    </section>
  );
}