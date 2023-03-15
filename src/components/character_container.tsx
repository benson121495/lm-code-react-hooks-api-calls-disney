import React from "react";
import { DisneyCharacter } from "../disney_character";
import Character from "./character";

interface CharacterContainerProps {
  characters: Array<DisneyCharacter>;
  updateFavourites: (favourites: Array<DisneyCharacter>) => void;
}

const CharacterContainer: React.FC<CharacterContainerProps> = ({ characters, updateFavourites }) => {

  return (
    <div className="card-container">
      {characters.map((character) => (
        <Character
          key={character._id}
          character={character}
          updateFavourites={updateFavourites}
        />
      ))}
    </div>

  );
};

export default CharacterContainer;
