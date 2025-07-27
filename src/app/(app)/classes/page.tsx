import { GlassCard } from '@/components/shared/glass-card';

export default function ClassesPage() {
  return (
    <div>
      <h1 className="text-4xl font-light text-white/90 tracking-wider mb-8">Recorded Classes</h1>
      <GlassCard>
        <p className="text-lg font-extralight text-white/70">
          The recorded classes library is being prepared. It will host a collection of complete classes from Vimeo, organized by specialty with ratings, views, and durations.
        </p>
      </GlassCard>
    </div>
  );
}
