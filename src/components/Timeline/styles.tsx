import { Grid } from "@mui/material";
import styled, { css } from "styled-components";

interface SideProps {
  $side: "left" | "right";
}

export const ContainerSide = styled(Grid)<SideProps>`
  border-left: ${({ $side }) =>
    $side === "right" ? "1px solid #ececec" : "none"};

  ${({ theme }) => css`
    ${theme.breakpoints.down("md")} {
      border: none;
    }
  `}
`;
