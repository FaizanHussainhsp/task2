import { Box } from "@mui/material";
import React from "react";
import { SaveButton } from "../button";

const StickyBtn = () => {
  return (
    <Box
      className="fixed"
      sx={{
        position: {
          sm: "static",
          md: "sticky",
        },
        bottom: 0,
        marginLeft: "-20px",
        marginRight: "-20px",
        padding: "1rem!important",
        zIndex: 100,
        backgroundColor: {
          sm: "rgba(255,255,255,1)",
          md: "rgba(255,255,255,.2)",
        },
        backdropFilter: {
          sm: "blur(0px)",
          md: "blur(2px)",
        },
        borderRadius: "0 0 10px 10px",
      }}
    >
      <SaveButton>Save</SaveButton>
    </Box>
  );
};

export default StickyBtn;
