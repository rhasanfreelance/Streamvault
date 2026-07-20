import { Title } from '@/lib/types';

export default function KeyArt({
  title,
  aspect = 'video',
}: {
  title: Title;
  aspect?: 'video' | 'poster';
}) {
  const [from, to] = title.accent;
  return (
    <div
      className={`relative w-full overflow-hidden rounded-sm ${
        aspect === 'video' ? 'aspect-video' : 'aspect-[2/3]'
      }`}
      style={{
        backgroundImage: `linear-gradient(160deg, ${from} 0%, ${to} 75%)`,
      }}
    >
      <div className="absolute inset-0 flex flex-col justify-end p-3">
        <span className="font-body text-[10px] font-semibold uppercase tracking-wider text-bone/60">
          {title.genres[0]}
        </span>
        <span className="font-display text-lg font-bold leading-tight text-bone drop-shadow-sm">
          {title.name}
        </span>
      </div>
      {title.badge === 'included' && (
        <div className="absolute right-2 top-2 flex items-center gap-1 rounded-sm bg-ink/80 px-1.5 py-0.5 font-body text-[9px] font-bold uppercase tracking-wide text-prime">
          Included
        </div>
      )}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-bone/90">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#0F171E">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
