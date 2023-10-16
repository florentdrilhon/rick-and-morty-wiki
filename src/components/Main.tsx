import React, { useState } from "react";

import Search from "./Search/Search";
import Characters from "./Characters/Characters";
import Pagination from "./Pagination/Pagination";
import Filter from "./Filter/Filter";
import { useGetCharactersAndInfo } from "../hooks/characters";

function Main(): JSX.Element {
  // search state values
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");
  // filters state values
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");

  const { data: charactersAndInfoData, isLoading } = useGetCharactersAndInfo({
    pageNumber,
    search,
    status,
    gender,
    species,
  });

  if (isLoading) {
    return <h3 className="text-center mb-3">Loading...</h3>;
  }

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
            pageNumber={pageNumber}
            setStatus={setStatus}
            setGender={setGender}
            setSpecies={setSpecies}
            setPageNumber={setPageNumber}
          />
          <div className="col-lg-8 col-12">
            <div className="row">
              <Characters characters={characters} />
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

export default Main;
