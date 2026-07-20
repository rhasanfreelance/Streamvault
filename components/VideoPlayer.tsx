import Link from 'next/link';
import { Title } from '@/lib/types';

export default function VideoPlayer({ title }: { title: Title }) {
  return (
    <div className="relative w-full bg-black">
      <div className="mx-auto max-w-6xl">
        <video
          src={title.videoSrc}
          controls
          autoPlay
          className="aspect-video w-full bg-black"
        />
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-8">
        <div>
          <h1 className="font-display text-2xl font-bold text-bone">{title.name}</h1>
          <p className="font-body text-xs font-medium text-smoke">
            {title.year} · {title.runtimeMinutes} min · {title.license}
          </p>
        </div>
        <Link
          href={`/title/${title.id}`}
          className="focus-ring font-body text-sm font-medium text-smoke hover:text-bone"
        >
          Back to details
        </Link>
      </div>
    </div>
  );
}
