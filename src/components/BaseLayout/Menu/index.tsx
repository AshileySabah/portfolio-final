import { Toolbar, Container } from "@mui/material";
import { MenuDesktop } from "./components/Desktop";
import { MenuMobile } from "./components/Mobile";
import { MenuContainer, MenuShadow } from "./styles";

export const Menu = () => {
  return (
    <MenuShadow>
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
    </MenuShadow>
  );
};
