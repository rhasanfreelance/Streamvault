export type Title = {
  id: string;
  name: string;
  year: number;
  runtimeMinutes: number;
  rating: string;
  genres: string[];
  synopsis: string;
  director: string;
  cast: string[];
  studio: string;
  license: string;
  videoSrc: string;
  accent: [string, string];
  badge?: 'included' | 'rent';
  progressPercent?: number;
};

export type Row = {
  id: string;
  title: string;
  titleIds: string[];
};
