import { getAllTitles } from '@/lib/catalog';
import SearchClient from './SearchClient';

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string; genre?: string };
}) {
  const titles = getAllTitles();
  return (
    <div className="mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-8">
      <h1 className="mb-6 font-display text-3xl font-semibold text-bone">Browse the catalog</h1>
      <SearchClient
        titles={titles}
        initialQuery={searchParams.q ?? ''}
        initialGenre={searchParams.genre ?? ''}
      />
    </div>
  );
}
