'use client';

import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface FloatingOrbProps {
  className?: string;
  delay?: number;
}

export function FloatingOrb({ className, delay = 0 }: FloatingOrbProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={cn(
        'absolute rounded-full filter blur-3xl transition-opacity duration-1000',
        'animate-[spin_20s_linear_infinite]',
        show ? 'opacity-100' : 'opacity-0',
        className
      )}
      style={{ animationDelay: `${delay}s` }}
    />
  );
}
