import { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface NavigationProps {
  sections: string[];
  activeSection: string;
  onNavigate: (section: string) => void;
}

const sectionLabels: Record<string, string> = {
  boot: 'INIT',
  about: 'ABOUT',
  capabilities: 'SKILLS',
  projects: 'PROJECTS',
  experience: 'EXPERIENCE',
  contact: 'CONTACT'
};

export default function Navigation({ sections, activeSection, onNavigate }: NavigationProps) {
  const navRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Record<string, HTMLButtonElement>>({});

  // Animate navigation panel entrance
  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', delay: 0.8 }
      );
    }
  }, []);

  // Animate active section indicator
  useEffect(() => {
    if (buttonRefs.current[activeSection]) {
      const activeButton = buttonRefs.current[activeSection];
      
      gsap.to(activeButton, {
        duration: 0.4,
        ease: 'power2.out',
        overwrite: 'auto'
      });
    }
  }, [activeSection]);

  const handleMouseEnter = (section: string) => {
    if (buttonRefs.current[section] && section !== activeSection) {
      gsap.to(buttonRefs.current[section], {
        duration: 0.3,
        ease: 'power2.out',
        boxShadow: 'inset 0 0 15px rgba(255, 63, 119, 0.1)',
        overwrite: 'auto'
      });
    }
  };

  const handleMouseLeave = (section: string) => {
    if (buttonRefs.current[section] && section !== activeSection) {
      gsap.to(buttonRefs.current[section], {
        duration: 0.3,
        ease: 'power2.out',
        boxShadow: 'inset 0 0 0px rgba(255, 63, 119, 0)',
        overwrite: 'auto'
      });
    }
  };

  const handleNavigate = (section: string) => {
    if (buttonRefs.current[section]) {
      // Click feedback - subtle compression
      gsap.to(buttonRefs.current[section], {
        duration: 0.1,
        scale: 0.98,
        ease: 'power2.in',
        onComplete: () => {
          gsap.to(buttonRefs.current[section], {
            duration: 0.2,
            scale: 1,
            ease: 'back.out'
          });
        }
      });
    }
    
    onNavigate(section);
  };

  return (
    <nav ref={navRef} className="fixed top-3 md:top-6 left-1/2 transform -translate-x-1/2 z-50 opacity-0 w-[95vw] md:w-auto">
      <div className="bg-zinc-900 bg-opacity-80 border border-pink-500 border-opacity-30 backdrop-blur-md rounded-lg shadow-lg shadow-pink-500/20">
        <div className="flex flex-row items-center gap-0 overflow-x-auto scrollbar-hide">
          {sections.map((section, index) => (
            <button
              key={section}
              ref={(el) => {
                if (el) buttonRefs.current[section] = el;
              }}
              onClick={() => handleNavigate(section)}
              onMouseEnter={() => handleMouseEnter(section)}
              onMouseLeave={() => handleMouseLeave(section)}
              className={`relative px-3 md:px-6 py-2 md:py-3 text-xs md:text-sm tracking-wider md:tracking-widest font-semibold transition-colors duration-200 whitespace-nowrap ${
                activeSection === section
                  ? 'text-pink-400 bg-zinc-800 border-b-2 border-pink-400'
                  : 'text-zinc-400 hover:text-pink-300'
              } ${index !== 0 ? 'border-l border-zinc-700 border-opacity-40' : ''} group overflow-hidden`}
            >
              <span className="absolute inset-0 flex items-center justify-center text-[10px] md:text-xs text-zinc-700 font-bold tracking-widest opacity-30 pointer-events-none">
                {sectionLabels[section]}
              </span>
              <span className="relative">
                {sectionLabels[section]}
              </span>
              {activeSection === section && (
                <span className="absolute bottom-1 left-2 right-2 md:left-6 md:right-6 h-0.5 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full"></span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="text-center text-[10px] md:text-xs text-zinc-600 tracking-wider mt-2 md:mt-3">
        CONTROL.PANEL
      </div>
    </nav>
  );
}
