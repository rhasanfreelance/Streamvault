import type { Metadata } from 'next';
import { Archivo, Inter } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';
import Providers from '@/components/Providers';

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-archivo',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'StreamVault',
  description: 'A Prime Video-style streaming catalog built with real, openly-licensed films.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${inter.variable}`}>
      <body className="font-body bg-ink text-bone antialiased">
        <Providers>
          <NavBar />
          <main className="pt-16">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
