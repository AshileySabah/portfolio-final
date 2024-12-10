import React, { ReactNode } from "react";
import { Container, CardArm, CardContainer } from "./styles";

interface CardWrapperProps {
  children: ReactNode;
  $containerSide: "left" | "right";
}

export const CardWrapper: React.FC<CardWrapperProps> = ({
  children,
  $containerSide,
}) => {
  return (
    <Container $containerSide={$containerSide}>
      {$containerSide === "right" && <CardArm />}
      <CardContainer>{children}</CardContainer>
      {$containerSide === "left" && <CardArm />}
    </Container>
  );
};
