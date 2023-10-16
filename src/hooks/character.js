import { useQuery } from "@tanstack/react-query";

export const useGetCharactersAndInfo = ({
  pageNumber,
  search,
  status,
  gender,
  species,
}) => {
  const endpoint = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
  return useQuery([pageNumber, search, status, gender, species], async () => {
    const data = await fetch(endpoint).then((res) => res.json());
    return data;
  });
};
