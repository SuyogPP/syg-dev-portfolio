import { 
  LucideIcon, Brain, Layout, 
  Activity, Monitor, Smartphone, 
  Cpu, Zap, Layers, Globe, 
  Workflow, Database, Clock, 
  Target, Sparkles, Code
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
    slug: "milestone-platform",
    title: "AI-Powered Milestone Platform",
    category: "Realtime Systems",
    description: "An immersive memories and timeline platform utilizing AI for intelligent event linking and emotional storytelling.",
    summary: "Engineered a high-performance timeline engine with Supabase Realtime, featuring cinematic UI transitions and an intelligent chapter-linking system designed for deep personalization.",
    tech: ["Next.js", "Supabase", "Framer Motion", "OpenAI"],
    github: "https://github.com",
    icon: Sparkles,
    architectureHighlights: ["Realtime Sync Engine", "Intelligent Node Linking", "Cinematic Motion System"],
    tags: ["Product Design", "AI Integration", "Realtime UX"]
  },
  {
    slug: "portfolio-system",
    title: "Advanced Portfolio System",
    category: "Frontend Engineering",
    description: "A production-grade developer portfolio engine with cinematic motion, editorial layouts, and high-performance routing.",
    summary: "Developed a reusable portfolio architecture focusing on immersive storytelling, glassmorphism UI components, and fluid typography systems optimized for engineering personas.",
    tech: ["React 18", "Next.js", "Tailwind CSS", "Motion"],
    link: "https://suyog.dev",
    icon: Layout,
    architectureHighlights: ["Fluid Typography Engine", "Glassmorphism UI Kit", "Staggered Motion Pipelines"],
    tags: ["UX Engineering", "Design Systems", "Performance"]
  },
  {
    slug: "visitor-workflow",
    title: "Visitor Workflow Prototype",
    category: "Operational UI",
    description: "An independent exploration of enterprise visitor management workflows and security-focused UI systems.",
    summary: "Architected a conceptual visitor lifecycle engine, prototyping host-approval loops, QR-based access synchronization, and real-time operational visibility dashboards.",
    tech: ["TypeScript", "Redux Toolkit", "Lucide Icons", "Radix UI"],
    github: "https://github.com",
    icon: Workflow,
    architectureHighlights: ["State-Driven Workflows", "QR Authorization Logic", "Operational Visibility"],
    tags: ["Systems Thinking", "Enterprise UX", "Prototyping"]
  },
  {
    slug: "workforce-analytics",
    title: "Workforce Analytics Dashboard",
    category: "Data Visualization",
    description: "A conceptual dashboard platform for visualizing complex enterprise workforce metrics and scheduling data.",
    summary: "Engineered a data-heavy UI prototype featuring performance-optimized charting layers, interactive data grids, and hierarchical workforce distribution visuals.",
    tech: ["Recharts", "MUI X", "Emotion", "SWR"],
    icon: Activity,
    architectureHighlights: ["High-Frequency Data Polling", "Virtualized Data Grids", "SVG Visualization"],
    tags: ["Analytics", "Data Viz", "Frontend Architecture"]
  },
  {
    slug: "realtime-feed-engine",
    title: "Realtime Feed Engine",
    category: "Event Systems",
    description: "A low-latency activity stream engine designed for high-frequency operational updates and event tracking.",
    summary: "Explored WebSocket architectures and event-driven UI state, building a production-ready feed system that maintains high frame rates during rapid data bursts.",
    tech: ["WebSockets", "Socket.io", "React Query", "Node.js"],
    github: "https://github.com",
    icon: Zap,
    architectureHighlights: ["Event Stream Buffering", "WebSocket Persistence", "Live State Diffing"],
    tags: ["Backend Integration", "Realtime", "Systems"]
  },
  {
    slug: "devops-tracker",
    title: "DevOps Learning Tracker",
    category: "Productivity Tools",
    description: "A personal productivity platform for tracking architectural learning paths and infrastructure experiments.",
    summary: "Built a structured progress tracking system with a focus on maintainable data models, personalized dashboards, and architectural curiosity tracking.",
    tech: ["PostgreSQL", "Prisma", "NextAuth", "Zod"],
    icon: Target,
    architectureHighlights: ["Relational Data Modeling", "Serverless Functions", "Secure Auth Workflows"],
    tags: ["Fullstack", "Productivity", "Architecture"]
  }
];
