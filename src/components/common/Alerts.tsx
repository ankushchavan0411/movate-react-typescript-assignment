/** @format */

import CloseIcon from "@mui/icons-material/Close";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { alertMessage } from "../../redux/actions/alertsAction";
import { AppState } from "../../redux/store";

interface AlertsProps {}

const Alerts: React.FC<AlertsProps> = () => {
  const [open, setOpen] = React.useState(false);
  const { alert } = useSelector((state: AppState) => state.alert);
  const dispatch: Dispatch<any> = useDispatch();

  React.useEffect(() => {
    if (alert.text !== "" && alert.type !== "") {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [alert]);

  React.useEffect(() => {
    dispatch(alertMessage({ text: "", type: "" }));
  }, [dispatch]);

  return (
    <Box sx={{ width: "100%" }}>
      <Collapse in={open}>
        <Alert
          severity={alert?.type}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                dispatch(alertMessage({ text: "", type: "" }));
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          <AlertTitle className="text-uppercase">{alert?.type}</AlertTitle>
          <strong className="text-capitalize">{alert?.text}</strong>
        </Alert>
      </Collapse>
    </Box>
  );
};

export default Alerts;
