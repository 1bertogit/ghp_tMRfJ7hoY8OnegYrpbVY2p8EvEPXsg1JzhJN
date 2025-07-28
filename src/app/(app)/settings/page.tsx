
'use client';

import { GlassCard } from '@/components/shared/glass-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Camera, Mail, Bell, Palette, Shield, Star, LogOut } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function SettingsPage() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Coluna Esquerda - Configurações Principais */}
        <div className="lg:col-span-2 space-y-8">
            {/* Perfil */}
            <GlassCard>
                <h2 className="text-2xl font-light text-white/90 mb-6 flex items-center gap-3">
                    <Mail className="w-6 h-6 text-cyan-400"/>
                    Perfil e Conta
                </h2>
                <div className="space-y-6">
                    <div className="flex items-center gap-6">
                        <div className="relative">
                            <Avatar className="w-20 h-20">
                                <AvatarImage src="https://placehold.co/80x80" alt="Dr. Robério" data-ai-hint="doctor portrait"/>
                                <AvatarFallback>R</AvatarFallback>
                            </Avatar>
                            <Button size="icon" className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full glass-button bg-white/10">
                                <Camera className="w-4 h-4"/>
                            </Button>
                        </div>
                         <div className="flex-1">
                            <Label htmlFor="name" className="text-white/70">Nome Completo</Label>
                            <Input id="name" defaultValue="Dr. Robério" className="glass-input h-11 text-base mt-2"/>
                        </div>
                    </div>
                    <div>
                        <Label htmlFor="email" className="text-white/70">Endereço de E-mail</Label>
                        <Input id="email" type="email" defaultValue="dr.roberio@visioncare.com" className="glass-input h-11 text-base mt-2"/>
                    </div>
                    <Button className="h-11 px-6 glass-button bg-cyan-400/20 hover:bg-cyan-400/30 text-cyan-300">
                        Salvar Alterações
                    </Button>
                </div>
            </GlassCard>

             {/* Notificações */}
            <GlassCard>
                <h2 className="text-2xl font-light text-white/90 mb-6 flex items-center gap-3">
                    <Bell className="w-6 h-6 text-purple-400"/>
                    Preferências de Notificação
                </h2>
                <div className="space-y-5">
                    <div className="flex items-center justify-between">
                        <Label htmlFor="new-case-notif" className="text-white/80 font-light">Novo caso clínico submetido</Label>
                        <Switch id="new-case-notif" defaultChecked/>
                    </div>
                    <div className="flex items-center justify-between">
                        <Label htmlFor="new-comment-notif" className="text-white/80 font-light">Novo comentário em uma discussão que participo</Label>
                        <Switch id="new-comment-notif" defaultChecked/>
                    </div>
                    <div className="flex items-center justify-between">
                        <Label htmlFor="new-class-notif" className="text-white/80 font-light">Nova aula ou masterclass disponível</Label>
                        <Switch id="new-class-notif" defaultChecked/>
                    </div>
                     <div className="flex items-center justify-between">
                        <Label htmlFor="event-reminder-notif" className="text-white/80 font-light">Lembretes de eventos do calendário</Label>
                        <Switch id="event-reminder-notif" />
                    </div>
                </div>
            </GlassCard>
        </div>

        {/* Coluna Direita - Ações e Informações */}
        <div className="lg:col-span-1 space-y-8">
            <GlassCard>
                 <h2 className="text-2xl font-light text-white/90 mb-6 flex items-center gap-3">
                    <Palette className="w-6 h-6 text-orange-400"/>
                    Aparência
                </h2>
                 <div className="space-y-5">
                    <div className="flex items-center justify-between">
                        <Label htmlFor="dark-mode" className="text-white/80 font-light">Modo Escuro</Label>
                        <Switch id="dark-mode" defaultChecked disabled/>
                    </div>
                    <p className="text-xs text-white/50 text-center pt-2">Mais opções de tema em breve.</p>
                 </div>
            </GlassCard>

             <GlassCard>
                 <h2 className="text-2xl font-light text-white/90 mb-6 flex items-center gap-3">
                    <Shield className="w-6 h-6 text-green-400"/>
                    Segurança
                </h2>
                <Button variant="outline" className="w-full h-11 glass-button">
                    Alterar Senha
                </Button>
            </GlassCard>

            <GlassCard>
                 <h2 className="text-2xl font-light text-white/90 mb-6 flex items-center gap-3">
                    <Star className="w-6 h-6 text-yellow-400"/>
                    Assinatura
                </h2>
                <div className="text-center space-y-2">
                    <p className="text-white/80">Você está no plano <span className="font-semibold text-cyan-300">Mentor Pro</span>.</p>
                    <p className="text-sm text-white/60">Sua assinatura está ativa.</p>
                </div>
                 <Button variant="outline" className="w-full h-11 glass-button mt-4">
                    Gerenciar Assinatura
                </Button>
            </GlassCard>
            
            <Button variant="destructive" className="w-full h-12 text-base bg-red-500/20 hover:bg-red-500/30 text-red-300 border border-red-500/30">
                <LogOut className="w-5 h-5 mr-2"/>
                Sair da Plataforma
            </Button>
        </div>

      </div>
    </div>
  );
}
