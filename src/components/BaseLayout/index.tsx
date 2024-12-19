import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Box } from "@mui/material";
import { ThemeProvider } from "./Theme";

export const BaseLayout = () => {
  return (
    <ThemeProvider>
      <Header />
      <Box>
        <Outlet />
      </Box>
      <Footer />
    </ThemeProvider>
  );
};
