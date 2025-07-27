'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  FileText,
  BookOpen,
  Archive,
  Calendar,
  Video,
  Shield,
} from 'lucide-react';

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/cases', label: 'Casos Médicos', icon: FileText },
  { href: '/library', label: 'Biblioteca Científica', icon: BookOpen },
  { href: '/archive', label: 'Arquivo Histórico', icon: Archive },
  { href: '/calendar', label: 'Calendário de Eventos', icon: Calendar },
  { href: '/classes', label: 'Aulas Gravadas', icon: Video },
  { href: '/admin', label: 'Painel Administrativo', icon: Shield },
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="flex-1 space-y-2 px-2">
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
    </nav>
  );
}
