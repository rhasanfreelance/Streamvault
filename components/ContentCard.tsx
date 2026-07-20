import Link from 'next/link';
import { Title } from '@/lib/types';
import KeyArt from './KeyArt';

export default function ContentCard({ title }: { title: Title }) {
  return (
    <Link
      href={`/title/${title.id}`}
      className="focus-ring group relative block w-full transition-transform duration-300 hover:z-10 hover:-translate-y-1"
    >
      <KeyArt title={title} />
      {typeof title.progressPercent === 'number' && (
        <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-line">
          <div
            className="h-full rounded-full bg-prime"
            style={{ width: `${title.progressPercent}%` }}
          />
        </div>
      )}
      <div className="mt-2 flex items-center gap-2 font-body text-[11px] font-medium text-smoke">
        <span>{title.year}</span>
        <span aria-hidden>·</span>
        <span>{title.runtimeMinutes} min</span>
        <span aria-hidden>·</span>
        <span>{title.rating}</span>
      </div>
    </Link>
  );
}
