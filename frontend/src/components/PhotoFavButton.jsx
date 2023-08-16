import React, { useCallback, useState } from 'react';
import { useReducer } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton( { photoId, toggleFavorite, isFavorite }) {
// const [isFavorite, dispatch] = useReducer(toggleFavorite, )

  const handleClick = () => {
    toggleFavorite(photoId);
  };

  return (
<div className="photo-list__fav-icon" onClick={handleClick}>
    <div className="photo-list__fav-icon-svg">
      <FavIcon 
      selected={isFavorite}  
      />
    </div>
</div>
  );
}

export default PhotoFavButton;