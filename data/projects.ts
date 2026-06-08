import { 
  LucideIcon, Brain, Layout, 
  Activity, Monitor, Smartphone, 
  Cpu, Zap, Layers, Globe, 
  Workflow, Database, Clock, 
  Target, Sparkles, Code, Heart
} from "lucide-react";

export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  summary: string;
  tech: string[];
  github?: string;
  link?: string;
  icon: LucideIcon;
  architectureHighlights: string[];
  tags: string[];
}

export const PROJECTS: Project[] = [
  {
    slug: "couple-os",
    title: "CoupleOS",
    category: "AI-Powered Personal Platform",
    description: "A deeply personalized AI-powered relationship platform designed to preserve memories, milestones, and emotional experiences through immersive storytelling.",
    summary: "Architected a digital emotional ecosystem featuring an AI-assisted memory engine, realtime timeline synchronization, and cinematic UX designed for deep personal connection.",
    tech: ["Next.js", "OpenAI", "Supabase", "Motion"],
    github: "https://github.com",
    icon: Heart,
    architectureHighlights: ["AI Memory Engine", "Realtime Timeline Sync", "Emotional Design System"],
    tags: ["AI Experiences", "Emotional UX", "Realtime Systems", "Timeline Architecture", "Motion Design", "Storytelling Interfaces", "Frontend Engineering"]
  }
];
