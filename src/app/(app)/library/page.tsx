'use client';

import { GlassCard } from '@/components/shared/glass-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { BookOpen, MessageSquare, Search, SlidersHorizontal } from 'lucide-react';
import Image from 'next/image';

const scientificArticles = [
  {
    id: 1,
    title: 'Técnicas Avançadas em Rinoplastia Estruturada para Casos Complexos',
    authors: 'Dr. Ricardo Monteiro, Dr. Ana Couto',
    journal: 'Aesthetic Surgery Journal',
    year: 2023,
    impactFactor: 4.8,
    imageUrl: 'https://placehold.co/600x400',
    imageHint: 'library book'
  },
  {
    id: 2,
    title: 'O Uso de Enxertos de Gordura para Rejuvenescimento Facial: Uma Década de Inovações',
    authors: 'Dr. Sofia Ferreira',
    journal: 'Plastic and Reconstructive Surgery',
    year: 2022,
    impactFactor: 5.2,
    imageUrl: 'https://placehold.co/600x400',
    imageHint: 'science laboratory'
  },
  {
    id: 3,
    title: 'Minimizando Complicações em Mamoplastia de Aumento com Implantes Anatômicos',
    authors: 'Dr. Lucas Martins, Dr. Carlos Andrade',
    journal: 'Journal of Plastic, Reconstructive & Aesthetic Surgery',
    year: 2023,
    impactFactor: 3.9,
    imageUrl: 'https://placehold.co/600x400',
    imageHint: 'medical chart'
  },
   {
    id: 4,
    title: 'Blefaroplastia a Laser vs. Tradicional: Um Estudo Comparativo de Resultados e Recuperação',
    authors: 'Dr. Gabriela Lima',
    journal: 'Ophthalmology',
    year: 2021,
    impactFactor: 8.4,
    imageUrl: 'https://placehold.co/600x400',
    imageHint: 'scientific journal'
  },
];

export default function LibraryPage() {
  return (
    <div className="w-full">
       <GlassCard className="mb-8 p-4">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="relative w-full md:flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <Input
              type="text"
              placeholder="Buscar por título, autor ou periódico..."
              className="glass-input h-12 pl-12 text-base w-full"
            />
          </div>
          <Button variant="ghost" className="h-12 w-full md:w-auto px-4 glass-button">
            <SlidersHorizontal className="w-5 h-5 mr-2" />
            Filtros
          </Button>
        </div>
      </GlassCard>

      <div className="space-y-8">
        {scientificArticles.map((article) => (
          <GlassCard key={article.id} interactive={true} className="p-0 overflow-hidden !rounded-2xl">
            <div className="flex flex-col md:flex-row">
              <div className="relative h-48 md:h-auto md:w-56 flex-shrink-0">
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  layout="fill"
                  objectFit="cover"
                  className="opacity-70 group-hover:opacity-90 transition-opacity duration-300"
                  data-ai-hint={article.imageHint}
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-medium text-white/95 mb-2">{article.title}</h3>
                <p className="text-sm font-light text-cyan-300 mb-4">{article.authors}</p>
                <div className="flex items-center text-xs text-white/50 space-x-4 mb-6">
                    <span>{article.journal}</span>
                    <span className="w-1 h-1 rounded-full bg-white/30"></span>
                    <span>{article.year}</span>
                    <span className="w-1 h-1 rounded-full bg-white/30"></span>
                    <span>Fator de Impacto: {article.impactFactor}</span>
                </div>
                <div className="mt-auto flex items-center gap-4">
                   <Button className="glass-button bg-cyan-400/20 hover:bg-cyan-400/30 text-cyan-300 px-5 h-10">
                    <BookOpen className="w-4 h-4 mr-2"/>
                    Ler Artigo
                   </Button>
                   <Button variant="ghost" className="glass-button bg-white/5 hover:bg-white/10 px-5 h-10">
                     <MessageSquare className="w-4 h-4 mr-2"/>
                     Discutir
                   </Button>
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
