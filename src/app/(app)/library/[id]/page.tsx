
import { notFound } from 'next/navigation';
import ArticleDetailClient from './ArticleDetailClient';
import { scientificArticles } from '@/lib/mock-data/library';

export default function ArticleDetailPage({ params }: { params: { id: string } }) {
    const article = scientificArticles.find(a => a.id.toString() === params.id);

    if (!article) {
        notFound();
    }
  
    return <ArticleDetailClient article={article} />;
}
