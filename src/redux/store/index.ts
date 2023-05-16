/** @format */

import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import RootReducer from "../reducers";

const Store = createStore(RootReducer, applyMiddleware(thunk));
export type AppState = ReturnType<typeof RootReducer>;

export default Store;
