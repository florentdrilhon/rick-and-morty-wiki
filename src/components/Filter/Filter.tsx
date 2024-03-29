import React, { useCallback } from "react";
import Gender from "./category/Gender";
import Species from "./category/Species";
import Status from "./category/Status";
import { StatusT } from "helpers/types";

type Props = {
  setPageNumber: (value: number) => void;
  setStatus: (value: StatusT | null) => void;
  setGender: (value: string) => void;
  setSpecies: (value: string) => void;
};

const Filter = ({
  setPageNumber,
  setStatus,
  setGender,
  setSpecies,
}: Props): React.ReactElement => {
  // TODO: prevent the window from reloading, the location.reload is useless
  const onClearButtonClick = useCallback(() => {
    setStatus(null);
    setGender("");
    setSpecies("");
    setPageNumber(1);
    window.location.reload();
  }, [setGender, setPageNumber, setSpecies, setStatus]);

  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className="text-center fw-bold fs-4 mb-2">Filters</div>
      <div
        style={{ cursor: "pointer" }}
        onClick={onClearButtonClick}
        className="text-primary text-decoration-underline text-center mb-3"
      >
        {" "}
        Clear Filters
      </div>
      <div className="accordion" id="accordionExample">
        {/* Category components will be placed here */}
        <Status setPageNumber={setPageNumber} setStatus={setStatus} />
        <Species setPageNumber={setPageNumber} setSpecies={setSpecies} />
        <Gender setPageNumber={setPageNumber} setGender={setGender} />
      </div>
    </div>
  );
};

export default Filter;
