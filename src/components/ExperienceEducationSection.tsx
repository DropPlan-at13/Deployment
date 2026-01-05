import { useEffect, useRef } from 'react';
import { Briefcase, BookOpen, Award } from 'lucide-react';
import gsap from 'gsap';

interface ExperienceEducationSectionProps {
  isActive: boolean;
}

export default function ExperienceEducationSection({ isActive }: ExperienceEducationSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const internshipsRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const achievementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive && containerRef.current) {
      const tl = gsap.timeline();

      // Animate internships column
      if (internshipsRef.current) {
        tl.fromTo(
          internshipsRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
          0
        );
      }

      // Animate education column
      if (educationRef.current) {
        tl.fromTo(
          educationRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
          0.1
        );
      }

      // Animate achievements column
      if (achievementsRef.current) {
        tl.fromTo(
          achievementsRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
          0.2
        );
      }
    }
  }, [isActive]);

  return (
    <section
      ref={containerRef}
      className={`min-h-screen flex items-center justify-center py-20 pt-40 transition-opacity duration-700 ${
        isActive ? 'opacity-100' : 'opacity-0 pointer-events-none absolute inset-0'
      }`}
    >
      <div className="max-w-7xl w-full px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-2 text-zinc-100">EXPERIENCE & EDUCATION</h2>
          <div className="text-zinc-500 text-sm tracking-wider">PROFESSIONAL JOURNEY</div>
        </div>

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Column 1: Internships */}
          <div ref={internshipsRef}>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-6 h-6 text-steel-blue" />
              <h3 className="text-2xl font-bold text-zinc-100">INTERNSHIPS</h3>
            </div>

            <div className="space-y-6">
              {/* Internship 1 */}
              <div className="bg-zinc-800 border border-zinc-700 p-6 rounded-lg hover:border-steel-blue hover:shadow-lg hover:shadow-pink-500/5 transition-all duration-300 group">
                <div className="text-sm text-steel-blue font-mono tracking-wide mb-2">
                  Feb 14 – Mar 1, 2024
                </div>
                <h4 className="text-lg font-bold text-zinc-100 mb-1 group-hover:text-steel-blue transition-colors">
                  Master Linque Automation
                </h4>
                <p className="text-sm text-zinc-400 mb-3">(SPM Manufacturing Company)</p>
                <p className="text-xs text-zinc-500 mb-3">Intern</p>
                <ul className="text-sm text-zinc-400 space-y-1">
                  <li className="flex items-start gap-2">
                    <span className="text-steel-blue mt-1">•</span>
                    <span>Hands-on experience in industrial automation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-steel-blue mt-1">•</span>
                    <span>Practical electronics and automation projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-steel-blue mt-1">•</span>
                    <span>Real-world manufacturing workflows</span>
                  </li>
                </ul>
              </div>

              {/* Internship 2 */}
              <div className="bg-zinc-800 border border-zinc-700 p-6 rounded-lg hover:border-steel-blue hover:shadow-lg hover:shadow-pink-500/5 transition-all duration-300 group">
                <div className="text-sm text-steel-blue font-mono tracking-wide mb-2">
                  Dec 2024 – Present
                </div>
                <h4 className="text-lg font-bold text-zinc-100 mb-1 group-hover:text-steel-blue transition-colors">
                  SRM Group of Institutions
                </h4>
                <p className="text-sm text-zinc-400 mb-3">(Directorate of Research, Ramapuram & Trichy)</p>
                <p className="text-xs text-zinc-500 mb-3">Research Intern</p>
                <ul className="text-sm text-zinc-400 space-y-1">
                  <li className="flex items-start gap-2">
                    <span className="text-steel-blue mt-1">•</span>
                    <span>LabVIEW &amp; SCADA real-time control</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-steel-blue mt-1">•</span>
                    <span>Data acquisition with Arduino &amp; ESP32</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-steel-blue mt-1">•</span>
                    <span>Sensor integration &amp; Python data collection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-steel-blue mt-1">•</span>
                    <span>Linux (Ubuntu) development environment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Column 2: Education */}
          <div ref={educationRef}>
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="w-6 h-6 text-steel-blue" />
              <h3 className="text-2xl font-bold text-zinc-100">EDUCATION</h3>
            </div>

            <div className="space-y-6">
              {/* University */}
              <div className="bg-zinc-800 border border-zinc-700 p-6 rounded-lg hover:border-steel-blue hover:shadow-lg hover:shadow-pink-500/5 transition-all duration-300 group">
                <h4 className="text-lg font-bold text-zinc-100 mb-1 group-hover:text-steel-blue transition-colors">
                  Easwari Engineering College
                </h4>
                <p className="text-sm text-zinc-400 mb-3">Bachelor of Engineering</p>
                <p className="text-sm text-steel-blue mb-3 font-semibold">Specialization: Robotics and Automation</p>
                <div className="text-xl font-bold text-steel-blue">
                  CGPA: 9.25
                </div>
              </div>

              {/* 12th Grade */}
              <div className="bg-zinc-800 border border-zinc-700 p-6 rounded-lg hover:border-steel-blue hover:shadow-lg hover:shadow-pink-500/5 transition-all duration-300 group">
                <h4 className="text-lg font-bold text-zinc-100 mb-1 group-hover:text-steel-blue transition-colors">
                  ASAN Memorial Senior Secondary School
                </h4>
                <p className="text-sm text-zinc-400 mb-3">12th Grade</p>
                <div className="text-lg font-semibold text-zinc-100">
                  77%
                </div>
              </div>

              {/* 10th Grade */}
              <div className="bg-zinc-800 border border-zinc-700 p-6 rounded-lg hover:border-steel-blue hover:shadow-lg hover:shadow-pink-500/5 transition-all duration-300 group">
                <h4 className="text-lg font-bold text-zinc-100 mb-1 group-hover:text-steel-blue transition-colors">
                  ASAN Memorial Senior Secondary School
                </h4>
                <p className="text-sm text-zinc-400 mb-3">10th Grade</p>
                <div className="text-lg font-semibold text-zinc-100">
                  78.8%
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Achievements & Certifications */}
          <div ref={achievementsRef}>
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-6 h-6 text-steel-blue" />
              <h3 className="text-2xl font-bold text-zinc-100">ACHIEVEMENTS</h3>
            </div>

            <div className="space-y-6">
              {/* Achievements */}
              <div>
                <h4 className="text-sm font-bold text-steel-blue tracking-wider mb-3">
                  AWARDS & HONORS
                </h4>
                <div className="space-y-3">
                  <div className="bg-zinc-800 border border-zinc-700 p-4 rounded-lg hover:border-steel-blue hover:shadow-lg hover:shadow-pink-500/5 transition-all duration-300 group">
                    <p className="text-sm text-zinc-100 font-semibold mb-1 group-hover:text-steel-blue transition-colors">
                      🥇 1st Place – Inter-College Project Presentation
                    </p>
                    <p className="text-xs text-zinc-400">
                      Autonomous Drone Display (October 2024)
                    </p>
                  </div>

                  <div className="bg-zinc-800 border border-zinc-700 p-4 rounded-lg hover:border-steel-blue hover:shadow-lg hover:shadow-pink-500/5 transition-all duration-300 group">
                    <p className="text-sm text-zinc-100 font-semibold mb-1 group-hover:text-steel-blue transition-colors">
                      🥈 2nd Place – Inter-College Inventory Showcase
                    </p>
                    <p className="text-xs text-zinc-400">
                      Autonomous Drone Display (April 2024)
                    </p>
                  </div>

                  <div className="bg-zinc-800 border border-zinc-700 p-4 rounded-lg hover:border-steel-blue hover:shadow-lg hover:shadow-pink-500/5 transition-all duration-300 group">
                    <p className="text-sm text-zinc-100 font-semibold mb-1 group-hover:text-steel-blue transition-colors">
                      🏁 13th Place – ADDC 2024
                    </p>
                    <p className="text-xs text-zinc-400">
                      Autonomous Drone Flight Competition, KCG College (July 2024)
                    </p>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h4 className="text-sm font-bold text-steel-blue tracking-wider mb-3">
                  CERTIFICATIONS
                </h4>
                <div className="space-y-3 text-sm text-zinc-300">
                  <p className="flex items-start gap-2">
                    <span className="text-steel-blue mt-0.5">✓</span>
                    <span>NPTEL (Elite) – Automation in Production Systems &amp; Management</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-steel-blue mt-0.5">✓</span>
                    <span>NPTEL (Elite) – Sensors and Actuators</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-steel-blue mt-0.5">✓</span>
                    <span>Cisco Certified – Python Essentials 1 &amp; 2</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-steel-blue mt-0.5">✓</span>
                    <span>Cisco Certified – Introduction to Networks</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-steel-blue mt-0.5">✓</span>
                    <span>Cisco Certified – Switching, Routing &amp; Wireless Essentials</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-steel-blue mt-0.5">✓</span>
                    <span>Cisco Certified – Enterprise Networking, Security &amp; Automation</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-steel-blue mt-0.5">✓</span>
                    <span>Cisco Certified – Introduction to Cybersecurity</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
