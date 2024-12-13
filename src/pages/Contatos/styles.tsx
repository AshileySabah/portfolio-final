import styled, { css } from "styled-components";

export const ContainerLinks = styled("a")`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  ${({ theme }) => css`
    ${theme.breakpoints.down("md")} {
      flex-wrap: nowrap;
    }

    ${theme.breakpoints.down("300")} {
      flex-wrap: wrap;
    }
  `}
`;
