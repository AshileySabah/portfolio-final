import Full from "@/assets/logo/full.svg?react";
import Icon from "@/assets/logo/icon.svg?react";
import { LogoContainer } from "./styles";

export const Logo = () => (
  <LogoContainer>
    <Full className="desktop-logo" />
    <Icon className="mobile-logo" />
  </LogoContainer>
);
