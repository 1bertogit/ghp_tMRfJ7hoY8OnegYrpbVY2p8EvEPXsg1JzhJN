'use client';

import { GlassCard } from '@/components/shared/glass-card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Download, MessageSquare, Mic, Book } from 'lucide-react';
import Link from 'next/link';

interface ClassData {
    id: number;
    title: string;
    specialty: string;
    description: string;
    instructor: string;
    videoUrl: string;
    materials: { title: string; url: string; }[];
}

interface ClassDetailClientProps {
  classData: ClassData;
}

const specialtyColors: { [key: string]: string } = {
  'Rinoplastia': 'text-cyan-400 border-cyan-400/30 bg-cyan-500/10',
  'Mamoplastia': 'text-pink-400 border-pink-400/30 bg-pink-500/10',
  'Blefaroplastia': 'text-blue-400 border-blue-400/30 bg-blue-500/10',
  'Lifting': 'text-orange-400 border-orange-400/30 bg-orange-500/10',
  'Outros': 'text-gray-400 border-gray-400/30 bg-gray-500/10',
};


export default function ClassDetailClient({ classData }: ClassDetailClientProps) {
  return (
    <div className="w-full">
      <div className="mb-8">
        <Link href="/classes" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-4">
            <ArrowLeft className="w-4 h-4" />
            Voltar para todas as aulas
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 space-y-8">
            <GlassCard className="p-0">
                 <div className="aspect-video w-full bg-black rounded-t-3xl flex items-center justify-center">
                    {/* Placeholder for Vimeo/Youtube Player */}
                    <p className="text-white/50">Video Player Placeholder</p>
                </div>
                <div className="p-6">
                    <Badge variant="outline" className={`self-start mb-4 ${specialtyColors[classData.specialty as keyof typeof specialtyColors]}`}>
                        {classData.specialty}
                    </Badge>
                    <h1 className="text-3xl font-light text-white/95 mb-3">{classData.title}</h1>
                    <p className="text-base text-cyan-300 mb-4">com {classData.instructor}</p>
                    <p className="text-base font-extralight text-white/70 leading-relaxed">
                        {classData.description}
                    </p>
                </div>
            </GlassCard>
            <GlassCard>
                <h2 className="text-2xl font-light text-white/90 mb-6">Discussão da Aula</h2>
                 <div className="text-center py-12">
                     <MessageSquare className="w-12 h-12 mx-auto text-white/20 mb-4" />
                    <h3 className="text-lg font-medium text-white/70">Nenhuma discussão iniciada.</h3>
                    <p className="text-sm text-white/50 mt-2">Seja o primeiro a compartilhar suas ideias sobre esta aula.</p>
                     <Button className="mt-6 h-11 glass-button bg-blue-400/20 hover:bg-blue-400/30 text-blue-300">
                        Adicionar Comentário
                    </Button>
                </div>
            </GlassCard>
        </div>

        <div className="lg:col-span-1 space-y-8 sticky top-8">
            <GlassCard>
                <h3 className="text-xl font-light text-white/90 mb-4">Materiais da Aula</h3>
                <div className="space-y-3">
                    {classData.materials.map((material, index) => (
                         <Button key={index} asChild variant="outline" className="w-full justify-start h-12 glass-button bg-white/5 hover:bg-white/10">
                            <a href={material.url} target="_blank" rel="noopener noreferrer">
                                <Download className="w-4 h-4 mr-3" />
                                {material.title}
                            </a>
                        </Button>
                    ))}
                </div>
            </GlassCard>
             <GlassCard>
                <h3 className="text-xl font-light text-white/90 mb-4">Opções de Idioma</h3>
                <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start h-12 glass-button bg-white/5 hover:bg-white/10">
                        <Book className="w-4 h-4 mr-3" />
                        Legendas (Português)
                    </Button>
                     <Button variant="outline" className="w-full justify-start h-12 glass-button bg-white/5 hover:bg-white/10">
                        <Mic className="w-4 h-4 mr-3" />
                        Áudio Original
                    </Button>
                </div>
           </GlassCard>
        </div>
      </div>
    </div>
  );
}
