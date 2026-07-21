# 🎬 StreamVault

> A modern Prime Video-inspired streaming platform built with Next.js, featuring secure authentication, persistent watchlists, and real licensed films.

**Live Demo:** https://projectstreamvault.vercel.app

---

## Overview

**StreamVault** is a full-stack video streaming application inspired by Amazon Prime Video, built with Next.js and modern web technologies.

Instead of relying on placeholder content, the application streams openly licensed films from the Blender Foundation, delivering an authentic viewing experience while respecting copyright. Combined with secure authentication, persistent user accounts, and a polished cinematic interface, StreamVault demonstrates a production-ready streaming platform architecture.

---

## Features

- 🎬 Prime Video-inspired cinematic interface
- 🔐 Secure email & password authentication
- 👤 Persistent user accounts
- ❤️ Personal watchlist
- ▶️ Stream real licensed films
- 🎥 Dedicated title pages
- 📺 Full-screen video player
- 🔒 Protected watch routes using middleware
- 🌙 Dark, modern responsive UI
- 📱 Optimized for desktop, tablet, and mobile

---

## Tech Stack

### Frontend

- Next.js 14 (App Router)
- React
- TypeScript
- Tailwind CSS

### Backend

- NextAuth.js
- Prisma ORM
- SQLite (development)
- PostgreSQL (production)

---

## Project Structure

```
app/
├── api/
├── login/
├── signup/
├── title/
├── watch/
└── page.tsx

components/
lib/
prisma/
public/
middleware.ts
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/rhasanfreelance/Streamvault.git
cd Streamvault
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Copy `.env.example` to `.env`

```env
DATABASE_URL=
NEXTAUTH_SECRET=
NEXTAUTH_URL=
```

### 4. Create the database

```bash
npx prisma db push
```

### 5. Start the development server

```bash
npm run dev
```

Visit **http://localhost:3000**

---

## Architecture

- Next.js App Router
- Credentials authentication with NextAuth
- JWT-based user sessions
- Prisma ORM for database access
- Middleware route protection
- Persistent watchlists
- Modular component architecture
- Responsive streaming interface

---

## Content

Unlike many streaming clones that use placeholder assets, **StreamVault** showcases openly licensed films from the Blender Foundation, allowing users to watch real content while respecting copyright.

Movie artwork is represented using original typographic title cards rather than copyrighted promotional posters.

---

## Vision

**StreamVault** explores what a modern streaming platform could look like when built with contemporary full-stack technologies.

The project emphasizes clean UI design, secure authentication, scalable architecture, and an immersive viewing experience while demonstrating best practices for real-world web application development.

---

## Future Plans

- Continue Watching
- Multiple user profiles
- Personalized recommendations
- Categories & genres
- Search functionality
- Ratings & reviews
- Watch history
- Favorites collections
- Trailer previews
- Progressive Web App support

---

## Acknowledgements

- Blender Foundation for openly licensed films
- Next.js
- Prisma
- NextAuth.js
- Tailwind CSS

---

## License

This project is released under the MIT License.

---

Made with ❤️ for movie lovers.
