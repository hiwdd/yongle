import axios from 'axios';
import { Toast } from 'vant';

const server = axios.create({
  timeout: 5000,
  withCredentials: true
});

server.interceptors.request.use(
  config => {
    Toast.loading({
      mask: true,
      message: '加载中...',
      duration: 0
    });
    return config;
  },
  e => {
    return Promise.reject(e);
  }
);

server.interceptors.response.use(
  res => {
    if (res.statusText === 'OK') {
      Toast.clear();
      return res.data.data;
    }
  },
  e => {
    return Promise.reject(e);
  }
);

export const http = (method, url, data = {}) => {
  if (method == 'get') {
    return server.get(url, {
      params: data
    });
  } else if (method == 'post') {
    return server.post(url, data);
  } else {
    return;
  }
};
