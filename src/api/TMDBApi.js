import config from '../../config';
import axios from 'axios';

const {ApiKey} = config;

const getFilmsFromApiWithSearchedText = async (text, page) => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&language=fr&query=${text}&page=${page}`;
  try {
    return await (await axios.get(url)).data;
  } catch (error) {
    return error;
  }
};

const getImageFromApi = name => `https://image.tmdb.org/t/p/w300${name}`;

export {getFilmsFromApiWithSearchedText, getImageFromApi};
