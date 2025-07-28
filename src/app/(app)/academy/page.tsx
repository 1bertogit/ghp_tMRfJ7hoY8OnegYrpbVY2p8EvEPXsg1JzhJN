
'use client';

import { useState } from 'react';
import { GlassCard } from '@/components/shared/glass-card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, GraduationCap, Clock, BarChart2, ArrowRight, PlayCircle, Star, Plus, Info, Lock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { featuredCourse, courseSections } from '@/lib/mock-data/academy';


export default function AcademyPage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="w-full space-y-12">
        {/* Featured Course Hero Section */}
        <GlassCard className="p-0 overflow-hidden" interactive>
            <Link href={`/academy/${featuredCourse.id}`} passHref>
                <div className="relative w-full aspect-[16/8]">
                    <Image 
                        src={featuredCourse.imageUrl}
                        alt={featuredCourse.title}
                        fill
                        className="object-cover opacity-30"
                        data-ai-hint={featuredCourse.imageHint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-12">
                        <div className="max-w-2xl">
                            <div className="flex items-center gap-3">
                                <GraduationCap className="w-5 h-5 text-yellow-400" />
                                <p className="text-sm font-semibold tracking-wider text-yellow-400 uppercase">{featuredCourse.category}</p>
                            </div>
                            
                            <h1 className="text-4xl lg:text-5xl font-bold text-white/95 leading-tight mt-3">{featuredCourse.title}</h1>
                            
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4 text-white/80">
                                <div className="flex items-center gap-2">
                                    <Star className="w-5 h-5 text-yellow-400" />
                                    <span className="font-medium">{featuredCourse.rating}</span>
                                </div>
                                <Badge variant="outline" className="border-green-400/50 text-green-300 capitalize">{featuredCourse.level}</Badge>
                                <span>{featuredCourse.duration}</span>
                                <span>{featuredCourse.modules}</span>
                            </div>

                            <p className="mt-4 text-lg text-white/60 font-light leading-relaxed">{featuredCourse.description}</p>
                            
                            <div className="flex items-center gap-4 mt-8">
                                <Button className="h-14 px-8 text-lg glass-button bg-white/20 hover:bg-white/30 text-white">
                                    <PlayCircle className="w-6 h-6 mr-2" />
                                    Acessar Trilha
                                </Button>
                                <Button variant="outline" className="h-14 px-8 text-lg glass-button bg-white/5 hover:bg-white/10">
                                    <Plus className="w-6 h-6 mr-2" />
                                    Minha Lista
                                </Button>
                                <Button variant="outline" className="h-14 px-8 text-lg glass-button bg-white/5 hover:bg-white/10">
                                    <Info className="w-6 h-6 mr-2" />
                                    Mais Informações
                                </Button>
                            </div>
                            <div className="mt-8 text-white/60 text-sm">
                                <span>Instrutor: <strong className="text-white/80">{featuredCourse.instructor}</strong></span>
                                <span className="mx-2">•</span>
                                <span>{featuredCourse.students.toLocaleString('pt-BR')} Alunos</span>
                                <span className="mx-2">•</span>
                                <span>{featuredCourse.price}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
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
                            <CarouselItem key={course.id} className="basis-1/2 md:basis-1/3 lg:basis-1/4 pl-4">
                                <Link href={`/academy/${course.id}`} passHref>
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
                                             {course.locked && (
                                                <div className="absolute top-3 right-3 bg-black/50 p-2 rounded-full backdrop-blur-sm">
                                                    <Lock className="w-4 h-4 text-white/80" />
                                                </div>
                                            )}
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
