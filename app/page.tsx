import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import Stats from "@/components/Stats";
import CaseStudyPreview from "@/components/CaseStudyPreview";
import ProductionSection from "@/components/ProductionSection";
import SystemThinking from "@/components/SystemThinking";
import ProjectsPreview from "@/components/ProjectsPreview";
import CTA from "@/components/CTA";
import PageWrapper from "@/components/layout/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <Hero />
      <TechMarquee />
      <Stats />
      <CaseStudyPreview />
      <ProductionSection />
      <SystemThinking />
      <ProjectsPreview />
      <CTA />
    </PageWrapper>
  );
}