import { STOP_ADD, STOP_REMOVE } from './reducers';
import { addStopToTour, removeStopInTour } from '../../services/toursApi';
// import shortid from 'shortid';

export const addStop = (tourId, stop) => {
  stop.tourId = tourId;
  return {
    type: STOP_ADD,
    payload: { tourId: addStopToTour(tourId, stop) }
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