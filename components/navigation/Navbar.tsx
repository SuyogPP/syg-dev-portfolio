"use client";

import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import NavLinks from "./NavLinks";
import NavCTA from "./NavCTA";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-[60] flex justify-center px-4 pointer-events-none transition-all duration-500 pt-4 md:pt-6"
      >
        <div
          className={`pointer-events-auto flex items-center justify-between px-6 py-2.5 rounded-full transition-all duration-500 w-full max-w-5xl border ${
            scrolled || isMobileMenuOpen
              ? "glass-panel shadow-[0_0_40px_rgba(0,0,0,0.3)] border-white/10 py-2"
              : "bg-transparent border-transparent"
          }`}
        >
          {/* Logo */}
          <Link 
            href="/" 
            className="text-white font-bold text-xl tracking-tight hover:scale-105 transition-transform z-[70]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            syg.<span className="text-white/40 font-medium">dev</span>
          </Link>

          {/* Desktop Nav */}
          <NavLinks className="hidden md:flex" />

          {/* Desktop CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <NavCTA className="hidden sm:inline-flex" />

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2.5 z-[70] hover:bg-white/5 rounded-full transition-all relative group"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={24} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={24} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
}
