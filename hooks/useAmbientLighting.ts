import { useEffect } from 'react';
import { useEffectsStore } from '@/store/useEffectsStore';

export const useAmbientLighting = () => {
    const performanceMode = useEffectsStore((state) => state.performanceMode);

    useEffect(() => {
        if (performanceMode === 'low') return;

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            document.documentElement.style.setProperty('--mouse-x', `${clientX}px`);
            document.documentElement.style.setProperty('--mouse-y', `${clientY}px`);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [performanceMode]);
};
