'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffectsStore } from '@/store/useEffectsStore';

export const useParallax = (ref: React.RefObject<HTMLElement | null>, speed: number = 1) => {
  const reducedMotion = useEffectsStore((state) => state.reducedMotion);

  useEffect(() => {
    if (reducedMotion || !ref.current) return;
    
    gsap.registerPlugin(ScrollTrigger);

    const element = ref.current;
    
    const animation = gsap.to(element, {
      y: () => (window.innerHeight * speed * 0.1), 
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });

    return () => {
      animation.kill();
    };
  }, [ref, speed, reducedMotion]);
};
