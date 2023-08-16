import React, { useState } from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({ title, id, content, fetchPhotosByTopic }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
    if (!isSelected) {
      fetchPhotosByTopic(id);
    }
  };

  return (
    <div className={`topic-list__item ${isSelected ? 'selected' : ''}`}>
      <span onClick={handleClick}>{title}</span>
      {isSelected && <p>{content}</p>}
    </div>
  );
};

export default TopicListItem;
