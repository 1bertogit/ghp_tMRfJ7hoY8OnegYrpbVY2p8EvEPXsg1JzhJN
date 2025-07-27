import { GlassCard } from '@/components/shared/glass-card';
import { Users, FileText, BookOpen, PlusCircle, Library, PlayCircle, Download, Archive, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  const stats = [
    {
      title: 'Alunos Ativos',
      value: '48',
      icon: Users,
      color: 'text-cyan-400',
    },
    {
      title: 'Casos em Análise',
      value: '12',
      icon: FileText,
      color: 'text-purple-400',
    },
    {
      title: 'Artigos Publicados',
      value: '6',
      icon: BookOpen,
      color: 'text-blue-400',
    },
  ];

  const navCards = [
    {
      title: 'Novo Caso',
      subtitle: 'Compartilhar experiência',
      icon: PlusCircle,
      href: '/cases',
      color: 'text-green-400'
    },
    {
      title: 'Biblioteca',
      subtitle: 'Artigos científicos',
      icon: Library,
      href: '/library',
      color: 'text-blue-400'
    },
    {
      title: 'Gravações',
      subtitle: 'Aulas e mentorias',
      icon: PlayCircle,
      href: '/classes',
      color: 'text-orange-400'
    },
    {
      title: 'Materiais',
      subtitle: 'Downloads e recursos',
      icon: Download,
      href: '/archive', // Assuming this links to archive for now
      color: 'text-yellow-400'
    },
    {
      title: 'Acervo WhatsApp',
      subtitle: 'Histórico organizado',
      icon: Archive,
      href: '/archive',
      color: 'text-indigo-400'
    }
  ];

  return (
    <div className="w-full">
      <header className="mb-8">
        <h1 className="text-4xl font-light text-white/90 tracking-wider">
          Boa noite, Dr. Robério
        </h1>
        <p className="text-lg font-extralight text-white/50 mt-1">
          Aqui está o seu resumo de hoje.
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stats.map((stat) => (
          <GlassCard key={stat.title}>
            <div className="flex items-center space-x-4">
              <div className={`p-3 rounded-full bg-white/10`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div>
                <p className="text-sm font-light text-white/70">{stat.title}</p>
                <p className="text-4xl font-medium text-white">{stat.value}</p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
        {navCards.map((card) => (
            <Link href={card.href} key={card.title}>
                <GlassCard interactive={true} className="h-full">
                    <div className="flex flex-col items-start justify-between h-full">
                        <div>
                            <div className={`p-3 rounded-full bg-white/10 mb-4 inline-block`}>
                                <card.icon className={`w-7 h-7 ${card.color}`} />
                            </div>
                            <h3 className="text-lg font-medium text-white/95">{card.title}</h3>
                            <p className="text-sm font-extralight text-white/60">{card.subtitle}</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-white/30 self-end mt-4" />
                    </div>
                </GlassCard>
            </Link>
        ))}
      </div>
    </div>
  );
}
