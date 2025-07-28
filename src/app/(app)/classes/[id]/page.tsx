
import { notFound } from 'next/navigation';
import ClassDetailClient from './ClassDetailClient';

// Mock data - Em uma aplicação real, isso viria de uma API/banco de dados
const recordedClassesData = [
  {
    id: 1,
    title: 'Técnica de Lifting Facial Deep Plane: Do Básico ao Avançado',
    specialty: 'Lifting',
    instructor: 'Dr. Ricardo Almeida',
    description: 'Nesta masterclass, o Dr. Ricardo detalha a anatomia do deep plane, as técnicas de dissecção e as estratégias para obter resultados naturais e duradouros no rejuvenescimento facial. A aula inclui vídeos cirúrgicos comentados e uma sessão de Q&A.',
    videoUrl: '#',
    materials: [
        { title: 'Apresentação (PDF)', url: '#' },
        { title: 'Artigo de Referência', url: '#' },
    ],
    timestamps: [
        { time: '00:15', description: 'Introdução à anatomia do Deep Plane' },
        { time: '12:45', description: 'Marcações pré-operatórias essenciais' },
        { time: '25:30', description: 'Técnica de dissecção e liberação' },
        { time: '45:10', description: 'Pontos de sutura e vetor de tração' },
        { time: '01:15:00', description: 'Gerenciamento de complicações' },
    ],
  },
  {
    id: 2,
    title: 'Rinoplastia Preservadora: Conceitos e Aplicações Práticas',
    specialty: 'Rinoplastia',
    instructor: 'Dr. Ana Couto',
    description: 'Explore os conceitos da rinoplastia preservadora, uma abordagem que visa manter a estrutura nasal original tanto quanto possível. Dr. Ana demonstra as técnicas de let-down e push-down e discute a seleção de pacientes para esta técnica.',
    videoUrl: '#',
    materials: [
        { title: 'Slides da Aula (PDF)', url: '#' },
    ],
    timestamps: [],
  },
  {
    id: 3,
    title: 'Mamoplastia Híbrida: Implantes e Enxerto de Gordura',
    specialty: 'Mamoplastia',
    instructor: 'Dr. Lucas Martins',
    description: 'Aprenda a combinar implantes mamários com enxerto de gordura para alcançar resultados mais naturais e personalizados. A aula cobre o planejamento, a técnica de coleta e preparo da gordura, e as áreas de injeção para otimizar o contorno.',
    videoUrl: '#',
    materials: [
        { title: 'Protocolo de Lipoenxertia', url: '#' },
        { title: 'Tabela de Implantes (PDF)', url: '#' },
    ],
    timestamps: [],
  },
  {
    id: 4,
    title: 'Blefaroplastia: Gerenciando Expectativas e Complicações',
    specialty: 'Blefaroplastia',
    instructor: 'Dr. Sofia Ferreira',
    description: 'Uma aula essencial sobre a consulta pré-operatória em blefaroplastia, como gerenciar as expectativas dos pacientes e um guia prático para identificar e tratar as complicações mais comuns, como ectrópio e olho seco.',
    videoUrl: '#',
    materials: [],
    timestamps: [],
  },
  {
    id: 5,
    title: 'Contorno Corporal Pós-Bariátrica: Desafios e Soluções',
    specialty: 'Lifting',
    instructor: 'Dr. Carlos Andrade',
    description: 'Esta sessão aborda o planejamento cirúrgico complexo para pacientes com grande perda de peso. Tópicos incluem a ordem das cirurgias (abdominoplastia, braquioplastia, etc.), técnicas para minimizar cicatrizes e cuidados pós-operatórios.',
    videoUrl: '#',
    materials: [
        { title: 'Guia de Planejamento', url: '#' },
    ],
    timestamps: [],
  },
  {
    id: 6,
    title: 'Uso de Fios de Sustentação: Evidências e Técnicas',
    specialty: 'Outros',
    instructor: 'Dr. Gabriela Lima',
    description: 'Uma análise crítica sobre o uso de fios de sustentação para rejuvenescimento facial. A aula revisa as evidências científicas, os diferentes tipos de fios disponíveis e demonstra as técnicas de inserção para um resultado eficaz e seguro.',
    videoUrl: '#',
    materials: [],
    timestamps: [],
  },
];


export default function ClassDetailPage({ params }: { params: { id: string } }) {
    const classData = recordedClassesData.find(c => c.id.toString() === params.id);

    if (!classData) {
        notFound();
    }
  
    return <ClassDetailClient classData={classData} />;
}
