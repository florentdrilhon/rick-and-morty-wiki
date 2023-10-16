export type Status = "Dead" | "Alive";
export type Location = { name: string; url: string };

export type Character = {
  id: number;
  image: string;
  name: string;
  location: Location;
  status: Status | null;
};
