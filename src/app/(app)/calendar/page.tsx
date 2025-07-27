import { GlassCard } from '@/components/shared/glass-card';

export default function CalendarPage() {
  return (
    <div>
      <h1 className="text-4xl font-light text-white/90 tracking-wider mb-8">Events Calendar</h1>
      <GlassCard>
        <p className="text-lg font-extralight text-white/70">
          The events calendar is being scheduled. Soon, you will find all upcoming meetings, workshops, and masterclasses here, complete with Zoom integration and participant details.
        </p>
      </GlassCard>
    </div>
  );
}
