"use client";

import Link from "next/link";
import { motion } from "motion/react";

interface NavCTAProps {
  onClick?: () => void;
  className?: string;
  mobile?: boolean;
}

export default function NavCTA({ onClick, className = "", mobile = false }: NavCTAProps) {
  return (
    <Link
      href="/#contact"
      onClick={onClick}
      className={`relative inline-flex items-center justify-center overflow-hidden transition-all duration-500 group ${
        mobile 
          ? "px-10 py-4 text-xl font-bold bg-white text-black rounded-full" 
          : "px-6 py-2.5 text-sm font-medium text-white bg-white/5 border border-white/10 rounded-full hover:border-white/20"
      } ${className}`}
    >
      <span className="relative z-10">Let&apos;s Talk</span>
      
      {!mobile && (
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
          <motion.div
            className="absolute inset-0 z-0 bg-white/5"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
        </>
      )}
    </Link>
  );
}
