import { Box } from "@mui/material";
import React from "react";

const Wrapper = (props) => {
  return (
    <Box
      component="div"
      className="m3"
      sx={{
        marginTop: "1rem!important",
        marginBottom: "1rem!important",
        display: "block",
      }}
    >
      {props.children}
    </Box>
  );
};

export default Wrapper;
