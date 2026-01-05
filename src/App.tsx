import { useState, useEffect } from 'react';
import BootSection from './components/BootSection';
import AboutSection from './components/AboutSection';
import CapabilitiesSection from './components/CapabilitiesSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceEducationSection from './components/ExperienceEducationSection';
import ContactSection from './components/ContactSection';
import Navigation from './components/Navigation';

function App() {
  const [activeSection, setActiveSection] = useState<string>('boot');
  const [bootComplete, setBootComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setBootComplete(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Reset scroll to top whenever the active section changes to avoid blank offsets
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [activeSection]);

  // Prevent scrolling while INIT (boot) and ABOUT are active
  useEffect(() => {
    if (activeSection === 'boot' || activeSection === 'about') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [activeSection]);

  const sections = ['boot', 'about', 'capabilities', 'projects', 'experience', 'contact'];

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 font-mono">
      {bootComplete && (
        <Navigation
          sections={sections}
          activeSection={activeSection}
          onNavigate={setActiveSection}
        />
      )}

      <main className="relative">
        <BootSection
          isActive={activeSection === 'boot'}
          onComplete={() => setActiveSection('about')}
        />
        <AboutSection isActive={activeSection === 'about'} />
        <CapabilitiesSection isActive={activeSection === 'capabilities'} />
        <ProjectsSection isActive={activeSection === 'projects'} />
        <ExperienceEducationSection isActive={activeSection === 'experience'} />
        <ContactSection isActive={activeSection === 'contact'} />
      </main>
    </div>
  );
}

export default App;
