import { getTitle } from '@/lib/catalog';
import { Row } from '@/lib/types';
import ContentCard from './ContentCard';

export default function ContentRow({ row }: { row: Row }) {
  const items = row.titleIds.map(getTitle).filter(Boolean);
  if (items.length === 0) return null;

  return (
    <section aria-labelledby={`row-${row.id}`} className="py-4">
      <h2
        id={`row-${row.id}`}
        className="mb-3 px-4 font-display text-xl font-semibold text-bone sm:px-8"
      >
        {row.title}
      </h2>
      <div className="no-scrollbar flex snap-x gap-4 overflow-x-auto px-4 pb-2 sm:px-8">
        {items.map((title) => (
          <div key={title!.id} className="w-64 flex-shrink-0 snap-start">
            <ContentCard title={title!} />
          </div>
        ))}
      </div>
    </section>
  );
}
