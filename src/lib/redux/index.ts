import { Provider, useDispatch, useSelector } from "react-redux";

export const StoreProvider = Provider;
export const useReduxDispatch = useDispatch;
export const useReduxSelector = useSelector;
export * from "./store";
export * from "./slice";
export * from "./model";
