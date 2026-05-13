"use client";

import PageWrapper from "@/components/layout/PageWrapper";
import CTASection from "@/components/case-studies/CTASection";

// Project Components
import ProjectsHero from "@/components/projects/ProjectsHero";
import PhilosophyMarquee from "@/components/projects/PhilosophyMarquee";
import FeaturedProjects from "@/components/projects/FeaturedProjects";
import ExperimentalBuilds from "@/components/projects/ExperimentalBuilds";
import FrontendCraftsmanship from "@/components/projects/FrontendCraftsmanship";
import LabsExplorations from "@/components/projects/LabsExplorations";

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <div className="bg-background selection:bg-indigo-500/30">
        {/* 1. Cinematic Hero Section */}
        <ProjectsHero />

        {/* 2. Engineering Philosophy Strip */}
        <PhilosophyMarquee />

        {/* 3. Featured Personal Projects */}
        <FeaturedProjects />

        {/* 4. Experimental Builds Section */}
        <ExperimentalBuilds />

        {/* 5. Frontend Craftsmanship Section */}
        <FrontendCraftsmanship />

        {/* 6. Labs / Explorations Section */}
        <LabsExplorations />

        {/* 7. Final CTA Section */}
        <CTASection 
          title="Interested in scalable engineering systems?"
          subtitle="I'm always open to discussing architectural paradigms, product experiments, and production-grade engineering opportunities."
        />
      </div>
    </PageWrapper>
  );
}
