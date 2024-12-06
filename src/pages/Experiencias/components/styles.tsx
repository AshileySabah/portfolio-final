import styled, { css } from "styled-components";
import { Paper } from "@mui/material";

export const Container = styled(Paper)`
  padding: 15px;
  border-radius: 5px;
  border: 2px solid #ececec;
  background-color: ${({ theme }) => theme?.palette?.common?.white};
  text-align: justify;

  -webkit-box-shadow: 4px 6px 5px 3px rgba(0, 0, 0, 0.3) !important;
  -moz-box-shadow: 4px 6px 5px 3px rgba(0, 0, 0, 0.3) !important;
  box-shadow: 4px 6px 5px 3px rgba(0, 0, 0, 0.3) !important;

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
