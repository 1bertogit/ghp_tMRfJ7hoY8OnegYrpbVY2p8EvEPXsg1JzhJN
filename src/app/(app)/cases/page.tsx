
'use client';

import { useState, useRef, useEffect } from 'react';
import { GlassCard } from '@/components/shared/glass-card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Search, SlidersHorizontal, PlusCircle, Bot, MessageSquare, Bookmark, Share2, Image as ImageIcon, Video, Upload, X, PlayCircle } from 'lucide-react';
import Image from 'next/image';
import { analyzeCase } from '@/ai/flows/analyze-case-flow';
import { AnalyzeCaseInput } from '@/ai/schemas/case-analysis';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Progress } from '@/components/ui/progress';
import { storage } from '@/lib/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const initialMedicalCases = [
  {
    id: 1,
    title: 'Caso Complexo de Rinoplastia Revisional',
    specialty: 'Rinoplastia',
    submittedBy: 'Dr. Ana Couto',
    status: 'Em Análise',
    imageUrl: 'https://placehold.co/600x400',
    imageHint: 'surgery nose',
    analysis: null,
    imageCount: 3,
    videoCount: 1,
  },
  {
    id: 2,
    title: 'Mamoplastia de Aumento com Prótese de Silicone',
    specialty: 'Mamoplastia',
    submittedBy: 'Dr. Lucas Martins',
    status: 'Aprovado',
    imageUrl: 'https://placehold.co/600x400',
    imageHint: 'surgery breast',
    analysis: 'O planejamento pré-operatório foi excelente, com boa escolha do implante. A técnica de inserção dual-plane garantiu um resultado natural e simétrico. Recomendo atenção ao acompanhamento pós-operatório para monitorar a contratura capsular.',
    imageCount: 5,
    videoCount: 0,
  },
  {
    id: 3,
    title: 'Blefaroplastia Superior e Inferior',
    specialty: 'Blefaroplastia',
    submittedBy: 'Dr. Sofia Ferreira',
    status: 'Aprovado',
    imageUrl: 'https://placehold.co/600x400',
    imageHint: 'surgery eye',
    analysis: null,
    imageCount: 2,
    videoCount: 0,
  },
  {
    id: 4,
    title: 'Lifting Facial Completo (Ritidoplastia)',
    specialty: 'Lifting',
    submittedBy: 'Dr. Carlos Andrade',
    status: 'Em Análise',
    imageUrl: 'https://placehold.co/600x400',
    imageHint: 'surgery face',
    analysis: null,
    imageCount: 4,
    videoCount: 2,
  },
  {
    id: 5,
    title: 'Rinoplastia Estruturada Pós-Trauma',
    specialty: 'Rinoplastia',
    submittedBy: 'Dr. Gabriela Lima',
    status: 'Aprovado',
    imageUrl: 'https://placehold.co/600x400',
    imageHint: 'rhinoplasty surgery',
    analysis: 'Excelente reconstrução da estrutura nasal. O uso de enxertos cartilaginosos foi preciso e garantiu a funcionalidade respiratória. As proporções faciais foram respeitadas, resultando em um perfil harmonioso.',
    imageCount: 6,
    videoCount: 1,
  },
  {
    id: 6,
    title: 'Reconstrução Mamária Pós-Mastectomia',
    specialty: 'Mamoplastia',
    submittedBy: 'Dr. Pedro Almeida',
    status: 'Requer Revisão',
    imageUrl: 'https://placehold.co/600x400',
    imageHint: 'mastectomy reconstruction',
    analysis: 'A técnica de retalho DIEP foi bem executada, mas a simetrização com a mama contralateral pode ser aprimorada em um segundo tempo cirúrgico. Sugiro avaliação do complexo areolopapilar.',
    imageCount: 3,
    videoCount: 1,
  },
];

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

// Helper function to convert file to data URI
function fileToDataUri(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}


