import styled, { css } from "styled-components";
import { Paper } from "@mui/material";

export const Container = styled(Paper)`
  padding: 15px;
  border-radius: 5px;
  border: 2px solid #ececec;
  background-color: ${({ theme }) => theme?.palette?.common?.white};
  text-align: justify;

  -webkit-box-shadow: 0px 4px 20px 1px rgba(0, 0, 0, 1) !important;
  -moz-box-shadow: 0px 4px 20px 1px rgba(0, 0, 0, 1) !important;
  box-shadow: 0px 4px 20px 1px rgba(0, 0, 0, 1) !important;

  ul {
    margin: 0;
    padding: 0 0 0 15px;
  }

  ${({ theme }) => css`
    ${theme.breakpoints.up("md")} {
      width: 440px;
    }

    ${theme.breakpoints.up("lg")} {
      width: 480px;
    }

    ${theme.breakpoints.up("xl")} {
      width: 530px;
    }

    ${theme.breakpoints.down("md")} {
      width: 100%;
    }
  `}
`;
