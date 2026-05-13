"use client";

import PageWrapper from "@/components/layout/PageWrapper";
import CTASection from "@/components/case-studies/CTASection";

// Listing Components
import CaseStudyListingHero from "@/components/case-studies/listing/CaseStudyListingHero";
import PremiumCaseStudyListing from "@/components/case-studies/listing/PremiumCaseStudyListing";
import SystemsMarquee from "@/components/case-studies/listing/SystemsMarquee";
import TechEcosystemVisualization from "@/components/case-studies/listing/TechEcosystemVisualization";
import SystemThinkingListing from "@/components/case-studies/listing/SystemThinkingListing";

export default function CaseStudiesListing() {
  return (
    <PageWrapper>
      <div className="bg-background selection:bg-indigo-500/30">
        {/* 1. Cinematic Hero Section */}
        <CaseStudyListingHero />

        {/* 2. Engineering Positioning Strip */}
        <SystemsMarquee />

        {/* 3. Balanced Premium Case Studies Listing */}
        <PremiumCaseStudyListing />

        {/* 4. Systems Thinking Section */}
        <SystemThinkingListing />

        {/* 5. Technology Ecosystem Strip */}
        <TechEcosystemVisualization />

        {/* 6. Final CTA Section */}
        <CTASection 
          title="Interested in scalable operational systems?"
          subtitle="I'm currently architecting production-grade platforms and leading engineering teams to build complex operational ecosystems."
        />
      </div>
    </PageWrapper>
  );
}
