/** @format */

import { ALERT_MESSAGE } from "../../const/actionTypes";
import {
  AlertsAction,
  DispatchTypeAlertsMessage,
  IAlerts,
} from "../../types/types";

export function alertMessage(alert: IAlerts) {
  const action: AlertsAction = {
    type: ALERT_MESSAGE,
    alert,
  };

  return (dispatch: DispatchTypeAlertsMessage) => {
    dispatch(action);
  };
}
