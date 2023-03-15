import React from "react";
import { DisneyCharacter } from "../disney_character";
import Character from "./character";

interface CharacterContainerProps {
  characters: Array<DisneyCharacter>;
  characterFavourites: any;
  updateFavourites: (favourites: any) => void;
}

const CharacterContainer: React.FC<CharacterContainerProps> = ({ characters, characterFavourites, updateFavourites }) => {

  return (
    <div className="card-container">
      {characters.map((character) => (
        <Character
          key={character._id}
          character={character}
          characterFavourites={characterFavourites}
          updateFavourites={updateFavourites}
        />
      ))}
    </div>

  );
};

export default CharacterContainer;
