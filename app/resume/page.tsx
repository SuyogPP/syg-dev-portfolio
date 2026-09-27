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
      <div className="bg-background selection:bg-red-500/30">
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
              
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                <Link
                  href={`mailto:${RESUME_DATA.contact.email}`}
                  className="btn-primary"
                >
                  <Mail size={18} />
                  <span>Contact Me</span>
                </Link>
                <Link
                  href={RESUME_DATA.contact.resumePdf}
                  download="Suyog_P_Resume.pdf"
                  className="btn-secondary"
                >
                  <Download size={18} />
                  <span>Download Resume</span>
                </Link>
                <Link
                  href="/case-studies"
                  className="btn-secondary group"
                >
                  <span>View Case Studies</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform text-white/70" />
                </Link>
              </div>
            </motion.div>
          </div>
          
          {/* Background Ambience */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-rose-500/10 blur-[150px] rounded-full pointer-events-none" />
        </section>
      </div>
    </PageWrapper>
  );
}
