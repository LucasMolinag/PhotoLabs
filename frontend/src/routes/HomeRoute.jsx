import React, { useState } from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import PhotoDetailsModal from './PhotoDetailsModal';

const HomeRoute = (props) => {
  const [favorites, setFavorites] = useState([])

  const toggleFavorite = (photoId) => {
    if (favorites.includes(photoId)) {
      setFavorites((prevFavorites) => prevFavorites.filter((id) => id !== photoId));
    } else {
      setFavorites((prevFavorites) => [...prevFavorites, photoId]);
    }
  };
  
  return (
    <div className="home-route">
      <TopNavigation 
      favoritesCount={favorites.length}
      favorites={favorites}
      topicData={props.topicData}
      fetchPhotosByTopic={props.fetchPhotosByTopic}
      />
      <div className="photos-section">
        <h1>Featured Photos</h1>
        <PhotoList 
        photoData={props.photoData} 
        toggleFavorite={toggleFavorite} 
        favorites={favorites}
        handlePhotoClick={props.handlePhotoClick} 
        />
        <PhotoDetailsModal 
        isOpen={props.isModalOpen}
        onClose={props.handleCloseModal}
        selectedPhoto={props.selectedPhoto}
        handlePhotoClick={props.handlePhotoClick}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        photoId={props.selectedPhoto?.id}
        isFavorite={favorites.includes(props.selectedPhoto?.id)}
        />
      </div>
    </div>
  );
};

export default HomeRoute;
