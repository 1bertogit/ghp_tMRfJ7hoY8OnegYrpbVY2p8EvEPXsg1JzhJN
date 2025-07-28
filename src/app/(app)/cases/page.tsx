
'use client';

import { useState, useRef, useEffect } from 'react';
import { GlassCard } from '@/components/shared/glass-card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Search, SlidersHorizontal, PlusCircle, Bot, MessageSquare, Bookmark, Share2, Image as ImageIcon, Video, Upload, X, PlayCircle } from 'lucide-react';
import Image from 'next/image';
import { analyzeCase } from '@/ai/flows/analyze-case-flow';
import { AnalyzeCaseInput } from '@/ai/schemas/case-analysis';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Progress } from '@/components/ui/progress';
import { db, storage } from '@/lib/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc, getDocs, query, orderBy, serverTimestamp } from "firebase/firestore";
import type { MedicalCase } from '@/lib/mock-data/cases';


const statusColors: { [key: string]: string } = {
  'Em Análise': 'bg-purple-500/20 text-purple-300 border-purple-400/30',
  'Aprovado': 'bg-green-500/20 text-green-300 border-green-400/30',
  'Requer Revisão': 'bg-yellow-500/20 text-yellow-300 border-yellow-400/30',
};

const specialtyColors: { [key: string]: string } = {
  'Rinoplastia': 'text-cyan-400 border-cyan-400/30 bg-cyan-500/10',
  'Mamoplastia': 'text-pink-400 border-pink-400/30 bg-pink-500/10',
  'Blefaroplastia': 'text-blue-400 border-blue-400/30 bg-blue-500/10',
  'Lifting': 'text-orange-400 border-orange-400/30 bg-orange-500/10',
  'Outros': 'text-gray-400 border-gray-400/30 bg-gray-500/10',
};

export default function CasesPage() {
  const [medicalCases, setMedicalCases] = useState<MedicalCase[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [specialtyFilter, setSpecialtyFilter] = useState('all');

  useEffect(() => {
    const fetchCases = async () => {
      setIsLoading(true);
      try {
        const casesCollection = collection(db, "cases");
        const q = query(casesCollection, orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        const casesData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as MedicalCase[];
        setMedicalCases(casesData);
      } catch (error) {
        console.error("Error fetching cases: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCases();
  }, []);

  const filteredCases = medicalCases.filter(c => 
    c.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (specialtyFilter === 'all' || c.specialty === specialtyFilter)
  );
  
  return (
    <div className="w-full">
      <GlassCard className="mb-8 p-4">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="relative w-full md:flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <Input
              type="text"
              placeholder="Buscar por título do caso..."
              className="glass-input h-12 pl-12 text-base w-full text-white/80"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>
          <Select value={specialtyFilter} onValueChange={setSpecialtyFilter}>
            <SelectTrigger className="w-full md:w-[220px] h-12 glass-input text-base text-white/80">
              <SelectValue placeholder="Filtrar por especialidade" />
            </SelectTrigger>
            <SelectContent className="glass-pane">
              <SelectItem value="all">Todas as Especialidades</SelectItem>
              <SelectItem value="Rinoplastia">Rinoplastia</SelectItem>
              <SelectItem value="Mamoplastia">Mamoplastia</SelectItem>
              <SelectItem value="Blefaroplastia">Blefaroplastia</SelectItem>
              <SelectItem value="Lifting">Lifting</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </GlassCard>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {isLoading ? (
            Array.from({ length: 3 }).map((_, index) => (
                <GlassCard key={index} className="p-0 animate-pulse">
                    <div className="aspect-video bg-white/5"></div>
                    <div className="p-6">
                        <div className="h-4 bg-white/10 rounded w-1/4 mb-4"></div>
                        <div className="h-6 bg-white/10 rounded w-3/4 mb-3"></div>
                        <div className="h-4 bg-white/10 rounded w-1/2 mb-5"></div>
                        <div className="h-16 bg-white/5 rounded-xl"></div>
                    </div>
                </GlassCard>
            ))
        ) : filteredCases.map(c => (
          <Link href={`/cases/${c.id}`} key={c.id}>
            <GlassCard interactive={true} className="p-0 overflow-hidden flex flex-col group h-full">
              <div className="relative w-full overflow-hidden aspect-video">
                <Image 
                  src={c.imageUrl || (c.imageUrls && c.imageUrls[0]) || 'https://placehold.co/600x400'} 
                  alt={c.title}
                  fill
                  className="object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
                  data-ai-hint={c.imageHint}
                />
                 {c.videoCount > 0 && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <PlayCircle className="w-16 h-16 text-white/70" />
                  </div>
                )}
                <div className="absolute top-3 right-3 flex flex-col gap-2">
                   <Badge variant="outline" className={`glass-pane text-xs backdrop-blur-md ${statusColors[c.status]}`}>
                      {c.status}
                    </Badge>
                </div>
                 <div className="absolute bottom-3 right-3 flex gap-2">
                  {(c.imageCount > 0 || (c.imageUrls && c.imageUrls.length > 0)) && (
                    <Badge variant="outline" className="glass-pane backdrop-blur-md">
                      <ImageIcon className="w-3 h-3 mr-1.5"/> {c.imageUrls?.length || c.imageCount}
                    </Badge>
                  )}
                  {c.videoCount > 0 && (
                     <Badge variant="outline" className="glass-pane backdrop-blur-md">
                      <Video className="w-3 h-3 mr-1.5"/> {c.videoCount}
                    </Badge>
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <Badge variant="outline" className={`self-start mb-3 ${specialtyColors[c.specialty as keyof typeof specialtyColors]}`}>
                    {c.specialty}
                </Badge>

                <h3 className="text-lg font-semibold text-white/95 leading-tight flex-grow mb-3">{c.title}</h3>
                
                <p className="text-sm font-light text-white/50 mt-auto mb-5">
                  Enviado por: {c.submittedBy}
                </p>

                {c.analysis && (
                  <div className="mb-6 mt-auto pt-4 border-t border-white/10 bg-white/[.03] p-4 rounded-xl -mx-2">
                     <div className="flex items-center gap-3 mb-2">
                       <div className="p-2 bg-purple-500/10 rounded-full border border-purple-400/20">
                          <Bot className="w-5 h-5 text-purple-300" />
                       </div>
                       <p className="text-sm font-semibold text-purple-300">Análise do Dr. Genkit</p>
                     </div>
                     <p className="text-sm font-extralight text-white/70 leading-relaxed">
                       {c.analysis}
                     </p>
                  </div>
                )}

                <div className="flex items-center gap-2 mt-4">
                  <Button variant="ghost" className="flex-1 glass-button h-10 text-sm font-normal">
                      <MessageSquare size={16} /> Comentar
                  </Button>
                   <Button variant="ghost" className="flex-1 glass-button h-10 text-sm font-normal">
                      <Bookmark size={16} /> Salvar
                  </Button>
                  <Button variant="ghost" className="flex-1 glass-button h-10 text-sm font-normal">
                      <Share2 size={16} /> Compartilhar
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
