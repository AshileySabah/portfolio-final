import { useState, MouseEvent } from "react";
import { Box, IconButton, Menu as MenuUI } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { pages } from "../../data";
import { ToggleThemeButton } from "../ToggleThemeButton";
import { Logo } from "../Logo";
import { ButtonLinkMobile } from "./styles";

export const MenuMobile = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <Box>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <MenuUI
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{ display: { xs: "block", lg: "none" } }}
        >
          {pages.map(({ name, route }) => (
            <ButtonLinkMobile
              key={name}
              href={route}
              onClick={handleCloseNavMenu}
            >
              {name}
            </ButtonLinkMobile>
          ))}
        </MenuUI>
      </Box>

      <Logo />

      <ToggleThemeButton />
    </>
  );
};
