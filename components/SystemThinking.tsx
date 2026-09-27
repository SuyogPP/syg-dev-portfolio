"use client";

import { motion } from "motion/react";
import { Layers, Zap, PenTool } from "lucide-react";

export default function SystemThinking() {
  const philosophies = [
    {
      title: "Scalability",
      icon: <Layers size={20} className="text-rose-500" />,
      desc: "Architecting systems that gracefully handle growth from day one, using stateless services and horizontal scaling principles."
    },
    {
      title: "Performance",
      icon: <Zap size={20} className="text-red-400" />,
      desc: "Relentlessly optimizing the critical path. Milliseconds matter when serving thousands of concurrent enterprise users."
    },
    {
      title: "Maintainability",
      icon: <PenTool size={20} className="text-amber-500" />,
      desc: "Writing code for the next engineer. Emphasizing clean boundaries, robust types, and comprehensive documentation."
    }
  ];

  return (
    <section className="section-padding relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Header Side */}
          <div className="w-full lg:w-1/3 text-center lg:text-left">
            <div className="lg:sticky lg:top-32">
              <h2 className="text-xs md:text-sm font-semibold tracking-widest text-rose-500 uppercase mb-3">Philosophy</h2>
              <h3 className="fluid-h2 font-bold text-white tracking-tight leading-tight mb-6">
                How I Build <br className="hidden lg:block" />Systems
              </h3>
              <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                Beyond writing code, I focus on the long-term health and architectural integrity of the platforms I engineer.
              </p>
            </div>
          </div>

          {/* Cards Side */}
          <div className="w-full lg:w-2/3 flex flex-col gap-4 md:gap-6">
            {philosophies.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group p-6 md:p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-300 flex flex-col sm:flex-row gap-4 md:gap-6 items-start"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">{item.title}</h4>
                  <p className="text-white/60 text-sm md:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}