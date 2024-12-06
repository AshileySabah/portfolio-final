import styled, { css } from "styled-components";
import { Box, Paper } from "@mui/material";

export const Container = styled(Paper)`
  padding: 15px;
  border-radius: 5px;
  border: 2px solid #ececec;
  background-color: ${({ theme }) => theme?.palette?.common?.white};
  text-align: center;

  -webkit-box-shadow: 0px 4px 20px 1px rgba(0, 0, 0, 1) !important;
  -moz-box-shadow: 0px 4px 20px 1px rgba(0, 0, 0, 1) !important;
  box-shadow: 0px 4px 20px 1px rgba(0, 0, 0, 1) !important;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 120px;
  height: 130px;

  img {
    height: 40px;
  }
`;

export const ContainerImage = styled(Box)`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;
