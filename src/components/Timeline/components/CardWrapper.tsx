import React, { ReactNode } from "react";
import { Box } from "@mui/material";
import { Container, CardArm } from "./styles";

interface CardWrapperProps {
  children: ReactNode;
  containerSide: "left" | "right";
}

export const CardWrapper: React.FC<CardWrapperProps> = ({
  children,
  containerSide,
}) => {
  return (
    <Container containerSide={containerSide}>
      {containerSide === "right" && <CardArm />}
      <Box>{children}</Box>
      {containerSide === "left" && <CardArm />}
    </Container>
  );
};
