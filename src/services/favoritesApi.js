import { post, get, del } from './request';

const URL = '/api';
const FAVORITES_URL = `${URL}/favorites`;

const getFavoriteUrl = FAVORITES_URL;

export const addFavorite = ({ id, name, featured_image, location, description }) => {
  const url = getFavoriteUrl(id);
  return post(url, {
    id,
    name,
    featured_image,
    location,
    description
  });
};

export const getFavorites = () => {
  return get(`${FAVORITES_URL}.json`)
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