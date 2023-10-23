import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { Character, EpisodeInfo } from "../helpers/types";

type ApiResponse = {
  id: number;
  name: string;
  url: string;
  air_date: string;
  episode: string;
  characters: string[];
};

export const useGetEpisodeDetails = (
  episodeId: number
): UseQueryResult<{ info: EpisodeInfo; characters: Character[] }, unknown> => {
  const endpoint = `https://rickandmortyapi.com/api/episode/${episodeId}`;
  return useQuery([episodeId], async () => {
    const data: ApiResponse = await fetch(endpoint).then((res) => res.json());
    const { id, name, air_date, characters: charactersUrls } = data;
    const characters = await Promise.all(
      charactersUrls.map((url) => fetch(url).then((res) => res.json()))
    );
    return { info: { id, name, air_date }, characters };
  });
};
