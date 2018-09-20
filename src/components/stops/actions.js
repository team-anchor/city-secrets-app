import { STOP_ADD, STOP_REMOVE } from './reducers';
import { addStopToTour, removeStopInTour } from '../../services/toursApi';
// import shortid from 'shortid';

export const add = (tourId, stop) => {
  stop.tourId = tourId;
  return {
    type: STOP_ADD,
    payload: addStopToTour(tourId, stop)
  };
};

export const remove = stop => ({
  type: STOP_REMOVE,
  payload: removeStopInTour(stop.tourId, stop.key).then(() => stop)
});

// export const update = stop => {
//   return {
//     type: STOP_UPDATE,
//     payload: updateStopInTour(stop.tourId, stop)
//   };
// };