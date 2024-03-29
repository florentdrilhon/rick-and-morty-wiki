import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { Character, StatusT } from "../helpers/types";

export const useGetCharactersAndInfo = ({
  pageNumber,
  search,
  status,
  gender,
  species,
}: {
  pageNumber: number;
  search: string;
  status: StatusT | null;
  gender: string;
  species: string;
}): UseQueryResult<{ info: Object; results: Character[] }, unknown> => {
  const endpoint = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${
    status ?? ""
  }&gender=${gender}&species=${species}`;
  return useQuery([pageNumber, search, status, gender, species], async () => {
    const data: { info: Object; result: Character[] } = await fetch(
      endpoint
    ).then((res) => res.json());
    return data;
  });
};

export const useGetCharacterDetails = (
  characterId: number | undefined
): UseQueryResult<Character, unknown> => {
  const endpoint = `https://rickandmortyapi.com/api/character/${characterId}`;
  return useQuery(["character", characterId], async () => {
    const data: Character = await fetch(endpoint).then((res) => res.json());
    return data;
  });
};
