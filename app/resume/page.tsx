"use client";

import PageWrapper from "@/components/layout/PageWrapper";
import { motion } from "motion/react";
import Link from "next/link";
import { Mail, Download, ArrowRight } from "lucide-react";
import { RESUME_DATA } from "@/data/resume";

// Resume Components
import ResumeHero from "@/components/resume/ResumeHero";
import ResumeActionPanel from "@/components/resume/ResumeActionPanel";
import ProfessionalSummary from "@/components/resume/ProfessionalSummary";
import ExperienceTimeline from "@/components/resume/ExperienceTimeline";
import SkillsEcosystem from "@/components/resume/SkillsEcosystem";
import ArchitectureExpertise from "@/components/resume/ArchitectureExpertise";
import LearningJourney from "@/components/resume/LearningJourney";
import ResumePreview from "@/components/resume/ResumePreview";

export default function ResumePage() {
  return (
    <PageWrapper>
      <div className="bg-background selection:bg-indigo-500/30">
        {/* 1. Cinematic Hero Section */}
        <ResumeHero />

        {/* 2. Resume Action Panel */}
        <ResumeActionPanel />

        {/* 3. Professional Summary */}
        <ProfessionalSummary />

        {/* 4. Experience Timeline */}
        <ExperienceTimeline />

        {/* 5. Technical Skills Ecosystem */}
        <SkillsEcosystem />

        {/* 6. Systems & Architecture Expertise */}
        <ArchitectureExpertise />

        {/* 7. Certifications & Learning */}
        <LearningJourney />

        {/* 8. Resume Preview Section */}
        <ResumePreview />

        {/* 9. Recruiter CTA Section */}
        <section className="py-24 md:py-48 px-4 relative overflow-hidden bg-white/[0.02]">
          <div className="container max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
                Interested in building <span className="text-gradient">scalable systems</span> together?
              </h2>
              
              <div className="flex flex-wrap justify-center gap-8">
                <Link
                  href={`mailto:${RESUME_DATA.contact.email}`}
                  className="group flex items-center gap-4 px-10 py-5 bg-white text-black rounded-full font-bold hover:scale-105 transition-all duration-500 shadow-[0_0_50px_rgba(255,255,255,0.1)]"
                >
                  <Mail size={20} />
                  Contact Me
                </Link>
                <Link
                  href={RESUME_DATA.contact.resumePdf}
                  download="Suyog_P_Resume.pdf"
                  className="group flex items-center gap-4 px-10 py-5 glass-panel border border-white/10 text-white rounded-full font-bold hover:bg-white/5 transition-all duration-500"
                >
                  <Download size={20} />
                  Download Resume
                </Link>
                <Link
                  href="/case-studies"
                  className="group flex items-center gap-4 px-10 py-5 glass-panel border border-white/5 text-white/50 rounded-full font-bold hover:text-white transition-all duration-500"
                >
                  View Case Studies
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
          
          {/* Background Ambience */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none" />
        </section>
      </div>
    </PageWrapper>
  );
}
