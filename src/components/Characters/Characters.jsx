import React from "react";
import CharacterCard from "../CharacterCard/CharacterCard";

const Characters = ({ results }) => {
  if (!results) {
    return <>No Characters Found :/</>;
  }

  return (
    <>
      {results.map((x) => {
        const { id, image, name, status, location } = x;

        return (
          <CharacterCard
            key={id}
            image={image}
            name={name}
            status={status}
            location={location}
          />
        );
      })}
    </>
  );
};

export default Characters;
