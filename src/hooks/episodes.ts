import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { Character, EpisodeInfo, GeneralResponseInfo } from "../helpers/types";

type ApiResponse = {
  id: number;
  name: string;
  url: string;
  air_date: string;
  episode: string;
  characters: string[];
};

export const useGetEpisodesList = (): UseQueryResult<
  EpisodeInfo[],
  unknown
> => {
  const endpoint = `https://rickandmortyapi.com/api/episode`;
  return useQuery(["episodeList"], async () => {
    const data: { info: GeneralResponseInfo; results: EpisodeInfo[] } =
      await fetch(endpoint).then((res) => res.json());
    return data.results ?? [];
  });
};

export const useGetEpisodeDetails = (
  episodeId: number
): UseQueryResult<{ info: EpisodeInfo; characters: Character[] }, unknown> => {
  // FIXME: don't fetch this, we already have the info in the episodes list from the hook above
  const endpoint = `https://rickandmortyapi.com/api/episode/${episodeId}`;
  return useQuery(["episode", episodeId], async () => {
    const data: ApiResponse = await fetch(endpoint).then((res) => res.json());
    const { id, name, air_date, characters: charactersUrls } = data;
    const characters = await Promise.all(
      charactersUrls.map((url) => fetch(url).then((res) => res.json()))
    );
    return { info: { id, name, air_date }, characters };
  });
};
