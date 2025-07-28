
'use client';

import { GlassCard } from '@/components/shared/glass-card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, MessageSquare, User, CheckCircle, FileText, Bot, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

// Mock data, to be replaced with real data fetching
const caseDetails = {
    id: 1,
    title: 'Caso Complexo de Rinoplastia Revisional',
    submittedBy: 'Dr. Ana Couto',
    submittedAt: '2024-07-28T10:00:00Z',
    specialty: 'Rinoplastia',
    status: 'Aprovado',
    analysis: 'O planejamento pré-operatório foi excelente, com boa escolha do implante. A técnica de inserção dual-plane garantiu um resultado natural e simétrico. Recomendo atenção ao acompanhamento pós-operatório para monitorar a contratura capsular.',
};

const timelineEvents = [
    { type: 'submission', user: 'Dr. Ana Couto', timestamp: '2024-07-28T10:00:00Z', description: 'enviou o caso para análise.' },
    { type: 'analysis', user: 'Dr. Genkit', timestamp: '2024-07-28T10:05:00Z', description: 'concluiu a análise inicial.' },
    { type: 'comment', user: 'Dr. Lucas Martins', timestamp: '2024-07-28T14:30:00Z', description: 'comentou: "Excelente caso. A abordagem com enxerto de costela parece a mais indicada. Qual a sua opinião sobre o uso de fáscia temporal?"' },
    { type: 'comment', user: 'Dr. Sofia Ferreira', timestamp: '2024-07-29T09:15:00Z', description: 'comentou: "Concordo com o Dr. Lucas. A fáscia temporal pode ser uma ótima opção para camuflagem e refinamento da ponta nasal."' },
    { type: 'approval', user: 'Admin', timestamp: '2024-07-29T18:00:00Z', description: 'aprovou o caso para o acervo.' },
];

const getIconForEvent = (type: string) => {
    switch (type) {
        case 'submission': return <FileText className="w-5 h-5 text-cyan-400" />;
        case 'analysis': return <Bot className="w-5 h-5 text-purple-400" />;
        case 'comment': return <MessageSquare className="w-5 h-5 text-blue-400" />;
        case 'approval': return <CheckCircle className="w-5 h-5 text-green-400" />;
        default: return <Clock className="w-5 h-5 text-white/50" />;
    }
}

export default function CaseDetailPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch caseDetails and timelineEvents based on params.id
  
  return (
    <div className="w-full">
      <div className="mb-8">
        <Link href="/cases" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-4">
            <ArrowLeft className="w-4 h-4" />
            Voltar para todos os casos
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
             <GlassCard>
                <h2 className="text-2xl font-light text-white/90 mb-6">Timeline da Discussão</h2>
                <div className="relative pl-8 space-y-8 border-l border-white/10">
                    {timelineEvents.map((event, index) => (
                        <div key={index} className="relative">
                            <div className="absolute -left-[34px] top-1.5 flex items-center justify-center w-8 h-8 bg-background rounded-full border border-white/10">
                                {getIconForEvent(event.type)}
                            </div>
                            <p className="text-xs text-white/50 mb-1">
                                {new Date(event.timestamp).toLocaleString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
                            </p>
                            <p className="text-sm text-white/80">
                                <strong className="font-medium text-white/95">{event.user}</strong> {event.description}
                            </p>
                        </div>
                    ))}
                </div>
            </GlassCard>
        </div>

        <div>
           <GlassCard>
                <h2 className="text-2xl font-light text-white/90 mb-4">Detalhes</h2>
                <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                        <span className="text-white/60">Especialidade:</span>
                        <span className="font-medium text-white/90">{caseDetails.specialty}</span>
                    </div>
                     <div className="flex justify-between">
                        <span className="text-white/60">Status:</span>
                        <span className="font-medium text-white/90">{caseDetails.status}</span>
                    </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/10">
                     <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-purple-500/10 rounded-full border border-purple-400/20">
                            <Bot className="w-5 h-5 text-purple-300" />
                        </div>
                        <p className="text-sm font-semibold text-purple-300">Análise do Dr. Genkit</p>
                    </div>
                    <p className="text-sm font-extralight text-white/70 leading-relaxed">
                        {caseDetails.analysis}
                    </p>
                </div>
                 <Button className="w-full mt-6 h-11 glass-button bg-cyan-400/20 hover:bg-cyan-400/30 text-cyan-300">
                    Adicionar Comentário
                </Button>
           </GlassCard>
        </div>
      </div>
    </div>
  );
}
