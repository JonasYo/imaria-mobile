import axios from 'axios';
import {AsyncStorage} from 'react-native';

const apiConsumer = axios.create({
  baseURL: 'localhost:3000',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

apiConsumer.interceptors.response.use(
  res => {
    return res;
  },
  error => {
    return Promise.reject(error.response);
  },
);

apiConsumer.interceptors.request.use(async config => {
  const token = AsyncStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiConsumer;
