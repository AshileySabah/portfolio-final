import styled, { css } from "styled-components";
import { Paper } from "@mui/material";

export const Container = styled(Paper)`
  padding: 15px;
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme?.palette?.grey?.[50]};
  background-color: ${({ theme }) => theme?.palette?.background?.default};
  text-align: justify;

  -webkit-box-shadow: 4px 6px 5px 3px rgba(0, 0, 0, 0.3) !important;
  -moz-box-shadow: 4px 6px 5px 3px rgba(0, 0, 0, 0.3) !important;
  box-shadow: 4px 6px 5px 3px rgba(0, 0, 0, 0.3) !important;

  .card-cargo {
    font-weight: bold;
    text-transform: uppercase;
    text-align: start;
  }

  .card-periodo {
    color: ${({ theme }) => theme?.palette?.grey?.[600]} !important;
  }

  .card-empresa {
    font-weight: bold;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    position: relative;

    li {
      position: relative;
      padding-left: 20px;

      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0.5em;
        width: 7px;
        height: 7px;
        border: 1px solid ${({ theme }) => theme?.palette?.primary?.main};
        border-radius: 50%;
        background-color: transparent;
      }
    }
  }

  ${({ theme }) => css`
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
  `}
`;
