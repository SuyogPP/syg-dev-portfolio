"use client";

import { motion } from "motion/react";
import { Download, ExternalLink, Mail, Globe, Code } from "lucide-react";
import { RESUME_DATA } from "@/data/resume";
import Link from "next/link";

export default function ResumeActionPanel() {
  const actions = [
    { 
      label: "Download Resume", 
      icon: Download, 
      href: RESUME_DATA.contact.resumePdf, 
      download: "Suyog_P_Resume.pdf",
      primary: true 
    },
    { 
      label: "Open PDF", 
      icon: ExternalLink, 
      href: RESUME_DATA.contact.resumePdf, 
      target: "_blank" 
    },
    { 
      label: "Contact Me", 
      icon: Mail, 
      href: `mailto:${RESUME_DATA.contact.email}` 
    },
    { 
      label: "LinkedIn", 
      icon: Globe, 
      href: RESUME_DATA.contact.linkedin, 
      target: "_blank" 
    },
    { 
      label: "GitHub", 
      icon: Code, 
      href: RESUME_DATA.contact.github, 
      target: "_blank" 
    },
  ];

  return (
    <section className="py-12 px-4 relative z-20">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4">
          {actions.map((action, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={action.href}
                target={action.target}
                download={action.download}
                className={`
                  flex items-center gap-3 px-6 py-3 rounded-full font-bold transition-all duration-300
                  ${action.primary 
                    ? "bg-white text-black hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.1)]" 
                    : "glass-panel border border-white/10 text-white hover:bg-white/5"}
                `}
              >
                <action.icon size={18} />
                <span className="text-sm tracking-tight">{action.label}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
