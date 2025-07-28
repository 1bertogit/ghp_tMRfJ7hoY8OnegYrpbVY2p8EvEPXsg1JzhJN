'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { GlassCard } from '@/components/shared/glass-card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Eye, EyeOff, Waypoints } from 'lucide-react';
import { useAuth } from '@/hooks/use-auth';

export function LoginForm() {
  const router = useRouter();
  const { toast } = useToast();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      if (email === 'admin@mentoria.com' && password === 'admin123') {
        login({ name: 'Dr. Robério', role: 'admin' });
        toast({
          title: 'Login bem-sucedido',
          description: 'Bem-vindo(a) de volta!',
        });
        router.push('/dashboard');
      } else if (email === 'qualquercoisa@aluno.com' && password === 'aluno123') {
        login({ name: 'Aluno Visionário', role: 'student' });
        toast({
          title: 'Login bem-sucedido',
          description: 'Bem-vindo(a) de volta!',
        });
        router.push('/dashboard');
      } else {
        toast({
          variant: 'destructive',
          title: 'Falha no Login',
          description: 'E-mail ou senha inválidos.',
        });
        setIsLoading(false);
      }
    }, 1000);
  };

  return (
    <GlassCard className="w-[380px] md:w-[420px]">
      <div className="flex flex-col items-center text-center mb-8">
        <div className="p-3 bg-white/10 rounded-full mb-4 border border-white/10">
           <Waypoints className="w-8 h-8 text-white/80" />
        </div>
        <h1 className="text-2xl font-medium text-white/95">VisionCare Mentorship</h1>
        <p className="text-sm text-white/50 font-light">Enter the future of medical education.</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Input
            type="email"
            placeholder="Email (e.g., admin@mentoria.com)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            className="glass-input h-12 text-base"
            required
            autoComplete="email"
          />
        </div>
        <div className="space-y-2 relative">
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password (e.g., admin123)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
            className="glass-input h-12 text-base pr-10"
            required
            autoComplete="current-password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white/80 transition-colors"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full h-12 glass-button text-base font-medium"
        >
          {isLoading ? 'Autenticando...' : 'Entrar na Plataforma'}
        </Button>
      </form>
    </GlassCard>
  );
}
