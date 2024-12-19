import Full from "@/assets/logo/full.svg?react";
import Icon from "@/assets/logo/icon.svg?react";
import { LogoContainer } from "./styles";

export const Footer: React.FC = () => (
  <LogoContainer sx={{ borderRadius: 0 }}>
    <Full className="desktop-logo" />
    <Icon className="mobile-logo" />
  </LogoContainer>
);
