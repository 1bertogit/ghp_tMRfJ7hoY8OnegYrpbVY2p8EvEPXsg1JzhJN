'use client';

import { Button } from '@/components/ui/button';
import { Bell } from 'lucide-react';
import { usePathname } from 'next/navigation';


const getPageTitle = (pathname: string) => {
    if (pathname.includes('/cases/')) return 'Detalhes do Caso';
    if (pathname.startsWith('/cases')) return 'Discussão de Casos';
    if (pathname.startsWith('/library/')) return 'Detalhes do Artigo';
    if (pathname.startsWith('/library')) return 'Biblioteca Científica';
    if (pathname.startsWith('/archive/')) return 'Detalhes do Acervo';
    if (pathname.startsWith('/archive')) return 'Acervo Histórico';
    if (pathname.startsWith('/calendar')) return 'Calendário de Eventos';
    if (pathname.startsWith('/classes/')) return 'Aula Gravada';
    if (pathname.startsWith('/classes')) return 'Aulas Gravadas';
    if (pathname.startsWith('/admin')) return 'Painel Administrativo';
    return 'Dashboard';
}

const getPageSubtitle = (pathname: string) => {
    if (pathname.includes('/cases/')) return 'Análise e discussão do caso clínico';
    if (pathname.startsWith('/cases')) return 'Revise, comente e colabore';
    if (pathname.startsWith('/library/')) return 'Analise e discuta com a comunidade';
    if (pathname.startsWith('/library')) return 'Artigos e publicações recentes';
    if (pathname.startsWith('/archive/')) return 'Consulte o conteúdo e as discussões';
    if (pathname.startsWith('/archive')) return 'Conteúdos e discussões passadas';
    if (pathname.startsWith('/calendar')) return 'Próximas sessões e masterclasses';
    if (pathname.startsWith('/classes/')) return 'Assista, aprenda e interaja';
    if (pathname.startsWith('/classes')) return 'Assista aulas e mentorias';
    if (pathname.startsWith('/admin')) return 'Gerenciamento da plataforma';
    return 'Boa noite, Dr. Robério. Este é o seu resumo.';
}

export function Header() {
  const pathname = usePathname();
  const title = getPageTitle(pathname);
  const subtitle = getPageSubtitle(pathname);

  return (
    <header className="mb-8 flex justify-between items-start">
        <div>
          <h1 className="text-4xl font-light text-white/90 tracking-wider">
            {title}
          </h1>
          <p className="text-lg font-extralight text-white/50 mt-1">
            {subtitle}
          </p>
        </div>
         <Button variant="ghost" size="icon" className="text-white/60 hover:text-white hover:bg-white/10 rounded-full relative flex-shrink-0">
            <Bell size={20} />
            <span className="absolute top-1 right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
        </Button>
    </header>
  );
}
