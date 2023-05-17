/** @format */

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import * as React from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 30,
  p: 4,
};

interface Props {
  setOpen: (isOpen: boolean) => void;
  isOpen: boolean;
  modalTitle: string;
  children: React.ReactNode;
}

const DataModal: React.FC<Props> = ({
  isOpen,
  setOpen,
  modalTitle,
  children,
}) => {
  return (
    <Modal
      open={isOpen}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {modalTitle}
        </Typography>
        <hr />
        {children}
      </Box>
    </Modal>
  );
};

export default DataModal;
