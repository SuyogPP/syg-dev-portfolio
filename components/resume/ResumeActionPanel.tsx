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
                className={
                  action.primary 
                    ? "btn-primary !px-6 !py-3 text-sm" 
                    : "btn-secondary !px-6 !py-3 text-sm"
                }
              >
                <action.icon size={16} />
                <span className="tracking-tight">{action.label}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
