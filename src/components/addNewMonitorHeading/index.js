import { Box, Typography } from "@mui/material";
import React from "react";

const AddNewmonitorHeading = () => {
  return (
    <Box sx={{ width: "62.5vw" }}>
      <Typography
        variant="h1"
        sx={{
          marginBottom: "1rem!important",
          fontSize: "32px",
          fontFamily: ["Noto Sans", "sans-serif"].join(","),
          marginTop: 0,
          fontWeight: 500,
          lineHeight: 1.2,
          paddingTop: {
            xs: "80px",
            sm: "80px",
            md: "0px",
          },
        }}
      >
        Add New Monitor
      </Typography>
    </Box>
  );
};

export default AddNewmonitorHeading;
