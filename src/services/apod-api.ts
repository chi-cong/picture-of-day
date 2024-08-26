import { log } from "console";
import { http, AxiosRequestConfig } from "../lib/axios";
import { IApod } from "./apod-model";

const url = "https://api.nasa.gov/planetary/apod";
const key = "MulXx91PbOlC50m3BgjRAAdnEconVbdoU7yeT32B";

export const getAPOD = (date?: string): Promise<any> => {
  const dateQuery: AxiosRequestConfig = {
    params: { date: date },
  };
  const apiUrl = url + "?api_key=" + key;
  const data: Promise<any> = http.get(apiUrl, dateQuery);

  return data;
};
