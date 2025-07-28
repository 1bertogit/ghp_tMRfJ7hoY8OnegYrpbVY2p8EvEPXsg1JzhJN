
'use client';

import { GlassCard } from '@/components/shared/glass-card';
import { ArrowLeft, BarChart3 } from 'lucide-react';
import Link from 'next/link';

export default function ReportsPage() {
  return (
    <div className="w-full">
      <div className="mb-8">
        <Link href="/admin" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-4">
            <ArrowLeft className="w-4 h-4" />
            Voltar para o Painel Administrativo
        </Link>
      </div>
      <GlassCard>
        <div className="text-center py-20">
            <BarChart3 className="w-16 h-16 mx-auto text-white/20 mb-6" />
            <h2 className="text-3xl font-light text-white/90 mb-2">Relatórios e Analytics</h2>
            <p className="text-lg font-extralight text-white/60 mb-8">
                Esta funcionalidade estará disponível em breve.
            </p>
            <p className="text-sm text-white/50 max-w-lg mx-auto">
                Em breve, você poderá visualizar métricas de engajamento da plataforma, como os casos mais discutidos, os artigos mais lidos e a atividade dos membros.
            </p>
        </div>
      </GlassCard>
    </div>
  );
}
