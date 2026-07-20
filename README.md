# StreamVault

A Prime Video–style streaming catalog built with Next.js 14 (App Router),
TypeScript, and Tailwind CSS.

## Content note

Movie poster art is real, third-party copyrighted material, so this project
does not reproduce any. Every title card is an original typographic key-art
panel instead. The catalog itself uses real, legally streamable films — the
Blender Foundation's openly licensed short films (*Big Buck Bunny*,
*Elephants Dream*, *Sintel*, *Tears of Steel*), released under Creative
Commons Attribution — so every "Play" button in the app streams an actual
video, not a stub.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

```bash
npm i -g vercel
vercel
```

Or connect the repo at vercel.com/new — no environment variables are
required.

## Structure

- `app/page.tsx` — home page (hero + shelves)
- `app/title/[id]/page.tsx` — title detail page
- `app/watch/[id]/page.tsx` — player page
- `app/search/` — browse/search page
- `components/` — NavBar, Hero, ContentRow, ContentCard, KeyArt, VideoPlayer
- `lib/catalog.ts` — the content catalog (edit here to add titles)
