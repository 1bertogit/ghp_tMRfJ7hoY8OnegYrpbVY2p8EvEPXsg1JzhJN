import { GlassCard } from '@/components/shared/glass-card';

export default function LibraryPage() {
  return (
    <div>
      <h1 className="text-4xl font-light text-white/90 tracking-wider mb-8">Biblioteca Científica</h1>
      <GlassCard>
        <p className="text-lg font-extralight text-white/70">
          A biblioteca científica está sendo curada. Ela contará com artigos de revistas de alto impacto com metadados ricos, um visualizador de PDF embutido e um sistema de discussão para aprendizado colaborativo.
        </p>
      </GlassCard>
    </div>
  );
}
