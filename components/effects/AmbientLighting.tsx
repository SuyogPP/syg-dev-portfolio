'use client';

/**
 * AmbientLighting – Global mouse-driven illumination
 * ──────────────────────────────────────────────────────────
 * Creates a full-viewport overlay with a large, soft radial
 * gradient centered on the lerped mouse position. The
 * gradient is extremely subtle (2-4% opacity white) so it
 * reads as environmental lighting rather than a spotlight.
 *
 * CSS custom properties --mouse-x and --mouse-y are set by
 * the EffectsProvider's central rAF loop, so this component
 * just consumes them via CSS — zero JS per frame.
 */
import React, { useRef, useEffect } from 'react';
import { useEffectsStore } from '@/store/useEffectsStore';

export const AmbientLighting = () => {
  const lightRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useEffectsStore((s) => s.reducedMotion);

  useEffect(() => {
    if (reducedMotion) return;
    let rafId: number;
    const updateLight = () => {
      if (lightRef.current) {
        const { mouseLerped } = useEffectsStore.getState();
        if (mouseLerped.x !== -9999) {
          lightRef.current.style.transform = `translate3d(${mouseLerped.x - 400}px, ${mouseLerped.y - 400}px, 0)`;
          lightRef.current.style.opacity = '1';
        }
      }
      rafId = requestAnimationFrame(updateLight);
    };
    rafId = requestAnimationFrame(updateLight);
    return () => cancelAnimationFrame(rafId);
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[1] overflow-hidden"
    >
      <div
        ref={lightRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: 800,
          height: 800,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.035) 0%, rgba(255, 255, 255, 0.01) 35%, transparent 70%)',
          transform: 'translate3d(-9999px, -9999px, 0)',
          opacity: 0,
          transition: 'opacity 0.3s ease',
          willChange: 'transform',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
};
