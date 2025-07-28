'use client';

import { LoginForm } from '@/components/auth/login-form';
import { FloatingOrb } from '@/components/ui/floating-orb';
import { useEffect, useState } from 'react';

export default function LoginPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <main className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A0A0F] to-[#050507]">
      <FloatingOrb className="top-[-20%] left-[-20%] w-[50vw] h-[50vw] bg-cyan-400/30" />
      <FloatingOrb className="bottom-[-20%] right-[-20%] w-[40vw] h-[40vw] bg-purple-400/30" delay={1} />
      <FloatingOrb className="top-[10%] right-[5%] w-[20vw] h-[20vw] bg-blue-400/20" delay={2} />
      <div className="relative z-10">
        {isClient ? <LoginForm /> : null}
      </div>
    </main>
  );
}
