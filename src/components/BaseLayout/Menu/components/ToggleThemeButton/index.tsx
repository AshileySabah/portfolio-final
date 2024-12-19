import { useMemo } from "react";
import { useTheme } from "@/hooks/Theme";
import { IconButton, Tooltip } from "@mui/material";
import NightlightIcon from "@mui/icons-material/Nightlight";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export const ToggleThemeButton = () => {
  const { mode, toggleThemeMode } = useTheme();

  const tooltipTitle = useMemo(() => {
    const title = "Mudar para tema ";
    const oppositeMode = mode === "dark" ? "claro" : "escuro";
    return title + oppositeMode;
  }, [mode]);

  return (
    <Tooltip title={tooltipTitle} arrow>
      <IconButton onClick={toggleThemeMode} color="primary">
        {mode === "dark" ? <NightlightIcon /> : <Brightness7Icon />}
      </IconButton>
    </Tooltip>
  );
};
