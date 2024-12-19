import { Grid } from "@mui/material";
import styled, { css } from "styled-components";

interface SideProps {
  $side: "left" | "right";
}

export const ContainerSide = styled(Grid)<SideProps>`
  border-left: ${({ $side, theme }) =>
    $side === "right" ? `1px solid ${theme?.palette?.primary?.main}` : "none"};

  ${({ theme }) => css`
    ${theme.breakpoints.down("md")} {
      border: none;
    }
  `}
`;
