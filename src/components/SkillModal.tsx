import { X } from 'lucide-react';

interface SkillModalProps {
  skill: {
    title: string;
    technologies: Array<{
      name: string;
      experience?: string;
      logo: string;
    }>;
  } | null;
  onClose: () => void;
}

export default function SkillModal({ skill, onClose }: SkillModalProps) {
  if (!skill) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
      <div className="bg-zinc-900 rounded-lg p-8 max-w-2xl w-full relative border border-pink-500 border-opacity-30">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-100 transition-colors"
          aria-label="Close skill modal"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-3xl font-bold text-pink-400 mb-8 uppercase tracking-wider">{skill.title}</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skill.technologies.map((tech, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center p-4 rounded-lg border border-pink-500 border-opacity-20 hover:border-opacity-50 transition-all hover:bg-pink-500 hover:bg-opacity-5 group"
            >
              <div
                dangerouslySetInnerHTML={{ __html: tech.logo }}
                className="w-12 h-12 mb-3 opacity-75 group-hover:opacity-100 transition-opacity"
              />
              <h3 className="text-sm font-semibold text-zinc-200 text-center group-hover:text-pink-300 transition-colors">
                {tech.name}
              </h3>
              {tech.experience && (
                <p className="text-xs text-pink-300 mt-2 opacity-75">{tech.experience}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
