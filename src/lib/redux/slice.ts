import { createSlice } from "@reduxjs/toolkit";
import { ISlice } from "./model";

export const slice = createSlice;

export const getSliceAction = (reducerNames: string[], currSlice: ISlice) => {
  const reducers: Record<string, any> = {};
  reducerNames.forEach((reducer) => {
    reducers[reducer] = currSlice.actions[reducer];
  });
  return reducers;
};
