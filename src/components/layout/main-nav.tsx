
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useAuth } from '@/hooks/use-auth';
import {
  LayoutDashboard,
  FileText,
  BookOpen,
  Archive,
  Calendar,
  Video,
  GraduationCap,
  SlidersHorizontal,
  Settings,
} from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/cases', label: 'Discussão de Casos', icon: FileText },
  { href: '/library', label: 'Artigos Científicos', icon: BookOpen },
  { href: '/archive', label: 'Acervo Antigo', icon: Archive },
  { href: '/calendar', label: 'Calendário', icon: Calendar },
  { href: '/classes', label: 'Encontros Gravados', icon: Video },
  { href: '/academy', label: 'Academy', icon: GraduationCap },
  { href: '/settings', label: 'Configurações', icon: Settings },
];

const adminNavItems = [
    { href: '/admin', label: 'Administrativo', icon: SlidersHorizontal },
];

function NavSkeleton() {
    return (
        <div className="flex-1 space-y-2 px-2">
            {[...Array(8)].map((_, i) => (
                <Skeleton key={i} className="h-12 w-full rounded-lg" />
            ))}
        </div>
    )
}

export function MainNav() {
  const pathname = usePathname();
  const { user, isLoading } = useAuth();

  if (isLoading) {
      return <NavSkeleton />;
  }

  return (
    <>
      {navItems.map((item) => {
        const isActive = pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex items-center gap-3 rounded-lg p-3 text-sm font-light text-white/70 transition-colors hover:bg-white/10 hover:text-white',
              isActive && 'bg-white/10 text-white font-medium'
            )}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </Link>
        );
      })}

      {user?.role === 'admin' && adminNavItems.map((item) => {
        const isActive = pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex items-center gap-3 rounded-lg p-3 text-sm font-light text-white/70 transition-colors hover:bg-white/10 hover:text-white',
              isActive && 'bg-white/10 text-white font-medium'
            )}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </>
  );
}
