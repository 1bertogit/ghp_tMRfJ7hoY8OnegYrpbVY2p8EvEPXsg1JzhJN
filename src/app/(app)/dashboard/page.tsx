
'use client';

import { GlassCard } from '@/components/shared/glass-card';
import { Button } from '@/components/ui/button';
import { Users, FileText, BookOpen, PlusCircle, Library, PlayCircle, Download, Archive, ArrowRight, MessageSquare, Edit, Calendar, Clock, Bell } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { eventsData } from '@/lib/mock-data/dashboard';


const calculateTimeLeft = (targetDate: string) => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    };

    if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        };
    }

    return timeLeft;
};

const formatEventDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
    });
};

const formatEventTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
    });
};


export default function DashboardPage() {
  const stats = [
    {
      title: 'Alunos Ativos',
      value: '48',
      icon: Users,
      color: 'text-cyan-400',
      href: '#',
    },
    {
      title: 'Casos em Análise',
      value: '12',
      icon: FileText,
      color: 'text-purple-400',
      href: '/cases',
    },
    {
      title: 'Artigos Publicados',
      value: '6',
      icon: BookOpen,
      color: 'text-blue-400',
      href: '/library',
    },
  ];

  const navCards = [
    {
      title: 'Novo Caso',
      subtitle: 'Compartilhar experiência',
      icon: PlusCircle,
      href: '/admin/content/new-case',
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

  const [nextEvent, setNextEvent] = useState<any>(null);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(''));
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Ordena os eventos e pega o próximo
    const sortedEvents = [...eventsData]
      .filter(event => new Date(event.date) > new Date())
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    
    if (sortedEvents.length > 0) {
      const upcomingEvent = sortedEvents[0];
      setNextEvent(upcomingEvent);
      setTimeLeft(calculateTimeLeft(upcomingEvent.date));
      
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft(upcomingEvent.date));
      }, 1000);

      return () => clearInterval(timer);
    }
  }, []);

  return (
    <div className="w-full">
      {isClient && nextEvent && (
        <GlassCard className="mb-8 p-0 overflow-hidden" interactive={true}>
          <Link href="/calendar">
            <div className="flex flex-col md:flex-row items-center">
              <div className="p-6 bg-cyan-500/10 flex items-center justify-center self-stretch">
                 <Bell className="w-8 h-8 text-cyan-400" />
              </div>
              <div className="p-6 flex-grow">
                <p className="text-sm font-medium text-cyan-400">LEMBRETE: PRÓXIMA {nextEvent.type.toUpperCase()}</p>
                <h3 className="text-lg font-medium text-white/95 mt-1">{nextEvent.title}</h3>
                 <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/60 mt-2">
                    <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{formatEventDate(nextEvent.date)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{formatEventTime(nextEvent.date)}</span>
                    </div>
                </div>
              </div>
              <div className="p-6 border-t md:border-t-0 md:border-l border-white/10 w-full md:w-auto">
                <div className="flex justify-around md:flex-row gap-4 text-center">
                    <div className="w-16">
                        <p className="text-3xl font-semibold text-white">{String(timeLeft.days).padStart(2, '0')}</p>
                        <p className="text-xs text-white/50">DIAS</p>
                    </div>
                    <div className="w-16">
                        <p className="text-3xl font-semibold text-white">{String(timeLeft.hours).padStart(2, '0')}</p>
                        <p className="text-xs text-white/50">HORAS</p>
                    </div>
                    <div className="w-16">
                        <p className="text-3xl font-semibold text-white">{String(timeLeft.minutes).padStart(2, '0')}</p>
                        <p className="text-xs text-white/50">MIN</p>
                    </div>
                </div>
              </div>
            </div>
          </Link>
        </GlassCard>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stats.map((stat) => (
          <Link href={stat.href} key={stat.title}>
            <GlassCard interactive={true}>
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
          </Link>
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
