import config from '../../config';
import axios from 'axios';

const {ApiKey} = config;

const getFilmsFromApiWithSearchedText = async text => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&language=fr&query=${text}`;
  try {
    return await (await axios.get(url)).data;
  } catch (error) {
    return error;
  }
};

export {getFilmsFromApiWithSearchedText};
