'use client';

import { useEffect, useRef, useCallback } from 'react';
import { useEffectsStore } from '@/store/useEffectsStore';

interface DistortionFieldOptions {
  /** Radius of the distortion field in px. Default 250. */
  radius?: number;
  /** Maximum translation in px. Default 8. */
  maxTranslate?: number;
  /** Maximum tilt in degrees. Default 2. */
  maxTilt?: number;
  /** Lerp smoothing factor (0-1). Lower = smoother. Default 0.08. */
  smoothing?: number;
}

/**
 * useDistortionField – Cursor proximity distortion
 * ──────────────────────────────────────────────────────────
 * Attach to any element. When the cursor enters the ~250px
 * radius, the element subtly translates and tilts away from
 * the cursor, as if pushed by an invisible gravitational
 * field. The effect is extremely subtle — think Apple product
 * page, not funhouse mirror.
 *
 * Uses its own rAF loop for maximum smoothness and reads
 * the lerped mouse position from Zustand.
 */
export const useDistortionField = (
  ref: React.RefObject<HTMLElement | null>,
  options: DistortionFieldOptions = {}
) => {
  const {
    radius = 250,
    maxTranslate = 8,
    maxTilt = 2,
    smoothing = 0.08,
  } = options;

  const reducedMotion = useEffectsStore((s) => s.reducedMotion);

  // Current animated values
  const current = useRef({ x: 0, y: 0, rx: 0, ry: 0 });
  const target = useRef({ x: 0, y: 0, rx: 0, ry: 0 });
  const rafId = useRef(0);

  useEffect(() => {
    if (reducedMotion || !ref.current) return;

    const el = ref.current;

    const tick = () => {
      const { mouseLerped } = useEffectsStore.getState();
      const mx = mouseLerped.x;
      const my = mouseLerped.y;

      // Reset targets
      target.current.x = 0;
      target.current.y = 0;
      target.current.rx = 0;
      target.current.ry = 0;

      if (mx !== -9999) {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = mx - cx;
        const dy = my - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < radius && dist > 0) {
          // Strength: stronger when closer, zero at radius edge
          const strength = (1 - dist / radius);
          const strengthEased = strength * strength; // quadratic for subtlety

          // Push element away from cursor
          const normX = dx / dist;
          const normY = dy / dist;
          target.current.x = -normX * maxTranslate * strengthEased;
          target.current.y = -normY * maxTranslate * strengthEased;

          // Tilt toward cursor (perspective tilt)
          target.current.rx = (dy / radius) * maxTilt * strengthEased;
          target.current.ry = -(dx / radius) * maxTilt * strengthEased;
        }
      }

      // Lerp to targets
      current.current.x += (target.current.x - current.current.x) * smoothing;
      current.current.y += (target.current.y - current.current.y) * smoothing;
      current.current.rx += (target.current.rx - current.current.rx) * smoothing;
      current.current.ry += (target.current.ry - current.current.ry) * smoothing;

      // Apply only if values are significant enough
      const { x, y, rx, ry } = current.current;
      if (Math.abs(x) > 0.01 || Math.abs(y) > 0.01) {
        el.style.transform = `translate3d(${x}px, ${y}px, 0) perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg)`;
      } else {
        el.style.transform = '';
      }

      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId.current);
      el.style.transform = '';
    };
  }, [ref, radius, maxTranslate, maxTilt, smoothing, reducedMotion]);
};
