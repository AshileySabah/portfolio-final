import { Toolbar, Container } from "@mui/material";
import { MenuDesktop } from "./components/Desktop";
import { MenuMobile } from "./components/Mobile";
import { MenuContainer, Menu } from "./styles";

export const Header = () => {
  return (
    <Menu sx={{ borderRadius: 0 }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <MenuContainer sx={{ display: { xs: "none", lg: "flex" } }}>
            <MenuDesktop />
          </MenuContainer>
          <MenuContainer sx={{ display: { xs: "flex", lg: "none" } }}>
            <MenuMobile />
          </MenuContainer>
        </Toolbar>
      </Container>
    </Menu>
  );
};
