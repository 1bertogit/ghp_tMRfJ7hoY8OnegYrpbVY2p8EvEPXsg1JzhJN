
'use client';

import { GlassCard } from '@/components/shared/glass-card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, MessageSquare, Star, Eye } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Mock data - Em uma aplicação real, isso viria de uma API/banco de dados
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


const specialtyColors: { [key: string]: string } = {
  'Rinoplastia': 'text-cyan-400 border-cyan-400/30 bg-cyan-500/10',
  'Mamoplastia': 'text-pink-400 border-pink-400/30 bg-pink-500/10',
  'Blefaroplastia': 'text-blue-400 border-blue-400/30 bg-blue-500/10',
  'Lifting': 'text-orange-400 border-orange-400/30 bg-orange-500/10',
  'Outros': 'text-gray-400 border-gray-400/30 bg-gray-500/10',
};


export default function ArticleDetailPage({ params }: { params: { id: string } }) {
    const article = scientificArticles.find(a => a.id.toString() === params.id);

    if (!article) {
        notFound();
    }
  
  return (
    <div className="w-full">
      <div className="mb-8">
        <Link href="/library" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-4">
            <ArrowLeft className="w-4 h-4" />
            Voltar para a Biblioteca
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
            <GlassCard>
                <Badge variant="outline" className={`self-start mb-4 ${specialtyColors[article.specialty as keyof typeof specialtyColors]}`}>
                    {article.specialty}
                </Badge>
                <h1 className="text-3xl font-light text-white/95 mb-3">{article.title}</h1>
                <p className="text-base text-cyan-300 mb-4">{article.authors}</p>
                <div className="flex flex-wrap items-center text-sm text-white/50 gap-x-6 gap-y-2 mb-6">
                    <span>{article.journal} ({article.year})</span>
                     <div className="flex items-center gap-1.5">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span>Fator de Impacto: {article.impactFactor}</span>
                    </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/10">
                    <h2 className="text-xl font-medium text-white/90 mb-3">Resumo</h2>
                    <p className="text-base font-extralight text-white/70 leading-relaxed">
                        {article.abstract}
                    </p>
                </div>
            </GlassCard>

             <GlassCard>
                <h2 className="text-2xl font-light text-white/90 mb-6">Discussão da Comunidade</h2>
                <div className="text-center py-12">
                     <MessageSquare className="w-12 h-12 mx-auto text-white/20 mb-4" />
                    <h3 className="text-lg font-medium text-white/70">Nenhuma discussão iniciada.</h3>
                    <p className="text-sm text-white/50 mt-2">Seja o primeiro a compartilhar suas ideias sobre este artigo.</p>
                     <Button className="mt-6 h-11 glass-button bg-blue-400/20 hover:bg-blue-400/30 text-blue-300">
                        Iniciar Discussão
                    </Button>
                </div>
            </GlassCard>
        </div>

        <div>
           <GlassCard>
                <h2 className="text-2xl font-light text-white/90 mb-4">Ações</h2>
                 <div className="space-y-3">
                    <Button className="w-full h-12 glass-button bg-cyan-400/20 hover:bg-cyan-400/30 text-cyan-300">
                        <BookOpen className="w-5 h-5 mr-2"/>
                        Visualizar PDF
                    </Button>
                     <Button className="w-full h-12 glass-button bg-white/5 hover:bg-white/10">
                        Fazer Download
                    </Button>
                </div>
                
                 <div className="mt-6 pt-6 border-t border-white/10 text-sm space-y-3">
                    <div className="flex justify-between">
                        <span className="text-white/60 flex items-center gap-2"><Eye className="w-4 h-4"/> Visualizações:</span>
                        <span className="font-medium text-white/90">{article.views}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-white/60 flex items-center gap-2"><MessageSquare className="w-4 h-4"/> Comentários:</span>
                        <span className="font-medium text-white/90">{article.discussions}</span>
                    </div>
                </div>
           </GlassCard>
        </div>
      </div>
    </div>
  );
}
