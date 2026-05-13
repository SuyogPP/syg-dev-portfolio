"use client";

import { motion } from "motion/react";
import { Server, ShieldCheck, Activity, Webhook, Cloud, Cpu } from "lucide-react";

export default function ProductionSection() {
  const features = [
    { icon: <Webhook size={24} />, title: "CI/CD Pipelines", desc: "Automated testing and zero-downtime deployments." },
    { icon: <Cloud size={24} />, title: "Azure Deployments", desc: "Scalable cloud infrastructure and resource management." },
    { icon: <Server size={24} />, title: "IIS Hosting", desc: "Optimized enterprise web server configuration." },
    { icon: <Activity size={24} />, title: "Monitoring", desc: "Real-time telemetry and performance tracking." },
    { icon: <ShieldCheck size={24} />, title: "RBAC Auth", desc: "Granular role-based access control systems." },
    { icon: <Cpu size={24} />, title: "Hardware Integrations", desc: "Seamless IoT and external device communication." },
  ];

  return (
    <section className="section-padding bg-[#030303] relative border-y border-white/[0.03]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#8b5cf6_0%,transparent_70%)] opacity-5 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-xs md:text-sm font-semibold tracking-widest text-purple-400 uppercase mb-3">Infrastructure</h2>
          <h3 className="fluid-h2 font-bold text-white tracking-tight">Production Engineering</h3>
          <p className="mt-4 md:mt-6 text-white/50 max-w-2xl mx-auto text-base md:text-lg">
            Building robust, secure, and highly available architectures that form the backbone of enterprise operations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5, rotateX: 5, rotateY: -5 }}
              className="glass-panel p-6 md:p-8 rounded-2xl group cursor-default relative overflow-hidden"
              style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 mb-4 md:mb-6 group-hover:text-purple-400 group-hover:border-purple-500/30 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">{feature.title}</h4>
                <p className="text-white/50 leading-relaxed text-xs md:text-sm">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}