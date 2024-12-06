import { Box } from "@mui/material";
import styled, { css } from "styled-components";

interface ContainerProps {
  containerSide: "left" | "right";
}

export const Container = styled(Box)<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: ${({ containerSide }) =>
    containerSide === "left" ? "flex-end" : "flex-start"};

  ${({ theme }) => css`
    ${theme.breakpoints.down("md")} {
      justify-content: flex-start;
      margin-bottom: 15px;
    }
  `}
`;

export const CardArm = styled(Box)`
  height: 1px;
  width: 30px;
  background-color: ${({ theme }) => theme?.palette?.secondary?.main};

  ${({ theme }) => css`
    ${theme.breakpoints.down("md")} {
      display: none;
    }
  `};
`;

export const CardContainer = styled(Box)`
  ${({ theme }) => css`
    ${theme.breakpoints.down("md")} {
      width: 100%;
    }
  `}
`;
