/** @format */

import { ALERT_MESSAGE } from "../../const/actionTypes";
import { AlertsAction, AlertsState } from "../../types/types";

const initialState: AlertsState = {
  alert: {
    text: "",
    type: "",
  },
};

const AlertsReducer = (
  state: AlertsState = initialState,
  action: AlertsAction
): AlertsState => {
  switch (action.type) {
    case ALERT_MESSAGE: {
      return {
        ...state,
        alert: {
          text: action.alert.text,
          type: action.alert.type,
        },
      };
    }
  }
  return state;
};

export default AlertsReducer;
