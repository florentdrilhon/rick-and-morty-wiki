import CharactersList from "components/CharactersList/CharactersList";
import InputSelector from "components/Filter/InputSelector";
import { LocationInfo } from "helpers/types";
import { useGetLocationDetails, useGetLocationsCount } from "hooks/locations";
import React, { useState } from "react";

const defaultInfo: LocationInfo = {
  dimension: "",
  name: "",
  type: "",
  id: null,
};

const Locations = (): React.ReactElement => {
  const [locationId, setLocationId] = useState(1);

  const { data: locationCountData } = useGetLocationsCount();
  const { data: locationDetailsData, isLoading } =
    useGetLocationDetails(locationId);

  const locationCount = locationCountData ?? 0;
  const locationList = Array.from(Array(locationCount).keys()).map(
    (index) => index + 1
  );
  const { info, characters } = locationDetailsData ?? {
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
              Location name :{" "}
              <span className="text-primary">
                {info.name === "" ? "Unknown" : info.name}
              </span>
            </h1>
            <h5 className="text-center">
              Air Date: {info.dimension === "" ? "Unknown" : info.dimension}
            </h5>
            <h6 className="text-center">
              Type: {info.type === "" ? "Unknown" : info.type}
            </h6>
          </>
        )}
      </div>
      <div className="row">
        <div className="col-lg-3 col-12 mb-4">
          <h4 className="text-center mb-4">Pick Location</h4>
          <InputSelector<number>
            label="Location"
            onChange={setLocationId}
            values={locationList}
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

export default Locations;
