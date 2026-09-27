"use client";

import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface Node {
  id: string;
  icon: LucideIcon;
  label: string;
  type: "edge" | "core";
  x: number;
  y: number;
}

interface ArchitectureVisualProps {
  nodes: Node[];
}

export default function ArchitectureVisual({ nodes }: ArchitectureVisualProps) {
  return (
    <div className="relative h-[600px] w-full rounded-[3rem] glass-panel border border-white/5 overflow-hidden p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(244,63,94,0.05),transparent_70%)]" />
      
      {/* Dynamic Connection Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
        {nodes.filter(n => n.type === 'edge').map((edge) => {
          const core = nodes.find(n => n.type === 'core');
          if (!core) return null;
          return (
            <motion.line 
              key={edge.id}
              x1={`${edge.x}%`} y1={`${edge.y}%`} 
              x2={`${core.x}%`} y2={`${core.y}%`} 
              stroke="white" 
              strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          );
        })}
      </svg>

      {/* Nodes */}
      {nodes.map((node, i) => (
        <motion.div
          key={node.id}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="absolute flex flex-col items-center gap-3 group"
          style={{ 
            left: `${node.x}%`, 
            top: `${node.y}%`, 
            transform: 'translate(-50%, -50%)' 
          }}
        >
          <div className={`p-4 rounded-2xl glass-panel border border-white/10 group-hover:border-rose-500/50 group-hover:bg-rose-500/5 transition-all duration-500 ${node.type === 'core' ? 'scale-125' : ''}`}>
            <node.icon className={`w-6 h-6 ${node.type === 'core' ? 'text-rose-400' : 'text-white/40'}`} />
          </div>
          <span className="text-[10px] md:text-xs font-bold text-white/40 uppercase tracking-[0.2em] whitespace-nowrap group-hover:text-white/60 transition-colors">
            {node.label}
          </span>
        </motion.div>
      ))}

      {/* Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.4, 0],
              scale: [0, 1, 0],
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%"
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 2
            }}
            className="w-1 h-1 bg-rose-500/40 rounded-full blur-[2px]"
          />
        ))}
      </div>
    </div>
  );
}
