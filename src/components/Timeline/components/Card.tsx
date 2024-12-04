import React, { ReactNode } from "react";
import { Container, CardStyled, CardArm } from "./styles";

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
      <CardStyled>{children}</CardStyled>
      {containerSide === "left" && <CardArm />}
    </Container>
  );
};
