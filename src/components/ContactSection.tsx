import { useEffect, useRef } from 'react';
import { Mail, Github, Linkedin, Phone } from 'lucide-react';
import gsap from 'gsap';

interface ContactSectionProps {
  isActive: boolean;
}

export default function ContactSection({ isActive }: ContactSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'EMAIL',
      value: 'kishorepr776@gmail.com',
      href: 'mailto:kishorepr776@gmail.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'PHONE',
      value: '+91 7305870346',
      href: 'tel:+917305870346'
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GITHUB',
      value: 'dropplan-at13',
      href: 'https://github.com/dropplan-at13'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LINKEDIN',
      value: 'kishore-p-r',
      href: 'https://www.linkedin.com/in/kishore-p-r-85a178287'
    }
  ];

  useEffect(() => {
    if (isActive && containerRef.current) {
      const cards = containerRef.current.querySelectorAll('.contact-card');
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
      className={`min-h-screen flex items-center justify-center py-20 transition-opacity duration-700 ${
        isActive ? 'opacity-100' : 'opacity-0 pointer-events-none absolute inset-0'
      }`}
    >
      <div className="max-w-6xl w-full px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-2 text-zinc-100">CONTACT</h2>
          <div className="text-zinc-500 text-sm tracking-wider">COMMUNICATION ENDPOINTS</div>
        </div>

        <div className="mb-10 border border-zinc-800 p-6 bg-zinc-800 bg-opacity-40">
          <div className="text-zinc-200 leading-relaxed space-y-3 text-lg">
            <p>
              🚀 I’d love to join teams that keep trying—even when things break—to build something wonderful together.
            </p>
            <p className="text-sm md:text-base text-zinc-300">
              🤝 If you’re exploring bold ideas in robotics, embedded systems, or automation, let’s connect and make it happen.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card bg-zinc-800 border border-zinc-700 p-6 transition-all duration-300 hover:border-steel-blue group block"
            >
              <div className="flex items-start gap-4">
                <div className="text-steel-blue group-hover:text-steel-blue-light transition-colors flex-shrink-0">
                  {method.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-zinc-500 tracking-wider mb-2">
                    {method.label}
                  </div>
                  <div className="text-zinc-300 group-hover:text-steel-blue transition-colors text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                    {method.value}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center text-zinc-600 text-sm">
          <div className="mb-2">SYSTEM STATUS: OPERATIONAL</div>
          <div>© 2024 Kishore P R. All systems functional.</div>
        </div>
      </div>
    </section>
  );
}
