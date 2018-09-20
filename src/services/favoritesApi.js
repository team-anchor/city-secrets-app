import { post, get, del } from './request';

const URL = '/api';
const FAVORITES_URL = `${URL}/favorites`;

const getFavoriteUrl = id => `${FAVORITES_URL}/${id}`;

export const addFavorite = ({ _id, name, description }) => {
  const url = getFavoriteUrl(_id);
  return post(url, {
    _id,
    name,
    description
  });
};

export const getFavorites = () => {
  return get(`${FAVORITES_URL}`)
    .then(res => {
      return Object.keys(res)
        .map(key => res[key]);
    });
};

export const getFavorite = id => {
  const url = getFavoriteUrl(id);
  return get(url);
};

export const removeFavorite = id => {
  const url = getFavoriteUrl(id);
  return del(url);
};