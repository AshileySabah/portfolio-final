import { Toolbar, Container } from "@mui/material";
import { MenuDesktop } from "./MenuDesktop";
import { MenuMobile } from "./MenuMobile";
import { MenuContainer, MenuShadow } from "./styles";

export const Menu = () => {
  return (
    <MenuShadow>
      <Container maxWidth="xl">
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
