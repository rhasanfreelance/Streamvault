'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();

    if (!res.ok) {
      setError(data.error ?? 'Something went wrong. Please try again.');
      setLoading(false);
      return;
    }

    const result = await signIn('credentials', { email, password, redirect: false });
    setLoading(false);

    if (result?.error) {
      setError(result.error);
      return;
    }

    router.push('/');
    router.refresh();
  }

  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center px-4 py-16">
      <div className="w-full max-w-sm rounded-md border border-line bg-panel p-8 shadow-2xl">
        <h1 className="font-display text-2xl font-bold text-bone">Create your account</h1>
        <p className="mt-1 text-sm text-smoke">Start streaming in a few seconds.</p>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium text-bone">Name</span>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="focus-ring rounded-sm border border-line bg-ink px-3 py-2.5 text-bone placeholder:text-smoke"
              placeholder="Jamie Rivera"
            />
          </label>
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
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="focus-ring rounded-sm border border-line bg-ink px-3 py-2.5 text-bone placeholder:text-smoke"
              placeholder="At least 8 characters"
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
            {loading ? 'Creating account…' : 'Create account'}
          </button>
        </form>

        <p className="mt-6 text-sm text-smoke">
          Already have an account?{' '}
          <Link href="/login" className="focus-ring font-medium text-prime hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
