export type StatusT = "Dead" | "Alive" | "unknown";
export type Location = { name: string; url: string };

export type Character = {
  id: number;
  image: string;
  name: string;
  location: Location;
  status: StatusT | null;
};

export type EpisodeInfo = {
  air_date: string;
  episode: unknown;
  name: string;
};
