
'use client';

import { GlassCard } from '@/components/shared/glass-card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Video, Users, Calendar as CalendarIcon, Clock, ArrowRight, PlusCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { eventsData } from '@/lib/mock-data/calendar';

const typeColors: { [key: string]: string } = {
  'Masterclass': 'text-cyan-400 border-cyan-400/30 bg-cyan-500/10',
  'Reunião de Caso': 'text-purple-400 border-purple-400/30 bg-purple-500/10',
  'Workshop': 'text-blue-400 border-blue-400/30 bg-blue-500/10',
  'Mentoria': 'text-green-400 border-green-400/30 bg-green-500/10',
  'Journal Club': 'text-yellow-400 border-yellow-400/30 bg-yellow-500/10',
};

const complexityColors: { [key: string]: string } = {
  'Avançado': 'border-red-400/50 text-red-300',
  'Intermediário': 'border-yellow-400/50 text-yellow-300',
  'Iniciante': 'border-green-400/50 text-green-300',
}

interface Event {
    id: number;
    title: string;
    type: string;
    date: string;
    complexity: string;
    participants: number;
    platform: string;
}

export default function CalendarPage() {
  const [events, setEvents] = useState<Event[]>(eventsData);
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="w-full">
      <div className="space-y-8">
        {events.map((event) => (
          <GlassCard key={event.id} interactive={false} className="p-0 overflow-hidden !rounded-2xl">
            <div className="flex flex-col md:flex-row">
              <div className={`flex-shrink-0 md:w-28 flex md:flex-col items-center justify-center p-6 ${typeColors[event.type]}`}>
                 <p className="text-3xl font-medium md:mb-2">{new Date(event.date).getDate()}</p>
                 <p className="text-lg font-light md:text-base ml-4 md:ml-0">{new Date(event.date).toLocaleString('pt-BR', { month: 'short' }).toUpperCase()}</p>
              </div>
              <div className="p-6 flex-grow">
                <div className="flex flex-wrap items-center gap-4 mb-3">
                   <Badge variant="outline" className={`${typeColors[event.type]}`}>{event.type}</Badge>
                   <Badge variant="outline" className={`${complexityColors[event.complexity]}`}>{event.complexity}</Badge>
                </div>
                <h3 className="text-lg font-medium text-white/95 mb-4">{event.title}</h3>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/60">
                    <div className="flex items-center gap-2">
                        <CalendarIcon className="w-4 h-4" />
                        <span>{isClient ? formatDate(event.date) : '...'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{isClient ? formatTime(event.date) : '...'}</span>
                    </div>
                     <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{event.participants} participantes</span>
                    </div>
                </div>
              </div>
              <div className="flex items-center justify-center p-6 bg-white/5 border-t border-white/10 md:border-t-0 md:border-l">
                <Button className="w-full md:w-auto glass-button bg-cyan-400/20 hover:bg-cyan-400/30 text-cyan-300 px-6 h-12">
                  <span>Acessar Evento</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
