import { useEffectsStore, CursorState } from '@/store/useEffectsStore';
import { useCallback } from 'react';

/**
 * useCursor – Semantic cursor state hook
 * ──────────────────────────────────────────────────────────
 * Provides setCursor / resetCursor for components that need
 * to communicate hover intent to the cursor engine.
 *
 * Note: MagneticElement now handles its own cursor state
 * internally, so you only need this hook for custom
 * interactions not wrapped in MagneticElement.
 */
export const useCursor = () => {
  const setCursorState = useEffectsStore((s) => s.setCursorState);

  const setCursor = useCallback((state: CursorState) => {
    setCursorState(state);
  }, [setCursorState]);

  const resetCursor = useCallback(() => {
    setCursorState('default');
  }, [setCursorState]);

  return { setCursor, resetCursor };
};
