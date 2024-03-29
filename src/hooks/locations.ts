import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { Character, GeneralResponseInfo, LocationInfo } from "../helpers/types";

type ApiResponse = {
  id: number;
  type: string;
  name: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
};

export const useGetLocationsList = (): UseQueryResult<
  LocationInfo[],
  unknown
> => {
  const endpoint = `https://rickandmortyapi.com/api/location`;
  return useQuery(["locations"], async () => {
    const data: { info: GeneralResponseInfo; results: ApiResponse[] } =
      await fetch(endpoint).then((res) => res.json());
    return data.results ?? [];
  });
};

export const useGetLocationDetails = (
  locationId: number
): UseQueryResult<{ info: LocationInfo; characters: Character[] }, unknown> => {
  // FIXME: don't fetch this, we already have the info in the locations list from the hook above
  const endpoint = `https://rickandmortyapi.com/api/location/${locationId}`;
  return useQuery(["location", locationId], async () => {
    const data: ApiResponse = await fetch(endpoint).then((res) => res.json());
    const { id, name, dimension, type, residents: charactersUrls } = data;
    const characters = await Promise.all(
      charactersUrls.map((url) => fetch(url).then((res) => res.json()))
    );
    return { info: { id, name, dimension, type }, characters };
  });
};
