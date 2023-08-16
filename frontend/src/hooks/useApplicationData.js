import { useReducer, useEffect } from 'react';

const initialState = {
  favorites: [],
  loading: true,
  isModalOpen: false,
  selectedPhoto: [],
  photoData: [],
  topicData: [],
};

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  CLOSE_MODAL: 'CLOSE_MODAL',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS'
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_PHOTO_DATA':
      return { ...state, photoData: action.payload };
    case 'SET_TOPIC_DATA':
      return { ...state, topicData: action.payload };
    case 'TOGGLE_FAVORITE':
      const updatedFavorites = state.favorites.includes(action.payload)
        ? state.favorites.filter(id => id !== action.payload)
        : [...state.favorites, action.payload];
      return { ...state, favorites: updatedFavorites };
    case 'SET_MODAL_OPEN':
      return { ...state, isModalOpen: action.payload };
    case 'SET_SELECTED_PHOTO':
      return { ...state, selectedPhoto: action.payload };
    default:
      return state;
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  useEffect(() => {
    fetch("/api/photos")
      .then((response) => {
        return response.json()})
      .then((data) => {
        return dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data })})
  }, []);

  useEffect(() => {
    fetch("/api/topics")
      .then((response) => {
        return response.json()})
      .then((data) => {
        return dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data })})
  }, []);

  const fetchPhotosByTopic = async (topicId) => {
    try {
      const response = await fetch(`/api/topics/photos/${topicId}`);
      const data = await response.json();
      console.log('DATA', data)
      dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data}); 
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  };

  const toggleFavorite = photoId => {
    dispatch({ type: 'TOGGLE_FAVORITE', payload: photoId });
  };

  const handleCloseModal = () => {
    dispatch({ type: 'SET_MODAL_OPEN', payload: false });
    dispatch({ type: 'SET_SELECTED_PHOTO', payload: [] });
  };

  const handlePhotoClick = photoDetails => {
    dispatch({ type: 'SET_SELECTED_PHOTO', payload: photoDetails });
    dispatch({ type: 'SET_MODAL_OPEN', payload: true });
  };

  return {
    ...state,
    toggleFavorite,
    handleCloseModal,
    handlePhotoClick,
    fetchPhotosByTopic
  };
};

export default useApplicationData;
