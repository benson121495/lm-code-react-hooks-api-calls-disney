import { DisneyCharacter } from "../disney_character";
import React, { useContext } from 'react';
import { FavouritesContext } from '../App';

interface CharacterProps {
  character: DisneyCharacter;
  // characterFavourites: Array<number>;
  updateFavourites: (favourites: Array<number>) => void;
}

const Character: React.FC<CharacterProps> = ({ character, updateFavourites }) => {

  const characterFavourites = useContext(FavouritesContext);
  function toggleFavouriteForCharacter(characterId: number) {
    if (!characterFavourites.includes(characterId)) {
      // add to favourites
      updateFavourites([...characterFavourites, characterId]);
    }
    else {
      // remove from favourites
      const updatedFavourites = characterFavourites.filter((id) => id !== characterId);
      updateFavourites(updatedFavourites);
    }
  }

  return (
    <article className="card">

      <h2>{character.name}</h2>

      {/* <button className="card__button ">Add to favourites</button> */}
      <div className="card__button" onClick={() => toggleFavouriteForCharacter(character._id)}>
        {!characterFavourites.includes(character._id) ? "Add to Favourites" : "Favourited"}
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
