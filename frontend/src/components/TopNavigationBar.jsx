import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from 'components/TopicList';
import FavBadge from './FavBadge';


const TopNavigation = ({favoritesCount, topicData, fetchPhotosByTopic}) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList
      topicData={topicData}
      fetchPhotosByTopic={fetchPhotosByTopic}
      />
      <FavBadge 
      isFavPhotoExist={favoritesCount > 0}
      isSelected={true}
      />
    </div>
  )
}

export default TopNavigation;