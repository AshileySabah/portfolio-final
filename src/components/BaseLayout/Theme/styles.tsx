import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#2ea103",
    },
    secondary: {
      main: "#085c8c",
    },
    grey: {
      50: "#ececec",
      100: "#f2f2f2",
      A400: "#b8b8b8",
    },
    error: {
      main: "#d32f2f",
      light: "#ff625a",
      dark: "#c62828",
      contrastText: "#fff",
    },
    warning: {
      main: "#ed6c02",
      light: "#ffbd2e",
      dark: "#e65100",
      contrastText: "#fff",
    },
    success: {
      main: "#2e7d32",
      light: "#28ca40",
      dark: "#1b5e20",
      contrastText: "#fff",
    },
  },
});
