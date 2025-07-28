
'use client';

import { useState, useRef } from 'react';
import { GlassCard } from '@/components/shared/glass-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Upload, Image as ImageIcon, Waypoints, ArrowLeft } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';
import Image from 'next/image';

export default function CustomizePage() {
  const [platformLogoPreview, setPlatformLogoPreview] = useState<string | null>(null);
  const [platformLogoFile, setPlatformLogoFile] = useState<File | null>(null);
  const platformFileInputRef = useRef<HTMLInputElement>(null);
  
  const [loginLogoPreview, setLoginLogoPreview] = useState<string | null>(null);
  const [loginLogoFile, setLoginLogoFile] = useState<File | null>(null);
  const loginFileInputRef = useRef<HTMLInputElement>(null);
  
  const { toast } = useToast();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, type: 'platform' | 'login') => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (type === 'platform') {
          setPlatformLogoFile(file);
          setPlatformLogoPreview(reader.result as string);
        } else {
          setLoginLogoFile(file);
          setLoginLogoPreview(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = (type: 'platform' | 'login') => {
    const file = type === 'platform' ? platformLogoFile : loginLogoFile;
    const logoName = type === 'platform' ? 'da plataforma' : 'da tela de login';

    if (!file) {
      toast({
        variant: 'destructive',
        title: 'Nenhuma alteração para salvar',
        description: `Por favor, selecione uma nova imagem para a logo ${logoName}.`,
      });
      return;
    }
    
    // Em uma aplicação real, aqui você faria o upload do 'file' para o storage
    // e atualizaria a URL da logo no seu banco de dados ou configuração.
    
    console.log(`Salvando nova logo ${logoName}:`, file.name);
    
    toast({
      title: 'Alterações Salvas!',
      description: `A nova logomarca ${logoName} foi atualizada com sucesso.`,
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
        
        <div className="space-y-10 max-w-2xl">
            {/* Seção da Logo da Plataforma (Sidebar) */}
            <div className="space-y-6 pb-6 border-b border-white/10">
                <h3 className="text-lg font-medium text-white/80">Logomarca da Plataforma (Sidebar)</h3>
                <div>
                    <Label className="text-white/70">Logomarca Atual</Label>
                    <div className="mt-2 p-4 rounded-2xl bg-white/5 flex items-center gap-4">
                        <div className="p-2 bg-white/10 rounded-lg border border-white/10">
                             <Image src="https://firebasestorage.googleapis.com/v0/b/visioncare-mentorship.appspot.com/o/logo.png?alt=media&token=362a6353-2292-424a-85c3-636c1e3458ae" alt="Legacy Mentoring Logo" width={24} height={24} />
                        </div>
                        <span className="text-xl font-medium text-white/95">Legacy Mentoring</span>
                    </div>
                </div>

                <div>
                    <Label htmlFor="platform-logo-upload" className="text-white/70">Nova Logomarca</Label>
                    <div className="mt-2 flex items-center gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                            {platformLogoPreview ? (
                                <img src={platformLogoPreview} alt="Pré-visualização da logo" className="object-contain h-10 w-10" />
                            ) : (
                                <ImageIcon className="w-6 h-6 text-white/30" />
                            )}
                        </div>
                        <Input 
                            id="platform-logo-upload"
                            type="file"
                            ref={platformFileInputRef}
                            onChange={(e) => handleFileChange(e, 'platform')}
                            className="hidden"
                            accept="image/png, image/jpeg, image/svg+xml"
                        />
                        <Button 
                            variant="outline" 
                            className="glass-button"
                            onClick={() => platformFileInputRef.current?.click()}
                        >
                            <Upload className="w-4 h-4 mr-2" />
                            Carregar Imagem
                        </Button>
                    </div>
                    <p className="text-xs text-white/50 mt-2">Recomendado: SVG ou PNG (24x24px). Máximo: 1MB.</p>
                </div>
                 <Button 
                    className="h-11 px-6 glass-button bg-cyan-400/20 hover:bg-cyan-400/30 text-cyan-300"
                    onClick={() => handleSaveChanges('platform')}
                >
                    Salvar Logo da Plataforma
                </Button>
            </div>

            {/* Seção da Logo da Tela de Login */}
            <div className="space-y-6">
                <h3 className="text-lg font-medium text-white/80">Logomarca da Tela de Login</h3>
                <div>
                    <Label className="text-white/70">Logomarca Atual</Label>
                    <div className="mt-2 p-4 rounded-2xl bg-white/5 flex items-center justify-center">
                        <Image src="https://firebasestorage.googleapis.com/v0/b/visioncare-mentorship.appspot.com/o/logo.png?alt=media&token=362a6353-2292-424a-85c3-636c1e3458ae" alt="Legacy Mentoring Logo" width={80} height={80} />
                    </div>
                </div>

                <div>
                    <Label htmlFor="login-logo-upload" className="text-white/70">Nova Logomarca</Label>
                    <div className="mt-2 flex items-center gap-4">
                        <div className="w-24 h-24 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                            {loginLogoPreview ? (
                                <img src={loginLogoPreview} alt="Pré-visualização da logo de login" className="object-contain h-20 w-20" />
                            ) : (
                                <ImageIcon className="w-8 h-8 text-white/30" />
                            )}
                        </div>
                        <Input 
                            id="login-logo-upload"
                            type="file"
                            ref={loginFileInputRef}
                            onChange={(e) => handleFileChange(e, 'login')}
                            className="hidden"
                            accept="image/png, image/jpeg, image/svg+xml"
                        />
                        <Button 
                            variant="outline" 
                            className="glass-button"
                            onClick={() => loginFileInputRef.current?.click()}
                        >
                            <Upload className="w-4 h-4 mr-2" />
                            Carregar Imagem
                        </Button>
                    </div>
                    <p className="text-xs text-white/50 mt-2">Recomendado: SVG ou PNG (80x80px). Máximo: 2MB.</p>
                </div>
                <Button 
                    className="h-11 px-6 glass-button bg-cyan-400/20 hover:bg-cyan-400/30 text-cyan-300"
                    onClick={() => handleSaveChanges('login')}
                >
                    Salvar Logo de Login
                </Button>
            </div>
        </div>
      </GlassCard>
    </div>
  );
}
