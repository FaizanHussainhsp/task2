import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {};

export function Modalset(props) {
  return (
    <div style={{}}>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        sx={{}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: +props.width,
            //   height: 100,

            borderRadius: "20px",
            bgcolor: "background.paper",
            border: "2px solid gray",
            boxShadow: 24,
          }}
        >
          {props.children}
        </Box>
      </Modal>
    </div>
  );
}
