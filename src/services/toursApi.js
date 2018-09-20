import { get, post, put, del } from './request';

const URL = '/api';
const AUTH_URL = `${URL}/auth`;
const SIGNUP_URL = `${AUTH_URL}/signup`;
const SIGNIN_URL = `${AUTH_URL}/signin`;
const TOURS_URL = `${URL}/tours`;

export const signup = credentials => post(SIGNUP_URL, credentials);
export const signin = credentials => post(SIGNIN_URL, credentials);

export function search({ search }) {
  return get(`${TOURS_URL}/city/${search}`);
}

export const getTours = () => get(TOURS_URL);
export const getTour = id => get(`${TOURS_URL}/${id}`);
export const postTour = data => post(TOURS_URL, data);
export const updateTour = data => put(TOURS_URL, data);

export const verifyUser = token => {
  return get(`${AUTH_URL}/verify`, {
    headers: {
      Authorization: token
    }
  });
};

export const addStopToTour = (tourid, stop) => {
  const url = `${TOURS_URL}/${tourid}/stops`;
  return put(url, stop)
    .then(res => {
      stop.id = res.name;
      return stop;
    });
};

export const removeStopInTour = (tourid, stopid) => {
  const url = `${TOURS_URL}/${tourid}/stops/${stopid}`;
  return del(url);
};