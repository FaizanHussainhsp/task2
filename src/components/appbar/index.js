import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        borderBottom: "1px solid #dee2e6!important",
        color: "black",
        paddingTop: ".25rem!important",
        paddingBottom: ".25rem!important",
        display: {
          xs: "none",
          sm: "none",
          md: "block",
        },
        marginBottom: "1rem!important",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 640 640"
              fill="none"
            >
              <path
                d="M490.4 235.64C544.09 358.38 544.09 435.34 490.4 466.5C409.85 513.24 199.96 527.49 139.54 455.64C99.2601 407.74 99.2601 334.4 139.54 235.64C180.5 168.18 238.71 134.45 314.17 134.45C389.64 134.45 448.38 168.18 490.4 235.64Z"
                fill="url(#paint0_linear_381_799)"
              />
              <path
                d="M490.4 235.64C544.09 358.38 544.09 435.34 490.4 466.5C409.85 513.24 199.96 527.49 139.54 455.64C99.2601 407.74 99.2601 334.4 139.54 235.64C180.5 168.18 238.71 134.45 314.17 134.45C389.64 134.45 448.38 168.18 490.4 235.64Z"
                stroke="#F2F2F2"
                stroke-opacity="0.51"
                stroke-width="200"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_381_799"
                  x1="259.78"
                  y1="261.15"
                  x2="463.85"
                  y2="456.49"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#5CDD8B" />
                  <stop offset="1" stop-color="#86E6A9" />
                </linearGradient>
              </defs>
            </svg>
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "1.5rem!important",
                cursor: "pointer",
                marginLeft: "5px",
              }}
            >
              Uptime Kuma
            </Typography>
          </Box>
          <Box
            component="ul"
            sx={{
              listStyle: "none",
              display: "flex",
              height: "30px",
              transform: "translate(14px,-4px)",

              "&>*": {
                marginRight: "10px",
              },
            }}
          >
            <Box
              component="li"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                // backgroundColor: "#5cdd8b",
                color: "black",
                padding: "1.2rem .9rem",
                borderRadius: "50rem",
              }}
            >
              <Box
                component="span"
                sx={{
                  display: "inline-block",
                  transform: "translateY(1px)",
                }}
              >
                <svg
                  class="svg-inline--fa fa-stream fa-w-16"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  height="1rem"
                  data-icon="stream"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-v-db7aae29=""
                >
                  <path
                    class=""
                    fill="currentColor"
                    d="M16 128h416c8.84 0 16-7.16 16-16V48c0-8.84-7.16-16-16-16H16C7.16 32 0 39.16 0 48v64c0 8.84 7.16 16 16 16zm480 80H80c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16zm-64 176H16c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16z"
                  ></path>
                </svg>
              </Box>
              <Box
                component="span"
                sx={{
                  marginLeft: "5px",
                  transform: "translateY(-1px)",
                }}
              >
                Status Pages
              </Box>
            </Box>

            <Box
              component="li"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#5cdd8b",
                color: "#fff",
                padding: "1.2rem .9rem",
                borderRadius: "50rem",
              }}
            >
              <Box
                component="span"
                sx={{
                  display: "inline-block",
                  transform: "translateY(1px)",
                }}
              >
                <svg
                  class="svg-inline--fa fa-tachometer-alt fa-w-18"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="tachometer-alt"
                  role="img"
                  height="1rem"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  data-v-db7aae29=""
                >
                  <path
                    class=""
                    fill="currentColor"
                    d="M288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm0 64c14.71 0 26.58 10.13 30.32 23.65-1.11 2.26-2.64 4.23-3.45 6.67l-9.22 27.67c-5.13 3.49-10.97 6.01-17.64 6.01-17.67 0-32-14.33-32-32S270.33 96 288 96zM96 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm48-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm246.77-72.41l-61.33 184C343.13 347.33 352 364.54 352 384c0 11.72-3.38 22.55-8.88 32H232.88c-5.5-9.45-8.88-20.28-8.88-32 0-33.94 26.5-61.43 59.9-63.59l61.34-184.01c4.17-12.56 17.73-19.45 30.36-15.17 12.57 4.19 19.35 17.79 15.17 30.36zm14.66 57.2l15.52-46.55c3.47-1.29 7.13-2.23 11.05-2.23 17.67 0 32 14.33 32 32s-14.33 32-32 32c-11.38-.01-20.89-6.28-26.57-15.22zM480 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"
                  ></path>
                </svg>
              </Box>
              <Box
                component="span"
                sx={{
                  marginLeft: "5px",
                  transform: "translateY(-1px)",
                }}
              >
                Dashboard
              </Box>
            </Box>
            <Box
              component="li"
              sx={{
                display: "flex",
                alignItems: "center",

                backgroundColor: "rgba(200,200,200,.2)",
                padding: "1.2rem .9rem",
                borderRadius: "50rem",
              }}
            >
              <Box
                component="span"
                sx={{
                  display: "inline-block",
                  position: "relative",
                  transform: "translateX(-3px)",
                  width: "24px",
                  height: "24px",
                  borderRadius: "50rem",
                  backgroundColor: "#5cdd8b",
                  color: "#ffffff",
                }}
              >
                <Box
                  component="span"
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    fontWeight: "700",
                    fontSize: "10px",
                  }}
                >
                  H
                </Box>
              </Box>
              <Box
                component="span"
                sx={{
                  marginLeft: "5px",
                  transform: "translateY(2px)",
                }}
              >
                <svg
                  class="svg-inline--fa fa-angle-down fa-w-10"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="angle-down"
                  role="img"
                  height="1rem"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  data-v-db7aae29=""
                >
                  <path
                    class=""
                    fill="currentColor"
                    d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"
                  ></path>
                </svg>
              </Box>
            </Box>
            {/* <Box component="li" sx={{ display: "flex", alignItems: "center" }}>
              <svg
                class="svg-inline--fa fa-tachometer-alt fa-w-18"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="tachometer-alt"
                role="img"
                height="1rem"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                data-v-db7aae29=""
              >
                <path
                  class=""
                  fill="currentColor"
                  d="M288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm0 64c14.71 0 26.58 10.13 30.32 23.65-1.11 2.26-2.64 4.23-3.45 6.67l-9.22 27.67c-5.13 3.49-10.97 6.01-17.64 6.01-17.67 0-32-14.33-32-32S270.33 96 288 96zM96 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm48-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm246.77-72.41l-61.33 184C343.13 347.33 352 364.54 352 384c0 11.72-3.38 22.55-8.88 32H232.88c-5.5-9.45-8.88-20.28-8.88-32 0-33.94 26.5-61.43 59.9-63.59l61.34-184.01c4.17-12.56 17.73-19.45 30.36-15.17 12.57 4.19 19.35 17.79 15.17 30.36zm14.66 57.2l15.52-46.55c3.47-1.29 7.13-2.23 11.05-2.23 17.67 0 32 14.33 32 32s-14.33 32-32 32c-11.38-.01-20.89-6.28-26.57-15.22zM480 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"
                ></path>
              </svg>
              <Box
                component="span"
                sx={{
                  display: "block",
                  alignSelf: "flex-start",
                  marginLeft: "5px",
                }}
              >
                Dashboard
              </Box>
            </Box> */}
          </Box>
          {/* <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>{" "} */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
