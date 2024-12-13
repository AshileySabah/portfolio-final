import { Box } from "@mui/material";
import styled, { css } from "styled-components";

export const Container = styled(Box)`
  text-align: center;
  width: 100%;

  span {
    color: #2ea103;
  }

  p,
  span {
    ${({ theme }) => css`
      ${theme.breakpoints.down("md")} {
        font-weight: bold !important;
      }
    `};

    ${({ theme }) => css`
      ${theme.breakpoints.up("xs")} {
        letter-spacing: 6px !important;
        font-size: 21px !important;
      }
    `};

    ${({ theme }) => css`
      ${theme.breakpoints.up("sm")} {
        letter-spacing: 15px !important;
        font-size: 30px !important;
      }
    `};

    ${({ theme }) => css`
      ${theme.breakpoints.up("md")} {
        letter-spacing: 20px !important;
        font-size: 50px !important;
      }
    `};

    ${({ theme }) => css`
      ${theme.breakpoints.up("lg")} {
        letter-spacing: 20px !important;
        font-size: 60px !important;
      }
    `};
  }
`;
