import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";

export const MenuShadow = styled(Box)`
  -webkit-box-shadow: 0px 10px 13px -7px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 10px 13px -7px rgba(0, 0, 0, 1);
  box-shadow: 0px 10px 13px -7px rgba(0, 0, 0, 1);
  background: ${({ theme }) => theme?.palette?.background?.default};
`;

export const MenuContainer = styled(Box)`
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const LogoContainer = styled(Box)`
  svg {
    fill: ${({ theme }) => theme?.palette?.primary?.main};
    width: 210px;
  }
`;

export const ButtonLinkDesktop = styled(Button)`
  margin: 0 8px;
  font-weight: 600;
  border-radius: 0;
  :hover {
    background: unset;
    border-bottom: 1px solid ${({ theme }) => theme?.palette?.primary?.main};
  }
`;

export const ButtonLinkMobile = styled(Button)`
  text-decoration: none;
  color: inherit;
  display: block;
`;
