import { notFound } from 'next/navigation';
import { getTitle, getAllTitles } from '@/lib/catalog';
import VideoPlayer from '@/components/VideoPlayer';

export function generateStaticParams() {
  return getAllTitles().map((title) => ({ id: title.id }));
}

export default function WatchPage({ params }: { params: { id: string } }) {
  const title = getTitle(params.id);
  if (!title) notFound();

  return (
    <div className="-mt-16 pt-16">
      <VideoPlayer title={title} />
    </div>
  );
}
