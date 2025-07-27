import { GlassCard } from '@/components/shared/glass-card';

export default function ClassesPage() {
  return (
    <div>
      <h1 className="text-4xl font-light text-white/90 tracking-wider mb-8">Aulas Gravadas</h1>
      <GlassCard>
        <p className="text-lg font-extralight text-white/70">
          A biblioteca de aulas gravadas está sendo preparada. Ela abrigará uma coleção de aulas completas do Vimeo, organizadas por especialidade com classificações, visualizações e durações.
        </p>
      </GlassCard>
    </div>
  );
}
