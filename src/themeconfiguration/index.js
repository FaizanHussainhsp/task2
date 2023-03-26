import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: "Noto Sans",
  },
  components: {
    MuiSelect: {
      styleOverrides: {
        root: {
          // "&.Mui-focusVisible": {
          //   boxShadow: "rgba(92, 221, 139, 0.25) 0px 0px 0px 0.25rem",
          //   borderColor: "rgb(174, 238, 197)",
          //   outline: "0px",
          // },
        },
      },
    },
  },
});
