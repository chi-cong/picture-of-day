import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { log } from "console";

// empty store at initial loading
export const store = configureStore({
  reducer: {},
});

// create a property contains all lazy-loaded reducer
(store as Record<string, any>).asyncReducer = {};

export const addReducer = (key: string, reducer: any): boolean => {
  const asyncReducer: Record<string, any> = (store as Record<string, any>)
    .asyncReducer;
  // only add new reducer if the key hasn't existed
  if (!Object.prototype.hasOwnProperty.call(asyncReducer, key)) {
    (store as Record<string, any>).asyncReducer[key] = reducer;

    const newRootReducer = createRootReducer(asyncReducer);
    store.replaceReducer(newRootReducer);
    return true;
  } else {
    return false;
  }
};

export const removeReducer = (key: string, reducer: any): boolean => {
  const asyncReducer: Record<string, any> = (store as Record<string, any>)
    .asyncReducer;
  if (!Object.prototype.hasOwnProperty.call(asyncReducer, key)) {
    delete (store as Record<string, any>).asyncReducer[key];
    return true;
  } else {
    return false;
  }
};

const createRootReducer = (asyncReducer: Record<string, any>) => {
  return combineReducers({ ...asyncReducer });
};

export type RootState = ReturnType<typeof store.getState>;

export const AppDispatch = typeof store.dispatch;
