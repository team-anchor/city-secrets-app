import { get } from './request';

const URL = '/api';
const TOURS_URL = `${URL}/tours`;
const EVERYTHING_URL = `${TOURS_URL}`;

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

export function search({ search }, { page }) {
  const searchTerm = `${search}`;
  const paging = `${page}`;

  return get(`${EVERYTHING_URL}${searchTerm}${paging}`);
}

export function getMovies(id) {
  if(id) {
    return getUrl(`${EVERYTHING_URL}/${id}`);
  }
  else {
    return getUrl(EVERYTHING_URL);
  }
}