import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTitle, getAllTitles, rows } from '@/lib/catalog';
import KeyArt from '@/components/KeyArt';
import ContentRow from '@/components/ContentRow';

export function generateStaticParams() {
  return getAllTitles().map((title) => ({ id: title.id }));
}

export default function TitleDetailPage({ params }: { params: { id: string } }) {
  const title = getTitle(params.id);
  if (!title) notFound();

  const moreRow = rows.find((row) => row.titleIds.includes(title.id) && row.id !== 'continue-watching');

  return (
    <div className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[360px_1fr]">
        <div>
          <KeyArt title={title} aspect="poster" />
        </div>
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-marquee">
            {title.badge === 'included' ? 'Included with your plan' : 'Available to rent'}
          </span>
          <h1 className="mt-2 font-display text-4xl font-semibold italic text-bone sm:text-5xl">
            {title.name}
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-2 font-mono text-sm text-smoke">
            <span>{title.year}</span>
            <span aria-hidden>·</span>
            <span>{title.runtimeMinutes} min</span>
            <span aria-hidden>·</span>
            <span>{title.rating}</span>
            <span aria-hidden>·</span>
            <span>{title.genres.join(', ')}</span>
          </div>
          <p className="mt-5 max-w-2xl font-body leading-relaxed text-bone/85">{title.synopsis}</p>

          <dl className="mt-6 grid max-w-md grid-cols-[100px_1fr] gap-y-2 font-body text-sm">
            <dt className="text-smoke">Director</dt>
            <dd className="text-bone">{title.director}</dd>
            <dt className="text-smoke">Cast</dt>
            <dd className="text-bone">{title.cast.join(', ')}</dd>
            <dt className="text-smoke">Studio</dt>
            <dd className="text-bone">{title.studio}</dd>
            <dt className="text-smoke">License</dt>
            <dd className="text-bone">{title.license}</dd>
          </dl>

          <Link
            href={`/watch/${title.id}`}
            className="focus-ring mt-8 inline-flex items-center gap-2 rounded-sm bg-bone px-7 py-3 font-body text-sm font-semibold text-ink transition-transform hover:scale-[1.02]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
            Play
          </Link>
        </div>
      </div>

      {moreRow && (
        <div className="mt-14 -mx-4 sm:-mx-8">
          <ContentRow row={{ ...moreRow, title: 'More like this' }} />
        </div>
      )}
    </div>
  );
}
