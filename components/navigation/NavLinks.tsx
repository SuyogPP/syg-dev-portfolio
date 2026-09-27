"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Projects", href: "/projects" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/#contact" },
];

interface NavLinksProps {
  onLinkClick?: () => void;
  className?: string;
  mobile?: boolean;
}

export default function NavLinks({ 
  onLinkClick, 
  className = "", 
  mobile = false 
}: NavLinksProps) {
  const pathname = usePathname();

  return (
    <nav className={`flex ${mobile ? "flex-col items-center gap-8" : "items-center gap-8"} ${className}`}>
      {NAV_LINKS.map((link) => {
        const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
        
        return (
          <Link
            key={link.name}
            href={link.href}
            onClick={onLinkClick}
            className={`relative group transition-colors duration-300 ${
              mobile ? "text-4xl font-bold" : "text-sm font-medium"
            } ${isActive ? "text-white" : "text-white/60 hover:text-white"}`}
          >
            {link.name}
            
            {/* Desktop Active Indicator */}
            {!mobile && isActive && (
              <motion.span
                layoutId="activeNav"
                className="absolute -bottom-1 left-0 right-0 h-[2px] bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}

            {/* Hover Indicator */}
            {!mobile && !isActive && (
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white/40 transition-all duration-300 group-hover:w-full" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
