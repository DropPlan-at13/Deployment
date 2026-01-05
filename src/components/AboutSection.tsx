import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import VantaNet from './VantaNet';

interface AboutSectionProps {
  isActive: boolean;
}

export default function AboutSection({ isActive }: AboutSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const identityRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive && containerRef.current) {
      const tl = gsap.timeline();

      // Title animation
      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
        0
      );

      // Identity label
      tl.fromTo(
        identityRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
        0.15
      );

      // Mission statement
      tl.fromTo(
        missionRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
        0.25
      );
    }
  }, [isActive]);

  return (
    <section
      ref={containerRef}
      className={`min-h-screen flex items-center justify-center py-20 transition-opacity duration-700 relative ${
        isActive ? 'opacity-100' : 'opacity-0 pointer-events-none hidden'
      }`}
    >
      <VantaNet isActive={isActive} />
      <div className="max-w-4xl w-full px-8 relative z-10">
        <div className="mb-8">
          <h2 ref={titleRef} className="text-4xl font-bold mb-2 text-zinc-100">
            KISHORE P R
          </h2>
          <div ref={identityRef} className="text-zinc-500 text-sm tracking-wider">
            SYSTEM IDENTITY
          </div>
        </div>

        <div ref={missionRef} className="space-y-6">
          <p className="text-xl text-zinc-300 font-light leading-relaxed border-l-2 border-steel-blue pl-4 py-2">
            Robotics and Automation Engineer focused on shaping intelligent machines.
          </p>
          
          <p className="text-lg text-zinc-400 leading-relaxed">
            I blend hardware, software, control logic, and AI-driven perception to create systems that move, sense, decide, and adapt. From circuit design and embedded programming to real-time data acquisition and intelligent algorithms, I thrive on hands-on experimentation with emerging technologies.
          </p>

          <p className="text-lg text-zinc-400 leading-relaxed">
            My current areas of interest lie in Computer Vision, Speech Recognition, and Facial Recognition, where raw sensor data is transformed into perception and decision-making. I enjoy designing pipelines that connect cameras, microphones, and sensors to AI models, enabling machines to understand and respond to the real world in real time.
          </p>

          <p className="text-lg text-zinc-400 leading-relaxed">
            As a Robotics and Automation Engineer, I’m deeply enthusiastic about working with AI-enabled systems, Linux-based environments, and embedded platforms, where low-level control meets high-level intelligence. I enjoy building and deploying systems on Linux, working close to the hardware, optimizing performance, and integrating AI models into real-time, resource-constrained systems.
          </p>
        </div>
      </div>
    </section>
  );
}
