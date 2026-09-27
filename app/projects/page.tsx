"use client";

import PageWrapper from "@/components/layout/PageWrapper";
import CTASection from "@/components/case-studies/CTASection";

// Project Components
import ProjectsHero from "@/components/projects/ProjectsHero";
import PhilosophyMarquee from "@/components/projects/PhilosophyMarquee";
import FeaturedProjects from "@/components/projects/FeaturedProjects";
import ProductThinking from "@/components/projects/ProductThinking";

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <div className="bg-background selection:bg-red-500/30">
        {/* 1. Cinematic Hero Section */}
        <ProjectsHero />

        {/* 2. Engineering Philosophy Strip */}
        <PhilosophyMarquee />

        {/* 3. Featured Project Showcase (CoupleOS) */}
        <FeaturedProjects />

        {/* 4. Personal Product Thinking Section */}
        <ProductThinking />

        {/* 5. Final CTA Section */}
        <CTASection 
          title="Building experiences people emotionally connect with."
          subtitle="I enjoy creating immersive digital experiences that combine storytelling, realtime systems, and thoughtful frontend engineering."
        />
      </div>
    </PageWrapper>
  );
}
