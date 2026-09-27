'use client';

import React, { useRef, useState, MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { cn } from '@/lib/utils';
import { useEffectsStore } from '@/store/useEffectsStore';
import { useCursor } from '@/hooks/useCursor';

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  className?: string;
}

export const ProjectCard = ({ title, category, image, className }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const { setCursor, resetCursor } = useCursor();
  const reducedMotion = useEffectsStore((state) => state.reducedMotion);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);

  // We use useTransform to get raw string values out of the springs for our radial gradient
  const mouseXPercentage = useTransform(mouseXSpring, [-0.5, 0.5], ['0%', '100%']);
  const mouseYPercentage = useTransform(mouseYSpring, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || reducedMotion) return;

    const rect = cardRef.current.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setCursor('project');
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    resetCursor();
    x.set(0);
    y.set(0);
  };

  const radialGradient = useTransform(
    [mouseXPercentage, mouseYPercentage],
    ([xVal, yVal]) => `radial-gradient(600px circle at ${xVal} ${yVal}, rgba(255,255,255,0.15), transparent 40%)`
  );

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: reducedMotion ? 0 : rotateX,
        rotateY: reducedMotion ? 0 : rotateY,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "relative w-full h-[450px] rounded-2xl overflow-hidden cursor-none",
        "bg-white/5 border border-white/10 backdrop-blur-md",
        "transition-shadow duration-500 group perspective-1000",
        isHovered ? "shadow-[0_30px_60px_rgba(0,0,0,0.6)]" : "shadow-none",
        className
      )}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out z-0"
        style={{ 
          backgroundImage: `url(${image})`,
          transform: `translateZ(20px) scale(${isHovered ? 1.05 : 1})`,
        }}
      />
      
      {/* Glossy Overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10 transition-opacity duration-500"
        style={{ transform: "translateZ(30px)" }}
      />

      <div 
        className="absolute bottom-0 left-0 p-8 w-full z-20 flex flex-col justify-end"
        style={{ transform: "translateZ(60px)" }}
      >
        <motion.p 
          initial={{ opacity: 0.7, y: 0 }}
          animate={{ opacity: isHovered ? 1 : 0.7, y: isHovered ? -5 : 0 }}
          className="text-white/70 text-xs tracking-[0.2em] uppercase mb-3 font-mono font-semibold"
        >
          {category}
        </motion.p>
        <motion.h3 
          initial={{ y: 0 }}
          animate={{ y: isHovered ? -5 : 0 }}
          className="text-3xl font-bold text-white tracking-tight"
        >
          {title}
        </motion.h3>
      </div>
      
      {/* Lighting effect */}
      {!reducedMotion && (
        <motion.div
          className="absolute inset-0 z-30 pointer-events-none transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: radialGradient
          }}
        />
      )}
    </motion.div>
  );
};
