import { 
  Briefcase, GraduationCap, Award, 
  Code, Layout, Cpu, Database, 
  Zap, Globe, Layers, Workflow, 
  Activity, Monitor, Smartphone,
  Shield, Cloud, Brain, Sparkles,
  Search, Lock, Server, Terminal,
  Box, MousePointer2
} from "lucide-react";

export const RESUME_DATA = {
  name: "Suyog P.",
  title: "Senior Frontend Engineer",
  location: "Pune, India",
  summary: "Senior frontend architect focused on enterprise systems, immersive experiences, and scalable UI architectures. Specialized in building production-grade operational platforms, realtime dashboards, and complex multi-tenant systems. Committed to engineering maturity, design engineering, and human-centric product thinking.",
  
  contact: {
    email: "contact@suyog.dev",
    linkedin: "https://linkedin.com/in/suyogpp",
    github: "https://github.com/suyogpp",
    resumePdf: "/assets/suyog_resume.pdf"
  },

  experience: [
    {
      company: "Enterprise Workforce Platform",
      role: "Senior Frontend Architect",
      period: "2021 - Present",
      description: "Leading frontend architecture for a large-scale workforce management system supporting 2000+ employees. Focused on operational tracking, realtime attendance workflows, and enterprise scheduling systems.",
      highlights: [
        "Architected a multi-tenant dashboard system with complex role-based access control.",
        "Implemented realtime synchronization engines for attendance and scheduling workflows.",
        "Led the migration to a modern Next.js 14+ architecture with improved TTI and LCP.",
        "Engineered a reusable enterprise UI kit used across mobile and web ecosystems."
      ],
      tech: ["Next.js", "TypeScript", "Redux Toolkit", "Framer Motion", "Tailwind"]
    },
    {
      company: "Visitor Operations Platform",
      role: "Frontend Engineering Lead",
      period: "2019 - 2021",
      description: "Directed the development of an enterprise visitor management system focused on facility security and operational visibility.",
      highlights: [
        "Designed and built immersive visitor registration workflows with offline support.",
        "Integrated hardware-level QR and biometric authorization systems into the web UI.",
        "Optimized data-heavy reporting dashboards for facility managers.",
        "Mentored junior engineers and established frontend code quality standards."
      ],
      tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Socket.io"]
    }
  ],

  skills: [
    {
      category: "Frontend Engineering",
      items: ["React 18+", "Next.js 15", "TypeScript", "Modern CSS", "Web Vitals"]
    },
    {
      category: "UI Systems",
      items: ["Design Systems", "Tailwind CSS", "Radix UI", "Shader CSS", "Responsive Design"]
    },
    {
      category: "State Management",
      items: ["Zustand", "Redux Toolkit", "React Query", "Context API"]
    },
    {
      category: "Backend Integration",
      items: ["RESTful APIs", "GraphQL", "gRPC-web", "Supabase", "Firebase"]
    },
    {
      category: "Motion & UX",
      items: ["Framer Motion", "GSAP", "Physics-based UI", "Interaction Design"]
    },
    {
      category: "Architecture",
      items: ["Micro-frontends", "Multi-tenancy", "Realtime Systems", "Monorepos"]
    }
  ],

  expertise: [
    {
      title: "Enterprise Systems",
      icon: Layers,
      desc: "Building complex, scalable dashboards and operational workflows for high-concurrency enterprise environments."
    },
    {
      title: "Realtime Interfaces",
      icon: Activity,
      desc: "Architecting low-latency, event-driven UIs using WebSockets and server-sent events for live status tracking."
    },
    {
      title: "Multi-Tenant Architecture",
      icon: Database,
      desc: "Designing secure, isolated frontend layers for distributed organizational structures and varied user permissions."
    },
    {
      title: "Design Engineering",
      icon: MousePointer2,
      desc: "Bridging the gap between high-fidelity design concepts and production-grade, accessible codebases."
    }
  ],

  learning: [
    {
      title: "AWS Cloud Practitioner",
      status: "In Progress",
      desc: "Expanding infrastructure knowledge with a focus on edge computing and serverless architectures."
    },
    {
      title: "DevOps & CI/CD",
      status: "Continuous",
      desc: "Optimizing deployment pipelines and automating quality gates for large-scale frontend monorepos."
    },
    {
      title: "AI Integration",
      status: "Active",
      desc: "Exploring the intersection of LLMs and frontend experiences to build intelligent, conversational product layers."
    }
  ]
};
