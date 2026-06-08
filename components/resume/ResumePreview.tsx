"use client";

import { motion } from "motion/react";
import { RESUME_DATA } from "@/data/resume";
import SectionHeading from "../case-studies/SectionHeading";
import { Maximize2, FileText, Smartphone, Monitor } from "lucide-react";

export default function ResumePreview() {
  return (
    <section className="py-24 md:py-40 px-4 relative">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <SectionHeading 
            label="Visual"
            title="Resume Preview"
            align="center"
          />
        </div>

        <div className="max-w-4xl mx-auto relative group">
          {/* Viewer Controls */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex items-center gap-4 px-6 py-3 rounded-full glass-panel border border-white/10 bg-black/60 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="flex items-center gap-2 text-[10px] font-bold text-white/40 uppercase tracking-widest border-r border-white/10 pr-4">
              <FileText size={14} className="text-indigo-400" />
              Interactive Viewer
            </div>
            <div className="flex items-center gap-4">
              <Monitor size={14} className="text-white/20 hover:text-white transition-colors cursor-pointer" />
              <Smartphone size={14} className="text-white/20 hover:text-white transition-colors cursor-pointer" />
              <Maximize2 size={14} className="text-white/20 hover:text-white transition-colors cursor-pointer" />
            </div>
          </div>

          {/* Resume Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-[1/1.414] w-full rounded-[2.5rem] glass-panel border border-white/10 bg-white shadow-2xl overflow-hidden relative"
          >
            {/* Stylized Resume Content */}
            <div className="w-full h-full bg-white p-12 md:p-20 flex flex-col text-black font-sans selection:bg-indigo-500/20">
              {/* Header */}
              <div className="mb-12 border-b-2 border-black/5 pb-12 flex justify-between items-end">
                <div>
                  <h1 className="text-5xl font-black tracking-tighter mb-2">{RESUME_DATA.name}</h1>
                  <p className="text-xl font-bold text-indigo-600 uppercase tracking-widest">{RESUME_DATA.title}</p>
                </div>
                <div className="text-right text-[10px] font-bold text-black/40 uppercase tracking-widest space-y-1">
                  <div>{RESUME_DATA.location}</div>
                  <div>{RESUME_DATA.contact.email}</div>
                </div>
              </div>

              {/* Sections Mockup */}
              <div className="space-y-12 overflow-hidden flex-1 opacity-20 pointer-events-none">
                 <div className="space-y-4">
                   <div className="h-4 w-32 bg-black/10 rounded-full" />
                   <div className="h-3 w-full bg-black/5 rounded-full" />
                   <div className="h-3 w-full bg-black/5 rounded-full" />
                   <div className="h-3 w-3/4 bg-black/5 rounded-full" />
                 </div>
                 <div className="space-y-8">
                   <div className="h-4 w-40 bg-black/10 rounded-full" />
                   {[...Array(3)].map((_, i) => (
                     <div key={i} className="space-y-3">
                       <div className="flex justify-between">
                         <div className="h-3 w-48 bg-black/5 rounded-full" />
                         <div className="h-3 w-24 bg-black/5 rounded-full" />
                       </div>
                       <div className="h-2 w-full bg-black/[0.02] rounded-full" />
                       <div className="h-2 w-full bg-black/[0.02] rounded-full" />
                     </div>
                   ))}
                 </div>
              </div>

              {/* Overlay for "Interactive" feel */}
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent flex items-center justify-center p-12">
                 <div className="text-center space-y-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-indigo-600 text-white shadow-2xl mb-4">
                       <FileText size={32} />
                    </div>
                    <h3 className="text-3xl font-bold text-black tracking-tight">Experience the full profile</h3>
                    <p className="text-lg text-black/40 font-medium max-w-sm mx-auto leading-relaxed">
                      This is a stylized preview. Please download the full PDF version for recruitment purposes.
                    </p>
                    <a 
                      href={RESUME_DATA.contact.resumePdf} 
                      download="Suyog_P_Resume.pdf"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-xl"
                    >
                      Download Official PDF
                    </a>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
