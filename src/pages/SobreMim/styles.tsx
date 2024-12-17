import styled, { css } from "styled-components";
import { Box } from "@mui/material";

export const PhotoContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    fill: #2ea103;
    width: 80%;
  }
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

export const TerminalContainer = styled(Box)`
  p {
    margin: 0;
    margin-bottom: 5px;
    color: #2ea103;
    font-family: "Courier New", Courier, monospace;
    font-weight: bold;
  }

  span {
    color: white;
  }
`;

export const TerminalToolbar = styled(Box)`
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 10px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;

  & > div {
    width: 15px;
    height: 15px;
    border-radius: 15px;
  }
`;

export const TerminalContent = styled(Box)`
  background-color: black;
  padding: 5px 10px;
  color: white;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
`;
