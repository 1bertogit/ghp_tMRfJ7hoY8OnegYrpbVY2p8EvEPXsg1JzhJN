import { GlassCard } from '@/components/shared/glass-card';

export default function AdminPage() {
  return (
    <div>
      <h1 className="text-4xl font-light text-white/90 tracking-wider mb-8">Painel Administrativo</h1>
      <GlassCard>
        <p className="text-lg font-extralight text-white/70">
          O painel administrativo está em construção. Esta área fornecerá ferramentas para gerenciamento de membros, aprovação de conteúdo, relatórios de análise e personalização da plataforma.
        </p>
      </GlassCard>
    </div>
  );
}
