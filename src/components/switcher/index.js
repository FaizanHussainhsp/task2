import React from "react";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 32,
  height: 14,
  padding: 0,

  borderRadius: "100px",
  display: "flex",
  "& .css-1m9pwf3": {
    boxShadow: " 0px 0px 100px black",
  },
  "&:active": {
    "& .MuiSwitch-thumb": {
      //   width: 18,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      //   transform: "translateX(28px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      boxShadow: "20px 20px 20px red",
      transform: "translateX(18px)",
      color: "#ffffff",
      "& + .MuiSwitch-track": {
        opacity: 1,

        backgroundColor: theme.palette.mode === "dark" ? "#5cdd8b" : "#5cdd8b",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    width: 10,
    height: 10,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));

const Antswitch = () => {
  return (
    <AntSwitch defaultChecked inputProps={{ "aria-label": "ant design" }} />
  );
};
export default Antswitch;
