import styled, { css } from "styled-components";
import { Box, Grid, Paper } from "@mui/material";

export const Card = styled(Paper)`
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme?.palette?.grey?.[50]};
  background-color: ${({ theme }) => theme?.palette?.common?.white};

  -webkit-box-shadow: 4px 6px 5px 3px rgba(0, 0, 0, 0.3) !important;
  -moz-box-shadow: 4px 6px 5px 3px rgba(0, 0, 0, 0.3) !important;
  box-shadow: 4px 6px 5px 3px rgba(0, 0, 0, 0.3) !important;
`;

export const TypingEffectContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => css`
    ${theme.breakpoints.down("355")} {
      min-height: 70px;
    }
  `};
`;

export const TerminalToolbar = styled(Box)`
  background-color: ${({ theme }) => theme?.palette?.grey?.[100]};
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;

  & > div {
    width: 15px;
    height: 15px;
    border-radius: 15px;

    &:nth-child(1) {
      background: ${({ theme }) => theme?.palette?.error?.light};
    }

    &:nth-child(2) {
      background: ${({ theme }) => theme?.palette?.warning?.light};
    }

    &:nth-child(3) {
      background: ${({ theme }) => theme?.palette?.success?.light};
    }
  }
`;

export const TerminalContent = styled(Box)`
  padding: 5px 10px;
  color: white;

  p {
    margin: 0;
    margin-bottom: 5px;
    color: ${({ theme }) => theme?.palette?.primary?.main};
    font-weight: bold;

    font-family: monospace;

    ${({ theme }) => css`
      ${theme.breakpoints.up("xs")} {
        font-size: 18px !important;
      }
    `};

    ${({ theme }) => css`
      ${theme.breakpoints.up("sm")} {
        font-size: 19px !important;
      }
    `};

    ${({ theme }) => css`
      ${theme.breakpoints.up("md")} {
        font-size: 19px !important;
      }
    `};

    ${({ theme }) => css`
      ${theme.breakpoints.up("lg")} {
        font-size: 20px !important;
      }
    `};
  }

  span {
    color: ${({ theme }) => theme?.palette?.grey?.A400};
  }

  .response {
    span {
      color: ${({ theme }) => theme?.palette?.primary?.main};
    }

    p {
      color: ${({ theme }) => theme?.palette?.grey?.A400};
    }
  }
`;

export const PhotoContainer = styled(Box)`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;

  svg {
    fill: ${({ theme }) => theme?.palette?.primary?.main};

    ${({ theme }) => css`
      ${theme.breakpoints.down("sm")} {
        width: 100%;
      }
    `};

    ${({ theme }) => css`
      ${theme.breakpoints.up("sm")} {
        width: 60%;
      }
    `};

    ${({ theme }) => css`
      ${theme.breakpoints.up("md")} {
        width: 100%;
      }
    `};

    ${({ theme }) => css`
      ${theme.breakpoints.up("lg")} {
        width: 90%;
      }
    `};
  }
`;

export const GridItem = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
