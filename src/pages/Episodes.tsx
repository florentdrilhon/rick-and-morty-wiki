import InputSelector from "components/Filter/InputSelector";
import { useGetEpisodeDetails, useGetEpisodesCount } from "hooks/episodes";
import React, { useState } from "react";

const defaultInfo = { air_date: "", name: "" };

const Episodes = (): React.ReactElement => {
  const [episodeId, setEpisodeId] = useState(1);

  const { data: episodeCountData } = useGetEpisodesCount();
  const { data: episodeDetailsData, isLoading } =
    useGetEpisodeDetails(episodeId);

  const episodeCount = episodeCountData ?? 0;
  const episodeList = Array.from(Array(episodeCount).keys()).map(
    (index) => index + 1
  );
  const { info } = episodeDetailsData ?? {
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
          <InputSelector<number>
            label="Episode"
            onChange={setEpisodeId}
            values={episodeList}
          />
        </div>
        <div className="col-lg-8 col-12">
          {/* <div className="row">
            <Card results={results} />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Episodes;
