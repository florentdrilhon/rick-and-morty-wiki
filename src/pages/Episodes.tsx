import CharactersList from "components/CharactersList/CharactersList";
import InputSelector from "components/Filter/InputSelector";
import { EpisodeInfo } from "helpers/types";
import { useGetEpisodeDetails, useGetEpisodesList } from "hooks/episodes";
import React, { useState } from "react";

const defaultInfo: EpisodeInfo = { air_date: "", name: "", episode: "", id: 0 };

const Episodes = (): React.ReactElement => {
  const [episodeId, setEpisodeId] = useState(1);

  const { data: episodesListData } = useGetEpisodesList();
  const { data: episodeDetailsData, isLoading } =
    useGetEpisodeDetails(episodeId);

  const episodesList = episodesListData ?? [];
  const episodeListValues = episodesList.map((ep) => ({
    id: ep.id,
    label: `${ep.episode}: ${ep.name}`,
  }));
  const { info, characters } = episodeDetailsData ?? {
    info: defaultInfo,
    characters: [],
  };

  return (
    <div className="container">
      <div className="row mb-3">
        {isLoading ? (
          <h1 className="text-center mb-3">Loading...</h1>
        ) : (
          <>
            <h1 className="text-center mb-3">
              Episode name :{" "}
              <span className="text-primary">
                {info.name === "" ? "Unknown" : info.name}
              </span>
            </h1>
            <h5 className="text-center">
              Air Date: {info.air_date === "" ? "Unknown" : info.air_date}
            </h5>{" "}
          </>
        )}
      </div>
      <div className="row">
        <div className="col-lg-3 col-12 mb-4">
          <h4 className="text-center mb-4">Pick Episode</h4>
          <InputSelector
            label="Episode"
            onChange={setEpisodeId}
            values={episodeListValues}
          />
        </div>
        {!isLoading && (
          <div className="col-lg-8 col-12">
            <div className="row">
              <CharactersList characters={characters} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Episodes;
