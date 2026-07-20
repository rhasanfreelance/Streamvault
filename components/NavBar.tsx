'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Sci-Fi & Fantasy', href: '/search?genre=Sci-Fi' },
  { label: 'Animation', href: '/search?genre=Animation' },
  { label: 'Originals', href: '/search?q=Blender' },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

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
            <span className="font-display text-2xl italic tracking-tight text-bone">
              Stream<span className="text-marquee not-italic">Vault</span>
            </span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="focus-ring font-body text-sm text-smoke transition-colors hover:text-bone"
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
            className="focus-ring text-bone/90 transition-colors hover:text-marquee"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </Link>
          <div
            aria-hidden
            className="flex h-8 w-8 items-center justify-center rounded-full bg-panel border border-line font-mono text-xs text-marquee"
          >
            SV
          </div>
        </div>
      </div>
    </header>
  );
}
