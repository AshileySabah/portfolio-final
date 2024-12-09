import styled from "styled-components";
import { Accordion, Box, Paper } from "@mui/material";

export const Container = styled(Accordion)`
  border-radius: 5px;
  border: 2px solid #ececec;
  background-color: ${({ theme }) => theme?.palette?.common?.white};
  text-align: justify;

  -webkit-box-shadow: 4px 6px 5px 3px rgba(0, 0, 0, 0.3) !important;
  -moz-box-shadow: 4px 6px 5px 3px rgba(0, 0, 0, 0.3) !important;
  box-shadow: 4px 6px 5px 3px rgba(0, 0, 0, 0.3) !important;

  /* .active { */
  border: 2px solid ${({ theme }) => theme?.palette?.secondary?.main};

  svg {
    color: ${({ theme }) => theme?.palette?.secondary?.main};
  }
  /* } */
`;

export const ContainerSummary = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  button {
    border-radius: 20px;
  }
`;
