'use client';

import { MainNav } from './main-nav';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { LogOut, Settings, Waypoints } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/use-auth';
import Image from 'next/image';

export function Sidebar() {
  const router = useRouter();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <aside className="fixed top-0 left-0 h-screen w-[260px] p-4 hidden md:block z-20">
      <div className="h-full w-full glass-pane rounded-3xl flex flex-col p-4">
        <header className="flex items-center gap-3 p-2 mb-8">
           <div className="p-2 bg-white/10 rounded-lg border border-white/10">
                <Image src="https://firebasestorage.googleapis.com/v0/b/visioncare-mentorship.appspot.com/o/logo.png?alt=media&token=362a6353-2292-424a-85c3-636c1e3458ae" alt="Legacy Mentoring Logo" width={24} height={24} />
           </div>
          <h1 className="text-xl font-medium text-white/95">Legacy Mentoring</h1>
        </header>

        <MainNav />
        
        <footer className="mt-auto">
            <div className="p-4 bg-white/5 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Avatar>
                        <AvatarImage src="https://placehold.co/40x40" alt={user?.name || ''} data-ai-hint="doctor portrait" />
                        <AvatarFallback>{user?.name?.charAt(0) || 'U'}</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-medium text-sm text-white/90">{user?.name}</p>
                        <p className="text-xs text-white/50 capitalize">{user?.role}</p>
                    </div>
                </div>
                <Button variant="ghost" size="icon" className="text-white/60 hover:text-white hover:bg-white/10 rounded-full" onClick={handleLogout}>
                    <LogOut size={18} />
                </Button>
            </div>
        </footer>
      </div>
    </aside>
  );
}
