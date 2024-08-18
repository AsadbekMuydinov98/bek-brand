import axios from 'axios';
import {getItem} from '../helpers/persistance-storage'

const baseURL = 'http://localhost:8080/api';

const service = axios.create({
  withCredentials: true,
  baseURL,
});

// Response Interceptor
service.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response && error.response.status === 403) {
      localStorage.removeItem('accessToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Request Interceptor
service.interceptors.request.use((config) => {
  const token = getItem('accessToken')
  const authorization = token ? `Bearer ${token}` : ''
  config.headers.Authorization = authorization
  return config;
});

export { service };
