import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import gsap from 'gsap';

interface ProjectsSectionProps {
  isActive: boolean;
}

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  focusAreas: string[];
}

export default function ProjectsSection({ isActive }: ProjectsSectionProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      id: 'proj-001',
      title: 'Ionic Thruster System Design',
      category: 'HIGH-VOLTAGE ELECTRONICS',
      description: 'Developed a compact ionic thruster generating thrust using corona discharge with high-voltage multiplier circuits. Designed and implemented the complete electrical system, including a custom high-voltage multiplier PCB, achieving measurable thrust while optimizing efficiency.',
      focusAreas: ['High-voltage electronics', 'PCB design and fabrication', 'System efficiency analysis']
    },
    {
      id: 'proj-002',
      title: 'Predictive Maintenance System',
      category: 'DATA ACQUISITION',
      description: 'Developed a LabVIEW-based real-time monitoring system using DAQ for continuous condition data acquisition and fault detection.',
      focusAreas: ['LabVIEW', 'Data acquisition', 'Signal reliability', 'Trend analysis']
    },
    {
      id: 'proj-003',
      title: 'Autonomous Drone Development',
      category: 'AUTONOMOUS SYSTEMS',
      description: 'Learned, designed, and deployed an autonomous drone capable of stable flight, precise navigation, and efficient path planning. Calibrated hardware, tuned control systems, and implemented waypoint navigation using Mission Planner, resulting in improved flight stability and autonomous performance.',
      focusAreas: ['Pixhawk 2.4.8', 'Mission Planner', 'Autonomous navigation', 'Control tuning', 'System optimization']
    },
    {
      id: 'proj-004',
      title: 'Real-Time Control & Automation',
      category: 'INDUSTRIAL SYSTEMS',
      description: 'Built and deployed a fully functional SCADA system using InTouch Wonderware for real-time monitoring and control of connected sensors through a DAQ setup. Designed and implemented a SCADA interface that records sensor data, visualizes system parameters in real-time, and performs automated responses, demonstrating end-to-end industrial control capabilities.',
      focusAreas: ['SCADA (InTouch Wonderware)', 'Data Acquisition (DAQ) integration', 'Real-time monitoring and control', 'Embedded system interfacing']
    },
    {
      id: 'proj-005',
      title: 'Smart Energy Usage Predictor',
      category: 'ML | ENERGY FORECASTING',
      description: 'Analyzed historical energy consumption to forecast future usage with a robust ML pipeline for planning and cost optimization.',
      focusAreas: ['Python', 'PyTorch', 'Supervised Learning (Regression)', 'Pandas', 'NumPy', 'Jupyter Notebook']
    },
    {
      id: 'proj-006',
      title: 'Solar Panel Power Output Prediction',
      category: 'ML | RENEWABLE ENERGY',
      description: 'Built predictive models estimating solar output under varying environmental conditions to improve renewable energy efficiency.',
      focusAreas: ['Python', 'Regression ML', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter Notebook']
    },
    {
      id: 'proj-007',
      title: 'Line Follower Robot',
      category: 'ROBOTICS | EMBEDDED SYSTEMS',
      description: 'Designed an autonomous line-following robot with real-time control and sensor feedback for precise path tracking.',
      focusAreas: ['Arduino', 'IR Sensors', 'Embedded C', 'Motor Driver (L298N/L293D)', 'DC Motors', 'Chassis']
    }
  ];

  useEffect(() => {
    if (isActive && containerRef.current) {
      const cards = containerRef.current.querySelectorAll('.project-card');
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
    }
  }, [isActive]);

  return (
    <section
      ref={containerRef}
      className={`min-h-screen flex items-center justify-center py-20 pt-28 md:pt-32 transition-opacity duration-700 ${
        isActive ? 'opacity-100' : 'opacity-0 pointer-events-none absolute inset-0'
      }`}
    >
      <div className="max-w-7xl w-full px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-2 text-zinc-100">PROJECT ARCHIVE</h2>
          <div className="text-zinc-500 text-sm tracking-wider">HANDS-ON ENGINEERING WORK</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="project-card bg-zinc-800 border border-zinc-700 p-6 text-left transition-all duration-300 hover:border-steel-blue group text-left"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-xs text-steel-blue tracking-wider font-mono">
                  {project.id}
                </div>
                <div className="text-xs text-zinc-500 tracking-wider border border-zinc-700 px-2 py-1">
                  {project.category}
                </div>
              </div>

              <h3 className="text-lg font-bold mb-3 text-zinc-100 group-hover:text-steel-blue transition-colors">
                {project.title}
              </h3>

              <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.focusAreas.slice(0, 2).map((area, idx) => (
                  <span
                    key={idx}
                    className="text-xs text-zinc-500 bg-zinc-900 px-2 py-1 border border-zinc-700"
                  >
                    {area}
                  </span>
                ))}
                {project.focusAreas.length > 2 && (
                  <span className="text-xs text-zinc-500 bg-zinc-900 px-2 py-1 border border-zinc-700">
                    +{project.focusAreas.length - 2}
                  </span>
                )}
              </div>

              <div className="text-steel-blue text-xs tracking-wider group-hover:translate-x-1 transition-transform">
                VIEW DETAILS →
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-8">
          <div className="bg-zinc-900 border border-steel-blue max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-zinc-900 border-b border-zinc-800 p-6 flex items-start justify-between">
              <div>
                <div className="text-xs text-steel-blue tracking-wider font-mono mb-2">
                  {selectedProject.id}
                </div>
                <h3 className="text-2xl font-bold text-zinc-100">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-zinc-400 hover:text-zinc-100 transition-colors flex-shrink-0"
                aria-label="Close project modal"
                title="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <div className="text-xs text-zinc-500 tracking-wider mb-2">DESCRIPTION</div>
                <p className="text-zinc-300">{selectedProject.description}</p>
              </div>

              <div>
                <div className="text-xs text-zinc-500 tracking-wider mb-3">FOCUS AREAS</div>
                <div className="space-y-2">
                  {selectedProject.focusAreas.map((area, idx) => (
                    <div key={idx} className="flex gap-3 text-zinc-300 text-sm">
                      <div className="text-steel-blue mt-1">▪</div>
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-zinc-800 pt-4">
                <div className="text-xs text-zinc-500 tracking-wider">CATEGORY</div>
                <div className="text-steel-blue font-medium mt-2">{selectedProject.category}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
