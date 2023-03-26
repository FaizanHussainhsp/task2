import { Box, Link } from "@mui/material";
import React from "react";
import { SearchInput } from "../searchinput";

const MonitorSideBar = () => {
  return (
    <>
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "1px solid #dee2e6",
          borderRadius: "10px 10px 0 0",
          margin: "-10px -10px 10px",
          padding: "10px",
        }}
      >
        <Box
          component="div"
          className="placeholder"
          sx={{
            display: "inline-block",
            minHeight: "1em",
            verticalAlign: "middle",
            cursor: "wait",
            backgroundColor: "currentColor",
            opacity: ".5",
          }}
        ></Box>
        <Box
          component="div"
          className="searchWrapper"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Link href="#" sx={{ padding: "10px", color: "silver" }}>
            <svg
              class="svg-inline--fa fa-search fa-w-16"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="search"
              role="img"
              height="1rem"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              data-v-30eaab58=""
            >
              <path
                class=""
                fill="currentColor"
                d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
              ></path>
            </svg>
          </Link>
          <Box component="form" sx={{ display: "block", marginTop: "0em" }}>
            <SearchInput placeholder="Search..." />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          overflowY: "auto",
          height: "calc(100% - 65px)",
          display: "block",
        }}
      >
        <Box
          sx={{
            textAlign: "center!important",
            marginTop: "1rem!important",
            display: "block",
          }}
        >
          No Monitors, please
          <Link
            sx={{
              color: "#111",
              textDecoration: "underline",
              cursor: "pointer",
              textAlign: "center!important",
              marginLeft: "5px",
            }}
          >
            add one
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default MonitorSideBar;
