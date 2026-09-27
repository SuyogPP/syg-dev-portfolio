import { create } from 'zustand';

export type CursorState = 'default' | 'link' | 'button' | 'project' | 'card' | 'dragging' | 'loading' | 'hidden';
export type PerformanceMode = 'high' | 'medium' | 'low';

interface Vec2 {
  x: number;
  y: number;
}

interface EffectsState {
  // Cursor semantic state
  cursorState: CursorState;
  setCursorState: (state: CursorState) => void;

  // Performance
  performanceMode: PerformanceMode;
  setPerformanceMode: (mode: PerformanceMode) => void;
  reducedMotion: boolean;
  setReducedMotion: (reduced: boolean) => void;

  // Global mouse position (raw target, updated on every mousemove)
  mouseTarget: Vec2;
  setMouseTarget: (pos: Vec2) => void;

  // Smoothed / lerped mouse position (updated every rAF tick)
  mouseLerped: Vec2;
  setMouseLerped: (pos: Vec2) => void;

  // Velocity vector – computed each tick
  mouseVelocity: Vec2;
  setMouseVelocity: (vel: Vec2) => void;

  // Speed scalar (length of velocity)
  mouseSpeed: number;
  setMouseSpeed: (speed: number) => void;
}

export const useEffectsStore = create<EffectsState>((set) => ({
  cursorState: 'default',
  setCursorState: (state) => set({ cursorState: state }),

  performanceMode: 'high',
  setPerformanceMode: (mode) => set({ performanceMode: mode }),

  reducedMotion: false,
  setReducedMotion: (reduced) => set({ reducedMotion: reduced }),

  mouseTarget: { x: -9999, y: -9999 },
  setMouseTarget: (pos) => set({ mouseTarget: pos }),

  mouseLerped: { x: -9999, y: -9999 },
  setMouseLerped: (pos) => set({ mouseLerped: pos }),

  mouseVelocity: { x: 0, y: 0 },
  setMouseVelocity: (vel) => set({ mouseVelocity: vel }),

  mouseSpeed: 0,
  setMouseSpeed: (speed) => set({ mouseSpeed: speed }),
}));
