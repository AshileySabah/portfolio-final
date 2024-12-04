import { Box } from "@mui/material";
import styled from "styled-components";

export const Container = styled(Box)`
  padding: 15px;
  border-radius: 5px;
  border: 2px solid black;
  background-color: ${({ theme }) => theme?.palette?.common?.white};
`;
