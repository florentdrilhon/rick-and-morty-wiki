import { getStatusBadge } from "helpers/characterHelpers";
import { Character } from "helpers/types";
import { useGetCharacterDetails } from "hooks/characters";
import React from "react";
import { useParams } from "react-router-dom";

const defaultCharacter: Character = {
  id: 0,
  image: "",
  name: "",
  origin: { name: "", url: "" },
  gender: "",
  species: "",
  location: { name: "", url: "" },
  status: null,
};

const CharacterDetails = (): React.ReactElement => {
  const { characterId } = useParams();
  const { data: characterDetailsData, isLoading } = useGetCharacterDetails(
    Number(characterId)
  );
  const character = characterDetailsData ?? defaultCharacter;

  if (isLoading) return <h1 className="text-center mb-3">Loading...</h1>;
  const statusBadge = getStatusBadge(character.status);

  return (
    <div className="container d-flex justify-content-center mb-5">
      <div className="d-flex flex-column gap-3">
        <h1 className="text-center">{character.name}</h1>
        <img className="img-fluid" src={character.image} alt="" />
        <div className={`badge bg-${statusBadge} fs-5`}>{character.status}</div>
        <div className="content">
          <div className="">
            <span className="fw-bold">Gender : </span>
            {character.gender}
          </div>
          <div className="">
            <span className="fw-bold">Location: </span>
            {character.location?.name}
          </div>
          <div className="">
            <span className="fw-bold">Origin: </span>
            {character.origin?.name}
          </div>
          <div className="">
            <span className="fw-bold">Species: </span>
            {character.species}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
