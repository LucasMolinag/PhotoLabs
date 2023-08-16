import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';


const PhotoDetailsModal = ({ 
  isOpen, 
  onClose, 
  selectedPhoto, 
  handlePhotoClick,
  toggleFavorite,
  favorites,
  photoId,
  isFavorite
}) => {if (!isOpen) return null; 
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <PhotoFavButton
       photoId={photoId}
       toggleFavorite={toggleFavorite}
       isFavorite={isFavorite}
       />
      <img src={selectedPhoto.urls.regular} className={"photo-details-modal__image"} />
      <div className="photo-details-modal__photographer-details">
        <img className="photo-list__user-profile" src={selectedPhoto.user.profile} alt="Profile"/>
        <div className="photo-list__user-info">
          <a className="photo-list__username">{selectedPhoto.user.username}</a>
          <a className="photo-list__user-location">
          {selectedPhoto.location.city}, {selectedPhoto.location.country}
          </a>
        </div>
      </div>
      <div className="photo-details-modal__images">
        <h1>Similar Photos</h1>
        <PhotoList 
        photoData={Object.values(selectedPhoto.similar_photos)}
        onPhotoClick={handlePhotoClick} 
        toggleFavorite={toggleFavorite}
        favorites={favorites}
        />
      </div>
    </div>

  )
};

export default PhotoDetailsModal;
