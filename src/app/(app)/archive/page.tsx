'use client';

import { useState } from 'react';
import { GlassCard } from '@/components/shared/glass-card';
import { Button } from '@/components/ui/button';
import { FileText, Scissors, Bandage, Beaker, BrainCircuit, Droplets, Smartphone, BookCopy, Megaphone } from 'lucide-react';

const archiveItems = [
  {
    id: 1,
    title: 'Análise de caso: Rinoplastia secundária com enxerto de costela',
    category: 'Discussões de Casos',
    source: 'Grupo WhatsApp - Dr. Ricardo',
  },
  {
    id: 2,
    title: 'Vídeo: Técnica de sutura para lifting facial profundo',
    category: 'Técnicas Cirúrgicas',
    source: 'Sessão Zoom - Dr. Ana Couto',
  },
  {
    id: 3,
    title: 'Protocolo de cuidados pós-lipoaspiração HD',
    category: 'Pós-Operatório',
    source: 'Documento - Dra. Sofia',
  },
  {
    id: 4,
    title: 'Review: Novos Bisturis Ultrassônicos',
    category: 'Instrumentais',
    source: 'Grupo WhatsApp - Discussão',
  },
  {
    id: 5,
    title: 'Debate sobre proporção áurea na cirurgia facial',
    category: 'Filosofia Cirúrgica',
    source: 'Evento Presencial - SP',
  },
  {
    id: 6,
    title: 'Melhores práticas para preparação de Lipoenxerto',
    category: 'Lipoenxertia',
    source: 'Grupo WhatsApp - Dr. Lucas Martins',
  },
  {
    id: 7,
    title: 'Como usar o Instagram para divulgar seus resultados',
    category: 'Marketing Médico',
    source: 'Sessão Zoom - Convidado',
  },
  {
    id: 8,
    title: 'Artigo recomendado: "Autologous Fat Grafting"',
    category: 'Literatura',
    source: 'Grupo WhatsApp - Link',
  },
  {
    id: 9,
    title: 'Comunicado: Próxima reunião sobre o congresso anual',
    category: 'Comunicados',
    source: 'Admin',
  },
];

const categoryStyles = {
    'Discussões de Casos': { icon: FileText, color: 'text-cyan-400' },
    'Técnicas Cirúrgicas': { icon: Scissors, color: 'text-purple-400' },
    'Pós-Operatório': { icon: Bandage, color: 'text-green-400' },
    'Instrumentais': { icon: Beaker, color: 'text-orange-400' },
    'Filosofia Cirúrgica': { icon: BrainCircuit, color: 'text-indigo-400' },
    'Lipoenxertia': { icon: Droplets, color: 'text-pink-400' },
    'Marketing Médico': { icon: Smartphone, color: 'text-yellow-400' },
    'Literatura': { icon: BookCopy, color: 'text-blue-400' },
    'Comunicados': { icon: Megaphone, color: 'text-red-400' },
};

export default function ArchivePage() {
  const [filter, setFilter] = useState('Todos');

  const filteredItems = archiveItems.filter(item => 
    filter === 'Todos' || item.category === filter
  );

  const categories = ['Todos', ...Object.keys(categoryStyles)];

  return (
    <div className="w-full">
      <GlassCard className="mb-8 p-4">
        <div className="flex flex-wrap items-center gap-3">
            <p className="text-sm text-white/70 mr-2">Filtrar por:</p>
            {categories.map(category => (
                <Button 
                    key={category}
                    variant={filter === category ? 'default' : 'ghost'}
                    onClick={() => setFilter(category)}
                    className={
                        filter === category 
                        ? 'glass-button bg-white/20 hover:bg-white/30 text-white'
                        : 'glass-button bg-white/5 hover:bg-white/10'
                    }
                >
                    {category}
                </Button>
            ))}
        </div>
      </GlassCard>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map(item => {
            const style = categoryStyles[item.category as keyof typeof categoryStyles];
            const Icon = style.icon;
            return (
                 <GlassCard key={item.id} interactive={true}>
                    <div className="flex flex-col h-full">
                        <div className="flex items-start gap-4 mb-4">
                            <div className={`p-2 rounded-lg bg-white/10 border border-white/10 ${style.color}`}>
                                <Icon className="w-6 h-6" />
                            </div>
                            <div>
                                <p className={`text-sm font-medium ${style.color}`}>{item.category}</p>
                                <h3 className="text-base font-medium text-white/90 mt-1">{item.title}</h3>
                            </div>
                        </div>
                        <div className="mt-auto">
                            <p className="text-xs font-light text-white/50">
                                Fonte: {item.source}
                            </p>
                        </div>
                    </div>
                </GlassCard>
            )
        })}
      </div>
    </div>
  );
}
