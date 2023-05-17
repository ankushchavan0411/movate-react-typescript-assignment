/** @format */

import CloseIcon from "@mui/icons-material/Close";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import * as React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";

interface AlertsProps {}

const Alerts: React.FC<AlertsProps> = () => {
  const [open, setOpen] = React.useState(false);
  const { alert } = useSelector((state: AppState) => state.alert);

  React.useEffect(() => {
    if (alert.text !== "" && alert.type !== "") {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [alert]);

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
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          <AlertTitle>{alert?.type}</AlertTitle>
          <strong>{alert?.text}</strong>
        </Alert>
      </Collapse>
    </Box>
  );
};

export default Alerts;
