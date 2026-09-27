"use client";

import { motion, AnimatePresence } from "motion/react";
import NavLinks from "./NavLinks";
import NavCTA from "./NavCTA";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[55] bg-black/80 backdrop-blur-3xl md:hidden flex flex-col items-center justify-center"
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-red-500/10 blur-[100px] rounded-full animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-rose-500/10 blur-[100px] rounded-full animate-pulse delay-1000" />
          </div>

          <div className="relative z-10 flex flex-col items-center gap-12 w-full px-6">
            <NavLinks 
              mobile 
              onLinkClick={onClose} 
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <NavCTA mobile onClick={onClose} />
            </motion.div>
          </div>

          {/* Bottom attribution */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="absolute bottom-12 text-white/20 text-xs font-mono uppercase tracking-[0.3em]"
          >
            syg.dev / 2026
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
