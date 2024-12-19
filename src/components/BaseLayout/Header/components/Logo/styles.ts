import { Box } from "@mui/material";
import styled, { css } from "styled-components";

export const LogoContainer = styled(Box)`
  fill: ${({ theme }) => theme?.palette?.primary?.main};

  .desktop-logo {
    width: 210px;

    ${({ theme }) => css`
      ${theme.breakpoints.down("sm")} {
        display: none;
      }
    `};
  }

  .mobile-logo {
    width: 35px;
    display: none;

    ${({ theme }) => css`
      ${theme.breakpoints.down("sm")} {
        display: block;
      }
    `};
  }
`;
