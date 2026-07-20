'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useSession, signOut } from 'next-auth/react';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Movies', href: '/search?genre=Sci-Fi' },
  { label: 'TV Shows', href: '/search?genre=Animation' },
  { label: 'My Stuff', href: '/search?q=Blender' },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { data: session, status } = useSession();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? 'bg-ink/95 border-b border-line' : 'bg-gradient-to-b from-ink/90 to-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="focus-ring flex items-center gap-2">
            <span className="font-display text-xl font-extrabold uppercase tracking-tight text-bone">
              Stream<span className="text-prime">Vault</span>
            </span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="focus-ring font-body text-sm font-medium text-smoke transition-colors hover:text-bone"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-5">
          <Link
            href="/search"
            aria-label="Search titles"
            className="focus-ring text-bone/90 transition-colors hover:text-prime"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </Link>

          {status === 'loading' ? null : session?.user ? (
            <div className="relative">
              <button
                onClick={() => setMenuOpen((v) => !v)}
                className="focus-ring flex h-8 w-8 items-center justify-center rounded-sm bg-prime font-display text-xs font-bold text-ink"
              >
                {session.user.name?.[0]?.toUpperCase() ?? 'U'}
              </button>
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-sm border border-line bg-panel py-2 shadow-2xl">
                  <p className="truncate px-4 py-1.5 text-xs text-smoke">{session.user.email}</p>
                  <button
                    onClick={() => signOut({ callbackUrl: '/' })}
                    className="focus-ring w-full px-4 py-1.5 text-left text-sm text-bone hover:bg-line"
                  >
                    Sign out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              href="/login"
              className="focus-ring rounded-sm bg-prime px-4 py-1.5 font-body text-sm font-bold text-ink transition-opacity hover:opacity-90"
            >
              Sign in
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
