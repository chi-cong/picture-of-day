import axios from "axios";

export const http = {
  get: (apiUrl: string) => {
    return axios.get(apiUrl);
  },
  post: (apiUrl: string, data: any) => {
    return axios.post(apiUrl, data);
  },
  put: (apiUrl: string, data: any) => {
    return axios.put(apiUrl, data);
  },
  delete: (apiUrl: string) => {
    return axios.delete(apiUrl);
  },
};
