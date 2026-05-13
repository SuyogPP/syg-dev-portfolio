"use client";

import { motion } from "motion/react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  label?: string;
  align?: "left" | "center";
}

export default function SectionHeading({ title, subtitle, label, align = "left" }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`max-w-3xl mb-12 md:mb-20 ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {label && (
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-indigo-400 mb-4 block">
          {label}
        </span>
      )}
      <h2 className="fluid-h2 font-bold text-white mb-6">
        {title}
      </h2>
      {subtitle && (
        <p className="text-white/60 text-lg md:text-xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
