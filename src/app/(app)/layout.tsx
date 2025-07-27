import type { ReactNode } from 'react';
import { Sidebar } from '@/components/layout/sidebar';
import { FloatingOrb } from '@/components/ui/floating-orb';

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-[#0A0A0F] to-[#050507] overflow-hidden">
      <FloatingOrb className="top-[-20%] left-[-20%] w-[50vw] h-[50vw] bg-cyan-400/20 animate-pulse" />
      <FloatingOrb className="bottom-[-20%] right-[-20%] w-[40vw] h-[40vw] bg-purple-400/20 animate-pulse" delay={1} />
      
      <div className="relative z-10 flex">
        <Sidebar />
        <main className="flex-1 pl-4 pr-4 py-4 md:pl-[280px] md:pr-8 md:py-8">
          {children}
        </main>
      </div>
    </div>
  );
}
