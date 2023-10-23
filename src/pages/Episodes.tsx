import { useGetEpisodeDetails } from "hooks/episodes";
import React, { useState } from "react";

const defaultInfo = { air_date: "", name: "" };

const Episodes = (): React.ReactElement => {
  const [episodeId] = useState(1);
  const { data: episodeDetailsData, isLoading } =
    useGetEpisodeDetails(episodeId);
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
    </div>
  );
};

export default Episodes;
