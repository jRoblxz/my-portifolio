import type { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface GlassmorphicCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}

/**
 * Design Philosophy: Glassmorphism with elegant transparency
 * - Uses backdrop-filter for depth without visual clutter
 * - Subtle borders and hover effects for interactivity
 * - Staggered animations for visual flow
 */
export function GlassmorphicCard({
  children,
  className = '',
  delay = 0,
  hover = true,
}: GlassmorphicCardProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`
        backdrop-blur-md bg-[#e4e0d7] rounded-2xl p-6 border border-slate-800 shadow-xl
        ${hover ? 'transition-all duration-300 hover:shadow-[#7C3AED]' : ''}
        rounded-2xl p-6 md:p-8
        ${isVisible ? 'animate-slide-up' : 'opacity-0'}
        transition-all duration-500
        ${className}
      `}
      style={{
        animationDelay: isVisible ? `${delay}ms` : '0ms',
      }}
    >
      {children}
    </div>
  );
}
