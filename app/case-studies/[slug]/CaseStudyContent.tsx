"use client";

import { CASE_STUDIES } from "@/data/caseStudies";
import PageWrapper from "@/components/layout/PageWrapper";
import { motion } from "motion/react";
import MetricsStrip from "@/components/case-studies/MetricsStrip";
import SectionHeading from "@/components/case-studies/SectionHeading";
import ArchitectureVisual from "@/components/case-studies/ArchitectureVisual";
import ChallengeCards from "@/components/case-studies/ChallengeCards";
import TimelineSection from "@/components/case-studies/TimelineSection";
import TechStackSection from "@/components/case-studies/TechStackSection";
import SystemThinkingCards from "@/components/case-studies/SystemThinkingCards";
import CTASection from "@/components/case-studies/CTASection";
import AnimatedGrid from "@/components/case-studies/AnimatedGrid";
import CaseStudyItem from "@/components/case-studies/CaseStudyItem";
import VisualStorytelling from "@/components/case-studies/VisualStorytelling";
import MultiTenantArchitecture from "@/components/case-studies/MultiTenantArchitecture";

import { notFound } from "next/navigation";

interface CaseStudyContentProps {
  slug: string;
}

export default function CaseStudyContent({ slug }: CaseStudyContentProps) {
  const study = CASE_STUDIES.find((s) => s.slug === slug);

  if (!study) {
    notFound();
  }

  const relatedStudies = CASE_STUDIES.filter((s) => s.slug !== slug).slice(0, 2);

  return (
    <PageWrapper>
      <div className="bg-background text-foreground selection:bg-indigo-500/30">
        {/* Cinematic Hero */}
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 px-4 overflow-hidden">
          <AnimatedGrid />
          <div className="container relative z-10 max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-white/60">
                Case Study: {study.category}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="fluid-h1 font-bold mb-6 tracking-tight leading-[1.1] text-white"
            >
              {study.title.split(" ").slice(0, -1).join(" ")} <span className="text-gradient">{study.title.split(" ").pop()}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="fluid-p text-white/60 max-w-3xl mx-auto mb-16"
            >
              {study.subtitle}
            </motion.p>

            <MetricsStrip metrics={study.metrics} />
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-24 md:py-40 px-4 relative">
          <div className="container max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
              <div className="lg:col-span-5">
                <SectionHeading 
                  label="The Mission"
                  title="Engineering a Scalable Future"
                />
              </div>
              <div className="lg:col-span-7">
                <div className="relative">
                  <div className="absolute -left-12 top-0 bottom-0 w-[1px] bg-gradient-to-b from-indigo-500/50 to-transparent hidden lg:block" />
                  <p className="fluid-p text-white/80 mb-12">
                    {study.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-indigo-400 font-bold mb-4">Core Objectives</h4>
                      <ul className="space-y-3">
                        {study.overview.goals.map((g, i) => (
                          <li key={i} className="text-sm text-white/60 flex gap-3">
                            <span className="text-indigo-500">→</span> {g}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-white/40 font-bold mb-4">System Scale</h4>
                      <p className="text-sm text-white/60 leading-relaxed italic">
                        &quot;{study.overview.scale}&quot;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* System Architecture */}
        {slug === "workforce-management" ? (
          <MultiTenantArchitecture />
        ) : (
          <section className="py-24 md:py-40 px-4 relative bg-black/20">
            <div className="container max-w-7xl mx-auto">
              <SectionHeading 
                label="System Topology"
                title="System Architecture"
                subtitle="A high-performance orchestration layer connecting distributed hardware to cloud-native data services."
                align="center"
              />
              <ArchitectureVisual nodes={study.architectureNodes} />
            </div>
          </section>
        )}

        {/* Engineering Challenges */}
        <section className="py-24 md:py-40 px-4 relative">
          <div className="container max-w-7xl mx-auto">
            <SectionHeading 
              label="Engineering Depth"
              title="Critical Challenges & Technical Solutions"
              align="left"
            />
            <ChallengeCards challenges={study.challenges} />
          </div>
        </section>

        {/* Contributions Section */}
        <section className="py-24 md:py-40 px-4 relative bg-white/[0.01]">
          <div className="container max-w-7xl mx-auto">
            <SectionHeading 
              label="Ownership & Seniority"
              title="Core Contributions"
              subtitle="From architectural planning to production deployment and maintenance."
              align="left"
            />
            <TimelineSection contributions={study.contributions} />
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-24 md:py-40 px-4 relative">
          <div className="container max-w-7xl mx-auto">
            <SectionHeading 
              label="Technology"
              title="Modern Enterprise Stack"
              align="center"
            />
            <TechStackSection techStack={study.techStack} />
          </div>
        </section>

        {/* System Thinking */}
        <section className="py-24 md:py-40 px-4 relative bg-black/40">
          <div className="container max-w-7xl mx-auto">
            <SectionHeading 
              label="Philosophy"
              title="Production Principles"
              align="center"
            />
            <SystemThinkingCards principles={study.principles} />
          </div>
        </section>

        {/* Visual Storytelling Section */}
        <VisualStorytelling />

        {/* Related Case Studies */}
        {relatedStudies.length > 0 && (
          <section className="py-24 md:py-40 px-4 relative">
            <div className="container max-w-7xl mx-auto">
              <SectionHeading 
                label="Keep Exploring"
                title="Related Case Studies"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedStudies.map((s) => (
                  <CaseStudyItem key={s.slug} caseStudy={s} />
                ))}
              </div>
            </div>
          </section>
        )}

        <CTASection />
      </div>
    </PageWrapper>
  );
}
