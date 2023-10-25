import React from "react";
import CharacterCard from "../CharacterCard/CharacterCard";
import { Character } from "../../helpers/types";
import { Link } from "react-router-dom";

type Props = {
  page: string;
  characters: Character[];
};

const CharactersList = ({ page, characters }: Props): React.ReactElement => {
  if (!characters) {
    return <>No Characters Found :/</>;
  }

  return (
    <>
      {characters.map((character) => {
        const { id, image, name, status, location } = character;

        return (
          <Link
            to={`${page}/${id}`}
            key={id}
            className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
          >
            <CharacterCard
              key={id}
              image={image}
              name={name}
              status={status}
              location={location}
            />
          </Link>
        );
      })}
    </>
  );
};

export default CharactersList;
