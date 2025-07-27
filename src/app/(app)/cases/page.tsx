import { GlassCard } from '@/components/shared/glass-card';

export default function CasesPage() {
  return (
    <div>
      <h1 className="text-4xl font-light text-white/90 tracking-wider mb-8">Medical Cases</h1>
      <GlassCard>
        <p className="text-lg font-extralight text-white/70">
          The medical cases system is under development. Here, mentors will be able to review, comment on, and approve cases submitted by students across various specialties.
        </p>
      </GlassCard>
    </div>
  );
}
