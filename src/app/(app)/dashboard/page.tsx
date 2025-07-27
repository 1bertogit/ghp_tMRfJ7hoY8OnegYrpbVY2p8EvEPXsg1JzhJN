import { GlassCard } from '@/components/shared/glass-card';
import { Users, FileText, BookOpen } from 'lucide-react';

export default function DashboardPage() {
  const stats = [
    {
      title: 'Active Students',
      value: '48',
      icon: Users,
      color: 'text-cyan-400',
    },
    {
      title: 'Cases in Analysis',
      value: '12',
      icon: FileText,
      color: 'text-purple-400',
    },
    {
      title: 'Published Articles',
      value: '6',
      icon: BookOpen,
      color: 'text-blue-400',
    },
  ];

  return (
    <div className="w-full">
      <header className="mb-8">
        <h1 className="text-4xl font-light text-white/90 tracking-wider">
          Good evening, Dr. Robério
        </h1>
        <p className="text-lg font-extralight text-white/50 mt-1">
          Here is your summary for today.
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
            <h2 className="text-2xl font-light text-white/90 mb-4">Recent Activity</h2>
            <p className="text-md font-extralight text-white/50">Activity feed coming soon...</p>
        </GlassCard>
      </div>
    </div>
  );
}
