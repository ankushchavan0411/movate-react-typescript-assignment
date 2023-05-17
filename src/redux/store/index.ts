/** @format */

import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import RootReducer from "../reducers";

const Store = configureStore({
  reducer: RootReducer,
  middleware: [thunk],
});
export type AppState = ReturnType<typeof RootReducer>;

export default Store;
