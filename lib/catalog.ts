import { Title, Row } from './types';

// All titles below are real, openly-licensed short films released by the
// Blender Foundation / Blender Studio under Creative Commons Attribution
// 3.0, plus their well-known public mirror on Google's sample media bucket.
// No stock photography or third-party poster art is used; each card is
// rendered as a typographic key-art panel driven by the `accent` gradient.

export const titles: Record<string, Title> = {
  'big-buck-bunny': {
    id: 'big-buck-bunny',
    name: 'Big Buck Bunny',
    year: 2008,
    runtimeMinutes: 10,
    rating: 'G',
    genres: ['Animation', 'Comedy', 'Family'],
    synopsis:
      "A giant rabbit's peaceful morning in the meadow turns into a battle of wits when three bullying rodents pick the wrong target for their pranks.",
    director: 'Sacha Goedegebure',
    cast: ['Blender Foundation Ensemble'],
    studio: 'Blender Foundation',
    license: 'CC BY 3.0',
    videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    accent: ['#3B5B3D', '#0B0C10'],
    badge: 'included',
    progressPercent: 62,
  },
  'elephants-dream': {
    id: 'elephants-dream',
    name: "Elephants Dream",
    year: 2006,
    runtimeMinutes: 11,
    rating: 'PG',
    genres: ['Sci-Fi', 'Surreal', 'Animation'],
    synopsis:
      'Two figures navigate a vast, groaning machine-world where nothing is quite as fixed as it seems. The first film ever made entirely with open-source tools.',
    director: 'Bassam Kurdali',
    cast: ['Blender Foundation Ensemble'],
    studio: 'Blender Foundation',
    license: 'CC BY 2.5',
    videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    accent: ['#3A3450', '#0B0C10'],
    badge: 'included',
    progressPercent: 18,
  },
  sintel: {
    id: 'sintel',
    name: 'Sintel',
    year: 2010,
    runtimeMinutes: 15,
    rating: 'PG-13',
    genres: ['Fantasy', 'Adventure', 'Animation'],
    synopsis:
      'A lone girl crosses a ruined, dragon-haunted world searching for the baby dragon she raised and lost. A quiet, elegiac fantasy short.',
    director: 'Colin Levy',
    cast: ['Blender Foundation Ensemble'],
    studio: 'Blender Foundation',
    license: 'CC BY 3.0',
    videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    accent: ['#5C3A2E', '#0B0C10'],
    badge: 'included',
  },
  'tears-of-steel': {
    id: 'tears-of-steel',
    name: 'Tears of Steel',
    year: 2012,
    runtimeMinutes: 12,
    rating: 'PG-13',
    genres: ['Sci-Fi', 'Action'],
    synopsis:
      'In a near-future Amsterdam, a small crew of engineers and ex-soldiers face down the rogue robots they once helped build. Shot live-action to test open VFX pipelines.',
    director: 'Ian Hubert',
    cast: ['Derek de Lint', 'Sergio Hasselbaink', 'Rogier Schippers'],
    studio: 'Blender Foundation',
    license: 'CC BY 3.0',
    videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    accent: ['#2E4A54', '#0B0C10'],
    badge: 'included',
  },
};

export const rows: Row[] = [
  {
    id: 'continue-watching',
    title: 'Continue Watching',
    titleIds: ['big-buck-bunny', 'elephants-dream'],
  },
  {
    id: 'included',
    title: 'Included with your plan',
    titleIds: ['sintel', 'tears-of-steel', 'big-buck-bunny', 'elephants-dream'],
  },
  {
    id: 'scifi',
    title: 'Sci-Fi & Fantasy',
    titleIds: ['tears-of-steel', 'sintel', 'elephants-dream'],
  },
  {
    id: 'originals',
    title: 'Award-Winning Originals',
    titleIds: ['sintel', 'elephants-dream', 'tears-of-steel', 'big-buck-bunny'],
  },
  {
    id: 'family',
    title: 'Family Favorites',
    titleIds: ['big-buck-bunny', 'sintel'],
  },
];

export const heroTitleId = 'sintel';

export function getTitle(id: string): Title | undefined {
  return titles[id];
}

export function getAllTitles(): Title[] {
  return Object.values(titles);
}
