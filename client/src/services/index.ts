/* eslint-disable import/no-anonymous-default-export */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

// Set the API endpoint
// const API_ENDPOINT = 'http://localhost:5000/api';

// Create a new instance of axios
const instance = axios.create({
  baseURL: 'http://localhost:5000/api/',
});

// Add a request interceptor
instance.interceptors.request.use(
  (config: any) => {
    // Add any headers or tokens that you need for authentication or authorization
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    // Handle errors here
    return Promise.reject(error);
  }
);

// Helper functions for making requests

interface RequestOptions extends AxiosRequestConfig {
  data?: any;
}

const get = (url: string, params?: any, options?: RequestOptions) => {
  return instance
    .get(url, { params, ...options })
    .then((response) => response.data)
    .catch((error) => {
      if (error && error.response) {
        throw error.response.data;
      }
      throw error;
    });
};

const post = (url: string, data?: any, options?: RequestOptions) => {
  return instance
    .post(url, data, options)
    .then((response) => response.data)
    .catch((error) => {
      if (error && error.response) {
        throw error.response.data;
      }
      throw error;
    });
};

const put = (url: string, data?: any, options?: RequestOptions) => {
  return instance
    .put(url, data, options)
    .then((response) => response.data)
    .catch((error) => {
      if (error && error.response) {
        throw error.response.data;
      }
      throw error;
    });
};

const del = (url: string, data?: any, options?: RequestOptions) => {
  return instance
    .delete(url, { data, ...options })
    .then((response) => response.data)
    .catch((error) => {
      if (error && error.response) {
        throw error.response.data;
      }
      throw error;
    });
};

export default {
  get,
  post,
  put,
  delete: del,
};
