# StreamVault

A Prime Video–style streaming app built with Next.js 14 (App Router),
TypeScript, Tailwind CSS, Prisma, and NextAuth.js — dark navy UI, the
signature Prime blue accent, bold condensed sans typography, and real
email/password authentication.

## Content note

Movie poster art is real, third-party copyrighted material, so this project
does not reproduce any. Every title card is an original typographic key-art
panel instead. The catalog itself uses real, legally streamable films — the
Blender Foundation's openly licensed short films (*Big Buck Bunny*,
*Elephants Dream*, *Sintel*, *Tears of Steel*), released under Creative
Commons Attribution — so every "Watch now" button streams an actual video.

## Authentication

- Sign up / sign in with email + password (`/signup`, `/login`).
- Passwords are hashed with bcrypt before they ever touch the database —
  never stored in plain text.
- Sessions are JWT-based via NextAuth.js.
- `/watch/*` is gated by middleware — signed-out visitors are redirected to
  `/login` and returned to the title they wanted afterward.
- User accounts are real rows in a database via Prisma, not an in-memory
  mock — they persist across restarts.

## Run locally

```bash
cp .env.example .env        # already included as .env for this handoff
npm install                 # also runs `prisma generate`
npx prisma db push          # creates the local SQLite database + tables
npm run dev
```

Open http://localhost:3000, create an account, then click "Watch now" on
any title.

> This sandbox's outbound network couldn't reach Prisma's engine CDN
> (`binaries.prisma.sh`) to run a full local build here, so `npm install`
> and `prisma generate` should be run and verified on your machine — this
> is a completely standard Prisma setup, but worth confirming since it
> wasn't build-tested end-to-end in this handoff.

## Deploy to Vercel

SQLite's local file does not persist across serverless invocations, so for
production, swap the datasource in `prisma/schema.prisma` to Postgres:

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

Then:
1. Provision a Postgres database (Vercel Postgres, Neon, or Supabase all work).
2. Set `DATABASE_URL` and `NEXTAUTH_SECRET` (generate one with `openssl rand -base64 32`) and `NEXTAUTH_URL` (your production URL) as Vercel environment variables.
3. `vercel --prod`, or connect the repo at vercel.com/new.

## Structure

- `app/page.tsx` — home page (hero + shelves)
- `app/title/[id]/page.tsx` — title detail page
- `app/watch/[id]/page.tsx` — player page (auth-protected)
- `app/login/`, `app/signup/` — auth pages
- `app/api/auth/[...nextauth]/route.ts` — NextAuth handler
- `app/api/auth/signup/route.ts` — account creation endpoint
- `middleware.ts` — protects `/watch/*`
- `prisma/schema.prisma` — User + Watchlist models
- `lib/auth.ts` — NextAuth credentials provider config
- `lib/catalog.ts` — the content catalog (edit here to add titles)
