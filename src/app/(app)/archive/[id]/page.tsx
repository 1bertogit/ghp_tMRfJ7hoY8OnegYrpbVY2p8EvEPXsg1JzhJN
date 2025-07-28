
import { notFound } from 'next/navigation';
import ArchiveDetailClient from './ArchiveDetailClient';

// Mock data, to be replaced with real data fetching.
const initialArchiveItems = [
  {
    id: 1,
    title: 'Análise de caso: Rinoplastia secundária com enxerto de costela',
    category: 'Discussões de Casos',
    source: 'Grupo WhatsApp - Dr. Ricardo',
    tags: ['PDF', 'Casos Raros', 'Blefaroplastia'],
    description: 'Discussão aprofundada sobre as melhores práticas para rinoplastia secundária. O foco foi na utilização de enxerto de costela para estruturação e os desafios associados. \n\n### Tópicos Principais:\n* Técnica de colheita do enxerto.\n* Prevenção de warping.\n* Fixação e modelagem.',
    views: 124,
    createdAt: '2024-07-30T10:00:00Z',
  },
  {
    id: 2,
    title: 'Vídeo: Técnica de sutura para lifting facial profundo',
    category: 'Técnicas Cirúrgicas',
    source: 'Sessão Zoom - Dr. Ana Couto',
    tags: ['Vídeo', 'Deep Neck'],
    description: 'Gravação da sessão ao vivo com a Dr. Ana Couto, demonstrando a técnica de sutura para o SMAS no lifting facial profundo. Inclui dicas para um resultado natural e duradouro.',
    views: 231,
    createdAt: '2024-07-29T15:30:00Z',
  },
  {
    id: 3,
    title: 'Protocolo de cuidados pós-lipoaspiração HD',
    category: 'Pós-Operatório',
    source: 'Documento - Dra. Sofia',
    tags: ['PDF', 'Pós-Op Tardio'],
    description: 'Documento PDF com o protocolo completo de cuidados para pacientes no pós-operatório de lipoaspiração de alta definição. Abrange desde a primeira semana até 6 meses.',
    views: 450,
    createdAt: '2024-07-28T11:00:00Z',
  },
  {
    id: 4,
    title: 'Review: Novos Bisturis Ultrassônicos',
    category: 'Instrumentais',
    source: 'Grupo WhatsApp - Discussão',
    tags: ['Imagem'],
    description: 'Análise e comparação dos novos bisturis ultrassônicos disponíveis no mercado. Inclui imagens de antes e depois e opiniões de diversos cirurgiões.',
    views: 88,
    createdAt: '2024-07-27T09:20:00Z',
  },
  {
    id: 5,
    title: 'Debate sobre proporção áurea na cirurgia facial',
    category: 'Filosofia Cirúrgica',
    source: 'Evento Presencial - SP',
    tags: ['Casos Raros'],
    description: 'Resumo do debate sobre a aplicação e a relevância da proporção áurea no planejamento de cirurgias faciais. Argumentos a favor e contra a sua utilização estrita.',
    views: 156,
    createdAt: '2024-07-26T18:00:00Z',
  },
   {
    id: 6,
    title: 'Melhores práticas para preparação de Lipoenxerto',
    category: 'Lipoenxertia',
    source: 'Grupo WhatsApp - Dr. Lucas Martins',
    tags: ['Pós-Op Imediato'],
    description: 'Discussão sobre as técnicas de coleta, processamento e injeção de gordura para lipoenxertia, visando maximizar a viabilidade do enxerto.',
    views: 112,
    createdAt: '2024-07-25T14:10:00Z',
  },
   {
    id: 7,
    title: 'Como usar o Instagram para divulgar seus resultados',
    category: 'Marketing Médico',
    source: 'Sessão Zoom - Convidado',
    tags: ['Vídeo'],
    description: 'Workshop sobre estratégias de marketing digital para cirurgiões plásticos, com foco no uso ético e eficaz do Instagram para atrair pacientes.',
    views: 332,
    createdAt: '2024-07-24T20:00:00Z',
  },
  {
    id: 8,
    title: 'Artigo recomendado sobre assimetria em Blefaroplastia',
    category: 'Literatura',
    source: 'Grupo WhatsApp - Link',
    tags: ['PDF', 'Assimetria', 'Blefaroplastia'],
    description: 'Link e discussão sobre um artigo fundamental que aborda o diagnóstico e a correção de assimetrias em blefaroplastia superior e inferior.',
    views: 189,
    createdAt: '2024-07-23T12:00:00Z',
  },
  {
    id: 9,
    title: 'Manejo de hematoma pós-Cantopexia',
    category: 'Complicação',
    source: 'Admin',
    tags: ['Hematoma', 'Pós-Op Imediato', 'Cantopexia'],
    description: 'Guia prático sobre como identificar e manejar um hematoma expansivo no pós-operatório de cantopexia, incluindo protocolo de drenagem.',
    views: 99,
    createdAt: '2024-07-22T19:45:00Z',
  },
];


export default function ArchiveDetailPage({ params }: { params: { id: string } }) {
    const item = initialArchiveItems.find(a => a.id.toString() === params.id);
    
    if (!item) {
        notFound();
    }
    
    return <ArchiveDetailClient item={item} />;
}
