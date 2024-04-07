import axios from 'axios';
import Urls from './constants';

const instance = axios.create({
  baseURL: Urls.BASE_URLS,
  timeout: 1000,
});

export default instance;
