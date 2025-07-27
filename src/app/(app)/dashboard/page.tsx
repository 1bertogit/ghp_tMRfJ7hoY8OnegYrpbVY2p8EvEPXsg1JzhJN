import { GlassCard } from '@/components/shared/glass-card';
import { Users, FileText, BookOpen, MessageSquare, ArrowRight } from 'lucide-react';

export default function DashboardPage() {
  const stats = [
    {
      title: 'Alunos Ativos',
      value: '48',
      icon: Users,
      color: 'text-cyan-400',
    },
    {
      title: 'Casos em Análise',
      value: '12',
      icon: FileText,
      color: 'text-purple-400',
    },
    {
      title: 'Artigos Publicados',
      value: '6',
      icon: BookOpen,
      color: 'text-blue-400',
    },
  ];

  const recentActivities = [
    {
        icon: FileText,
        description: 'Novo caso de Rinoplastia enviado por Dr. Ana Couto.',
        time: '2 horas atrás',
        color: 'text-purple-400'
    },
    {
        icon: BookOpen,
        description: 'Novo artigo sobre "Técnicas Avançadas de Lifting" adicionado à biblioteca.',
        time: 'Ontem',
        color: 'text-blue-400'
    },
    {
        icon: MessageSquare,
        description: 'Dr. Ricardo comentou no caso de Blefaroplastia #32.',
        time: '3 dias atrás',
        color: 'text-cyan-400'
    },
  ];

  return (
    <div className="w-full">
      <header className="mb-8">
        <h1 className="text-4xl font-light text-white/90 tracking-wider">
          Boa noite, Dr. Robério
        </h1>
        <p className="text-lg font-extralight text-white/50 mt-1">
          Aqui está o seu resumo de hoje.
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stats.map((stat) => (
          <GlassCard key={stat.title} interactive={true}>
            <div className="flex items-center space-x-4">
              <div className={`p-3 rounded-full bg-white/10 ${stat.color}`}>
                <stat.icon className="w-8 h-8" />
              </div>
              <div>
                <p className="text-sm font-light text-white/70">{stat.title}</p>
                <p className="text-4xl font-medium text-white">{stat.value}</p>
              </div>
            </div>
          </GlassCard>
        ))}
        <GlassCard className="lg:col-span-3" interactive={false}>
            <h2 className="text-2xl font-light text-white/90 mb-6">Atividade Recente</h2>
            <div className="space-y-6">
                {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start gap-4 group">
                        <div className={`mt-1 p-2 bg-white/5 rounded-full border border-white/10 ${activity.color}`}>
                            <activity.icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                            <p className="text-base font-light text-white/80">{activity.description}</p>
                            <p className="text-sm font-extralight text-white/50">{activity.time}</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-white/30 self-center transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white/60" />
                    </div>
                ))}
            </div>
        </GlassCard>
      </div>
    </div>
  );
}
