import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  useCallback,
  ReactNode,
  useEffect,
} from "react";
import {
  createTheme,
  PaletteMode,
  Theme,
  ThemeProvider as ThemeProviderUI,
} from "@mui/material";
import { lightThemePalette, darkThemePalette } from "./palette";
import { ThemeProvider as ThemeProviderStyled } from "styled-components";

interface ThemeContextProps {
  theme: Theme;
  mode: PaletteMode;
  toggleThemeMode: () => void;
}

const ThemeContext = createContext({} as ThemeContextProps);

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const modeKeyName = "ashileysantiago:mode";

  const [mode, setMode] = useState<PaletteMode>(() => {
    const getSessionMode = localStorage.getItem(modeKeyName) as PaletteMode;
    if (getSessionMode) {
      return getSessionMode;
    }
    return "dark";
  });

  useEffect(() => {
    localStorage.setItem(modeKeyName, mode);
  }, [mode]);

  const toggleThemeMode = useCallback(() => {
    const newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);
  }, [mode]);

  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode,
        ...(mode === "dark" ? darkThemePalette : lightThemePalette),
      },
    });
  }, [mode]);

  const values = useMemo(() => {
    return { theme, mode, toggleThemeMode };
  }, [mode, toggleThemeMode]);

  const mainColor = theme?.palette?.primary?.main;
  const background = theme?.palette?.background?.default;

  return (
    <ThemeContext.Provider value={values}>
      <style>
        {`
          body {
            background: ${background};
          }

          ::-webkit-scrollbar {
            width: 12px;
          }

          ::-webkit-scrollbar-thumb {
            background: ${mainColor};
            border-radius: 0 0 10px 10px;
          }
        `}
      </style>
      <ThemeProviderUI theme={theme}>
        <ThemeProviderStyled theme={theme}>{children}</ThemeProviderStyled>
      </ThemeProviderUI>
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export { ThemeProvider, useTheme };
