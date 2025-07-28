
'use client';

import { GlassCard } from '@/components/shared/glass-card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Video, Users, Calendar as CalendarIcon, Clock, ArrowRight, PlusCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { cn } from '@/lib/utils';
import { eventsData, eventTypes, complexities, platforms } from '@/lib/mock-data/calendar';

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
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Form State
  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const [complexity, setComplexity] = useState('');
  const [platform, setPlatform] = useState('');
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState('19:00');


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

  const handleAddEvent = () => {
    if (!title || !type || !complexity || !date || !time || !platform) return;

    const [hours, minutes] = time.split(':').map(Number);
    const eventDateTime = new Date(date);
    eventDateTime.setHours(hours, minutes);

    const newEvent: Event = {
      id: events.length + 1,
      title,
      type,
      complexity,
      platform,
      date: eventDateTime.toISOString(),
      participants: 0,
    };

    setEvents(prev => [newEvent, ...prev].sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
    
    // Reset form and close dialog
    setIsDialogOpen(false);
    setTitle('');
    setType('');
    setComplexity('');
    setPlatform('');
    setDate(undefined);
    setTime('19:00');
  };

  return (
    <div className="w-full">
      <GlassCard className="mb-8 p-4">
        <div className="flex items-center justify-between">
          <p className="text-white/70">Gerencie e visualize os próximos eventos.</p>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="h-11 px-5 glass-button bg-cyan-400/20 hover:bg-cyan-400/30 text-cyan-300">
                <PlusCircle className="w-5 h-5 mr-2" />
                Adicionar Evento
              </Button>
            </DialogTrigger>
            <DialogContent className="glass-pane max-w-xl">
              <DialogHeader>
                <DialogTitle className="text-white/90 text-2xl font-light">Novo Evento no Calendário</DialogTitle>
                <DialogDescription className="text-white/50 font-extralight pt-1">
                  Preencha os detalhes para agendar uma nova sessão para a comunidade.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-6 py-4">
                 <div className="grid gap-2">
                    <Label htmlFor="title" className="text-white/70">Título do Evento</Label>
                    <Input id="title" value={title} onChange={e => setTitle(e.target.value)} className="glass-input h-11 text-white/80" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="type" className="text-white/70">Tipo de Evento</Label>
                      <Select onValueChange={setType} value={type}>
                        <SelectTrigger className="w-full h-11 glass-input text-white/80">
                          <SelectValue placeholder="Selecione o tipo" />
                        </SelectTrigger>
                        <SelectContent className="glass-pane">
                          {eventTypes.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                     <div className="grid gap-2">
                      <Label htmlFor="complexity" className="text-white/70">Complexidade</Label>
                      <Select onValueChange={setComplexity} value={complexity}>
                        <SelectTrigger className="w-full h-11 glass-input text-white/80">
                          <SelectValue placeholder="Selecione o nível" />
                        </SelectTrigger>
                        <SelectContent className="glass-pane">
                          {complexities.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="grid gap-2">
                        <Label className="text-white/70">Data</Label>
                         <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full justify-start text-left font-normal h-11 glass-input",
                                !date && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {date ? format(date, "PPP", { locale: ptBR }) : <span>Escolha uma data</span>}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0 glass-pane">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              initialFocus
                              locale={ptBR}
                            />
                          </PopoverContent>
                        </Popover>
                    </div>
                     <div className="grid gap-2">
                        <Label htmlFor="time" className="text-white/70">Horário</Label>
                        <Input id="time" type="time" value={time} onChange={e => setTime(e.target.value)} className="glass-input h-11 text-white/80" />
                    </div>
                  </div>
                   <div className="grid gap-2">
                      <Label htmlFor="platform" className="text-white/70">Plataforma</Label>
                      <Select onValueChange={setPlatform} value={platform}>
                        <SelectTrigger className="w-full h-11 glass-input text-white/80">
                          <SelectValue placeholder="Selecione a plataforma" />
                        </SelectTrigger>
                        <SelectContent className="glass-pane">
                          {platforms.map(p => <SelectItem key={p} value={p}>{p}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
              </div>
               <DialogFooter>
                  <Button onClick={handleAddEvent} className="h-12 w-full px-6 glass-button bg-cyan-400/20 hover:bg-cyan-400/30 text-cyan-300 text-base">
                    Agendar Evento
                  </Button>
                </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </GlassCard>

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
