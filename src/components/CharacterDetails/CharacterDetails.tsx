import { useGetCharacterDetails } from "hooks/characters";
import React from "react";
import { useParams } from "react-router-dom";

const defaultCharacter = {
  id: 0,
  image: "",
  name: "",
  origin: "",
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

  return (
    <div className="container d-flex justify-content-center mb-5">
      <div className="d-flex flex-column gap-3">
        <h1 className="text-center">{character.name}</h1>
        <img className="img-fluid" src={character.image} alt="" />
      </div>
    </div>
  );
};

export default CharacterDetails;
