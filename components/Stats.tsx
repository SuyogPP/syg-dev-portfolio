"use client";

import { motion } from "motion/react";

export default function Stats() {
  const items = [
    "Built systems serving 2000+ users",
    "Fullstack",
    "System Design",
    "DevOps"
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-y-6 gap-x-4 md:gap-x-8 p-6 md:p-8 rounded-2xl glass-panel max-w-5xl mx-auto"
        >
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-4 md:gap-8 shrink-0">
              <span className="text-xs md:text-base font-medium text-white/80 tracking-wide uppercase">
                {item}
              </span>
              {index < items.length - 1 && (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="w-2 h-2 rounded-sm border border-white/40 rotate-45 hidden sm:block"
                />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}