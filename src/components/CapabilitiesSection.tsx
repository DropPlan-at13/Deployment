import { useState, useEffect, useRef } from 'react';
import { Code2, Zap, Cpu, Wrench } from 'lucide-react';
import gsap from 'gsap';
import SkillModal from './SkillModal';
import LinuxModal from './LinuxModal';
import MissionPlannerModal from './MissionPlannerModal';

interface CapabilitiesSectionProps {
  isActive: boolean;
}

interface SkillGroup {
  icon: React.ReactNode;
  title: string;
  skills: string[];
  badges?: string[];
}

interface SkillModule {
  title: string;
  technologies: Array<{
    name: string;
    experience?: string;
    logo: string;
  }>;
}

export default function CapabilitiesSection({ isActive }: CapabilitiesSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedSkill, setSelectedSkill] = useState<SkillModule | null>(null);
  const [showLinuxModal, setShowLinuxModal] = useState(false);
  const [showMissionPlannerModal, setShowMissionPlannerModal] = useState(false);

  const skillGroups: SkillGroup[] = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'PROGRAMMING',
      skills: ['Python', 'C', 'HTML', 'CSS', 'JavaScript'],
      badges: ['PY', 'C', 'JS']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'AUTOMATION & CONTROL',
      skills: ['LabVIEW', 'SCADA', 'Data Acquisition', 'Sensor Integration'],
      badges: ['LabVIEW', 'SCADA', 'DAQ']
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'EMBEDDED HARDWARE',
      skills: ['Arduino', 'Arduino Mega', 'ESP32', 'NI-DAQ', 'Raspberry Pi', 'Jetson Nano'],
      badges: ['ARD', 'Mega', 'ESP32', 'NI-DAQ', 'RPi']
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'DESIGN & SIMULATION',
      skills: ['Fusion 360', 'Blender', 'KiCAD', 'Fritzing'],
      badges: ['CAD', '3D', 'PCB']
    }
  ];

  const skillModules: SkillModule[] = [
    {
      title: 'PROGRAMMING',
      technologies: [
        {
          name: 'Python',
          experience: 'Intermediate',
          logo: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 10 C30 10 20 20 20 35 L20 50 C20 65 30 75 50 75 L50 75 C70 75 80 65 80 50 L80 35 C80 20 70 10 50 10 Z" fill="none" stroke="rgb(255,63,119)" stroke-width="3"/><text x="50" y="50" text-anchor="middle" dy="0.3em" font-size="28" fill="rgb(255,63,119)" font-weight="bold">P</text></svg>'
        },
        {
          name: 'HTML',
          experience: 'Intermediate',
          logo: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><text x="50" y="55" text-anchor="middle" font-size="32" fill="rgb(255,63,119)" font-weight="bold">&lt;/&gt;</text></svg>'
        },
        {
          name: 'JavaScript',
          experience: 'Beginner',
          logo: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="15" width="70" height="70" fill="none" stroke="rgb(255,63,119)" stroke-width="2"/><text x="50" y="60" text-anchor="middle" font-size="24" fill="rgb(255,63,119)" font-weight="bold">JS</text></svg>'
        },
        {
          name: 'CSS',
          experience: 'Beginner',
          logo: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="35" fill="none" stroke="rgb(255,63,119)" stroke-width="2"/><text x="50" y="57" text-anchor="middle" font-size="22" fill="rgb(255,63,119)" font-weight="bold">CSS</text></svg>'
        }
      ]
    },
    {
      title: 'AUTOMATION & CONTROL',
      technologies: [
        {
          name: 'LabVIEW',
          experience: 'Advanced',
          logo: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="80" height="80" fill="none" stroke="rgb(255,63,119)" stroke-width="2" rx="4"/><text x="50" y="60" text-anchor="middle" font-size="18" fill="rgb(255,63,119)" font-weight="bold">LAB</text></svg>'
        },
        {
          name: 'SCADA',
          experience: 'Advanced',
          logo: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="35" fill="none" stroke="rgb(255,63,119)" stroke-width="2"/><circle cx="50" cy="50" r="20" fill="none" stroke="rgb(255,63,119)" stroke-width="1.5"/><text x="50" y="57" text-anchor="middle" font-size="14" fill="rgb(255,63,119)" font-weight="bold">HMI</text></svg>'
        },
        {
          name: 'Data Acquisition',
          experience: 'Intermediate',
          logo: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="30" width="15" height="40" fill="none" stroke="rgb(255,63,119)" stroke-width="2"/><rect x="42" y="15" width="15" height="55" fill="none" stroke="rgb(255,63,119)" stroke-width="2"/><rect x="70" y="40" width="15" height="30" fill="none" stroke="rgb(255,63,119)" stroke-width="2"/></svg>'
        },
        {
          name: 'Sensor Integration',
          experience: 'Advanced',
          logo: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="35" r="12" fill="none" stroke="rgb(255,63,119)" stroke-width="2"/><line x1="50" y1="47" x2="50" y2="70" stroke="rgb(255,63,119)" stroke-width="2"/><line x1="35" y1="70" x2="65" y2="70" stroke="rgb(255,63,119)" stroke-width="2"/></svg>'
        }
      ]
    },
    {
      title: 'EMBEDDED HARDWARE',
      technologies: [
        {
          name: 'Arduino',
          experience: 'Advanced',
          logo: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="70" height="60" fill="none" stroke="rgb(255,63,119)" stroke-width="2" rx="4"/><circle cx="30" cy="50" r="3" fill="rgb(255,63,119)"/><circle cx="50" cy="50" r="3" fill="rgb(255,63,119)"/><circle cx="70" cy="50" r="3" fill="rgb(255,63,119)"/></svg>'
        },
        {
          name: 'Arduino Mega',
          experience: 'Advanced',
          logo: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="20" width="80" height="60" fill="none" stroke="rgb(255,63,119)" stroke-width="2" rx="4"/><circle cx="25" cy="50" r="3" fill="rgb(255,63,119)"/><circle cx="40" cy="50" r="3" fill="rgb(255,63,119)"/><circle cx="60" cy="50" r="3" fill="rgb(255,63,119)"/><circle cx="75" cy="50" r="3" fill="rgb(255,63,119)"/><text x="50" y="42" text-anchor="middle" font-size="10" fill="rgb(255,63,119)" font-weight="bold">M</text></svg>'
        },
        {
          name: 'ESP32',
          experience: 'Intermediate',
          logo: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M30 30 L70 30 L70 70 L30 70 Z" fill="none" stroke="rgb(255,63,119)" stroke-width="2"/><text x="50" y="60" text-anchor="middle" font-size="16" fill="rgb(255,63,119)" font-weight="bold">32</text></svg>'
        },
        {
          name: 'NI-DAQ',
          experience: 'Advanced',
          logo: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="25" width="70" height="50" fill="none" stroke="rgb(255,63,119)" stroke-width="2" rx="4"/><line x1="20" y1="35" x2="35" y2="35" stroke="rgb(255,63,119)" stroke-width="2"/><line x1="20" y1="45" x2="35" y2="45" stroke="rgb(255,63,119)" stroke-width="2"/><line x1="20" y1="55" x2="35" y2="55" stroke="rgb(255,63,119)" stroke-width="2"/><line x1="20" y1="65" x2="35" y2="65" stroke="rgb(255,63,119)" stroke-width="2"/><text x="60" y="55" text-anchor="middle" font-size="14" fill="rgb(255,63,119)" font-weight="bold">NI</text></svg>'
        },
        {
          name: 'Raspberry Pi',
          experience: 'Intermediate',
          logo: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="32" fill="none" stroke="rgb(255,63,119)" stroke-width="2"/><circle cx="50" cy="50" r="18" fill="none" stroke="rgb(255,63,119)" stroke-width="1.5"/><circle cx="50" cy="50" r="8" fill="rgb(255,63,119)"/></svg>'
        },
        {
          name: 'Jetson Nano',
          experience: 'Beginner',
          logo: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="25" width="60" height="50" fill="none" stroke="rgb(255,63,119)" stroke-width="2"/><line x1="35" y1="25" x2="35" y2="75" stroke="rgb(255,63,119)" stroke-width="1"/><line x1="50" y1="25" x2="50" y2="75" stroke="rgb(255,63,119)" stroke-width="1"/><line x1="65" y1="25" x2="65" y2="75" stroke="rgb(255,63,119)" stroke-width="1"/></svg>'
        }
      ]
    },
    {
      title: 'DESIGN & SIMULATION',
      technologies: [
        {
          name: 'Fusion 360',
          experience: 'Intermediate',
          logo: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 20 L70 40 L50 60 L30 40 Z" fill="none" stroke="rgb(255,63,119)" stroke-width="2"/><path d="M50 60 L70 80 L50 80 L30 60 Z" fill="none" stroke="rgb(255,63,119)" stroke-width="2"/></svg>'
        },
        {
          name: 'Blender',
          experience: 'Beginner',
          logo: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="35" cy="45" r="15" fill="none" stroke="rgb(255,63,119)" stroke-width="2"/><circle cx="65" cy="45" r="15" fill="none" stroke="rgb(255,63,119)" stroke-width="2"/><circle cx="50" cy="65" r="15" fill="none" stroke="rgb(255,63,119)" stroke-width="2"/></svg>'
        },
        {
          name: 'KiCAD',
          experience: 'Intermediate',
          logo: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="25" width="70" height="50" fill="none" stroke="rgb(255,63,119)" stroke-width="2"/><circle cx="25" cy="35" r="2.5" fill="rgb(255,63,119)"/><circle cx="75" cy="35" r="2.5" fill="rgb(255,63,119)"/><circle cx="25" cy="65" r="2.5" fill="rgb(255,63,119)"/><circle cx="75" cy="65" r="2.5" fill="rgb(255,63,119)"/></svg>'
        },
        {
          name: 'Fritzing',
          experience: 'Beginner',
          logo: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="50" x2="80" y2="50" stroke="rgb(255,63,119)" stroke-width="2"/><circle cx="35" cy="50" r="8" fill="none" stroke="rgb(255,63,119)" stroke-width="2"/><circle cx="65" cy="50" r="8" fill="none" stroke="rgb(255,63,119)" stroke-width="2"/></svg>'
        }
      ]
    }
    ,
    {
      title: 'AI & MACHINE LEARNING STACK',
      technologies: [
        { name: 'Python', logo: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 10 C30 10 20 20 20 35 L20 50 C20 65 30 75 50 75 L50 75 C70 75 80 65 80 50 L80 35 C80 20 70 10 50 10 Z" fill="none" stroke="rgb(255,63,119)" stroke-width="3"/><text x="50" y="50" text-anchor="middle" dy="0.3em" font-size="28" fill="rgb(255,63,119)" font-weight="bold">P</text></svg>' },
        { name: 'PyTorch', logo: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="32" fill="none" stroke="rgb(255,63,119)" stroke-width="2"/><path d="M50 22 L62 34 L50 46 L38 34 Z" fill="rgb(255,63,119)"/><text x="50" y="65" text-anchor="middle" font-size="14" fill="rgb(255,63,119)" font-weight="bold">PT</text></svg>' },
        { name: 'Supervised Learning (Regression)', logo: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="60" height="60" rx="6" ry="6" fill="none" stroke="rgb(255,63,119)" stroke-width="2"/><text x="50" y="57" text-anchor="middle" font-size="14" fill="rgb(255,63,119)" font-weight="bold">SL</text></svg>' },
        { name: 'Pandas', logo: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="30" width="15" height="40" fill="none" stroke="rgb(255,63,119)" stroke-width="2"/><rect x="42" y="15" width="15" height="55" fill="none" stroke="rgb(255,63,119)" stroke-width="2"/><rect x="70" y="40" width="15" height="30" fill="none" stroke="rgb(255,63,119)" stroke-width="2"/></svg>' },
        { name: 'NumPy', logo: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="22" y="22" width="56" height="56" rx="6" fill="none" stroke="rgb(255,63,119)" stroke-width="2"/><text x="50" y="58" text-anchor="middle" font-size="14" fill="rgb(255,63,119)" font-weight="bold">NP</text></svg>' },
        { name: 'Matplotlib', logo: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M20 60 Q50 20 80 60" fill="none" stroke="rgb(255,63,119)" stroke-width="2"/><text x="50" y="82" text-anchor="middle" font-size="10" fill="rgb(255,63,119)" font-weight="bold">MPL</text></svg>' },
        { name: 'Seaborn', logo: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="35" cy="40" r="10" stroke="rgb(255,63,119)" fill="none" stroke-width="2"/><circle cx="65" cy="40" r="10" stroke="rgb(255,63,119)" fill="none" stroke-width="2"/><circle cx="50" cy="64" r="10" stroke="rgb(255,63,119)" fill="none" stroke-width="2"/></svg>' },
        { name: 'Jupyter Notebook', logo: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="18" y="18" width="64" height="64" fill="none" stroke="rgb(255,63,119)" stroke-width="2"/><text x="50" y="58" text-anchor="middle" font-size="14" fill="rgb(255,63,119)" font-weight="bold">JN</text></svg>' },
        { name: 'TensorFlow', logo: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="18" y="18" width="64" height="64" fill="none" stroke="rgb(255,63,119)" stroke-width="2"/><text x="50" y="58" text-anchor="middle" font-size="16" fill="rgb(255,63,119)" font-weight="bold">TF</text></svg>' },
        { name: 'OpenCV', logo: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="35" cy="40" r="10" stroke="rgb(255,63,119)" fill="none" stroke-width="2"/><circle cx="65" cy="40" r="10" stroke="rgb(255,63,119)" fill="none" stroke-width="2"/><circle cx="50" cy="64" r="10" stroke="rgb(255,63,119)" fill="none" stroke-width="2"/></svg>' },
        { name: 'Scikit-learn', logo: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M20 60 Q50 20 80 60" fill="none" stroke="rgb(255,63,119)" stroke-width="2"/><text x="50" y="70" text-anchor="middle" font-size="12" fill="rgb(255,63,119)" font-weight="bold">sk</text></svg>' },
        { name: 'Roboflow', logo: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="22" y="22" width="56" height="56" rx="6" fill="none" stroke="rgb(255,63,119)" stroke-width="2"/><text x="50" y="58" text-anchor="middle" font-size="12" fill="rgb(255,63,119)" font-weight="bold">RF</text></svg>' }
      ]
    }
  ];

  useEffect(() => {
    if (isActive && containerRef.current) {
      const cards = containerRef.current.querySelectorAll('.skill-card');
      const badges = containerRef.current.querySelectorAll('.tech-badge');
      
      gsap.fromTo(
        cards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out'
        }
      );

      gsap.fromTo(
        badges,
        { opacity: 0, y: 5 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.05,
          delay: 0.4,
          ease: 'power2.out'
        }
      );
    }
  }, [isActive]);

  return (
    <section
      ref={containerRef}
      className={`min-h-screen w-full bg-zinc-900 flex items-center justify-center py-20 pt-40 transition-opacity duration-700 ${
        isActive ? 'opacity-100' : 'opacity-0 pointer-events-none absolute inset-0'
      }`}
    >
      <div className="max-w-7xl w-full px-8 bg-zinc-900">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-2 text-zinc-100">TECHNICAL SKILLS</h2>
          <div className="text-zinc-500 text-sm tracking-wider">CORE COMPETENCIES</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group, index) => (
            <button
              key={index}
              onClick={() => setSelectedSkill(skillModules[index])}
              className="skill-card bg-zinc-800 border border-zinc-700 p-6 transition-all duration-300 hover:border-steel-blue group text-left hover:shadow-lg hover:shadow-pink-500/10 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-steel-blue group-hover:text-steel-blue-light transition-colors">
                  {group.icon}
                </div>
                <div className="text-xs text-green-500 tracking-wider border border-green-500 px-2 py-1">
                  ACTIVE
                </div>
              </div>

              <h3 className="text-lg font-bold mb-4 text-zinc-100 tracking-wide">
                {group.title}
              </h3>

              <div className="space-y-2 mb-4">
                {group.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-zinc-400 text-sm group/item"
                  >
                    <div className="w-1.5 h-1.5 bg-steel-blue group-hover/item:bg-steel-blue-light transition-colors"></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>

              {group.badges && (
                <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-700 border-opacity-40">
                  {group.badges.map((badge, idx) => (
                    <span
                      key={idx}
                      className="tech-badge text-xs px-2 py-1 bg-zinc-900 border border-pink-500 border-opacity-30 text-pink-400 tracking-wider opacity-0"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              )}
            </button>
          ))}
        </div>

        <div className="mt-12 flex flex-col md:flex-row gap-6">
          <button
            onClick={() => setShowLinuxModal(true)}
            className="flex-1 border border-zinc-700 p-6 bg-zinc-800 bg-opacity-40 rounded-lg hover:border-zinc-600 hover:bg-opacity-60 transition-all group"
          >
            <div className="text-steel-blue text-2xl font-bold mb-2 group-hover:text-steel-blue-light transition-colors">
              Linux
            </div>
            <div className="text-zinc-400 text-sm">Ubuntu, Kali, Arch</div>
          </button>
          <button
            onClick={() => setSelectedSkill(skillModules.find((m) => m.title === 'AI & MACHINE LEARNING STACK') || null)}
            className="flex-1 border border-zinc-700 p-6 bg-zinc-800 bg-opacity-40 rounded-lg hover:border-zinc-600 hover:bg-opacity-60 transition-all group"
          >
            <div className="text-steel-blue text-2xl font-bold mb-2 group-hover:text-steel-blue-light transition-colors">
              AI &amp; Machine Learning Stack
            </div>
            <div className="text-zinc-400 text-sm">PyTorch, TensorFlow, OpenCV, Scikit-learn, Roboflow</div>
          </button>
          <button
            onClick={() => setShowMissionPlannerModal(true)}
            className="flex-1 border border-zinc-700 p-6 bg-zinc-800 bg-opacity-40 rounded-lg hover:border-zinc-600 hover:bg-opacity-60 transition-all group"
          >
            <div className="text-steel-blue text-2xl font-bold mb-2 group-hover:text-steel-blue-light transition-colors">
              Mission Planner
            </div>
            <div className="text-zinc-400 text-sm">Autonomous Flight Planning</div>
          </button>
        </div>
      </div>

      <SkillModal skill={selectedSkill} onClose={() => setSelectedSkill(null)} />
      <LinuxModal isOpen={showLinuxModal} onClose={() => setShowLinuxModal(false)} />
      <MissionPlannerModal isOpen={showMissionPlannerModal} onClose={() => setShowMissionPlannerModal(false)} />
    </section>
  );
}
