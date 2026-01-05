import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import VANTA from 'vanta/dist/vanta.net.min';

interface VantaInstance {
  destroy?: () => void;
  resize?: () => void;
}

interface VantaNetProps {
  isActive: boolean;
}

export default function VantaNet({ isActive }: VantaNetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const vantaInstanceRef = useRef<VantaInstance | null>(null);
  const initTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (!isActive) {
      // Destroy instance when About tab is deactivated
      if (vantaInstanceRef.current && typeof vantaInstanceRef.current.destroy === 'function') {
        try {
          vantaInstanceRef.current.destroy();
        } catch (e) {
          console.warn('Error destroying Vanta instance:', e);
        }
        vantaInstanceRef.current = null;
      }
      if (initTimeoutRef.current) {
        clearTimeout(initTimeoutRef.current);
      }
      return;
    }

    const setupVanta = () => {
      if (!containerRef.current) return;

      // Remove any leftover canvases before re-init to avoid leaking into other tabs
      const existingCanvas = containerRef.current.querySelector('canvas');
      if (existingCanvas) {
        existingCanvas.remove();
      }

      // Ensure Vanta sees THREE on the global scope
      (window as any).THREE = (window as any).THREE || THREE;

      // Destroy previous instance if exists
      if (vantaInstanceRef.current && typeof vantaInstanceRef.current.destroy === 'function') {
        try {
          vantaInstanceRef.current.destroy();
        } catch (e) {
          console.warn('Error destroying previous instance:', e);
        }
      }

      try {
        vantaInstanceRef.current = (VANTA as any)({
          el: containerRef.current,
          THREE: (window as any).THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 0.75,
          scaleMobile: 0.75,
          backgroundColor: 0x18181b,
          color: 0x1a1a1a,
          pointsColor: 0x0f0f0f,
          points: 11.00,
          maxDistance: 21.00
        });

        // Apply opacity to canvas to make it more subtle
        if (containerRef.current?.querySelector('canvas')) {
          const canvas = containerRef.current.querySelector('canvas') as HTMLCanvasElement;
          canvas.style.opacity = '0.3';
        }
      } catch (e) {
        console.error('❌ Error initializing Vanta Net:', e);
        initTimeoutRef.current = setTimeout(setupVanta, 600);
      }
    };

    setupVanta();

    return () => {
      if (initTimeoutRef.current) {
        clearTimeout(initTimeoutRef.current);
      }
      if (vantaInstanceRef.current && typeof vantaInstanceRef.current.destroy === 'function') {
        try {
          vantaInstanceRef.current.destroy();
        } catch (e) {
          console.warn('Error destroying Vanta instance:', e);
        }
        vantaInstanceRef.current = null;
      }

      // Remove any lingering canvases to ensure other tabs stay clean
      if (containerRef.current) {
        const canvas = containerRef.current.querySelector('canvas');
        if (canvas) {
          canvas.remove();
        }
      }
    };
  }, [isActive]);

  // Only render when active to avoid memory overhead
  if (!isActive) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-screen overflow-hidden bg-zinc-900 pointer-events-none"
      aria-hidden="true"
    />
  );
}
