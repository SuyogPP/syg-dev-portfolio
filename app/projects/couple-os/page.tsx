"use client";

import PageWrapper from "@/components/layout/PageWrapper";
import CTASection from "@/components/case-studies/CTASection";

// CoupleOS Components
import CoupleOSHero from "@/components/projects/couple-os/CoupleOSHero";
import CoupleOSVision from "@/components/projects/couple-os/CoupleOSVision";
import CoupleOSTimeline from "@/components/projects/couple-os/CoupleOSTimeline";
import CoupleOSAI from "@/components/projects/couple-os/CoupleOSAI";
import CoupleOSRealtime from "@/components/projects/couple-os/CoupleOSRealtime";
import CoupleOSUXEngineering from "@/components/projects/couple-os/CoupleOSUXEngineering";
import CoupleOSArchitecture from "@/components/projects/couple-os/CoupleOSArchitecture";
import CoupleOSCraftsmanship from "@/components/projects/couple-os/CoupleOSCraftsmanship";
import CoupleOSSystemThinking from "@/components/projects/couple-os/CoupleOSSystemThinking";

export default function CoupleOSPage() {
  return (
    <PageWrapper>
      <div className="bg-background selection:bg-pink-500/30">
        {/* 1. Cinematic Hero Section */}
        <CoupleOSHero />

        {/* 2. Emotional Product Vision */}
        <CoupleOSVision />

        {/* 3. Memory Timeline System */}
        <CoupleOSTimeline />

        {/* 4. AI Interaction System */}
        <CoupleOSAI />

        {/* 5. Realtime Experiences */}
        <CoupleOSRealtime />

        {/* 6. Immersive UX Engineering */}
        <CoupleOSUXEngineering />

        {/* 7. Product Architecture */}
        <CoupleOSArchitecture />

        {/* 8. Frontend Craftsmanship */}
        <CoupleOSCraftsmanship />

        {/* 9. System Thinking */}
        <CoupleOSSystemThinking />

        {/* 10. Final Emotional CTA */}
        <CTASection 
          title="Building products people emotionally connect with."
          subtitle="I enjoy building immersive digital experiences that combine storytelling, realtime systems, and modern frontend engineering."
        />
      </div>
    </PageWrapper>
  );
}
