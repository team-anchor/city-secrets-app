// import { TOURS_LOAD } from '../tours/reducers';

export const STOP_ADD = 'STOP_ADD';
export const STOP_REMOVE = 'STOP_REMOVE';
export const STOP_UPDATE = 'STOP_UPDATE';

export const getStops = state => state;
export const getStopsByTourId = (state, id) => {
  return getStops(state)[id];
};

export function stops(state = {}, { type, payload }) {
  switch(type) {
    case STOP_REMOVE:
      return {
        ...state,
        stops: state[stops].filter(stop => stop._id !== payload._id)
      };
    case STOP_UPDATE:
      return {
        ...state,
        stops: state[stops].map(stop => stop._id === payload._id ? payload : stop)
      };
    default:
      return state;
  }
}