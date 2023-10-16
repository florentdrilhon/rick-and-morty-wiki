import React from "react";
import CharacterCard from "../CharacterCard/CharacterCard";
import { Character } from "../../helpers/types";

type Props = {
  characters: Character[];
};

const Characters = ({ characters }: Props): JSX.Element => {
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
