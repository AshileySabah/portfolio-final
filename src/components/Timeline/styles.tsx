import { Grid } from "@mui/material";
import styled from "styled-components";

interface SideProps {
  $side: "left" | "right";
}

export const ContainerSide = styled(Grid)<SideProps>`
  position: relative;

  border-right: ${({ $side }) =>
    $side === "left" ? "1px solid black" : "none"};
  border-left: ${({ $side }) =>
    $side === "right" ? "1px solid black" : "none"};

  left: ${({ $side }) => ($side === "left" ? 1 : "unset")};
  right: ${({ $side }) => ($side === "right" ? 1 : "unset")};
`;
