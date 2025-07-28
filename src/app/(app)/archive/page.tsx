
'use client';

import { useState, useRef } from 'react';
import { GlassCard } from '@/components/shared/glass-card';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { FileText, Scissors, Bandage, Beaker, BrainCircuit, Droplets, Smartphone, BookCopy, Megaphone, Filter, X } from 'lucide-react';
import Link from 'next/link';
import { initialArchiveItems, filterGroups } from '@/lib/mock-data/archive';

const categoryStyles: { [key: string]: { icon: React.ElementType, color: string } } = {
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
  const [archiveItems, setArchiveItems] = useState(initialArchiveItems);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  
  const handleFilterChange = (filter: string, checked: boolean | 'indeterminate') => {
    setActiveFilters(prev => {
      if (checked) {
        return [...prev, filter];
      } else {
        return prev.filter(f => f !== filter);
      }
    });
  };

  const filteredItems = archiveItems.filter(item => {
    if (activeFilters.length === 0) return true;
    return activeFilters.every(filter => item.tags.includes(filter));
  });

  return (
    <div className="w-full">
      <GlassCard className="mb-8 p-4">
        <div className="flex flex-wrap items-center gap-3">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" className="glass-button bg-white/5 hover:bg-white/10 h-10 px-5">
                        <Filter className="w-4 h-4 mr-2" />
                        Filtros
                    </Button>
                </SheetTrigger>
                <SheetContent className="glass-pane w-[350px] sm:w-[400px]">
                    <SheetHeader className="mb-6">
                        <SheetTitle className="text-white/90 text-2xl font-light">Filtros Avançados</SheetTitle>
                    </SheetHeader>
                    <Accordion type="multiple" defaultValue={['Procedimento']} className="w-full">
                        {Object.entries(filterGroups).map(([groupName, tags]) => (
                            <AccordionItem value={groupName} key={groupName}>
                                <AccordionTrigger className="text-white/80 hover:text-white">{groupName}</AccordionTrigger>
                                <AccordionContent>
                                    <div className="space-y-3 pl-2">
                                        {tags.map(tag => (
                                            <div key={tag} className="flex items-center space-x-2">
                                                <Checkbox
                                                    id={tag}
                                                    checked={activeFilters.includes(tag)}
                                                    onCheckedChange={(checked) => handleFilterChange(tag, checked)}
                                                    className="border-white/30 data-[state=checked]:bg-cyan-400 data-[state=checked]:border-cyan-400"
                                                />
                                                <Label htmlFor={tag} className="text-white/70 font-light cursor-pointer">{tag}</Label>
                                            </div>
                                        ))}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                     {activeFilters.length > 0 && (
                        <div className="mt-6 pt-4 border-t border-white/10">
                            <Button variant="link" onClick={() => setActiveFilters([])} className="text-sm text-white/60 hover:text-white w-full">
                                Limpar todos os filtros
                            </Button>
                        </div>
                    )}
                </SheetContent>
            </Sheet>

             {activeFilters.map(filter => (
                <div key={filter} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-400/20 text-cyan-300 text-sm">
                    <span>{filter}</span>
                    <button onClick={() => handleFilterChange(filter, false)} className="text-cyan-300/70 hover:text-cyan-300">
                        <X size={14} />
                    </button>
                </div>
            ))}
        </div>
      </GlassCard>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.length > 0 ? filteredItems.map(item => {
            const style = categoryStyles[item.category as keyof typeof categoryStyles] || categoryStyles['Discussões de Casos'];
            const Icon = style.icon;
            return (
                <Link key={item.id} href={`/archive/${item.id}`} passHref>
                    <GlassCard interactive={true} className="h-full">
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
                </Link>
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
