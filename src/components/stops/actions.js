import { STOP_ADD, STOP_REMOVE } from './reducers';
import { addStopToTour, removeStopInTour } from '../../services/toursApi';
// import shortid from 'shortid';

export const addStop = (tourid, stop) => {
  stop.tourid = tourid;
  return {
    type: STOP_ADD,
    payload: addStopToTour(tourid, stop)
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