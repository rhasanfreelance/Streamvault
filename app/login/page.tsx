'use client';

import { Suspense, useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginForm />
    </Suspense>
  );
}

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (result?.error) {
      setError(result.error);
      return;
    }

    router.push(callbackUrl);
    router.refresh();
  }

  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center px-4 py-16">
      <div className="w-full max-w-sm rounded-md border border-line bg-panel p-8 shadow-2xl">
        <h1 className="font-display text-2xl font-bold text-bone">Sign in</h1>
        <p className="mt-1 text-sm text-smoke">Continue watching where you left off.</p>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium text-bone">Email</span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="focus-ring rounded-sm border border-line bg-ink px-3 py-2.5 text-bone placeholder:text-smoke"
              placeholder="you@example.com"
            />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium text-bone">Password</span>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="focus-ring rounded-sm border border-line bg-ink px-3 py-2.5 text-bone placeholder:text-smoke"
              placeholder="••••••••"
            />
          </label>

          {error && (
            <p role="alert" className="rounded-sm bg-red-950/60 px-3 py-2 text-sm text-red-300">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="focus-ring mt-2 rounded-sm bg-prime px-4 py-2.5 text-sm font-bold text-ink transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {loading ? 'Signing in…' : 'Sign in'}
          </button>
        </form>

        <p className="mt-6 text-sm text-smoke">
          New to StreamVault?{' '}
          <Link href="/signup" className="focus-ring font-medium text-prime hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
