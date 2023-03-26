import { Box, Link } from "@mui/material";
import React from "react";

const AddNewMonitor = () => {
  return (
    <Box
      sx={{
        width: "29.3vw",

        display: {
          xs: "none",
          sm: "none",
          md: "block",
        },
      }}
    >
      <Link
        href="#"
        sx={{
          textDecoration: "none",
          paddingLeft: "20px",
          paddingRight: "20px",
          color: "#fff",
          backgroundColor: "#7ce8a4",
          borderColor: "#7ce8a4",
          marginBottom: "1rem!important",
          display: "inline-block",
          fontWeight: 400,
          lineHeight: 1.5,
          textAlign: "center",
          textDecoration: "none",
          verticalAlign: "middle",
          cursor: "pointer",
          userSelect: "none",
          border: "1px solid transparent",
          padding: "0.575rem 1.5rem",
          fontSize: "1rem",
          borderRadius: "50rem",
          transition:
            "color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out",
        }}
      >
        <svg
          class="svg-inline--fa fa-plus fa-w-14"
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="plus"
          width="0.875em"
          height="0.875em"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          data-v-653c02ff=""
        >
          <path
            class=""
            fill="currentColor"
            d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
          ></path>
        </svg>
        <Box component="span" sx={{ marginLeft: "1px" }}>
          Add New Menitor
        </Box>
      </Link>
    </Box>
  );
};

export default AddNewMonitor;
