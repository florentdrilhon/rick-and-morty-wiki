export type StatusT = "Dead" | "Alive" | "unknown";
export type Location = { name: string; url: string };

export type Character = {
  id: number;
  image: string;
  name: string;
  origin: Location;
  gender: string;
  species: string;
  location: Location;
  status: StatusT | null;
};

export type GeneralResponseInfo = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};

export type EpisodeInfo = {
  id: number;
  air_date: string;
  episode: string;
  name: string;
};

export type LocationInfo = {
  id: number;
  type: string;
  name: string;
  dimension: string;
};
