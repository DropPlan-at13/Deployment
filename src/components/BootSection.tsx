import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import VantaGlobe from './VantaGlobe';

interface BootSectionProps {
  isActive: boolean;
  onComplete: () => void;
}

export default function BootSection({ isActive, onComplete }: BootSectionProps) {
  const [linesVisible, setLinesVisible] = useState<number>(0);
  const [systemReady, setSystemReady] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bootLinesRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const chevronRef = useRef<SVGSVGElement>(null);

  const bootSequence = [
    'INITIALIZING SYSTEM...',
    'LOADING CORE MODULES...',
    'CALIBRATING INTERFACES...',
    'SYSTEM READY'
  ];

  // Boot sequence with GSAP timeline for realistic startup feel
  useEffect(() => {
    const tl = gsap.timeline();
    
    bootSequence.forEach((_, index) => {
      tl.add(() => {
        setLinesVisible(index + 1);
      }, index * 0.35);
    });

    tl.add(() => {
      setTimeout(() => setSystemReady(true), 200);
    }, '+=0.2');

    return () => {
      tl.kill();
    };
  }, []);

  // Animate boot lines with stagger effect
  useEffect(() => {
    if (bootLinesRef.current && isActive) {
      const lines = bootLinesRef.current.querySelectorAll('.boot-line');
      if (lines.length > 0) {
        gsap.fromTo(
          lines,
          { opacity: 0, x: -10 },
          {
            opacity: 1,
            x: 0,
            duration: 0.4,
            stagger: 0.1,
            ease: 'power1.out'
          }
        );
      }
    }
  }, [linesVisible, isActive]);

  // Animate main content with sequential module feel
  useEffect(() => {
    if (systemReady && contentRef.current && isActive) {
      const tl = gsap.timeline();

      // Name animation - soft entrance
      if (titleRef.current) {
        tl.fromTo(
          titleRef.current,
          { opacity: 0, y: 15, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'cubic.out' },
          0
        );
      }

      // Subtitle
      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
          0.15
        );
      }

      // Mission statement with left border accent
      if (missionRef.current) {
        tl.fromTo(
          missionRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
          0.35
        );
      }

      // Button entrance
      if (buttonRef.current) {
        tl.fromTo(
          buttonRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
          0.45
        );
      }
    }
  }, [systemReady, isActive]);

  // Button hover interaction - command feedback
  useEffect(() => {
    if (!buttonRef.current) return;

    if (buttonHovered) {
      gsap.to(buttonRef.current, {
        duration: 0.3,
        ease: 'power2.out',
        boxShadow: '0 0 20px rgba(255, 63, 119, 0.4)',
        overwrite: 'auto'
      });

      gsap.to(chevronRef.current, {
        duration: 0.4,
        y: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    } else {
      gsap.to(buttonRef.current, {
        duration: 0.3,
        ease: 'power2.out',
        boxShadow: '0 0 0px rgba(255, 63, 119, 0)',
        overwrite: 'auto'
      });

      if (chevronRef.current) {
        gsap.killTweensOf(chevronRef.current);
        gsap.to(chevronRef.current, {
          duration: 0.3,
          y: 0,
          ease: 'power2.out'
        });
      }
    }
  }, [buttonHovered]);

  // Click feedback animation
  const handleButtonClick = () => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        duration: 0.15,
        scale: 0.95,
        ease: 'power2.in',
        onComplete: () => {
          gsap.to(buttonRef.current, {
            duration: 0.2,
            scale: 1,
            ease: 'back.out'
          });
        }
      });
    }
    onComplete();
  };

  return (
    <section
      ref={containerRef}
      className={`relative h-screen items-center justify-start px-6 md:px-12 lg:px-16 transition-opacity duration-700 overflow-hidden ${
        isActive ? 'opacity-100 flex' : 'opacity-0 pointer-events-none hidden'
      }`}
    >
      {/* Vanta Globe Background - Isolated to INIT tab only */}
      <VantaGlobe isActive={isActive} />

      {/* Content layer - positioned above globe with z-index */}
      <div className="relative z-10 max-w-5xl w-full px-2 md:px-4">
        <div ref={bootLinesRef} className="space-y-2 mb-8">
          {bootSequence.slice(0, linesVisible).map((line, index) => (
            <div
              key={index}
              className="boot-line text-zinc-50 text-sm tracking-wider"
            >
              {line}
            </div>
          ))}
        </div>

        <div ref={contentRef}>
          <h1 ref={titleRef} className="text-6xl md:text-7xl font-bold mb-4 text-zinc-100 tracking-tight">
            KISHORE P R
          </h1>
          <div ref={subtitleRef} className="text-3xl text-zinc-400 mb-2 font-light">
            Robotics & Automation Engineer
          </div>
          <div ref={missionRef} className="text-xl text-zinc-400 border-l-2 border-steel-blue pl-4 py-2 max-w-2xl">
            Building, analyzing, and improving real-world engineering systems while exploring emerging technologies
          </div>

          <button
            ref={buttonRef}
            onClick={handleButtonClick}
            onMouseEnter={() => setButtonHovered(true)}
            onMouseLeave={() => setButtonHovered(false)}
            className="mt-12 flex items-center gap-2 text-zinc-400 hover:text-zinc-300 transition-colors group"
          >
            <span className="tracking-wider text-sm">EXPLORE SYSTEMS</span>
            <ChevronDown ref={chevronRef} className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
