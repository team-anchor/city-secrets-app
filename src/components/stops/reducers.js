import { TOURS_LOAD, TOUR_ADD } from '../tours/reducers';

export const STOP_ADD = 'STOP_ADD';
export const STOP_REMOVE = 'STOP_REMOVE';
export const STOP_UPDATE = 'STOP_UPDATE';

export const getStops = state => state.stops;
export const getStopsByTourId = (state, id) => getStops(state)[id];

export function stops(state = [], { type, payload }) {
  switch(type) {
    case TOURS_LOAD:
      return payload.reduce((map, tour) => {
        map[tour._id] = tour.stops;
        return map;
      }, {});
    case TOUR_ADD:
      return {
        ...state,
        [payload._id]: []
      };
    case STOP_ADD:
      return {
        ...state,
        [payload.tourId]: [
          ...state[payload.tourId],
          payload
        ]
      };
    case STOP_REMOVE:
      return {
        ...state,
        [payload.tourId]: state[payload.tourId].filter(stop => stop._id !== payload._id)
      };
    case STOP_UPDATE:
      return {
        ...state,
        [payload.tourId]: state[payload.tourId].map(stop => stop._id === payload._id ? payload : stop)
      };
    default:
      return state;
  }
}