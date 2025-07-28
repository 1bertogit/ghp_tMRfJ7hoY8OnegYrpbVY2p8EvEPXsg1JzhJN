
'use client';

import { GlassCard } from '@/components/shared/glass-card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, PlayCircle, Book, Video, Lock, CheckCircle, Award } from 'lucide-react';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import type { AcademyCourse } from '@/lib/mock-data/academy';

interface CourseDetailClientProps {
  course: AcademyCourse;
}

const getIconForLessonType = (type: string) => {
    switch (type) {
        case 'video': return <Video className="w-4 h-4 text-cyan-300" />;
        case 'ebook': return <Book className="w-4 h-4 text-purple-300" />;
        case 'cirurgia': return <PlayCircle className="w-4 h-4 text-orange-300" />;
        default: return <PlayCircle className="w-4 h-4 text-white/50" />;
    }
}


export default function CourseDetailClient({ course }: CourseDetailClientProps) {
  return (
    <div className="w-full">
      <div className="mb-8">
        <Link href="/academy" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-4">
            <ArrowLeft className="w-4 h-4" />
            Voltar para a Academy
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 space-y-8">
            <GlassCard className="p-0">
                 <div className="aspect-video w-full bg-black rounded-t-3xl flex items-center justify-center">
                    <p className="text-white/50">Player de Vídeo Principal</p>
                </div>
                <div className="p-6">
                    <h1 className="text-3xl font-light text-white/95 mb-3">{course.title}</h1>
                    <p className="text-base font-extralight text-white/70 leading-relaxed">
                        {course.description}
                    </p>
                </div>
            </GlassCard>

             <GlassCard>
                <h2 className="text-2xl font-light text-white/90 mb-6">Trilha de Aprendizagem</h2>
                <Accordion type="multiple" defaultValue={['item-0']} className="w-full">
                    {course.curriculum.map((module, moduleIndex) => (
                        <AccordionItem value={`item-${moduleIndex}`} key={module.title}>
                            <AccordionTrigger className="text-lg text-white/80 hover:text-white font-light">
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center justify-center w-10 h-10 text-cyan-300 bg-cyan-900/50 border border-cyan-400/20 rounded-lg font-mono text-sm">
                                        {moduleIndex + 1}
                                    </div>
                                    <span>{module.title}</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="pl-4 border-l-2 border-white/10 ml-5 space-y-3">
                                {module.lessons.map((lesson, lessonIndex) => (
                                    <div key={lessonIndex} className="p-4 rounded-xl bg-white/5 flex justify-between items-start">
                                        <div className="flex gap-4">
                                            <div className="flex-shrink-0 mt-1">
                                                {getIconForLessonType(lesson.type)}
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-white/90">{lesson.title}</h4>
                                                <p className="text-sm font-light text-white/60 mt-1">{lesson.description}</p>
                                            </div>
                                        </div>
                                         <div className="flex-shrink-0 ml-4">
                                            {lesson.locked ? (
                                                <Lock className="w-5 h-5 text-white/40" />
                                            ) : (
                                                <CheckCircle className="w-5 h-5 text-green-400" />
                                            )}
                                        </div>
                                    </div>
                                ))}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </GlassCard>
        </div>

        <div className="lg:col-span-1 space-y-8 sticky top-8">
            <GlassCard>
                <h3 className="text-xl font-light text-white/90 mb-4">Seu Progresso</h3>
                <div className="text-center py-8">
                    <p className="text-sm text-white/50">Em breve...</p>
                </div>
            </GlassCard>
            <GlassCard>
                <h3 className="text-xl font-light text-white/90 mb-4">Certificado</h3>
                 <div className="text-center py-8 space-y-3">
                    <Award className="w-12 h-12 mx-auto text-yellow-400/50" />
                    <p className="text-sm text-white/50">Conclua o curso para receber seu certificado.</p>
                </div>
            </GlassCard>
        </div>
      </div>
    </div>
  );
}
