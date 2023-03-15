import { DisneyCharacter } from "../disney_character";
import React, { useContext } from 'react';
import { FavouritesContext } from '../App';

interface CharacterProps {
  character: DisneyCharacter;
  // characterFavourites: Array<number>;
  updateFavourites: (favourites: Array<DisneyCharacter>) => void;
}

const Character: React.FC<CharacterProps> = ({ character, updateFavourites }) => {

  const characterFavourites = useContext(FavouritesContext);

  function isFavorite(characterId: number) {
    return characterFavourites.some(character => character._id === characterId);
  }

  function toggleFavouriteForCharacter(characterId: number) {
    if (!isFavorite(characterId)) {
      // add to favourites
      updateFavourites([...characterFavourites, character]);
    } else {
      // remove from favourites
      const updatedFavourites = characterFavourites.filter(character => character._id !== characterId);
      updateFavourites(updatedFavourites);
    }
  }

  return (
    <article className="card">

      <h2>{character.name}</h2>

      {/* <button className="card__button ">Add to favourites</button> */}
      <div className="card__button" onClick={() => toggleFavouriteForCharacter(character._id)}>
        {!isFavorite(character._id) ? "Add to Favourites" : "Favourited"}
      </div>
      <img
        className="card__img"
        src={character.imageUrl}
        alt={character.name}
      />

    </article>
  );
};

export default Character;
