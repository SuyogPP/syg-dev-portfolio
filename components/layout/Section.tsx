import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  padding?: "none" | "sm" | "md" | "lg" | "xl";
}

const paddings = {
  none: "py-0",
  sm: "py-12 md:py-16",
  md: "py-20 md:py-24",
  lg: "py-24 md:py-32",
  xl: "py-32 md:py-48",
};

export default function Section({ 
  children, 
  className = "", 
  id,
  padding = "md" 
}: SectionProps) {
  return (
    <section 
      id={id}
      className={`relative w-full ${paddings[padding]} ${className}`}
    >
      {children}
    </section>
  );
}
