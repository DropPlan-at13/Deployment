import { ReactNode } from 'react';
import ErrorBoundary from './ErrorBoundary';

interface SectionBoundaryProps {
  label: string;
  children: ReactNode;
}

export default function SectionBoundary({ label, children }: SectionBoundaryProps) {
  return (
    <ErrorBoundary
      fallback={
        <div className="text-center text-red-400 py-8">
          Failed to load {label}
        </div>
      }
    >
      {children}
    </ErrorBoundary>
  );
}
