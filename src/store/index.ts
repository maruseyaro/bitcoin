import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";
import latestPosts from "./latestPosts";

const reducer = combineReducers({
  latestPosts,
});

export const store = configureStore({ reducer });

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
