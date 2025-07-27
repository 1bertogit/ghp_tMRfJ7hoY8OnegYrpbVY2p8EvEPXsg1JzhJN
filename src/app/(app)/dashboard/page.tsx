'use client';

import { GlassCard } from '@/components/shared/glass-card';
import { Users, FileText, BookOpen, PlusCircle, Library, PlayCircle, Download, Archive, ArrowRight, MessageSquare, Edit } from 'lucide-react';
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
      href: '/archive', 
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

  const recentActivities = [
    {
      type: 'NOVO CASO',
      description: 'Dr. Lucas Martins submeteu um novo caso: "Mamoplastia de Aumento com Prótese de Silicone".',
      time: '2 horas atrás',
      icon: FileText,
      color: 'text-purple-400',
    },
    {
      type: 'COMENTÁRIO',
      description: 'Dr. Ana Couto comentou no caso "Rinoplastia Secundária".',
      time: '5 horas atrás',
      icon: MessageSquare,
      color: 'text-cyan-400',
    },
    {
      type: 'ARTIGO',
      description: 'Novo artigo publicado na biblioteca: "Técnicas Avançadas em Blefaroplastia".',
      time: '1 dia atrás',
      icon: BookOpen,
      color: 'text-blue-400',
    },
     {
      type: 'MENTORIA',
      description: 'A gravação da "Masterclass: Lifting Facial Profundo" está disponível.',
      time: '2 dias atrás',
      icon: PlayCircle,
      color: 'text-orange-400',
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

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {navCards.map((card) => (
            <Link href={card.href} key={card.title}>
                <GlassCard interactive={true} className="h-full p-4">
                    <div className="flex flex-col items-start justify-between h-full text-center mx-auto items-center">
                        <div className={`p-3 rounded-full bg-white/10 mb-3 inline-block`}>
                            <card.icon className={`w-6 h-6 ${card.color}`} />
                        </div>
                        <h3 className="text-sm font-medium text-white/95">{card.title}</h3>
                        <p className="text-xs font-extralight text-white/60">{card.subtitle}</p>
                    </div>
                </GlassCard>
            </Link>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-light text-white/90 tracking-wide mb-6">Atividade Recente</h2>
        <GlassCard>
            <div className="space-y-6">
                {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start gap-4">
                        <div className={`p-2.5 rounded-full bg-white/5 border border-white/10`}>
                            <activity.icon className={`w-5 h-5 ${activity.color}`} />
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-center">
                                <p className={`text-xs font-bold tracking-wider uppercase ${activity.color}`}>{activity.type}</p>
                                <p className="text-xs text-white/40">{activity.time}</p>
                            </div>
                            <p className="text-sm text-white/80 mt-1">{activity.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </GlassCard>
      </div>
    </div>
  );
}
