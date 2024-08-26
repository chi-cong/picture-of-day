import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export const http = {
  get: async (apiUrl: string, query?: AxiosRequestConfig<any>) => {
    const response = await axios.get(apiUrl, query);
    const data = await response.data;
    return data;
  },
  post: (apiUrl: string, query?: AxiosRequestConfig<any>) => {
    return axios.post(apiUrl, query);
  },
  put: (apiUrl: string, query?: AxiosRequestConfig<any>) => {
    return axios.put(apiUrl, query);
  },
  delete: (apiUrl: string, query?: AxiosRequestConfig<any>) => {
    return axios.delete(apiUrl, query);
  },
};
