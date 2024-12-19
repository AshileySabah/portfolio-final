import { BrowserRouter } from "react-router-dom";
import { Routes } from "@/routes";
import { AlertProvider } from "@/hooks/Alert/useAlert";
import { BackdropLoaderProvider } from "@/hooks/BackdropLoader/useBackdropLoader";
import { ThemeProvider } from "./hooks/Theme";

export const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <BackdropLoaderProvider>
          <AlertProvider>
            <Routes />
          </AlertProvider>
        </BackdropLoaderProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};
