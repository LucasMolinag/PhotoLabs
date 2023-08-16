import React, { useState } from 'react';

import './App.scss';
import HomeRoute from './routes/HomeRoute';
import useApplicationData from './hooks/useApplicationData';

const App = () => {

  const {
    photoData,
    topicData,
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
