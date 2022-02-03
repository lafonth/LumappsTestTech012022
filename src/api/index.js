import axios from 'axios';
import md5 from 'md5';

const timeStamp = new Date().getTime();
const toHash = timeStamp + process.env.REACT_APP_MARVEL_API_PRIVATE_KEY + process.env.REACT_APP_MARVEL_API_KEY;
const hash = md5(toHash);

const instance = axios.create({
  timeout: 10000,
  baseURL: 'https://gateway.marvel.com:443/v1/public',
});

const defaultParams = {
  ts: timeStamp,
  apikey: process.env.REACT_APP_MARVEL_API_KEY,
  hash,
};
// const fullURL = `${url}?ts=${defaultParams.ts}&apikey=${defaultParams.apiKey}&hash=${defaultParams.hash}&${query}`;

const get = (url, query) => instance.get(url, {
  params: {
    ...defaultParams,
    ...query,
  },
});

export { instance as api, get };
