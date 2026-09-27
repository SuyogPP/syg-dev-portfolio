"use client";

import { motion } from "motion/react";
import { 
  Layout, Shield, Zap, 
  Database, Monitor, Server 
} from "lucide-react";
import SectionHeading from "../SectionHeading";

export default function TechEcosystemVisualization() {
  const ecosystems = [
    {
      title: "Frontend Architecture",
      icon: Layout,
      items: ["React 18", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "Scheduling Systems",
      icon: Zap,
      items: ["FullCalendar", "React Scheduler", "Time-Engine"]
    },
    {
      title: "Analytics & Dashboards",
      icon: Monitor,
      items: ["ApexCharts", "Recharts", "D3.js", "SWR Polling"]
    },
    {
      title: "Enterprise Auth",
      icon: Shield,
      items: ["Azure MSAL", "RBAC", "NextAuth", "JWT"]
    },
    {
      title: "Infrastructure",
      icon: Server,
      items: ["CI/CD Pipelines", "Azure Static Web Apps", "Vercel"]
    },
    {
      title: "Reporting Systems",
      icon: Database,
      items: ["ExcelJS", "jsPDF", "Client-side PDF Engine"]
    }
  ];

  return (
    <section className="py-24 md:py-40 px-4 relative bg-black/40 overflow-hidden">
      {/* Background Decorative Lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full">
          <motion.path
            d="M0 100 Q 500 300 1000 100 T 2000 300"
            fill="none"
            stroke="white"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 3 }}
          />
        </svg>
      </div>

      <div className="container max-w-7xl mx-auto relative z-10">
        <SectionHeading 
          label="The Engine"
          title="Technology Ecosystem"
          subtitle="A curated stack designed for enterprise reliability and operational performance."
          align="center"
        />

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ecosystems.map((eco, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-8 rounded-[2rem] glass-panel border border-white/5 bg-white/[0.02] group hover:border-rose-500/30 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-2xl bg-rose-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <eco.icon className="w-6 h-6 text-rose-400" />
              </div>
              <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-tight">{eco.title}</h4>
              <div className="flex flex-wrap gap-2">
                {eco.items.map((item, j) => (
                  <span key={j} className="text-[10px] px-2 py-1 rounded-md bg-white/5 text-white/40 font-mono">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
