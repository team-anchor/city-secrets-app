import { LOGOUT } from '../auth/reducers';

export const TOURS_LOAD = 'TOURS_LOAD';
export const TOUR_LOAD = 'TOUR_LOAD';
export const TOUR_ADD = 'TOUR_ADD';
export const TOUR_UPDATE = 'TOUR_UPDATE';
export const LOAD_START = 'LOAD_START';
export const LOAD_END = 'LOAD_END';
export const ERROR = 'ERROR';

export const getToursById = state => state.toursById;
export const getTourList = state => state.tourList;
export const getTourById = (state, id) => getToursById(state)[id];
export const getTour = state => state.tour;

export function toursById(state = [], { type, payload }) {
  switch(type) {
    case TOURS_LOAD:
      return payload.reduce((map, tour) => {
        map[tour._id] = {
          ...state[tour._id],
          ...tour
        };
        return map;
      }, {});
    case TOUR_LOAD:
      return {
        ...state,
        [payload._id]: payload
      };
    case LOGOUT:
      return {};
    default:
      return state;
  }
}

export function tourList(state = [], { type, payload }) {
  switch(type) {
    case TOURS_LOAD:
      return payload;
    case TOUR_ADD:
      return [...state, payload];
    case TOUR_UPDATE:
      return state.map(tour => tour._id === payload._id ? payload : tour);
    case LOGOUT:
      return [];
    default:
      return state;
  }
}