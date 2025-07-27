'use client';

import { useState } from 'react';
import { GlassCard } from '@/components/shared/glass-card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Search, SlidersHorizontal, PlusCircle } from 'lucide-react';
import Image from 'next/image';

const initialMedicalCases = [
  {
    id: 1,
    title: 'Caso Complexo de Rinoplastia Revisional',
    specialty: 'Rinoplastia',
    submittedBy: 'Dr. Ana Couto',
    status: 'Em Análise',
    imageUrl: 'https://placehold.co/600x400',
    imageHint: 'surgery nose'
  },
  {
    id: 2,
    title: 'Mamoplastia de Aumento com Prótese de Silicone',
    specialty: 'Mamoplastia',
    submittedBy: 'Dr. Lucas Martins',
    status: 'Aprovado',
    imageUrl: 'https://placehold.co/600x400',
    imageHint: 'surgery breast'
  },
  {
    id: 3,
    title: 'Blefaroplastia Superior e Inferior',
    specialty: 'Blefaroplastia',
    submittedBy: 'Dr. Sofia Ferreira',
    status: 'Aprovado',
    imageUrl: 'https://placehold.co/600x400',
    imageHint: 'surgery eye'
  },
  {
    id: 4,
    title: 'Lifting Facial Completo (Ritidoplastia)',
    specialty: 'Lifting',
    submittedBy: 'Dr. Carlos Andrade',
    status: 'Em Análise',
    imageUrl: 'https://placehold.co/600x400',
    imageHint: 'surgery face'
  },
  {
    id: 5,
    title: 'Rinoplastia Estruturada Pós-Trauma',
    specialty: 'Rinoplastia',
    submittedBy: 'Dr. Gabriela Lima',
    status: 'Aprovado',
    imageUrl: 'https://placehold.co/600x400',
    imageHint: 'rhinoplasty surgery'
  },
  {
    id: 6,
    title: 'Reconstrução Mamária Pós-Mastectomia',
    specialty: 'Mamoplastia',
    submittedBy: 'Dr. Pedro Almeida',
    status: 'Requer Revisão',
    imageUrl: 'https://placehold.co/600x400',
    imageHint: 'mastectomy reconstruction'
  },
];

const statusColors: { [key: string]: string } = {
  'Em Análise': 'bg-purple-500/20 text-purple-300 border-purple-400/30',
  'Aprovado': 'bg-green-500/20 text-green-300 border-green-400/30',
  'Requer Revisão': 'bg-yellow-500/20 text-yellow-300 border-yellow-400/30',
};

export default function CasesPage() {
  const [medicalCases, setMedicalCases] = useState(initialMedicalCases);
  const [searchTerm, setSearchTerm] = useState('');
  const [specialtyFilter, setSpecialtyFilter] = useState('all');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Form state for the new case
  const [newCaseTitle, setNewCaseTitle] = useState('');
  const [newCaseSpecialty, setNewCaseSpecialty] = useState('');
  const [newCaseImageUrl, setNewCaseImageUrl] = useState('');


  const filteredCases = medicalCases.filter(c => 
    c.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (specialtyFilter === 'all' || c.specialty === specialtyFilter)
  );

  const handleAddCase = () => {
    if (!newCaseTitle || !newCaseSpecialty) return;
    
    const newCase = {
      id: medicalCases.length + 1,
      title: newCaseTitle,
      specialty: newCaseSpecialty,
      submittedBy: 'Dr. Robério', // Assuming the logged-in user
      status: 'Em Análise',
      imageUrl: newCaseImageUrl || 'https://placehold.co/600x400',
      imageHint: 'new case',
    };

    setMedicalCases([newCase, ...medicalCases]);
    
    // Reset form and close dialog
    setNewCaseTitle('');
    setNewCaseSpecialty('');
    setNewCaseImageUrl('');
    setIsDialogOpen(false);
  };

  return (
    <div className="w-full">
      <header className="mb-8">
        <h1 className="text-4xl font-light text-white/90 tracking-wider">Casos Médicos</h1>
        <p className="text-lg font-extralight text-white/50 mt-1">
          Revise, comente e aprove os casos enviados pelos alunos.
        </p>
      </header>

      <GlassCard className="mb-8 p-4">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="relative w-full md:flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <Input
              type="text"
              placeholder="Buscar por título do caso..."
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
            </SelectContent>
          </Select>
          <Button variant="ghost" className="h-12 w-full md:w-auto px-4 glass-button">
            <SlidersHorizontal className="w-5 h-5 mr-2" />
            Filtros
          </Button>
           <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
               <Button className="h-12 w-full md:w-auto px-6 glass-button bg-cyan-400/20 hover:bg-cyan-400/30 text-cyan-300">
                <PlusCircle className="w-5 h-5 mr-2" />
                Novo Caso
              </Button>
            </DialogTrigger>
            <DialogContent className="glass-pane max-w-lg">
                <DialogHeader>
                    <DialogTitle className="text-white/90 text-2xl font-light">Submeter Novo Caso Clínico</DialogTitle>
                    <DialogDescription className="text-white/50 font-extralight pt-1">
                        Preencha os detalhes abaixo. O caso será enviado para revisão.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-6 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="title" className="text-white/70">Título do Caso</Label>
                        <Input id="title" value={newCaseTitle} onChange={e => setNewCaseTitle(e.target.value)} className="glass-input h-11" />
                    </div>
                    <div className="grid gap-2">
                         <Label htmlFor="specialty" className="text-white/70">Especialidade</Label>
                        <Select onValueChange={setNewCaseSpecialty}>
                            <SelectTrigger className="w-full h-11 glass-input">
                                <SelectValue placeholder="Selecione a especialidade" />
                            </SelectTrigger>
                            <SelectContent className="glass-pane">
                                <SelectItem value="Rinoplastia">Rinoplastia</SelectItem>
                                <SelectItem value="Mamoplastia">Mamoplastia</SelectItem>
                                <SelectItem value="Blefaroplastia">Blefaroplastia</SelectItem>
                                <SelectItem value="Lifting">Lifting</SelectItem>
                                <SelectItem value="Outros">Outros</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="imageUrl" className="text-white/70">URL da Imagem (Opcional)</Label>
                        <Input id="imageUrl" placeholder="https://..." value={newCaseImageUrl} onChange={e => setNewCaseImageUrl(e.target.value)} className="glass-input h-11" />
                    </div>
                </div>
                <DialogFooter>
                    <Button onClick={handleAddCase} className="h-12 w-full px-6 glass-button bg-cyan-400/20 hover:bg-cyan-400/30 text-cyan-300 text-base">
                        Enviar para Análise
                    </Button>
                </DialogFooter>
            </DialogContent>
           </Dialog>
        </div>
      </GlassCard>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {filteredCases.map(c => (
          <GlassCard key={c.id} interactive={true} className="p-0 overflow-hidden flex flex-col">
            <div className="relative h-48 w-full">
              <Image 
                src={c.imageUrl} 
                alt={c.title}
                fill
                objectFit="cover"
                className="opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                data-ai-hint={c.imageHint}
              />
              <div className="absolute top-4 right-4">
                <span className={`text-xs font-medium px-3 py-1 rounded-full border ${statusColors[c.status]}`}>
                  {c.status}
                </span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <p className="text-sm font-medium text-cyan-400 mb-1">{c.specialty}</p>
              <h3 className="text-lg font-medium text-white/90 flex-grow">{c.title}</h3>
              <p className="text-sm font-light text-white/50 mt-4">
                Enviado por: {c.submittedBy}
              </p>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
