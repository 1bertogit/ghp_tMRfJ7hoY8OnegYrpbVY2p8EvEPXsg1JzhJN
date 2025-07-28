'use client';

import { useState } from 'react';
import { GlassCard } from '@/components/shared/glass-card';
import { Button } from '@/components/ui/button';
import { Archive, CaseUpper, Presentation } from 'lucide-react';

const archiveItems = [
  {
    id: 1,
    title: 'Discussão de caso raro: Reconstrução de pálpebra com retalho de Tenzel',
    category: 'Casos Raros',
    source: 'Grupo WhatsApp - Dr. Ricardo',
    icon: CaseUpper
  },
  {
    id: 2,
    title: 'Masterclass: Técnicas de sutura para lifting facial profundo',
    category: 'Masterclass',
    source: 'Sessão Zoom - Dr. Ana Couto',
    icon: Presentation
  },
  {
    id: 3,
    title: 'Workshop: Uso de preenchedores para contorno mandibular',
    category: 'Workshop',
    source: 'Evento Presencial - SP',
    icon: Archive
  },
  {
    id: 4,
    title: 'Análise de caso: Rinoplastia secundária com enxerto de costela',
    category: 'Casos Raros',
    source: 'Grupo WhatsApp - Dr. Sofia',
    icon: CaseUpper
  },
  {
    id: 5,
    title: 'Masterclass: Abordagem completa da blefaroplastia transconjuntival',
    category: 'Masterclass',
    source: 'Sessão Zoom - Dr. Lucas Martins',
    icon: Presentation
  },
  {
    id: 6,
    title: 'Revisão de artigo: "Autologous Fat Grafting in Breast Reconstruction"',
    category: 'Workshop',
    source: 'Grupo WhatsApp',
    icon: Archive
  },
];

const categoryStyles = {
    'Masterclass': { icon: Presentation, color: 'text-cyan-400' },
    'Casos Raros': { icon: CaseUpper, color: 'text-purple-400' },
    'Workshop': { icon: Archive, color: 'text-blue-400' }
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
