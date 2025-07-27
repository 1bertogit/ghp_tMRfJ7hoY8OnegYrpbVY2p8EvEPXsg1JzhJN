import { GlassCard } from '@/components/shared/glass-card';

export default function LibraryPage() {
  return (
    <div>
      <h1 className="text-4xl font-light text-white/90 tracking-wider mb-8">Scientific Library</h1>
      <GlassCard>
        <p className="text-lg font-extralight text-white/70">
          The scientific library is being curated. It will feature high-impact journal articles with rich metadata, an inline PDF viewer, and a discussion system for collaborative learning.
        </p>
      </GlassCard>
    </div>
  );
}
