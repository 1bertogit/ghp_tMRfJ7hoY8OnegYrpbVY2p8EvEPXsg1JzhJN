'use client';

import { LoginForm } from '@/components/auth/login-form';
import { useEffect, useState } from 'react';

export default function LoginPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <main className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A0A0F] to-[#050507]">
      <div className="relative z-10">
        {isClient ? <LoginForm /> : null}
      </div>
    </main>
  );
}
