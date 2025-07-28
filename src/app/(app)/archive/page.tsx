
'use client';

import { useState, useRef } from 'react';
import { GlassCard } from '@/components/shared/glass-card';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { FileText, Scissors, Bandage, Beaker, BrainCircuit, Droplets, Smartphone, BookCopy, Megaphone, Filter, X, PlusCircle, Upload, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';
import { initialArchiveItems, filterGroups, archiveCategories as categories } from '@/lib/mock-data/archive';

const categoryStyles: { [key: string]: { icon: React.ElementType, color: string } } = {
    'Discussões de Casos': { icon: FileText, color: 'text-cyan-400' },
    'Técnicas Cirúrgicas': { icon: Scissors, color: 'text-purple-400' },
    'Pós-Operatório': { icon: Bandage, color: 'text-green-400' },
    'Instrumentais': { icon: Beaker, color: 'text-orange-400' },
    'Filosofia Cirúrgica': { icon: BrainCircuit, color: 'text-indigo-400' },
    'Lipoenxertia': { icon: Droplets, color: 'text-pink-400' },
    'Marketing Médico': { icon: Smartphone, color: 'text-yellow-400' },
    'Literatura': { icon: BookCopy, color: 'text-blue-400' },
    'Comunicados': { icon: Megaphone, color: 'text-red-400' },
};

export default function ArchivePage() {
  const [archiveItems, setArchiveItems] = useState(initialArchiveItems);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  // Form state
  const [newItemTitle, setNewItemTitle] = useState('');
  const [newItemCategory, setNewItemCategory] = useState('');
  const [newItemDescription, setNewItemDescription] = useState('');
  const [newItemLink, setNewItemLink] = useState('');
  const [newItemFiles, setNewItemFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);


  const handleFilterChange = (filter: string, checked: boolean | 'indeterminate') => {
    setActiveFilters(prev => {
      if (checked) {
        return [...prev, filter];
      } else {
        return prev.filter(f => f !== filter);
      }
    });
  };
  
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setNewItemFiles(prevFiles => [...prevFiles, ...Array.from(event.target.files!)]);
    }
  };

  const handleAddItem = () => {
    if (!newItemTitle || !newItemCategory) return;
    
    const newEntry = {
      id: archiveItems.length + 1,
      title: newItemTitle,
      category: newItemCategory,
      source: `Admin - ${newItemLink ? 'Link' : 'Upload'}`,
      tags: [newItemCategory, ...(newItemLink ? ['Link'] : []), ...(newItemFiles.length > 0 ? ['Anexo'] : [])],
      description: newItemDescription,
      views: 0,
      createdAt: new Date().toISOString(),
    };

    setArchiveItems([newEntry, ...archiveItems]);
    
    // Reset form and close dialog
    setIsDialogOpen(false);
    setNewItemTitle('');
    setNewItemCategory('');
    setNewItemDescription('');
    setNewItemLink('');
    setNewItemFiles([]);
  };

  const filteredItems = archiveItems.filter(item => {
    if (activeFilters.length === 0) return true;
    return activeFilters.every(filter => item.tags.includes(filter));
  });

  return (
    <div className="w-full">
      <GlassCard className="mb-8 p-4">
        <div className="flex flex-wrap items-center gap-3">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" className="glass-button bg-white/5 hover:bg-white/10 h-10 px-5">
                        <Filter className="w-4 h-4 mr-2" />
                        Filtros
                    </Button>
                </SheetTrigger>
                <SheetContent className="glass-pane w-[350px] sm:w-[400px]">
                    <SheetHeader className="mb-6">
                        <SheetTitle className="text-white/90 text-2xl font-light">Filtros Avançados</SheetTitle>
                    </SheetHeader>
                    <Accordion type="multiple" defaultValue={['Procedimento']} className="w-full">
                        {Object.entries(filterGroups).map(([groupName, tags]) => (
                            <AccordionItem value={groupName} key={groupName}>
                                <AccordionTrigger className="text-white/80 hover:text-white">{groupName}</AccordionTrigger>
                                <AccordionContent>
                                    <div className="space-y-3 pl-2">
                                        {tags.map(tag => (
                                            <div key={tag} className="flex items-center space-x-2">
                                                <Checkbox
                                                    id={tag}
                                                    checked={activeFilters.includes(tag)}
                                                    onCheckedChange={(checked) => handleFilterChange(tag, checked)}
                                                    className="border-white/30 data-[state=checked]:bg-cyan-400 data-[state=checked]:border-cyan-400"
                                                />
                                                <Label htmlFor={tag} className="text-white/70 font-light cursor-pointer">{tag}</Label>
                                            </div>
                                        ))}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                     {activeFilters.length > 0 && (
                        <div className="mt-6 pt-4 border-t border-white/10">
                            <Button variant="link" onClick={() => setActiveFilters([])} className="text-sm text-white/60 hover:text-white w-full">
                                Limpar todos os filtros
                            </Button>
                        </div>
                    )}
                </SheetContent>
            </Sheet>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="h-10 px-5 glass-button bg-cyan-400/20 hover:bg-cyan-400/30 text-cyan-300">
                  <PlusCircle className="w-4 h-4 mr-2" />
                  Adicionar ao Acervo
                </Button>
              </DialogTrigger>
              <DialogContent className="glass-pane max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-white/90 text-2xl font-light">Adicionar ao Acervo Histórico</DialogTitle>
                  <DialogDescription className="text-white/50 font-extralight pt-1">
                    Cadastre uma nova fonte de conhecimento, como discussões, links ou arquivos.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4 max-h-[60vh] overflow-y-auto pr-2">
                  <div className="grid gap-2">
                    <Label htmlFor="title" className="text-white/70">Título</Label>
                    <Input id="title" value={newItemTitle} onChange={e => setNewItemTitle(e.target.value)} className="glass-input h-11 text-white/80" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="category" className="text-white/70">Categoria</Label>
                    <Select onValueChange={setNewItemCategory}>
                      <SelectTrigger className="w-full h-11 glass-input text-white/80">
                        <SelectValue placeholder="Selecione a categoria" />
                      </SelectTrigger>
                      <SelectContent className="glass-pane">
                        {categories.map(cat => <SelectItem key={cat} value={cat}>{cat}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="description" className="text-white/70">Descrição / O que foi discutido? (Suporta Markdown)</Label>
                    <Textarea id="description" value={newItemDescription} onChange={e => setNewItemDescription(e.target.value)} className="glass-input text-white/80 min-h-[100px]" />
                  </div>
                   <div className="grid gap-2">
                    <Label htmlFor="link" className="text-white/70">Link Externo (Opcional)</Label>
                    <div className="relative">
                        <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                        <Input id="link" value={newItemLink} onChange={e => setNewItemLink(e.target.value)} className="glass-input h-11 pl-9 text-white/80" placeholder="https://..." />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label className="text-white/70">Anexar Arquivos (Opcional)</Label>
                    <Input id="file-upload" type="file" multiple ref={fileInputRef} onChange={handleFileChange} className="hidden" />
                     <Button asChild variant="outline" className="w-full h-24 border-dashed border-white/20 hover:border-white/40 hover:bg-white/5 transition-colors cursor-pointer">
                        <label htmlFor="file-upload">
                          <div className="flex flex-col items-center justify-center gap-2 text-white/50">
                            {newItemFiles.length > 0 ? (
                              <span className="text-sm text-white/80">{newItemFiles.length} arquivo(s) selecionado(s)</span>
                            ) : (
                              <>
                                <Upload className="w-6 h-6" />
                                <span className="text-sm">Clique para selecionar ou arraste os arquivos</span>
                              </>
                            )}
                          </div>
                        </label>
                      </Button>
                  </div>
                </div>
                <DialogFooter>
                  <Button onClick={handleAddItem} className="h-12 w-full px-6 glass-button bg-cyan-400/20 hover:bg-cyan-400/30 text-cyan-300 text-base">
                    Salvar Item no Acervo
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

             {activeFilters.map(filter => (
                <div key={filter} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-400/20 text-cyan-300 text-sm">
                    <span>{filter}</span>
                    <button onClick={() => handleFilterChange(filter, false)} className="text-cyan-300/70 hover:text-cyan-300">
                        <X size={14} />
                    </button>
                </div>
            ))}
        </div>
      </GlassCard>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.length > 0 ? filteredItems.map(item => {
            const style = categoryStyles[item.category as keyof typeof categoryStyles] || categoryStyles['Discussões de Casos'];
            const Icon = style.icon;
            return (
                <Link key={item.id} href={`/archive/${item.id}`} passHref>
                    <GlassCard interactive={true} className="h-full">
                        <div className="flex flex-col h-full">
                            <div className="flex items-start gap-4 mb-4">
                                <div className={`p-2 rounded-lg bg-white/10 border border-white/10 ${style.color}`}>
                                    <Icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className={`text-sm font-medium ${style.color}`}>{item.category}</p>
                                    <h3 className="text-base font-medium text-white/90 mt-1">{item.title}</h3>
                                </div>
                            </div>
                             <div className="flex flex-wrap gap-2 my-4">
                                {item.tags.map(tag => (
                                    <span key={tag} className="px-2 py-1 text-xs rounded-full bg-white/5 text-white/70 border border-white/10">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="mt-auto">
                                <p className="text-xs font-light text-white/50">
                                    Fonte: {item.source}
                                </p>
                            </div>
                        </div>
                    </GlassCard>
                </Link>
            )
        }) : (
             <div className="col-span-full">
                <GlassCard className="text-center py-16">
                    <p className="text-lg text-white/70">Nenhum item encontrado com os filtros selecionados.</p>
                    <p className="text-sm text-white/50 mt-2">Tente remover alguns filtros para ver mais resultados.</p>
                </GlassCard>
            </div>
        )}
      </div>
    </div>
  );
}
