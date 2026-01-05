import { X } from 'lucide-react';

interface LinuxOS {
  name: string;
  logo: string;
}

interface LinuxModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LinuxModal({ isOpen, onClose }: LinuxModalProps) {
  const linuxOSes: LinuxOS[] = [
    {
      name: 'Ubuntu',
      logo: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="none" stroke="rgb(255,63,119)" stroke-width="2"/><circle cx="50" cy="25" r="8" fill="rgb(255,63,119)" opacity="0.8"/><circle cx="65" cy="62" r="8" fill="rgb(255,63,119)" opacity="0.8"/><circle cx="35" cy="62" r="8" fill="rgb(255,63,119)" opacity="0.8"/></svg>'
    },
    {
      name: 'Kali Linux',
      logo: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 15 L65 35 L75 30 L70 50 L85 50 L65 60 L70 80 L50 65 L30 80 L35 60 L15 50 L30 50 L25 30 L35 35 Z" fill="none" stroke="rgb(255,63,119)" stroke-width="2"/></svg>'
    },
    {
      name: 'Arch Linux',
      logo: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 20 L25 70 L35 70 L42 55 L58 55 L65 70 L75 70 Z" fill="none" stroke="rgb(255,63,119)" stroke-width="2"/><line x1="45" y1="50" x2="55" y2="50" stroke="rgb(255,63,119)" stroke-width="1.5"/></svg>'
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
      <div className="bg-zinc-900 rounded-lg p-8 max-w-2xl w-full relative border border-pink-500 border-opacity-30">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-100 transition-colors"
          aria-label="Close Linux modal"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-3xl font-bold text-pink-400 mb-8 uppercase tracking-wider">Linux</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {linuxOSes.map((os, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center p-6 rounded-lg border border-pink-500 border-opacity-20 hover:border-opacity-50 transition-all hover:bg-pink-500 hover:bg-opacity-5 group"
            >
              <div
                dangerouslySetInnerHTML={{ __html: os.logo }}
                className="w-16 h-16 mb-4 opacity-75 group-hover:opacity-100 transition-opacity"
              />
              <h3 className="text-lg font-semibold text-zinc-200 text-center group-hover:text-pink-300 transition-colors">
                {os.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
