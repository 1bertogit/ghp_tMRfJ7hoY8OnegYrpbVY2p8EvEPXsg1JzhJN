import { GlassCard } from '@/components/shared/glass-card';

export default function CalendarPage() {
  return (
    <div>
      <h1 className="text-4xl font-light text-white/90 tracking-wider mb-8">Calendário de Eventos</h1>
      <GlassCard>
        <p className="text-lg font-extralight text-white/70">
          O calendário de eventos está sendo agendado. Em breve, você encontrará todas as próximas reuniões, workshops e masterclasses aqui, com integração Zoom e detalhes dos participantes.
        </p>
      </GlassCard>
    </div>
  );
}
