"use client";

import { ReactLenis, LenisRef } from "lenis/react";
import { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffectsStore } from "@/store/useEffectsStore";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function LenisProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);
  const reducedMotion = useEffectsStore((state) => state.reducedMotion);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis 
      ref={lenisRef}
      root 
      autoRaf={false} 
      options={{ 
        lerp: reducedMotion ? 1 : 0.1, 
        duration: reducedMotion ? 0 : 1.0, 
        smoothWheel: !reducedMotion 
      }}
    >
      {children}
    </ReactLenis>
  );
}
