
'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { GlassCard } from '@/components/shared/glass-card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { ArrowLeft, PlusCircle, Upload, X, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';
import { analyzeCase } from '@/ai/flows/analyze-case-flow';
import { AnalyzeCaseInput } from '@/ai/schemas/case-analysis';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Progress } from '@/components/ui/progress';
import { db, storage } from '@/lib/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';

// Helper function to convert file to data URI
function fileToDataUri(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default function NewCasePage() {
  const router = useRouter();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);

  const [newCaseTitle, setNewCaseTitle] = useState('');
  const [newCaseSpecialty, setNewCaseSpecialty] = useState('');
  const [newCaseFiles, setNewCaseFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useState(() => {
    const urls = newCaseFiles.map(file => URL.createObjectURL(file));
    setPreviewUrls(urls);
    return () => {
      urls.forEach(url => URL.revokeObjectURL(url));
    };
  }, [newCaseFiles]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setNewCaseFiles(prevFiles => [...prevFiles, ...Array.from(event.target.files!)]);
    }
  };

  const removeFile = (indexToRemove: number) => {
    setNewCaseFiles(prevFiles => prevFiles.filter((_, index) => index !== indexToRemove));
  };

  const handleAddCase = async () => {
    if (!newCaseTitle || !newCaseSpecialty) {
        toast({ variant: 'destructive', title: 'Campos Obrigatórios', description: 'Por favor, preencha o título e a especialidade.' });
        return;
    }

    setIsSubmitting(true);
    setUploadProgress(0);

    try {
      const uploadedImageUrls: string[] = [];
      if (newCaseFiles.length > 0) {
        const progresses = new Array(newCaseFiles.length).fill(0);
        const uploadPromises = newCaseFiles.map((file, index) => {
          return new Promise<string>((resolve, reject) => {
            const storageRef = ref(storage, `cases/${Date.now()}_${file.name}`);
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on('state_changed',
              (snapshot) => {
                progresses[index] = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                const totalProgress = progresses.reduce((acc, p) => acc + p, 0) / newCaseFiles.length;
                setUploadProgress(totalProgress);
              },
              (error) => { console.error("Upload failed:", error); reject(error); },
              async () => {
                const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                resolve(downloadURL);
              }
            );
          });
        });
        const urls = await Promise.all(uploadPromises);
        uploadedImageUrls.push(...urls);
      }

      const imageDataUris = await Promise.all(newCaseFiles.map(fileToDataUri));
      const analysisInput: AnalyzeCaseInput = {
        title: newCaseTitle,
        specialty: newCaseSpecialty,
        imageDataUris: imageDataUris.length > 0 ? imageDataUris : null,
      };
      const result = await analyzeCase(analysisInput);

      const newCaseData = {
        title: newCaseTitle,
        specialty: newCaseSpecialty,
        submittedBy: 'Dr. Robério', // Replace with actual user later
        status: 'Em Análise' as const,
        imageUrls: uploadedImageUrls,
        imageHint: 'new case',
        analysis: result.analysis,
        videoCount: 0,
        createdAt: serverTimestamp(),
      };
      
      await addDoc(collection(db, "cases"), newCaseData);
      toast({ title: 'Sucesso!', description: 'O novo caso clínico foi submetido e analisado pela IA.' });
      router.push('/cases');

    } catch (error) {
      console.error('Failed to add new case:', error);
      toast({ variant: 'destructive', title: 'Erro', description: 'Ocorreu um erro ao submeter o caso. Tente novamente.' });
    } finally {
      setIsSubmitting(false);
      setUploadProgress(null);
    }
  };

  return (
    <div className="w-full">
        <div className="mb-8">
            <Link href="/admin" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-4">
                <ArrowLeft className="w-4 h-4" />
                Voltar para o Painel Administrativo
            </Link>
        </div>
        <GlassCard>
            <h2 className="text-2xl font-light text-white/90 mb-2">Submeter Novo Caso Clínico</h2>
            <p className="text-sm font-extralight text-white/60 mb-8">
                Preencha os detalhes e anexe as imagens do caso. A análise por IA será gerada automaticamente.
            </p>
            <div className="grid gap-6 py-4 max-w-2xl mx-auto">
                <div className="grid gap-2">
                    <Label htmlFor="title" className="text-white/70">Título do Caso</Label>
                    <Input id="title" value={newCaseTitle} onChange={e => setNewCaseTitle(e.target.value)} className="glass-input h-11 text-white/80" />
                </div>
                <div className="grid gap-2">
                        <Label htmlFor="specialty" className="text-white/70">Especialidade</Label>
                    <Select onValueChange={setNewCaseSpecialty} value={newCaseSpecialty}>
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
                        type="file" multiple ref={fileInputRef} onChange={handleFileChange} 
                        className="hidden" accept="image/*"
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
                 <Button 
                    onClick={handleAddCase} 
                    className="h-12 w-full px-6 glass-button bg-cyan-400/20 hover:bg-cyan-400/30 text-cyan-300 text-base"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (uploadProgress !== null && uploadProgress < 100 ? 'Enviando Arquivos...' : 'Analisando com IA...') : 'Enviar para Análise'}
                </Button>
            </div>
        </GlassCard>
    </div>
  );
}
