import React, { useState } from 'react';

import './App.scss';
import HomeRoute from './routes/HomeRoute';
import useApplicationData from './hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation

const App = () => {

  const {
    photoData,
    topicData,
    favorites,
    loading,
    toggleFavorite,
    isModalOpen,
    selectedPhoto,
    handleCloseModal,
    handlePhotoClick,
    fetchPhotosByTopic
  } = useApplicationData();

  return (
<div className="App">
      <HomeRoute 
      photoData={photoData}
      topicData={topicData} 
      handlePhotoClick={handlePhotoClick}
      handleCloseModal={handleCloseModal}
      isModalOpen={isModalOpen}
      selectedPhoto={selectedPhoto}
      fetchPhotosByTopic={fetchPhotosByTopic}
      />
    </div>
  );
};

export default App;
