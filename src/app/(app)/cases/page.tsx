import { GlassCard } from '@/components/shared/glass-card';

export default function CasesPage() {
  return (
    <div>
      <h1 className="text-4xl font-light text-white/90 tracking-wider mb-8">Casos Médicos</h1>
      <GlassCard>
        <p className="text-lg font-extralight text-white/70">
          O sistema de casos médicos está em desenvolvimento. Aqui, os mentores poderão revisar, comentar e aprovar casos enviados por alunos de diversas especialidades.
        </p>
      </GlassCard>
    </div>
  );
}
