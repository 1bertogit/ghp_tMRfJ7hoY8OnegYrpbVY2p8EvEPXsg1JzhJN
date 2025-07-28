
import type { ReactNode } from 'react';
import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-[#0A0A0F] to-[#050507] overflow-hidden">
      <div className="relative z-10 flex">
        <Sidebar />
        <div className="flex-1 flex flex-col pl-4 pr-4 py-4 md:pl-[280px] md:pr-8 md:py-8">
            <header role="banner">
              <Header />
            </header>
            <main className="flex-1" role="main">
              {children}
            </main>
        </div>
      </div>
    </div>
  );
}
