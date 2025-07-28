
'use client';

import { useState } from 'react';
import { GlassCard } from '@/components/shared/glass-card';
import { Button } from '@/components/ui/button';
import { FileText, Scissors, Bandage, Beaker, BrainCircuit, Droplets, Smartphone, BookCopy, Megaphone, Check } from 'lucide-react';

const filterGroups = {
  'Procedimento': ['Browlift', 'Deep Neck', 'Blefaroplastia', 'Cantopexia'],
  'Tipo': ['Casos Raros', 'Vídeo', 'PDF', 'Imagem'],
  'Complicação': ['Edema', 'Hematoma', 'Assimetria'],
  'Timing': ['Pós-Op Imediato', 'Pós-Op Tardio']
};

const archiveItems = [
  {
    id: 1,
    title: 'Análise de caso: Rinoplastia secundária com enxerto de costela',
    category: 'Discussões de Casos',
    source: 'Grupo WhatsApp - Dr. Ricardo',
    tags: ['PDF', 'Casos Raros', 'Blefaroplastia'],
  },
  {
    id: 2,
    title: 'Vídeo: Técnica de sutura para lifting facial profundo',
    category: 'Técnicas Cirúrgicas',
    source: 'Sessão Zoom - Dr. Ana Couto',
    tags: ['Vídeo', 'Deep Neck'],
  },
  {
    id: 3,
    title: 'Protocolo de cuidados pós-lipoaspiração HD',
    category: 'Pós-Operatório',
    source: 'Documento - Dra. Sofia',
    tags: ['PDF', 'Pós-Op Tardio'],
  },
  {
    id: 4,
    title: 'Review: Novos Bisturis Ultrassônicos',
    category: 'Instrumentais',
    source: 'Grupo WhatsApp - Discussão',
    tags: ['Imagem'],
  },
  {
    id: 5,
    title: 'Debate sobre proporção áurea na cirurgia facial',
    category: 'Filosofia Cirúrgica',
    source: 'Evento Presencial - SP',
    tags: ['Casos Raros'],
  },
  {
    id: 6,
    title: 'Melhores práticas para preparação de Lipoenxerto',
    category: 'Lipoenxertia',
    source: 'Grupo WhatsApp - Dr. Lucas Martins',
    tags: ['Pós-Op Imediato'],
  },
  {
    id: 7,
    title: 'Como usar o Instagram para divulgar seus resultados',
    category: 'Marketing Médico',
    source: 'Sessão Zoom - Convidado',
    tags: ['Vídeo'],
  },
  {
    id: 8,
    title: 'Artigo recomendado sobre assimetria em Blefaroplastia',
    category: 'Literatura',
    source: 'Grupo WhatsApp - Link',
    tags: ['PDF', 'Assimetria', 'Blefaroplastia'],
  },
  {
    id: 9,
    title: 'Manejo de hematoma pós-Cantopexia',
    category: 'Complicação',
    source: 'Admin',
    tags: ['Hematoma', 'Pós-Op Imediato', 'Cantopexia'],
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
    'Complicação': { icon: Megaphone, color: 'text-red-400' },
};

export default function ArchivePage() {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const toggleFilter = (filter: string) => {
    setActiveFilters(prev => 
      prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]
    );
  };

  const filteredItems = archiveItems.filter(item => {
    if (activeFilters.length === 0) return true;
    return activeFilters.every(filter => item.tags.includes(filter));
  });

  return (
    <div className="w-full">
      <GlassCard className="mb-8 p-6">
        <h3 className="text-lg font-medium text-white/90 mb-4">Filtros Avançados</h3>
        <div className="space-y-4">
          {Object.entries(filterGroups).map(([groupName, tags]) => (
            <div key={groupName}>
              <p className="text-sm text-white/70 mb-2">{groupName}</p>
              <div className="flex flex-wrap items-center gap-3">
                {tags.map(tag => {
                  const isActive = activeFilters.includes(tag);
                  return (
                    <Button 
                      key={tag}
                      variant={isActive ? 'default' : 'ghost'}
                      onClick={() => toggleFilter(tag)}
                      className={
                          isActive 
                          ? 'glass-button bg-cyan-400/30 hover:bg-cyan-400/40 text-cyan-200 border-cyan-400/50'
                          : 'glass-button bg-white/5 hover:bg-white/10'
                      }
                    >
                      {isActive && <Check className="w-4 h-4 mr-2" />}
                      {tag}
                    </Button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
         {activeFilters.length > 0 && (
            <div className="mt-6 pt-4 border-t border-white/10">
                <Button variant="link" onClick={() => setActiveFilters([])} className="text-sm text-white/60 hover:text-white">
                    Limpar todos os filtros
                </Button>
            </div>
        )}
      </GlassCard>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.length > 0 ? filteredItems.map(item => {
            const style = categoryStyles[item.category as keyof typeof categoryStyles] || categoryStyles['Discussões de Casos'];
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
                         <div className="flex flex-wrap gap-2 my-4">
                            {item.tags.map(tag => (
                                <span key={tag} className="px-2 py-1 text-xs rounded-full bg-white/5 text-white/70 border border-white/10">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="mt-auto">
                            <p className="text-xs font-light text-white/50">
                                Fonte: {item.source}
                            </p>
                        </div>
                    </div>
                </GlassCard>
            )
        }) : (
             <div className="col-span-full">
                <GlassCard className="text-center py-16">
                    <p className="text-lg text-white/70">Nenhum item encontrado com os filtros selecionados.</p>
                    <p className="text-sm text-white/50 mt-2">Tente remover alguns filtros para ver mais resultados.</p>
                </GlassCard>
            </div>
        )}
      </div>
    </div>
  );
}
