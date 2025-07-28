
import { GlassCard } from '@/components/shared/glass-card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, FileCheck, BarChart3, Palette, Upload, PlusCircle, Video, BookOpen, Archive, Shield } from 'lucide-react';
import Link from 'next/link';

const managementSections = [
    {
        title: "Gerenciamento de Conteúdo",
        description: "Adicione, aprove e gerencie todo o conteúdo da plataforma.",
        icon: FileCheck,
        color: "text-cyan-400",
        actions: [
            { label: "Fila de Aprovação", href: "/admin/approval", count: 3, icon: FileCheck },
            { label: "Adicionar Novo Artigo", href: "/admin/content/new-article", icon: BookOpen },
            { label: "Submeter Novo Caso", href: "/admin/content/new-case", icon: PlusCircle },
            { label: "Upload de Aula Gravada", href: "/admin/content/new-class", icon: Video },
            { label: "Adicionar ao Acervo", href: "/admin/content/new-archive", icon: Archive },
        ]
    },
    {
        title: "Comunidade",
        description: "Gerencie membros, permissões e comunicações.",
        icon: Users,
        color: "text-purple-400",
        actions: [
            { label: "Gerenciar Membros", href: "/admin/members", count: 48, icon: Users },
        ]
    },
     {
        title: "Analytics",
        description: "Visualize métricas de engajamento e relatórios.",
        icon: BarChart3,
        color: "text-green-400",
        actions: [
            { label: "Ver Relatórios", href: "/admin/reports", icon: BarChart3 },
        ]
    },
    {
        title: "Customização",
        description: "Personalize a aparência da plataforma.",
        icon: Palette,
        color: "text-orange-400",
        actions: [
            { label: "Personalizar Aparência", href: "/admin/customize", icon: Palette },
        ]
    },
    {
        title: "Segurança e Backups",
        description: "Crie e restaure backups da plataforma.",
        icon: Shield,
        color: "text-yellow-400",
        actions: [
            { label: "Gerenciar Backups", href: "#", icon: Archive, disabled: true },
        ]
    }
];

export default function AdminPage() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {managementSections.map((section) => (
          <GlassCard key={section.title}>
            <div className="flex items-center gap-4 mb-4">
              <div className={`p-3 bg-white/10 rounded-xl border border-white/10 ${section.color}`}>
                <section.icon className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-medium text-white/95">{section.title}</h2>
                <p className="text-sm font-light text-white/60">{section.description}</p>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              {section.actions.map((action) => (
                <Link href={action.href} key={action.label} passHref>
                   <Button variant="outline" className="w-full justify-between h-12 glass-button bg-white/5 hover:bg-white/10" disabled={!!action.disabled}>
                     <div className="flex items-center gap-3">
                        <action.icon className="w-4 h-4 text-white/70" />
                        <span className="text-white/80">{action.label}</span>
                     </div>
                     {action.count !== undefined && (
                        <Badge variant="secondary" className="bg-cyan-400/20 text-cyan-300 border-cyan-400/30">{action.count}</Badge>
                     )}
                   </Button>
                </Link>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
