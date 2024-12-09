import styled from "styled-components";
import { Accordion, Box } from "@mui/material";

export const Container = styled(Accordion)`
  border-radius: 5px;
  border: 2px solid #ececec;
  background-color: ${({ theme }) => theme?.palette?.common?.white};
  text-align: justify;

  -webkit-box-shadow: 4px 6px 5px 3px rgba(0, 0, 0, 0.3) !important;
  -moz-box-shadow: 4px 6px 5px 3px rgba(0, 0, 0, 0.3) !important;
  box-shadow: 4px 6px 5px 3px rgba(0, 0, 0, 0.3) !important;

  height: 100%;

  border: 2px solid
    ${({ theme, expanded }) =>
      expanded ? theme?.palette?.secondary?.main : "#ececec"};

  span {
    font-weight: bold;
    color: ${({ theme, expanded }) =>
      expanded ? theme?.palette?.secondary?.main : undefined};
  }

  svg {
    color: ${({ theme }) => theme?.palette?.secondary?.main};
  }
`;

export const ContainerSummary = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  button {
    border-radius: 20px;
    margin-right: 20px;
  }
`;
