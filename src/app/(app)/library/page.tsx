
'use client';

import { useState } from 'react';
import { GlassCard } from '@/components/shared/glass-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { BookOpen, MessageSquare, Search, Eye, Filter, Star } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';


const scientificArticles = [
  {
    id: 1,
    title: 'Técnicas Avançadas em Rinoplastia Estruturada para Casos Complexos',
    authors: 'Dr. Ricardo Monteiro, Dr. Ana Couto',
    journal: 'Aesthetic Surgery Journal',
    year: 2023,
    impactFactor: 4.8,
    specialty: 'Rinoplastia',
    abstract: 'Este artigo detalha abordagens inovadoras para rinoplastias revisionais, focando na reconstrução do dorso nasal com enxertos costais e na otimização da ponta nasal utilizando técnicas de sutura e enxertos de cartilagem. Apresenta um estudo de caso com 50 pacientes, demonstrando resultados estéticos e funcionais superiores...',
    views: 345,
    discussions: 18,
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
    specialty: 'Lifting',
    abstract: 'Uma revisão abrangente sobre a evolução das técnicas de enxerto de gordura para o rejuvenescimento facial. O artigo discute desde a colheita e processamento do tecido adiposo até as técnicas de injeção para volumização e melhora da qualidade da pele. Aborda também a segurança do procedimento e o manejo de complicações...',
    views: 521,
    discussions: 25,
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
    specialty: 'Mamoplastia',
    abstract: 'Estudo prospectivo que avalia as taxas de contratura capsular, rotação e assimetria em 200 pacientes submetidas a mamoplastia de aumento com implantes anatômicos. Os autores propõem um protocolo perioperatório para minimizar riscos, incluindo a técnica de inserção dual-plane e o uso de sutiã cirúrgico específico...',
    views: 289,
    discussions: 12,
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
    specialty: 'Blefaroplastia',
    abstract: 'Ensaio clínico randomizado comparando a blefaroplastia superior realizada com bisturi a frio versus laser de CO2. Avalia-se o tempo cirúrgico, sangramento intraoperatório, edema e equimose pós-operatória, além da satisfação do paciente e a qualidade da cicatriz em 6 meses de acompanhamento...',
    views: 412,
    discussions: 21,
    imageUrl: 'https://placehold.co/600x400',
    imageHint: 'scientific journal'
  },
];

const specialties = ['Todos', 'Rinoplastia', 'Mamoplastia', 'Blefaroplastia', 'Lifting'];

const specialtyColors: { [key: string]: string } = {
  'Rinoplastia': 'text-cyan-400 border-cyan-400/30 bg-cyan-500/10',
  'Mamoplastia': 'text-pink-400 border-pink-400/30 bg-pink-500/10',
  'Blefaroplastia': 'text-blue-400 border-blue-400/30 bg-blue-500/10',
  'Lifting': 'text-orange-400 border-orange-400/30 bg-orange-500/10',
};

export default function LibraryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [specialtyFilter, setSpecialtyFilter] = useState('Todos');
  
  const filteredArticles = scientificArticles.filter(article => 
      (article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       article.authors.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (specialtyFilter === 'Todos' || article.specialty === specialtyFilter)
  );

  return (
    <div className="w-full">
       <GlassCard className="mb-8 p-4">
        <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
          <div className="relative w-full md:flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <Input
              type="text"
              placeholder="Buscar por título ou autor..."
              className="glass-input h-12 pl-12 text-base w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 text-sm text-white/70 mr-2">
                <Filter className="w-4 h-4" />
                <span>Filtros rápidos:</span>
            </div>
            {specialties.map(specialty => (
                <Button 
                    key={specialty}
                    variant={specialtyFilter === specialty ? 'default' : 'ghost'}
                    onClick={() => setSpecialtyFilter(specialty)}
                    className={cn(
                        'glass-button h-9 px-4 text-sm',
                        specialtyFilter === specialty 
                        ? 'bg-white/20 hover:bg-white/30 text-white'
                        : 'bg-white/5 hover:bg-white/10'
                    )}
                >
                    {specialty}
                </Button>
            ))}
        </div>
      </GlassCard>

      <div className="space-y-8">
        {filteredArticles.map((article) => (
          <GlassCard key={article.id} interactive={true} className="p-0 overflow-hidden !rounded-2xl group">
            <div className="flex flex-col md:flex-row">
              <div className="relative h-48 md:h-auto md:w-64 flex-shrink-0">
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  layout="fill"
                  objectFit="cover"
                  className="opacity-70 group-hover:opacity-90 transition-opacity duration-300"
                  data-ai-hint={article.imageHint}
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <Badge variant="outline" className={`self-start mb-3 ${specialtyColors[article.specialty as keyof typeof specialtyColors]}`}>
                    {article.specialty}
                </Badge>
                <h3 className="text-lg font-semibold text-white/95 mb-2">{article.title}</h3>
                <p className="text-sm font-light text-cyan-300 mb-3">{article.authors}</p>
                <div className="flex flex-wrap items-center text-xs text-white/50 gap-x-4 gap-y-1 mb-4">
                    <span>{article.journal} ({article.year})</span>
                     <div className="flex items-center gap-1.5">
                        <Star className="w-3 h-3 text-yellow-400" />
                        <span>Fator de Impacto: {article.impactFactor}</span>
                    </div>
                </div>

                <p className="text-sm font-extralight text-white/70 leading-relaxed line-clamp-2 mb-4">
                    {article.abstract}
                </p>

                <div className="mt-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-4 text-xs text-white/60">
                        <div className="flex items-center gap-1.5">
                            <Eye className="w-4 h-4" />
                            <span>{article.views}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <MessageSquare className="w-4 h-4" />
                            <span>{article.discussions}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                       <Button className="glass-button bg-cyan-400/20 hover:bg-cyan-400/30 text-cyan-300 px-5 h-10 text-sm">
                        <BookOpen className="w-4 h-4 mr-2"/>
                        Ler Artigo
                       </Button>
                       <Button variant="ghost" className="glass-button bg-white/5 hover:bg-white/10 px-5 h-10 text-sm">
                         <MessageSquare className="w-4 h-4 mr-2"/>
                         Discutir
                       </Button>
                    </div>
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
