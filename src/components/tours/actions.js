import { getTourList, getTourById, TOURS_LOAD, TOUR_LOAD, TOUR_ADD, TOUR_UPDATE } from './reducers';
import { getTours, getTour, postTour, updateTour as updateTourApi } from '../../services/toursApi';

export const loadTours = () => (dispatch, getState) => {
  const tourList = getTourList(getState());
  if(tourList.length) return;

  dispatch({
    type: TOURS_LOAD,
    payload: getTours()
  });
};

export const addTour = data => {
  return {
    type: TOUR_ADD,
    payload: postTour(data)
  };
};

export const loadTour = id => (dispatch, getState) => {
  const tour = getTourById(getState(), id);
  if(tour) return;

  dispatch({
    type: TOUR_LOAD,
    payload: getTour(id)
  });
};

export const updateTour = data => {
  return {
    type: TOUR_UPDATE,
    payload: updateTourApi(data)
  };
};