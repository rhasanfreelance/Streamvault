'use client';

import { useMemo, useState } from 'react';
import { Title } from '@/lib/types';
import ContentCard from '@/components/ContentCard';

export default function SearchClient({
  titles,
  initialQuery,
  initialGenre,
}: {
  titles: Title[];
  initialQuery: string;
  initialGenre: string;
}) {
  const [query, setQuery] = useState(initialQuery);
  const [genre, setGenre] = useState(initialGenre);

  const allGenres = useMemo(
    () => Array.from(new Set(titles.flatMap((t) => t.genres))).sort(),
    [titles]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return titles.filter((title) => {
      const matchesQuery =
        q === '' ||
        title.name.toLowerCase().includes(q) ||
        title.synopsis.toLowerCase().includes(q) ||
        title.studio.toLowerCase().includes(q) ||
        title.director.toLowerCase().includes(q);
      const matchesGenre = genre === '' || title.genres.includes(genre);
      return matchesQuery && matchesGenre;
    });
  }, [titles, query, genre]);

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search titles, directors, studios…"
          className="focus-ring w-full max-w-sm rounded-sm border border-line bg-panel px-4 py-2.5 font-body text-sm text-bone placeholder:text-smoke sm:w-80"
        />
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setGenre('')}
            className={`focus-ring rounded-full border px-3 py-1 font-mono text-xs uppercase tracking-wide transition-colors ${
              genre === ''
                ? 'border-marquee bg-marquee text-ink'
                : 'border-line text-smoke hover:text-bone'
            }`}
          >
            All
          </button>
          {allGenres.map((g) => (
            <button
              key={g}
              onClick={() => setGenre(g)}
              className={`focus-ring rounded-full border px-3 py-1 font-mono text-xs uppercase tracking-wide transition-colors ${
                genre === g
                  ? 'border-marquee bg-marquee text-ink'
                  : 'border-line text-smoke hover:text-bone'
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="font-body text-smoke">
          Nothing matches that search. Try a different title, director, or genre.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((title) => (
            <div key={title.id} className="w-full">
              <ContentCard title={title} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
