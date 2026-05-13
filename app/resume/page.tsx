"use client";

import PageWrapper from "@/components/layout/PageWrapper";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/case-studies/SectionHeading";
import AnimatedGrid from "@/components/case-studies/AnimatedGrid";
import { motion } from "motion/react";
import { Download, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function ResumePage() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <Section padding="xl" className="overflow-hidden">
        <AnimatedGrid />
        <Container size="lg" className="relative z-10 text-center">
          <SectionHeading 
            title="Professional Experience"
            subtitle="An overview of my career, technical expertise, and leadership roles in the engineering industry."
            label="Resume & Background"
            align="center"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12"
          >
            <a
              href="/resume.pdf"
              download
              className="group relative px-10 py-5 bg-white text-black rounded-full font-bold flex items-center gap-3 hover:scale-105 transition-transform"
            >
              <Download size={20} />
              Download Resume
            </a>
            
            <Link
              href="/case-studies"
              className="group flex items-center gap-2 text-white font-semibold hover:text-indigo-400 transition-colors"
            >
              View Case Studies
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </Container>
      </Section>

      {/* Experience Preview / Snapshot */}
      <Section padding="lg">
        <Container size="md">
          <div className="space-y-12">
            {[
              {
                role: "Senior Fullstack Engineer",
                company: "Enterprise Workforce Solutions",
                period: "2021 — Present",
                desc: "Leading architecture for a multi-tenant workforce management platform serving 2,000+ daily active users."
              },
              {
                role: "Lead Frontend Developer",
                company: "Digital Systems Inc.",
                period: "2018 — 2021",
                desc: "Architected high-performance dashboard systems and design systems for enterprise scale applications."
              }
            ].map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative pl-8 border-l border-white/10 group"
              >
                <div className="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-white/20 group-hover:bg-indigo-500 transition-colors" />
                <div className="text-xs uppercase tracking-widest text-indigo-400 font-bold mb-2">{exp.period}</div>
                <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                <div className="text-lg text-white/40 mb-4">{exp.company}</div>
                <p className="text-white/60 leading-relaxed max-w-2xl">{exp.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
    </PageWrapper>
  );
}
