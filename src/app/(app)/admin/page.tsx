import { GlassCard } from '@/components/shared/glass-card';

export default function AdminPage() {
  return (
    <div>
      <h1 className="text-4xl font-light text-white/90 tracking-wider mb-8">Admin Panel</h1>
      <GlassCard>
        <p className="text-lg font-extralight text-white/70">
          The admin panel is under construction. This area will provide tools for member management, content approval, analytics reports, and platform customization.
        </p>
      </GlassCard>
    </div>
  );
}
