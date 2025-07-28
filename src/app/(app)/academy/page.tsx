
'use client';

import { useState } from 'react';
import { GlassCard } from '@/components/shared/glass-card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, GraduationCap, Clock, BarChart2, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const courses = [
  {
    id: 1,
    title: 'Trilha de Rinoplastia: Do Fundamento à Maestria',
    category: 'Trilha de Aprendizagem',
    level: 'Iniciante ao Avançado',
    duration: '40 horas',
    modules: 15,
    imageUrl: 'https://placehold.co/600x400',
    imageHint: 'surgery diagram',
    description: 'Uma jornada completa pela rinoplastia, cobrindo anatomia, planejamento, técnicas primárias, revisionais e gerenciamento de complicações.'
  },
  {
    id: 2,
    title: 'Curso Intensivo de Blefaroplastia Moderna',
    category: 'Curso',
    level: 'Intermediário',
    duration: '12 horas',
    modules: 8,
    imageUrl: 'https://placehold.co/600x400',
    imageHint: 'eye anatomy',
    description: 'Foco nas técnicas mais atuais de blefaroplastia superior e inferior, incluindo transposição de bolsas de gordura e cantopexia.'
  },
  {
    id: 3,
    title: 'Workshop: Dominando o Lifting Facial Deep Plane',
    category: 'Workshop Prático',
    level: 'Avançado',
    duration: '8 horas',
    modules: 4,
    imageUrl: 'https://placehold.co/600x400',
    imageHint: 'facial anatomy',
    description: 'Um mergulho profundo na técnica do deep plane, com demonstrações cirúrgicas detalhadas e discussão de casos complexos.'
  },
  {
    id: 4,
    title: 'Mamoplastia de Aumento: Seleção de Implantes e Planejamento 3D',
    category: 'Curso',
    level: 'Intermediário',
    duration: '10 horas',
    modules: 7,
    imageUrl: 'https://placehold.co/600x400',
    imageHint: 'medical imaging',
    description: 'Aprenda a selecionar o implante ideal para cada biotipo e a utilizar ferramentas de planejamento 3D para otimizar os resultados estéticos.'
  }
];

const categoryColors: { [key: string]: string } = {
  'Trilha de Aprendizagem': 'text-purple-400 border-purple-400/30 bg-purple-500/10',
  'Curso': 'text-cyan-400 border-cyan-400/30 bg-cyan-500/10',
  'Workshop Prático': 'text-orange-400 border-orange-400/30 bg-orange-500/10',
};

export default function AcademyPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = courses.filter(c => 
    c.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full">
      <GlassCard className="mb-8 p-4">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="relative w-full md:flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <Input
              type="text"
              placeholder="Buscar por cursos ou trilhas..."
              className="glass-input h-12 pl-12 text-base w-full"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>
          <Button className="h-12 w-full md:w-auto px-6 glass-button bg-cyan-400/20 hover:bg-cyan-400/30 text-cyan-300">
             Sugerir Novo Curso
          </Button>
        </div>
      </GlassCard>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredCourses.map(course => (
          <Link href="#" key={course.id}>
            <GlassCard interactive={true} className="p-0 overflow-hidden flex flex-col group h-full">
              <div className="relative w-full overflow-hidden aspect-video">
                <Image 
                  src={course.imageUrl} 
                  alt={course.title}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                  data-ai-hint={course.imageHint}
                />
                <div className="absolute top-3 right-3 flex flex-col gap-2">
                   <Badge variant="outline" className={`glass-pane text-xs backdrop-blur-md ${categoryColors[course.category]}`}>
                      <GraduationCap className="w-3 h-3 mr-1.5"/> {course.category}
                    </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                 <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-semibold text-white/95 leading-tight">{course.title}</h3>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                 <p className="text-sm font-extralight text-white/70 leading-relaxed line-clamp-2 mb-4">
                  {course.description}
                </p>

                <div className="my-4 flex justify-between items-center text-sm text-white/60 border-y border-white/10 py-3">
                  <div className="flex items-center gap-2">
                    <BarChart2 className="w-4 h-4 text-cyan-300" />
                    <span>Nível: <strong>{course.level}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-cyan-300" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                <div className="mt-auto flex items-center justify-between">
                    <p className="text-sm font-medium text-cyan-300">{course.modules} Módulos</p>
                    <Button variant="ghost" className="glass-button h-10 text-sm font-normal bg-white/5 hover:bg-white/10 px-5">
                      Ver Trilha Completa <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
              </div>
            </GlassCard>
          </Link>
        ))}
      </div>
    </div>
  );
}
