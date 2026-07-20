import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0F171E',
        prime: '#00A8E1',
        primeDeep: '#00779C',
        bone: '#F2F6F7',
        smoke: '#8C9BA5',
        panel: '#1A242D',
        line: '#2A3640',
      },
      fontFamily: {
        display: ['var(--font-archivo)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        scrim: 'linear-gradient(180deg, rgba(15,23,30,0) 0%, rgba(15,23,30,0.6) 55%, rgba(15,23,30,1) 100%)',
        'scrim-side': 'linear-gradient(90deg, rgba(15,23,30,0.95) 0%, rgba(15,23,30,0.5) 45%, rgba(15,23,30,0) 75%)',
      },
    },
  },
  plugins: [],
};
export default config;
