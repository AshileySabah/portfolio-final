import { Box } from "@mui/material";
import styled from "styled-components";

interface ContainerProps {
  containerSide: "left" | "right";
}

export const Container = styled(Box)<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: ${({ containerSide }) =>
    containerSide === "left" ? "flex-end" : "flex-start"};
`;

export const CardStyled = styled(Box)`
  padding: 15px;
  border-radius: 5px;
  border: 2px solid black;
`;

export const CardArm = styled(Box)`
  height: 2px;
  width: 30px;
  background-color: black;
`;
