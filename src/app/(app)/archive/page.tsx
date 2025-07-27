import { GlassCard } from '@/components/shared/glass-card';

export default function ArchivePage() {
  return (
    <div>
      <h1 className="text-4xl font-light text-white/90 tracking-wider mb-8">Arquivo Histórico</h1>
      <GlassCard>
        <p className="text-lg font-extralight text-white/70">
          O arquivo histórico está sendo populado. Esta seção preservará discussões e conteúdos valiosos de masterclasses, casos raros e workshops passados.
        </p>
      </GlassCard>
    </div>
  );
}
