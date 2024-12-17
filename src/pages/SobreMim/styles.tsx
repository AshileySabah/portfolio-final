import styled, { css } from "styled-components";
import { Box, Paper } from "@mui/material";

export const Card = styled(Paper)`
  border-radius: 5px;
  border: 2px solid #ececec;
  background-color: ${({ theme }) => theme?.palette?.common?.white};
  text-align: justify;

  -webkit-box-shadow: 4px 6px 5px 3px rgba(0, 0, 0, 0.3) !important;
  -moz-box-shadow: 4px 6px 5px 3px rgba(0, 0, 0, 0.3) !important;
  box-shadow: 4px 6px 5px 3px rgba(0, 0, 0, 0.3) !important;
`;

export const TypingEffectContainer = styled(Box)`
  p {
    ${({ theme }) => css`
      ${theme.breakpoints.down("md")} {
        font-weight: bold !important;
      }
    `};

    ${({ theme }) => css`
      ${theme.breakpoints.up("xs")} {
        font-size: 20px !important;
      }
    `};

    ${({ theme }) => css`
      ${theme.breakpoints.up("md")} {
        font-size: 30px !important;
      }
    `};

    ${({ theme }) => css`
      ${theme.breakpoints.up("lg")} {
        font-size: 40px !important;
      }
    `};
  }
`;

export const TerminalToolbar = styled(Box)`
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;

  & > div {
    width: 15px;
    height: 15px;
    border-radius: 15px;
  }
`;

export const TerminalContent = styled(Box)`
  padding: 5px 10px;
  color: white;

  border-color: #f2f2f2;
  border-width: 1px;

  border: 1px solid #f2f2f2;

  p {
    margin: 0;
    margin-bottom: 5px;
    color: #2ea103;
    font-weight: bold;

    font-size: 20px !important;
    font-family: monospace;
  }

  span {
    color: #cccccc;
  }

  .response {
    span {
      color: #2ea103;
    }

    p {
      color: #cccccc;
    }
  }
`;

export const PhotoContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    fill: #2ea103;
    width: 80%;
  }
`;
