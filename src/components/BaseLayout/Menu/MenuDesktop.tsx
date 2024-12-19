import { Box } from "@mui/material";
import { pages } from "./data";
import { ToggleThemeButton } from "./ToggleThemeButton";
import { Logo } from "./Logo";
import { ButtonLinkDesktop } from "./styles";

export const MenuDesktop = () => {
  return (
    <>
      <Logo />

      <Box display="flex">
        {pages.map(({ name, route }) => (
          <ButtonLinkDesktop key={name} href={route} variant="text">
            {name}
          </ButtonLinkDesktop>
        ))}
      </Box>

      <ToggleThemeButton />
    </>
  );
};
