import { createSlice } from "@reduxjs/toolkit";
import { ISlice } from "./model";
import { addReducer } from "./store";

export const getSliceAction = (currSlice: ISlice) => {
  return currSlice.actions;
};
export const getSliceReducer = (currSlice: ISlice) => {
  return currSlice.reducer;
};

export const addNewSlice = (
  name: string,
  initialState: Record<string, unknown>,
  reducers: Record<string, any>
) => {
  const newSlice = createSlice({
    name,
    initialState,
    reducers,
  });
  const newSliceReducer = getSliceReducer(newSlice);

  addReducer(name, newSliceReducer);

  return newSlice;
};
