
import { notFound } from 'next/navigation';
import CourseDetailClient from './CourseDetailClient';
import { academyCourses } from '@/lib/mock-data/academy';


export default function CourseDetailPage({ params }: { params: { id: string } }) {
    const course = academyCourses.find(c => c.id.toString() === params.id);

    if (!course) {
        notFound();
    }
  
    return <CourseDetailClient course={course} />;
}
