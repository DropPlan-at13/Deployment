import { X } from 'lucide-react';

interface MissionPlannerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MissionPlannerModal({ isOpen, onClose }: MissionPlannerModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
      <div className="bg-zinc-900 rounded-lg p-8 max-w-3xl w-full relative border border-pink-500 border-opacity-30 max-h-[80vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-100 transition-colors"
          aria-label="Close Mission Planner modal"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-3xl font-bold text-pink-400 mb-8 uppercase tracking-wider">Mission Planner</h2>

        <div className="space-y-6 text-zinc-300">
          <div>
            <h3 className="text-lg font-semibold text-pink-300 mb-2">Ground Control Station for ArduPilot-based autonomous systems</h3>
          </div>

          <div className="border-l-2 border-pink-500 border-opacity-30 pl-4">
            <p className="text-sm leading-relaxed">
              Used for vehicle configuration, sensor calibration, and firmware setup
            </p>
          </div>

          <div className="border-l-2 border-pink-500 border-opacity-30 pl-4">
            <p className="text-sm leading-relaxed">
              Enables mission planning, waypoint control, and real-time telemetry monitoring
            </p>
          </div>

          <div className="border-l-2 border-pink-500 border-opacity-30 pl-4">
            <p className="text-sm leading-relaxed">
              Acts as the interface between embedded flight controllers and autonomous logic
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
