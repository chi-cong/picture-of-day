import { log } from "console";
import { http } from "../lib/axios";
import { IApod } from "./apod-model";

const url = "https://api.nasa.gov/planetary/apod";
const key = "MulXx91PbOlC50m3BgjRAAdnEconVbdoU7yeT32B";

export const getAPOD = (): Promise<any> => {
  const apiUrl = url + "?api_key=" + key;
  const data: Promise<any> = http.get(apiUrl);

  return data;
};
