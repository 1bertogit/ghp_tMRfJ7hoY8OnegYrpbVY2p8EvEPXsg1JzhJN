
export interface Lesson {
    title: string;
    description: string;
    type: 'video' | 'ebook' | 'cirurgia';
    locked: boolean;
}

export interface CurriculumModule {
    title: string;
    lessons: Lesson[];
}

export interface AcademyCourse {
    id: number;
    title: string;
    category: string;
    level: string;
    duration: string;
    modules: string;
    description: string;
    rating: number;
    instructor: string;
    students: number;
    price: string;
    imageUrl: string;
    imageHint: string;
    locked?: boolean;
    videoUrl?: string;
    curriculum: CurriculumModule[];
}

export const featuredCourse: AcademyCourse = {
  id: 1,
  title: 'Browlift & EndomidFace',
  category: 'TERÇO SUPERIOR E MÉDIO DA FACE',
  level: 'Em Andamento',
  duration: '44 horas',
  modules: '5 Módulos',
  description: 'Desvende os segredos das cirurgias com cicatrizes reduzidas e escondidas para rejuvenescimento facial. Pela mesma incisão scarless da Frontoplastia é possível elevar toda a estrutura do terço médio. E por isso, este curso oferece uma abordagem única e exclusiva para aprimorar a beleza e a harmonia facial até mesmo em pacientes jovens.',
  rating: 4.9,
  instructor: 'Dr Robério Brandão',
  students: 131,
  price: 'R$8.500,00',
  imageUrl: 'https://placehold.co/1200x675',
  imageHint: 'facial surgery education',
  videoUrl: 'https://www.youtube.com/embed/wgd_hB3P7s0',
  curriculum: [
    {
      title: 'Módulo 1: Introdução e Onboarding',
      lessons: [
        { title: 'Vídeo de Boas-vindas', description: 'Onboarding dos médicos cirurgiões plásticos e apresentação do curso.', type: 'video', locked: false },
        { title: 'Regras e Contratos', description: 'Assinatura de termos para liberação do conteúdo completo.', type: 'ebook', locked: false },
      ]
    },
    {
      title: 'Módulo 2: Anatomia e Preparação',
      lessons: [
        { title: 'Anatomia Aplicada', description: 'Fundamentos anatômicos essenciais para o plano temporal profundo.', type: 'video', locked: true },
        { title: 'Marcação e Preparação dos Cabelos', description: 'Técnicas de marcação para a incisão temporal.', type: 'video', locked: true },
        { title: 'Instrumentais Cirúrgicos', description: 'Vídeo e E-book dos instrumentos utilizados, com cupom de desconto.', type: 'ebook', locked: true },
      ]
    },
    {
        title: 'Módulo 3: Técnicas Cirúrgicas Principais',
        lessons: [
            { title: 'Browlift (Frontoplastia) - Visão Direta', description: 'Elevação total da fronte e têmporas, com 5 casos práticos.', type: 'video', locked: true },
            { title: 'Endomidface (Elevação do terço médio)', description: 'Técnica sem câmera, com fixação em fios de nylon.', type: 'video', locked: true },
        ]
    },
    {
        title: 'Módulo 4: Técnicas Avançadas e Cirurgias Reais',
        lessons: [
            { title: 'Bônus 1: Blefaroplastia e Cantopexia', description: 'Técnicas exclusivas para rejuvenescimento do terço superior.', type: 'video', locked: true },
            { title: 'Duas Cirurgias em Real-Time', description: 'Demonstração completa da aplicação das técnicas.', type: 'cirurgia', locked: true },
        ]
    },
    {
        title: 'Módulo 5: Discussão de Casos e Bônus Avançados',
        lessons: [
            { title: 'Discussão de 5 Casos Clínicos', description: 'Foco em riscos, complicações e condutas.', type: 'video', locked: true },
            { title: 'Bônus 2: Curso de Manejo Pós-Operatório', description: 'Vídeo e e-book com condutas essenciais.', type: 'ebook', locked: true },
            { title: 'Bônus 3: B&E Fellow Experience (Virtual)', description: 'Imersão no centro cirúrgico com duas perspectivas.', type: 'cirurgia', locked: true },
        ]
    }
  ]
};

