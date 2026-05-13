import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Suyog P P",
  description: "A collection of production systems and scalable enterprise applications.",
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
