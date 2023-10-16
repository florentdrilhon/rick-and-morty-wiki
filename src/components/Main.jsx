import React, { useState } from "react";

import Search from "./Search/Search";
import Characters from "./Characters/Characters";
import Pagination from "./Pagination/Pagination";
import Filter from "./Filter/Filter";
import { useGetCharactersAndInfo } from "../hooks/character";

function Main() {
  // search state values
  const [pageNumber, updatePageNumber] = useState(1);
  const [search, setSearch] = useState("");
  // filters state values
  const [status, updateStatus] = useState("");
  const [gender, updateGender] = useState("");
  const [species, updateSpecies] = useState("");

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

  const { info, results: characters } = charactersAndInfoData;

  return (
    <>
      <h1 className="text-center mb-3">Characters</h1>
      <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
      <div className="container">
        <div className="row">
          <Filter
            pageNumber={pageNumber}
            status={status}
            updateStatus={updateStatus}
            updateGender={updateGender}
            updateSpecies={updateSpecies}
            updatePageNumber={updatePageNumber}
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
        updatePageNumber={updatePageNumber}
      />
    </>
  );
}

export default Main;
