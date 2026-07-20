import Hero from '@/components/Hero';
import ContentRow from '@/components/ContentRow';
import { rows, heroTitleId, getTitle } from '@/lib/catalog';

export default function HomePage() {
  const heroTitle = getTitle(heroTitleId)!;

  return (
    <div>
      <Hero title={heroTitle} />
      <div className="relative -mt-10 pb-16">
        {rows.map((row) => (
          <ContentRow key={row.id} row={row} />
        ))}
      </div>
    </div>
  );
}
