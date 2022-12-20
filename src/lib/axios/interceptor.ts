import axios, { AxiosInstance } from "axios";

export const generateAxiosInstance = (baseUrl?: string): AxiosInstance => {
  if (baseUrl) return axios.create({ baseURL: baseUrl });
  return axios.create();
};

export const configRequest = (
  instance: AxiosInstance,
  contentType: string = "application/json",
  token: string
) => {
  return instance.interceptors.request.use(
    (request) => {
      if (request.headers?.common) {
        (request.headers.common as Record<string, any>)["content-type"] =
          contentType;
        (request.headers.common as Record<string, any>)["bearer"] = token;
      }
      return request;
    },
    (err) => {
      Promise.reject(err);
    }
  );
};

export const configResponse = (instance: AxiosInstance) => {
  return instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (err) => {
      Promise.reject(err);
    }
  );
};
