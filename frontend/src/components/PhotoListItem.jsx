import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ id, imageSource, profile, username, location, onClick, toggleFavorite, isFavorite }) => {
  return (
    <article className="photo-list__item">
      <PhotoFavButton
       photoId={id}
       toggleFavorite={toggleFavorite}
       isFavorite={isFavorite}
       />
      <img className="photo-list__image" src={imageSource} alt="Photo" onClick={onClick}/>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile} alt="Profile"/>
        <div className="photo-list__user-info">
          <a className="photo-list__username">{username}</a>
          <a className="photo-list__user-location">
          {location.city}, {location.country}
          </a>
          </div>
        </div>
  </article>
  );
};

export default PhotoListItem;