export default function CasesPage() {
  const [medicalCases, setMedicalCases] = useState(initialMedicalCases);
  const [searchTerm, setSearchTerm] = useState('');
  const [specialtyFilter, setSpecialtyFilter] = useState('all');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);

  // Form state for the new case
  const [newCaseTitle, setNewCaseTitle] = useState('');
  const [newCaseSpecialty, setNewCaseSpecialty] = useState('');
  const [newCaseFiles, setNewCaseFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Create preview URLs for selected files
    const urls = newCaseFiles.map(file => URL.createObjectURL(file));
    setPreviewUrls(urls);

    // Cleanup function to revoke URLs
    return () => {
      urls.forEach(url => URL.revokeObjectURL(url));
    };
  }, [newCaseFiles]);


  const filteredCases = medicalCases.filter(c => 
    c.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (specialtyFilter === 'all' || c.specialty === specialtyFilter)
  );
  
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setNewCaseFiles(prevFiles => [...prevFiles, ...Array.from(event.target.files!)]);
    }
  };

  const removeFile = (indexToRemove: number) => {
    setNewCaseFiles(prevFiles => prevFiles.filter((_, index) => index !== indexToRemove));
  };


  const handleAddCase = async () => {
    if (!newCaseTitle || !newCaseSpecialty) return;

    setIsSubmitting(true);
    setUploadProgress(0);

    try {
        const uploadedImageUrls: string[] = [];
        if (newCaseFiles.length > 0) {
            const uploadPromises = newCaseFiles.map(file => {
                return new Promise<string>((resolve, reject) => {
                    const storageRef = ref(storage, `cases/${Date.now()}_${file.name}`);
                    const uploadTask = uploadBytesResumable(storageRef, file);

                    uploadTask.on('state_changed',
                        (snapshot) => {
                            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                            // This is a simplified progress update. For multiple files, you'd average them.
                            setUploadProgress(progress);
                        },
                        (error) => {
                            console.error("Upload failed for file:", file.name, error);
                            reject(error);
                        },
                        async () => {
                            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                            resolve(downloadURL);
                        }
                    );
                });
            });
            const urls = await Promise.all(uploadPromises);
            uploadedImageUrls.push(...urls);
             setUploadProgress(100);
        }

        const imageDataUris = await Promise.all(newCaseFiles.map(fileToDataUri));

        const analysisInput: AnalyzeCaseInput = {
            title: newCaseTitle,
            specialty: newCaseSpecialty,
            imageDataUris: imageDataUris.length > 0 ? imageDataUris : null,
        };
        const result = await analyzeCase(analysisInput);

        const newCase = {
            id: medicalCases.length + 1,
            title: newCaseTitle,
            specialty: newCaseSpecialty,
            submittedBy: 'Dr. Robério',
            status: 'Em Análise' as const,
            imageUrl: uploadedImageUrls[0] || 'https://placehold.co/600x400',
            imageHint: 'new case',
            analysis: result.analysis,
            imageCount: uploadedImageUrls.length,
            videoCount: 0,
        };

        setMedicalCases([newCase, ...medicalCases]);

    } catch (error) {
        console.error('Failed to add new case:', error);
    } finally {
        setIsSubmitting(false);
        setUploadProgress(null);
        setNewCaseTitle('');
        setNewCaseSpecialty('');
        setNewCaseFiles([]);
        setPreviewUrls([]);
        setIsDialogOpen(false);
    }
};

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
           <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
               <Button className="h-12 w-full md:w-auto px-6 glass-button bg-cyan-400/20 hover:bg-cyan-400/30 text-cyan-300">
                <PlusCircle className="w-5 h-5 mr-2" />
                Novo Caso
              </Button>
            </DialogTrigger>
            <DialogContent className="glass-pane max-w-2xl">
                <DialogHeader>
                    <DialogTitle className="text-white/90 text-2xl font-light">Submeter Novo Caso Clínico</DialogTitle>
                    <DialogDescription className="text-white/50 font-extralight pt-1">
                        Preencha os detalhes e anexe as imagens do caso. A análise por IA será gerada automaticamente.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-6 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="title" className="text-white/70">Título do Caso</Label>
                        <Input id="title" value={newCaseTitle} onChange={e => setNewCaseTitle(e.target.value)} className="glass-input h-11 text-white/80" />
                    </div>
                    <div className="grid gap-2">
                         <Label htmlFor="specialty" className="text-white/70">Especialidade</Label>
                        <Select onValueChange={setNewCaseSpecialty}>
                            <SelectTrigger className="w-full h-11 glass-input text-white/80">
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
                        <Label className="text-white/70">Imagens do Caso</Label>
                        <Input 
                            type="file" 
                            multiple 
                            ref={fileInputRef} 
                            onChange={handleFileChange} 
                            className="hidden" 
                            accept="image/*"
                        />
                        {previewUrls.length > 0 ? (
                             <div className="p-4 bg-black/20 rounded-xl">
                                <Carousel>
                                    <CarouselContent>
                                        {previewUrls.map((url, index) => (
                                            <CarouselItem key={index} className="basis-1/2 lg:basis-1/3">
                                                <div className="relative group aspect-square">
                                                    <Image src={url} alt={`Preview ${index + 1}`} fill className="object-cover rounded-md" />
                                                    <button 
                                                        onClick={() => removeFile(index)} 
                                                        className="absolute top-1 right-1 bg-black/50 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                                                    >
                                                        <X className="w-3 h-3" />
                                                    </button>
                                                </div>
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    <CarouselPrevious className="ml-12" />
                                    <CarouselNext className="mr-12" />
                                </Carousel>
                                <Button 
                                    variant="outline"
                                    onClick={() => fileInputRef.current?.click()} 
                                    className="w-full mt-4 h-11 glass-button bg-white/5 hover:bg-white/10"
                                >
                                    <PlusCircle className="w-4 h-4 mr-2" />
                                    Adicionar mais imagens
                                </Button>
                             </div>
                        ) : (
                             <Button 
                                variant="outline"
                                onClick={() => fileInputRef.current?.click()} 
                                className="w-full h-24 border-dashed border-white/20 hover:border-white/40 hover:bg-white/5 transition-colors"
                            >
                                <div className="flex flex-col items-center justify-center gap-2 text-white/50">
                                    <Upload className="w-6 h-6" />
                                    <span className="text-sm">Clique para selecionar ou arraste as imagens</span>
                                </div>
                            </Button>
                        )}
                    </div>
                    {uploadProgress !== null && (
                      <div className="space-y-2">
                          <Label className="text-white/70">Progresso do Upload</Label>
                          <Progress value={uploadProgress} className="w-full h-2 bg-black/20 [&>div]:bg-cyan-400" />
                          <p className="text-xs text-white/50 text-right">{Math.round(uploadProgress)}%</p>
                      </div>
                    )}
                </div>
                <DialogFooter>
                    <Button 
                        onClick={handleAddCase} 
                        className="h-12 w-full px-6 glass-button bg-cyan-400/20 hover:bg-cyan-400/30 text-cyan-300 text-base"
                        disabled={isSubmitting || !newCaseTitle || !newCaseSpecialty}
                    >
                        {isSubmitting ? (uploadProgress !== null && uploadProgress < 100 ? 'Enviando Arquivos...' : 'Analisando com IA...') : 'Enviar para Análise'}
                    </Button>
                </DialogFooter>
            </DialogContent>
           </Dialog>
        </div>
      </GlassCard>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {filteredCases.map(c => (
          <Link href={`/cases/${c.id}`} key={c.id}>
            <GlassCard interactive={true} className="p-0 overflow-hidden flex flex-col group h-full">
              <div className="relative w-full overflow-hidden aspect-video">
                <Image 
                  src={c.imageUrl} 
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
                  {c.imageCount > 0 && (
                    <Badge variant="outline" className="glass-pane backdrop-blur-md">
                      <ImageIcon className="w-3 h-3 mr-1.5"/> {c.imageCount}
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
