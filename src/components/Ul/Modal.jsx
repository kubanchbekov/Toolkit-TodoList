import { Box, Modal as MuiModal } from "@mui/material";
import React from "react";

const Modal = ({ children, open, onClose, ...rest }) => {
  return (
    <MuiModal open={open} onClose={onClose} {...rest}>
      <Box>{children}</Box>
    </MuiModal>
  );
};

export default Modal;
