import { get } from './request';

const URL = '/api';
const TOURS_URL = `${URL}/tours`;

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
  const searchTerm = `&name=${search}`;
  return get(`${TOURS_URL}/${searchTerm}`);
}

export function getTours(id) {
  if(id) {
    return getUrl(`${TOURS_URL}/id/${id}`);
  }
  else {
    return getUrl(TOURS_URL);
  }
}