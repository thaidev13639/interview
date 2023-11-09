import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { pageReduce } from "./reducer/pageReducer";

const rootReducer = combineReducers({
  pageReducer: pageReduce,
});

export const Store = configureStore({
  reducer: rootReducer,
  devTools: true,
});
