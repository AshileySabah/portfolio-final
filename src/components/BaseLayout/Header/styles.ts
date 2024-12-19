import { Box, Paper } from "@mui/material";
import styled from "styled-components";

export const Menu = styled(Paper)`
  -webkit-box-shadow: 0px 10px 13px -7px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 10px 13px -7px rgba(0, 0, 0, 1);
  box-shadow: 0px 10px 13px -7px rgba(0, 0, 0, 1);
  background: ${({ theme }) => theme?.palette?.background?.default};
  border-radius: 0;
`;

export const MenuContainer = styled(Box)`
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
