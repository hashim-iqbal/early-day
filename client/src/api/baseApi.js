import axios from 'axios';
import Cookies from 'js-cookie';

const defaultHeader = (config) => {
  config.headers.common['access-token'] = Cookies.get('access-token');
  config.headers.common['client'] = Cookies.get('client');
  config.headers.common['uid'] = Cookies.get('uid');
};

const baseApi = () => {
  const defaultOptions = {
    baseURL: 'http://localhost:3000/api',
  };
  const instance = axios.create(defaultOptions);

  instance.interceptors.request.use(
    (config) => {
      defaultHeader(config);
      return config;
    },
    (error) => {
      Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    (response) => response,
  );

  return instance;
};

export default baseApi();
