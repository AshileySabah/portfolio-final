import { Paper } from "@mui/material";
import styled, { css } from "styled-components";

export const LogoContainer = styled(Paper)`
  width: 100%;
  fill: ${({ theme }) => theme?.palette?.primary?.main};
  display: flex;
  justify-content: center;
  padding: 5px 0;
  border-top: 1px solid ${({ theme }) => theme?.palette?.grey?.[400]};

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
