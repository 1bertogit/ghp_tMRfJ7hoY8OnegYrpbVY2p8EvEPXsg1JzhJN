import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}

export const GlassCard = ({ children, className, interactive = false }: GlassCardProps) => {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-3xl border border-white/10 bg-white/[.04] p-6 shadow-2xl shadow-black/20',
        'transition-all duration-500 ease-out',
        interactive && 'hover:scale-[1.02] hover:bg-white/[.08] cursor-pointer',
        className
      )}
    >
      {/* Rim light effect */}
      <div className="absolute top-0 left-0 w-full h-full rounded-3xl border border-white/10 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full rounded-3xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] pointer-events-none" />
      
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
