
'use client';

import { useState, useRef } from 'react';
import { GlassCard } from '@/components/shared/glass-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Upload, Image as ImageIcon, Waypoints } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function CustomizePage() {
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setLogoFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = () => {
    if (!logoFile) {
      toast({
        variant: 'destructive',
        title: 'Nenhuma alteração para salvar',
        description: 'Por favor, selecione uma nova imagem para a logo.',
      });
      return;
    }
    
    // Em uma aplicação real, aqui você faria o upload do 'logoFile' para o storage
    // e atualizaria a URL da logo no seu banco de dados ou configuração.
    
    console.log('Salvando nova logo:', logoFile.name);
    
    toast({
      title: 'Alterações Salvas!',
      description: 'A nova logomarca foi atualizada com sucesso.',
    });
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
        <h2 className="text-2xl font-light text-white/90 mb-2">Customização da Plataforma</h2>
        <p className="text-sm font-extralight text-white/60 mb-8">
          Altere a identidade visual da plataforma para alinhá-la à sua marca.
        </p>
        
        <div className="space-y-6 max-w-2xl">
            <div>
                <Label className="text-white/70">Logomarca Atual</Label>
                <div className="mt-2 p-4 rounded-2xl bg-white/5 flex items-center gap-4">
                    <div className="p-3 bg-white/10 rounded-lg border border-white/10">
                         <Waypoints className="w-8 h-8 text-white/80" />
                    </div>
                    <span className="text-2xl font-medium text-white/95">VisionCare</span>
                </div>
            </div>

            <div>
                <Label htmlFor="logo-upload" className="text-white/70">Nova Logomarca</Label>
                <div className="mt-2 flex items-center gap-4">
                    <div className="w-24 h-24 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                        {logoPreview ? (
                            <img src={logoPreview} alt="Pré-visualização da logo" className="object-contain h-16 w-16" />
                        ) : (
                            <ImageIcon className="w-8 h-8 text-white/30" />
                        )}
                    </div>
                    <Input 
                        id="logo-upload"
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        className="hidden"
                        accept="image/png, image/jpeg, image/svg+xml"
                    />
                    <Button 
                        variant="outline" 
                        className="glass-button"
                        onClick={() => fileInputRef.current?.click()}
                    >
                        <Upload className="w-4 h-4 mr-2" />
                        Carregar Imagem
                    </Button>
                </div>
                <p className="text-xs text-white/50 mt-2">Recomendado: SVG, PNG ou JPG. Tamanho máximo: 2MB.</p>
            </div>
            
            <div className="pt-6 border-t border-white/10">
                 <Button 
                    className="h-11 px-6 glass-button bg-cyan-400/20 hover:bg-cyan-400/30 text-cyan-300"
                    onClick={handleSaveChanges}
                >
                    Salvar Alterações
                </Button>
            </div>
        </div>
      </GlassCard>
    </div>
  );
}
