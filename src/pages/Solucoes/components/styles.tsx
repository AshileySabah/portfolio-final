import styled, { css } from "styled-components";
import { Accordion, Box } from "@mui/material";

export const Container = styled(Accordion)`
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme?.palette?.grey?.[50]};
  background-color: ${({ theme }) => theme?.palette?.common?.white};
  text-align: justify;

  -webkit-box-shadow: 4px 6px 5px 3px rgba(0, 0, 0, 0.3) !important;
  -moz-box-shadow: 4px 6px 5px 3px rgba(0, 0, 0, 0.3) !important;
  box-shadow: 4px 6px 5px 3px rgba(0, 0, 0, 0.3) !important;

  border: 2px solid
    ${({ theme, expanded }) =>
      expanded ? theme?.palette?.primary?.main : theme?.palette?.grey?.[50]};

  span {
    font-weight: bold;
    color: ${({ theme, expanded }) =>
      expanded ? theme?.palette?.primary?.main : undefined};
  }

  svg {
    color: ${({ theme, expanded }) =>
      expanded ? theme?.palette?.primary?.main : theme?.palette?.common?.black};
  }

  ${({ theme }) => css`
    ${theme.breakpoints.down("md")} {
      width: calc(100% - 20px);
    }
  `}
`;

export const ContainerSummary = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: start;

  button {
    border-radius: 20px;
    margin-right: 20px;
  }
`;
