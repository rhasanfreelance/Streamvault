import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B0C10',
        marquee: '#E8B04B',
        marquee2: '#F4CE7E',
        teal: '#2DD4BF',
        bone: '#F5F3EE',
        smoke: '#8A8A93',
        panel: '#151720',
        line: '#26282F',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-plex-mono)', 'monospace'],
      },
      backgroundImage: {
        scrim: 'linear-gradient(180deg, rgba(11,12,16,0) 0%, rgba(11,12,16,0.55) 55%, rgba(11,12,16,1) 100%)',
        'scrim-side': 'linear-gradient(90deg, rgba(11,12,16,0.95) 0%, rgba(11,12,16,0.4) 45%, rgba(11,12,16,0) 75%)',
      },
    },
  },
  plugins: [],
};
export default config;
