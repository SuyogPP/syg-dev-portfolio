import { 
  Users, Globe, Clock, Zap, Monitor, 
  Smartphone, Layout, Cpu, Database, 
  Server, Shield, AlertCircle, RefreshCw, 
  Layers, Lock, CheckCircle2, Scale, 
  ShieldCheck, Settings, Mail, Workflow
} from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface Metric {
  label: string;
  value: string;
  icon: LucideIcon;
  description?: string;
  color?: string;
  border?: string;
}

export interface Challenge {
  title: string;
  icon: LucideIcon;
  problem: string;
  solution: string;
  technical: string;
}

export interface Contribution {
  title: string;
  description: string;
  tags: string[];
}

export interface TechItem {
  name: string;
  category: string;
  level: number;
}

export interface Principle {
  title: string;
  icon: LucideIcon;
  philosophy: string;
  description: string;
  mindset: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: "Enterprise" | "Mobile" | "Fullstack" | "DevOps" | "System Design";
  metrics: Metric[];
  challenges: Challenge[];
  contributions: Contribution[];
  techStack: TechItem[];
  principles: Principle[];
  architectureNodes: any[]; // Simplified for now
  overview: {
    goals: string[];
    challenges: string[];
    scale: string;
  };
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "workforce-management",
    title: "Enterprise Workforce Management Platform",
    subtitle: "A scalable enterprise workforce and scheduling platform supporting 2000+ distributed personnel.",
    description: "Architected and engineered the frontend ecosystem for a large-scale workforce management platform, handling complex operational dashboards, real-time attendance workflows, and enterprise scheduling systems.",
    category: "Enterprise",
    metrics: [
      { label: "Active Scale", value: "2000+", icon: Users, description: "Daily active enterprise personnel", color: "from-red-500/20 to-rose-600/20", border: "border-red-500/30" },
      { label: "Complexity", value: "High Data", icon: Database, description: "Massive DOM & state management", color: "from-rose-500/20 to-red-600/20", border: "border-rose-500/30" },
      { label: "Reliability", value: "99.9%", icon: ShieldCheck, description: "Production-grade UI resilience", color: "from-emerald-500/20 to-teal-500/20", border: "border-emerald-500/30" },
      { label: "Integration", value: ".NET APIs", icon: Zap, description: "Complex RESTful data pipelines", color: "from-amber-500/20 to-orange-500/20", border: "border-amber-500/30" },
      { label: "Ecosystem", value: "Web & Auth", icon: Monitor, description: "Azure MSAL & RBAC integration", color: "from-rose-500/20 to-orange-500/20", border: "border-rose-500/30" },
    ],
    challenges: [
      { title: "Data-Heavy Interface Rendering", icon: Database, problem: "Rendering thousands of operational records and employee schedules without degrading browser performance.", solution: "Implemented React Virtualized and windowing techniques, coupled with aggressive memoization for sub-second UI responsiveness.", technical: "React Window • Memoization" },
      { title: "Complex Enterprise Scheduling", icon: Clock, problem: "Building interactive, conflict-aware shift scheduling interfaces for hundreds of overlapping employee shifts.", solution: "Engineered custom Timeline and Calendar views using FullCalendar and React Scheduler with complex state management.", technical: "FullCalendar • React Scheduler" },
      { title: "Real-Time Operational Dashboards", icon: Layout, problem: "Visualizing live attendance and workforce distribution metrics simultaneously across multiple locations.", solution: "Built performance-optimized data visualization layers using ApexCharts and Recharts, fed by efficient SWR polling mechanisms.", technical: "ApexCharts • SWR Polling" },
      { title: "Granular RBAC Workflows", icon: Lock, problem: "Dynamic UI rendering based on deep enterprise hierarchy and role-based access control policies.", solution: "Architected a centralized authorization state using Redux, deeply integrated with Azure MSAL for dynamic view rendering.", technical: "Redux • Azure MSAL" },
      { title: "Enterprise Reporting Pipelines", icon: Layers, problem: "Generating and exporting massive, highly-formatted compliance and operational reports in-browser.", solution: "Developed robust client-side export pipelines using ExcelJS and jsPDF, offloading processing from the backend.", technical: "ExcelJS • Client-Side PDF" },
      { title: "State Management Architecture", icon: Cpu, problem: "Managing complex asynchronous data streams, global UI states, and deep form states across hundreds of components.", solution: "Established a strict unidirectional data flow architecture combining Redux for global state, SWR for server cache, and React Hook Form.", technical: "Redux • React Hook Form" },
    ],
    contributions: [
      { title: "Frontend Architecture", description: "Architected the React 18 ecosystem, establishing design tokens, state management paradigms, and strict performance standards.", tags: ["React 18", "TypeScript", "Redux"] },
      { title: "UI/UX Engineering", description: "Engineered complex operational dashboards, data grids, and hierarchical tree views using MUI X and custom Emotion styles.", tags: ["Material UI", "MUI X Data Grid", "Emotion"] },
      { title: "API Integration & Data Flow", description: "Seamlessly integrated heavily typed frontend layers with complex .NET backend REST APIs and SQL Server data structures.", tags: ["SWR", "REST API", "Data Models"] },
      { title: "Performance Optimization", description: "Led client-side performance tuning, implementing dynamic rendering, lazy loading, and virtualized lists for massive datasets.", tags: ["React Virtualized", "Lazy Loading", "Performance"] },
      { title: "Production Workflows", description: "Ensured production readiness through rigorous typed interfaces, automated deployment considerations, and enterprise authentication.", tags: ["Azure MSAL", "RBAC", "TypeScript"] },
    ],
    techStack: [
      { name: "React 18", category: "Core", level: 95 },
      { name: "TypeScript", category: "Language", level: 90 },
      { name: "Redux & SWR", category: "State", level: 90 },
      { name: "Material UI", category: "UI System", level: 95 },
      { name: "FullCalendar", category: "Ecosystem", level: 85 },
      { name: "ApexCharts", category: "Visualization", level: 85 },
      { name: ".NET Integration", category: "Architecture", level: 80 },
      { name: "Azure MSAL", category: "Auth", level: 80 },
    ],
    principles: [
      { title: "Scalability", icon: Scale, philosophy: "Future-Proof UI Architecture", description: "Frontend systems must be designed to handle operational growth—not just in DOM volume, but in state complexity.", mindset: "Performance is a foundational feature, not an afterthought." },
      { title: "Reliability", icon: ShieldCheck, philosophy: "Production UI Resilience", description: "In enterprise environments, broken UI states are critical failures. I implement robust error boundaries and fallback states.", mindset: "Reliability is built through defensive frontend engineering." },
      { title: "Maintainability", icon: Settings, philosophy: "Component Engineering", description: "UI Code is read more often than it is written. I advocate for strict component modularity and typed props.", mindset: "Complexity should be encapsulated and managed, not avoided." },
    ],
    architectureNodes: [
      { id: "frontend", icon: Layout, label: "React 18 UI Ecosystem", type: "edge", x: 20, y: 50 },
      { id: "state", icon: Layers, label: "Redux / SWR State", type: "edge", x: 40, y: 30 },
      { id: "auth", icon: Lock, label: "Azure MSAL Auth", type: "edge", x: 40, y: 70 },
      { id: "api", icon: Zap, label: ".NET REST API", type: "core", x: 70, y: 50 },
      { id: "db", icon: Database, label: "SQL Server", type: "core", x: 90, y: 50 },
    ],
    overview: {
      goals: ["Architect scalable frontend ecosystem", "Deliver high-performance data grids", "Implement enterprise scheduling UI"],
      challenges: ["Massive DOM rendering", "Complex authorization states", "Real-time data visualization"],
      scale: "Enterprise-scale data rendering and UI state"
    }
  },
  {
    slug: "visitor-management",
    title: "Enterprise Visitor Management Platform",
    subtitle: "A modern visitor operations platform designed for secure visitor registration, operational visibility, pre-approval workflows, and enterprise access management.",
    description: "Architected a scalable enterprise operational system for corporate offices and facilities, featuring walk-in/pre-registration workflows, host approval systems, and HIKVISION access control integration.",
    category: "Enterprise",
    metrics: [
      { label: "Operations", value: "Real-Time", icon: Zap, description: "Live visitor tracking & visibility", color: "from-red-500/20 to-rose-600/20", border: "border-red-500/30" },
      { label: "Workflows", value: "Automated", icon: Workflow, description: "Pre-registration & host approvals", color: "from-rose-500/20 to-red-600/20", border: "border-rose-500/30" },
      { label: "Security", value: "HIKVISION", icon: Shield, description: "Access control synchronization", color: "from-emerald-500/20 to-teal-500/20", border: "border-emerald-500/30" },
      { label: "Locations", value: "Multi-Facility", icon: Globe, description: "Distributed operational support", color: "from-amber-500/20 to-orange-500/20", border: "border-amber-500/30" },
      { label: "Scale", value: "Enterprise", icon: Users, description: "Organizational visitor management", color: "from-rose-500/20 to-orange-500/20", border: "border-rose-500/30" },
    ],
    challenges: [
      { title: "Operational Workflow Complexity", icon: Workflow, problem: "Managing non-linear visitor lifecycles from registration to exit across multiple roles.", solution: "Implemented a state-driven workflow engine with real-time host notifications and approval gates.", technical: "Redux State Machine • Real-time Events" },
      { title: "Access Control Synchronization", icon: Shield, problem: "Integrating web-based authorizations with HIKVISION hardware in real-time.", solution: "Built a robust synchronization layer ensuring visitor credentials propagate to security checkpoints instantly.", technical: "HIKVISION API • Authorization Sync" },
      { title: "Dashboard Scalability", icon: Layout, problem: "Visualizing high-frequency visitor data without degrading reception operational performance.", solution: "Utilized optimized data fetching and virtualized lists for active visitor monitoring.", technical: "SWR • React Window" },
    ],
    contributions: [
      { title: "Frontend Architecture", description: "Led the architectural design of the VMS dashboard, establishing a modular UI system for complex security workflows.", tags: ["React", "TypeScript", "Redux"] },
      { title: "Workflow Engineering", description: "Developed the core visitor registration and approval pipeline, ensuring sub-second notification latency.", tags: ["Redux", "Real-time", "Workflows"] },
      { title: "System Integration", description: "Engineered the frontend integration layer for access control systems and notification engines.", tags: ["API Integration", "Security", "Auth"] },
    ],
    techStack: [
      { name: "React 18", category: "Core", level: 95 },
      { name: "TypeScript", category: "Language", level: 92 },
      { name: "Redux", category: "State", level: 90 },
      { name: "Material UI", category: "UI System", level: 95 },
      { name: "Framer Motion", category: "Motion", level: 88 },
      { name: "Leaflet", category: "Maps", level: 85 },
    ],
    principles: [
      { title: "Operational Scalability", icon: Scale, philosophy: "Workflow Efficiency", description: "Systems must reduce friction in physical lobby operations through intelligent digital orchestration.", mindset: "Efficiency is a security feature." },
      { title: "Security Workflows", icon: Lock, philosophy: "Trust but Verify", description: "Implementing strict verification gates within an frictionless user experience.", mindset: "Security through architectural integrity." },
      { title: "Maintainability", icon: Settings, philosophy: "Modular Operations", description: "Ensuring the platform can adapt to evolving organizational security requirements.", mindset: "Build for operational longevity." },
    ],
    architectureNodes: [
      { id: "visitor", icon: Users, label: "Visitor Portal", type: "edge", x: 10, y: 30 },
      { id: "admin", icon: Layout, label: "Reception Dashboard", type: "edge", x: 10, y: 70 },
      { id: "core", icon: Server, label: "VMS Engine", type: "core", x: 50, y: 50 },
      { id: "access", icon: Shield, label: "Access Control", type: "core", x: 90, y: 30 },
      { id: "db", icon: Database, label: "Security DB", type: "core", x: 90, y: 70 },
    ],
    overview: {
      goals: ["Secure visitor registration", "Real-time host approvals", "Access control integration"],
      challenges: ["Physical/Digital sync", "Lobby throughput", "Security compliance"],
      scale: "Organizational-wide operational system"
    }
  }
];
