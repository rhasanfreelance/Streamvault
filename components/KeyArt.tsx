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
      className={`relative w-full overflow-hidden rounded-md ${
        aspect === 'video' ? 'aspect-video' : 'aspect-[2/3]'
      }`}
      style={{
        backgroundImage: `radial-gradient(120% 140% at 15% 0%, ${from} 0%, ${to} 70%)`,
      }}
    >
      <div className="perforation absolute inset-x-0 top-0 h-2 opacity-60" />
      <div className="perforation absolute inset-x-0 bottom-0 h-2 opacity-60" />
      <div className="absolute inset-0 flex flex-col justify-end p-3">
        <span className="font-mono text-[10px] uppercase tracking-wider text-bone/60">
          {title.genres[0]}
        </span>
        <span className="font-display text-lg font-semibold leading-tight text-bone drop-shadow-sm">
          {title.name}
        </span>
      </div>
      {title.badge === 'included' && (
        <div className="absolute right-2 top-3 rotate-3 rounded-sm bg-teal/90 px-1.5 py-0.5 font-mono text-[9px] font-medium uppercase tracking-wide text-ink">
          Included
        </div>
      )}
    </div>
  );
}
