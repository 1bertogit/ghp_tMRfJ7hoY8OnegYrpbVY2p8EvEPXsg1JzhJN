
'use client';

import { useState } from 'react';
import { GlassCard } from '@/components/shared/glass-card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, PlayCircle, Clock, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { recordedClasses } from '@/lib/mock-data/classes';

export default function ClassesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [specialtyFilter, setSpecialtyFilter] = useState('all');

  const filteredClasses = recordedClasses.filter(c => 
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
              placeholder="Buscar por título da aula..."
              className="glass-input h-12 pl-12 text-base w-full"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>
          <Select value={specialtyFilter} onValueChange={setSpecialtyFilter}>
            <SelectTrigger className="w-full md:w-[220px] h-12 glass-input text-base">
              <SelectValue placeholder="Filtrar por especialidade" />
            </SelectTrigger>
            <SelectContent className="glass-pane">
              <SelectItem value="all">Todas as Especialidades</SelectItem>
              <SelectItem value="Rinoplastia">Rinoplastia</SelectItem>
              <SelectItem value="Mamoplastia">Mamoplastia</SelectItem>
              <SelectItem value="Blefaroplastia">Blefaroplastia</SelectItem>
              <SelectItem value="Lifting">Lifting</SelectItem>
              <SelectItem value="Outros">Outros</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </GlassCard>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {filteredClasses.map(c => (
          <Link key={c.id} href={`/classes/${c.id}`} passHref>
            <GlassCard interactive={true} className="p-0 overflow-hidden flex flex-col group">
              <div className="relative h-48 w-full overflow-hidden">
                <Image 
                  src={c.imageUrl} 
                  alt={c.title}
                  layout="fill"
                  objectFit="cover"
                  className="opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
                  data-ai-hint={c.imageHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm p-1.5 rounded-lg">
                    <p className="text-xs font-medium text-white/80">{c.specialty}</p>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-medium text-white/95 leading-tight">{c.title}</h3>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <PlayCircle className="w-16 h-16 text-white/80" />
                </div>
              </div>
              <div className="p-5 bg-white/[0.04]">
                <div className="flex justify-between items-center text-sm text-white/60">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{c.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="font-medium">{c.rating}</span>
                    <span className="text-white/40">({c.views} views)</span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </Link>
        ))}
      </div>
    </div>
  );
}
