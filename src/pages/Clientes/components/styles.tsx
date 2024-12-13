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

  display: flex;
  gap: 15px;

  p.card-cliente {
    font-weight: bold;
  }

  p.card-servico {
    color: ${({ theme }) => theme?.palette?.grey?.[600]} !important;
  }

  img {
    height: 150px;
    border-radius: 5px;
  }

  /* ${({ theme }) => css`
    ${theme.breakpoints.up("md")} {
      width: 400px;
    }

    ${theme.breakpoints.up("lg")} {
      width: 450px;
    }

    ${theme.breakpoints.up("xl")} {
      width: 550px;
    }

    ${theme.breakpoints.down("md")} {
      width: calc(100% - 20px);
    }
  `} */
`;