const otherCourses: Omit<AcademyCourse, 'curriculum'>[] = [
    {
        id: 2,
        title: 'Curso Intensivo de Blefaroplastia Moderna',
        category: 'Curso',
        imageUrl: 'https://placehold.co/600x400',
        imageHint: 'eye anatomy',
        duration: '12 horas',
        level: 'Intermediário',
        modules: '3 Módulos',
        description: '',
        rating: 4.8,
        instructor: 'Dr. Sofia Ferreira',
        students: 88,
        price: 'R$4.500,00'
    },
    {
        id: 3,
        title: 'Workshop: Dominando o Lifting Facial Deep Plane',
        category: 'Workshop Prático',
        imageUrl: 'https://placehold.co/600x400',
        imageHint: 'facial anatomy',
        duration: '8 horas',
        level: 'Avançado',
        modules: '2 Módulos',
        description: '',
        rating: 4.9,
        instructor: 'Dr. Ricardo Almeida',
        students: 65,
        price: 'R$6.000,00',
        locked: true,
    },
    {
        id: 4,
        title: 'Mamoplastia: Seleção de Implantes e Planejamento 3D',
        category: 'Curso',
        imageUrl: 'https://placehold.co/600x400',
        imageHint: 'medical imaging',
        duration: '10 horas',
        level: 'Intermediário',
        modules: '4 Módulos',
        description: '',
        rating: 4.7,
        instructor: 'Dr. Lucas Martins',
        students: 112,
        price: 'R$3.800,00'
    },
    {
        id: 5,
        title: 'Hands-on: Fios de Sustentação Faciais',
        category: 'Workshop Prático',
        imageUrl: 'https://placehold.co/600x400',
        imageHint: 'aesthetic procedure',
        duration: '6 horas',
        level: 'Iniciante',
        modules: '1 Módulo',
        description: '',
        rating: 4.5,
        instructor: 'Dr. Gabriela Lima',
        students: 95,
        price: 'R$2.500,00',
        locked: true,
    },
    {
        id: 6,
        title: 'Técnicas de Lipoaspiração HD',
        category: 'Curso',
        imageUrl: 'https://placehold.co/600x400',
        imageHint: 'body contouring',
        duration: '15 horas',
        level: 'Avançado',
        modules: '5 Módulos',
        description: '',
        rating: 4.9,
        instructor: 'Dr. Carlos Andrade',
        students: 73,
        price: 'R$7.200,00',
        locked: true,
    },
    {
        id: 7,
        title: 'Otoplastia: Das Técnicas Clássicas às Modernas',
        category: 'Curso',
        imageUrl: 'https://placehold.co/600x400',
        imageHint: 'ear anatomy',
        duration: '8 horas',
        level: 'Intermediário',
        modules: '3 Módulos',
        description: '',
        rating: 4.6,
        instructor: 'Dr. Pedro Almeida',
        students: 54,
        price: 'R$3.100,00'
    },
    {
        id: 8,
        title: 'Gestão de Complicações em Cirurgia Plástica',
        category: 'Workshop Prático',
        imageUrl: 'https://placehold.co/600x400',
        imageHint: 'medical discussion',
        duration: '4 horas',
        level: 'Avançado',
        modules: '1 Módulo',
        description: '',
        rating: 5.0,
        instructor: 'Dr. Robério Brandão',
        students: 150,
        price: 'Incluso na Assinatura'
    },
];

export const courseSections = [
    {
        title: 'Cursos Intensivos',
        courses: otherCourses.filter(c => c.category === 'Curso')
    },
    {
        title: 'Workshops Práticos',
        courses: otherCourses.filter(c => c.category === 'Workshop Prático')
    }
];

export const academyCourses: AcademyCourse[] = [
    featuredCourse,
    ...otherCourses.map(c => ({...c, curriculum: []}))
];
