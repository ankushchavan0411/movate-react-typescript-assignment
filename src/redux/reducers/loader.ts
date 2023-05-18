/** @format */

import { LOADER_START, LOADER_STOP } from "../../const/actionTypes";
import { LoaderAction, LoaderState } from "../../types/types";

const initialState: LoaderState = {
  loading: false,
};

const LoaderReducer = (
  state: LoaderState = initialState,
  action: LoaderAction
): LoaderState => {
  switch (action.type) {
    case LOADER_START: {
      return {
        ...state,
        loading: true,
      };
    }
    case LOADER_STOP: {
      return {
        ...state,
        loading: false,
      };
    }
  }
  return state;
};
export default LoaderReducer;
