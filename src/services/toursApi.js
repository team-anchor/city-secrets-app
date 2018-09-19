import { get, post } from './request';

const URL = '/api';
const AUTH_URL = `${URL}/auth`;
const SIGNUP_URL = `${AUTH_URL}/signup`;
const SIGNIN_URL = `${AUTH_URL}/signin`;
const TOURS_URL = `${URL}/tours`;

export const signup = credentials => post(SIGNUP_URL, credentials);
export const signin = credentials => post(SIGNIN_URL, credentials);

const getUrl = url => {
  const json = window.localStorage.getItem(url);
  if(json) {
    const response = JSON.parse(json);
    return Promise.resolve(response);
  }

  return get(url)
    .then(response => {
      window.localStorage.setItem(url, JSON.stringify(response));
      return response;
    });
};

export function search({ search }) {
  const searchTerm = `${search}`;
  return get(`${TOURS_URL}${searchTerm}`);
}

export function getTours(id) {
  if(id) {
    return getUrl(`${TOURS_URL}/${id}`);
  }
  else {
    return getUrl(TOURS_URL);
  }
}

export const verifyUser = token => {
  return get(`${AUTH_URL}/verify`, {
    headers: {
      Authorization: token
    }
  });
};