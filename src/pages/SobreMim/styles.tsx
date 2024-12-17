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

export const InfoContainer = styled(Box)`
  text-align: justify;

  p {
    margin-bottom: 5px;
  }

  .pergunta {
    font-size: 25px;

    .codigo-animation {
      /* letter-spacing: 5px; */
      /* background-color: #f2f2f2;
      padding: 2px 5px;
      border-radius: 4px; */
      /* font-family: "Courier New", Courier, monospace; */
    }
  }

  /* p {
    &:nth-child(2n + 1) {
      text-align: end;
    } */
  /*
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
  `}; */
  /* } */
`;
