import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from './PhotoListItem';

const PhotoList = ({
  photoData,
  toggleFavorite,
  favorites,
  handlePhotoClick 
}) => {
  return (
    <div className="photo-list">
      {photoData.map((photo) => (
        <PhotoListItem
          key={photo.id}
          id={photo.id}
          imageSource={photo.urls.regular}
          profile={photo.user.profile}
          username={photo.user.username}
          location={photo.location}
          toggleFavorite={toggleFavorite}
          isFavorite={favorites.includes(photo.id)}
          onClick={() => handlePhotoClick(photo)}
        />
      ))}
    </div>
  );
};

export default PhotoList;
