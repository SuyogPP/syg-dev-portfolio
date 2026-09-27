'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useEffectsStore } from '@/store/useEffectsStore';

interface MagneticElementProps {
  children: React.ReactElement;
  /** Pull strength toward cursor (0–1). Default 0.3. */
  strength?: number;
  /** Distance in px at which magnetic pull activates. Default 120. */
  radius?: number;
  /** Damping duration in seconds. Default 1.2. */
  damping?: number;
}

/**
 * MagneticElement – Physical pull interaction
 * ──────────────────────────────────────────────────────────
 * Wraps any element in a gravitational pull toward the
 * cursor. Uses GSAP quickTo for 60fps interpolation.
 *
 * The pull uses distance-based falloff so it feels like a
 * physical field rather than a binary hover state.
 *
 * Also updates the cursor semantic state when the element
 * is being interacted with.
 */
export const MagneticElement = ({
  children,
  strength = 0.3,
  radius = 120,
  damping = 1.2,
}: MagneticElementProps) => {
  const magnetic = useRef<HTMLElement>(null);
  const reducedMotion = useEffectsStore((s) => s.reducedMotion);
  const setCursorState = useEffectsStore((s) => s.setCursorState);

  useEffect(() => {
    if (reducedMotion || !magnetic.current) return;

    const el = magnetic.current;

    const xTo = gsap.quickTo(el, 'x', { duration: damping, ease: 'power4.out' });
    const yTo = gsap.quickTo(el, 'y', { duration: damping, ease: 'power4.out' });

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < radius) {
        // Distance-based falloff (stronger when closer)
        const falloff = 1 - dist / radius;
        xTo(dx * strength * falloff);
        yTo(dy * strength * falloff);
      }
    };

    const onEnter = () => {
      setCursorState('button');
    };

    const onLeave = () => {
      xTo(0);
      yTo(0);
      setCursorState('default');
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseenter', onEnter);
    el.addEventListener('mouseleave', onLeave);

    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseenter', onEnter);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [strength, radius, damping, reducedMotion, setCursorState]);

  return React.cloneElement(children, { ref: magnetic });
};
