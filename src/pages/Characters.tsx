import React, { useState } from "react";

import Search from "../components/Search/Search";
import CharactersList from "../components/CharactersList/CharactersList";
import Pagination from "../components/Pagination/Pagination";
import Filter from "../components/Filter/Filter";
import { useGetCharactersAndInfo } from "../hooks/characters";
import { StatusT } from "../helpers/types";

function Characters(): React.ReactElement {
  // search state values
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");
  // filters state values
  const [status, setStatus] = useState<StatusT | null>(null);
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");

  // TODO: implement a good Loading state
  const { data: charactersAndInfoData } = useGetCharactersAndInfo({
    pageNumber,
    search,
    status,
    gender,
    species,
  });

  const { info, results: characters } = charactersAndInfoData ?? {
    info: {},
    results: [],
  };

  return (
    <>
      <h1 className="text-center mb-3">Characters</h1>
      <Search setSearch={setSearch} setPageNumber={setPageNumber} />
      <div className="container">
        <div className="row">
          <Filter
            setStatus={setStatus}
            setGender={setGender}
            setSpecies={setSpecies}
            setPageNumber={setPageNumber}
          />
          <div className="col-lg-8 col-12">
            <div className="row">
              <CharactersList page="" characters={characters} />
            </div>
          </div>
        </div>
      </div>
      <Pagination
        info={info}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </>
  );
}

export default Characters;
