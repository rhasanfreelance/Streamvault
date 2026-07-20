import Link from 'next/link';
import { Title } from '@/lib/types';

export default function Hero({ title }: { title: Title }) {
  const [from, to] = title.accent;
  return (
    <section className="relative h-[78vh] min-h-[480px] w-full overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(135deg, ${from} 0%, ${to} 70%)`,
        }}
      />
      <div className="absolute inset-0 bg-scrim" />
      <div className="absolute inset-0 bg-scrim-side" />

      <div className="relative flex h-full max-w-7xl flex-col justify-end px-4 pb-16 sm:px-8">
        <span className="mb-3 flex items-center gap-1.5 font-body text-xs font-bold uppercase tracking-[0.15em] text-prime">
          {title.badge === 'included' ? 'Included with your plan' : 'Featured'}
        </span>
        <h1 className="max-w-2xl font-display text-5xl font-extrabold uppercase leading-[1.02] tracking-tight text-bone sm:text-6xl">
          {title.name}
        </h1>
        <div className="mt-4 flex items-center gap-3 font-body text-sm font-medium text-bone/70">
          <span>{title.year}</span>
          <span aria-hidden>·</span>
          <span>{title.runtimeMinutes} min</span>
          <span aria-hidden>·</span>
          <span>{title.rating}</span>
          <span aria-hidden>·</span>
          <span>{title.genres.join(', ')}</span>
        </div>
        <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-bone/85">
          {title.synopsis}
        </p>
        <div className="mt-7 flex gap-3">
          <Link
            href={`/watch/${title.id}`}
            className="focus-ring flex items-center gap-2 rounded-sm bg-bone px-6 py-3 font-body text-sm font-bold text-ink transition-transform hover:scale-[1.02]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
            Watch now
          </Link>
          <Link
            href={`/title/${title.id}`}
            className="focus-ring flex items-center gap-2 rounded-sm border border-bone/30 bg-bone/10 px-6 py-3 font-body text-sm font-bold text-bone backdrop-blur-sm transition-colors hover:bg-bone/20"
          >
            More Info
          </Link>
        </div>
      </div>
    </section>
  );
}
