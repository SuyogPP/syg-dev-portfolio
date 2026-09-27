'use client';

import React, { useEffect, useRef } from 'react';
import { useEffectsStore } from '@/store/useEffectsStore';

/**
 * EffectsProvider
 * ─────────────────────────────────────────────────────────
 * Central nervous system of the effects engine.
 * 
 * 1. Detects prefers-reduced-motion and touch devices.
 * 2. Runs a single global rAF loop that applies spring
 *    physics to the mouse position, computes velocity / speed,
 *    and pushes the values into Zustand so every effect can
 *    read them without adding its own listeners.
 * 3. Updates CSS custom properties for the ambient
 *    lighting gradient so it can be consumed from CSS
 *    without any React re-renders.
 */
export const EffectsProvider = ({ children }: { children: React.ReactNode }) => {
  const setReducedMotion = useEffectsStore((s) => s.setReducedMotion);
  const setPerformanceMode = useEffectsStore((s) => s.setPerformanceMode);

  // We mutate refs directly and only write to Zustand once per frame
  // to avoid triggering React renders at 60fps.
  const target = useRef({ x: -9999, y: -9999 });
  const springPos = useRef({ x: -9999, y: -9999 });
  const springVel = useRef({ x: 0, y: 0 });
  const storeVelocity = useRef({ x: 0, y: 0 });
  const rafId = useRef(0);

  useEffect(() => {
    // ── reduced-motion ──────────────────────────────────
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMotion = (e: MediaQueryListEvent | MediaQueryList) => {
      setReducedMotion(e.matches);
      if (e.matches) setPerformanceMode('low');
    };
    handleMotion(mq);
    mq.addEventListener('change', handleMotion);

    // ── touch check ─────────────────────────────────────
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) {
      setPerformanceMode('medium');
    }

    // Native cursor remains visible

    // ── pointer listener (writes to ref, not state) ────
    const onPointerMove = (e: PointerEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };
    const onPointerDown = (e: PointerEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerdown', onPointerDown, { passive: true });

    // ── central rAF loop ────────────────────────────────
    const store = useEffectsStore.getState;
    
    // Cinematic Noomo-style spring physics
    const STIFFNESS = 0.12; 
    const DAMPING = 0.82;   

    const tick = () => {
      const sx = springPos.current.x;
      const sy = springPos.current.y;
      const tx = target.current.x;
      const ty = target.current.y;

      // Initialise springPos on first real mouse event
      if (sx === -9999) {
        springPos.current.x = tx;
        springPos.current.y = ty;
      }

      // Spring Physics
      const dx = tx - springPos.current.x;
      const dy = ty - springPos.current.y;

      const ax = dx * STIFFNESS;
      const ay = dy * STIFFNESS;

      springVel.current.x = (springVel.current.x + ax) * DAMPING;
      springVel.current.y = (springVel.current.y + ay) * DAMPING;

      const nx = springPos.current.x + springVel.current.x;
      const ny = springPos.current.y + springVel.current.y;

      // Calculate instantaneous velocity for stretching effects
      const vx = nx - sx;
      const vy = ny - sy;
      storeVelocity.current.x = vx;
      storeVelocity.current.y = vy;

      springPos.current.x = nx;
      springPos.current.y = ny;

      const speed = Math.sqrt(vx * vx + vy * vy);

      // Write to Zustand (batch)
      const s = store();
      s.setMouseTarget({ x: tx, y: ty });
      s.setMouseLerped({ x: nx, y: ny });
      s.setMouseVelocity({ x: vx, y: vy });
      s.setMouseSpeed(speed);

      // We removed the global CSS variable writes here because setting variables on document.documentElement
      // 60 times a second causes massive style recalculation bottlenecks and lags on complex Next.js layouts.
      // Cursor.tsx and AmbientLighting.tsx now handle their own DOM mutations via refs.

      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerdown', onPointerDown);
      cancelAnimationFrame(rafId.current);
      mq.removeEventListener('change', handleMotion);
    };
  }, [setReducedMotion, setPerformanceMode]);

  return <>{children}</>;
};

