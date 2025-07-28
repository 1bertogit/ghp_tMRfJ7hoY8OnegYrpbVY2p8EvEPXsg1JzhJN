
'use client';

import { useState } from 'react';
import { GlassCard } from '@/components/shared/glass-card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, GraduationCap, Clock, BarChart2, ArrowRight, PlayCircle, Star, Plus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const featuredCourse = {
  id: 1,
  title: 'Trilha de Rinoplastia: Do Fundamento à Maestria',
  category: 'Trilha de Aprendizagem',
  level: 'Iniciante ao Avançado',
  duration: '40 horas',
  modules: 15,
  imageUrl: 'https://placehold.co/1200x675',
  imageHint: 'surgery diagram',
  description: 'Uma jornada completa pela rinoplastia, cobrindo anatomia, planejamento 3D, técnicas primárias, abordagens revisionais e o gerenciamento eficaz de complicações comuns e raras.',
  rating: 4.9,
  status: 'Em Andamento',
};

const courseSections = [
    {
        title: 'Cursos Intensivos',
        courses: [
            {
                id: 2,
                title: 'Curso Intensivo de Blefaroplastia Moderna',
                category: 'Curso',
                imageUrl: 'https://placehold.co/600x400',
                imageHint: 'eye anatomy',
                duration: '12 horas',
            },
            {
                id: 4,
                title: 'Mamoplastia: Seleção de Implantes e Planejamento 3D',
                category: 'Curso',
                imageUrl: 'https://placehold.co/600x400',
                imageHint: 'medical imaging',
                duration: '10 horas',
            },
             {
                id: 6,
                title: 'Técnicas de Lipoaspiração HD',
                category: 'Curso',
                imageUrl: 'https://placehold.co/600x400',
                imageHint: 'body contouring',
                duration: '15 horas',
            },
             {
                id: 7,
                title: 'Otoplastia: Das Técnicas Clássicas às Modernas',
                category: 'Curso',
                imageUrl: 'https://placehold.co/600x400',
                imageHint: 'ear anatomy',
                duration: '8 horas',
            },
        ]
    },
    {
        title: 'Workshops Práticos',
        courses: [
             {
                id: 3,
                title: 'Workshop: Dominando o Lifting Facial Deep Plane',
                category: 'Workshop Prático',
                imageUrl: 'https://placehold.co/600x400',
                imageHint: 'facial anatomy',
                duration: '8 horas',
            },
            {
                id: 5,
                title: 'Hands-on: Fios de Sustentação Faciais',
                category: 'Workshop Prático',
                imageUrl: 'https://placehold.co/600x400',
                imageHint: 'aesthetic procedure',
                duration: '6 horas',
            },
            {
                id: 8,
                title: 'Gestão de Complicações em Cirurgia Plástica',
                category: 'Workshop Prático',
                imageUrl: 'https://placehold.co/600x400',
                imageHint: 'medical discussion',
                duration: '4 horas',
            },
        ]
    }
]

const categoryColors: { [key: string]: string } = {
  'Trilha de Aprendizagem': 'text-purple-400 border-purple-400/30 bg-purple-500/10',
  'Curso': 'text-cyan-400 border-cyan-400/30 bg-cyan-500/10',
  'Workshop Prático': 'text-orange-400 border-orange-400/30 bg-orange-500/10',
};

export default function AcademyPage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="w-full space-y-12">
        {/* Featured Course Hero Section */}
        <GlassCard className="p-0 overflow-hidden" interactive>
             <div className="relative w-full aspect-[16/8]">
                <Image 
                    src={featuredCourse.imageUrl}
                    alt={featuredCourse.title}
                    fill
                    className="object-cover opacity-30"
                    data-ai-hint={featuredCourse.imageHint}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
                <div className="absolute inset-0 flex items-center p-8 md:p-12">
                    <div className="max-w-xl">
                        <Badge variant="outline" className={`mb-4 ${categoryColors[featuredCourse.category]}`}>
                            <GraduationCap className="w-4 h-4 mr-2"/> {featuredCourse.category}
                        </Badge>
                        <h1 className="text-4xl lg:text-5xl font-bold text-white/95 leading-tight">{featuredCourse.title}</h1>
                        <p className="mt-4 text-lg text-white/60 font-light leading-relaxed">{featuredCourse.description}</p>
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-6 text-white/80">
                            <div className="flex items-center gap-2">
                                <Star className="w-5 h-5 text-yellow-400" />
                                <span className="font-medium">{featuredCourse.rating}</span>
                            </div>
                            <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-400/30">{featuredCourse.status}</Badge>
                            <span>{featuredCourse.duration}</span>
                            <span>{featuredCourse.modules} Módulos</span>
                        </div>
                        <div className="flex items-center gap-4 mt-8">
                             <Button className="h-14 px-8 text-lg glass-button bg-white/20 hover:bg-white/30 text-white">
                                <PlayCircle className="w-6 h-6 mr-2" />
                                Continuar Trilha
                            </Button>
                             <Button variant="outline" className="h-14 px-8 text-lg glass-button bg-white/5 hover:bg-white/10">
                                <Plus className="w-6 h-6 mr-2" />
                                Minha Lista
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </GlassCard>

        {/* Search and Filter Bar */}
        <GlassCard className="p-4">
            <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="relative w-full md:flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <Input
                type="text"
                placeholder="Buscar por cursos, trilhas ou especialidades..."
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
        
        {/* Course Shelves */}
        {courseSections.map((section) => (
            <div key={section.title}>
                <h2 className="text-2xl font-light text-white/90 mb-4">{section.title}</h2>
                <Carousel
                    opts={{
                        align: "start",
                        loop: false,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4">
                        {section.courses.map((course) => (
                            <CarouselItem key={course.id} className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 pl-4">
                                <Link href="#" passHref>
                                    <GlassCard interactive={true} className="p-0 overflow-hidden flex flex-col group h-full">
                                        <div className="relative w-full overflow-hidden aspect-video">
                                            <Image 
                                            src={course.imageUrl} 
                                            alt={course.title}
                                            fill
                                            className="object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-105"
                                            data-ai-hint={course.imageHint}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent group-hover:from-black/60 transition-all"></div>
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <PlayCircle className="w-16 h-16 text-white/70" />
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <h3 className="text-base font-medium text-white/95 leading-tight truncate">{course.title}</h3>
                                            <p className="text-sm font-light text-white/60 mt-1">{course.duration}</p>
                                        </div>
                                    </GlassCard>
                                </Link>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="ml-16" />
                    <CarouselNext className="mr-16" />
                </Carousel>
            </div>
        ))}
    </div>
  );
}
