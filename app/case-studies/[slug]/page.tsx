import { CASE_STUDIES } from "@/data/caseStudies";
import CaseStudyContent from "./CaseStudyContent";
import VisitorManagementCaseStudy from "@/components/case-studies/visitor-management/VisitorManagementCaseStudy";

export function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({
    slug: study.slug,
  }));
}

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (slug === "visitor-management") {
    return <VisitorManagementCaseStudy />;
  }

  return <CaseStudyContent slug={slug} />;
}
