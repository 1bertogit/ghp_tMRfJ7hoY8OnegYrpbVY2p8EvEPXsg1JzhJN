
import { notFound } from 'next/navigation';
import ClassDetailClient from './ClassDetailClient';
import { recordedClassesData } from '@/lib/mock-data/classes';


export default function ClassDetailPage({ params }: { params: { id: string } }) {
    const classData = recordedClassesData.find(c => c.id.toString() === params.id);

    if (!classData) {
        notFound();
    }
  
    return <ClassDetailClient classData={classData} />;
}
