import React from "react";
import CharacterCard from "../CharacterCard/CharacterCard";

const Characters = ({ characters }) => {
  if (!characters) {
    return <>No Characters Found :/</>;
  }

  return (
    <>
      {characters.map((character) => {
        const { id, image, name, status, location } = character;

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
