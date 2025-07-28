
import { notFound } from 'next/navigation';
import ArchiveDetailClient from './ArchiveDetailClient';
import { initialArchiveItems } from '@/lib/mock-data/archive';


export default function ArchiveDetailPage({ params }: { params: { id: string } }) {
    const item = initialArchiveItems.find(a => a.id.toString() === params.id);
    
    if (!item) {
        notFound();
    }
    
    return <ArchiveDetailClient item={item} />;
}
