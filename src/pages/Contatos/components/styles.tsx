import styled, { css } from "styled-components";

export const Container = styled("a")`
  border-radius: 5px;
  border: 2px solid #ececec;
  background-color: ${({ theme }) => theme?.palette?.common?.white};
  background-color: transparent;
  text-align: justify;

  -webkit-box-shadow: 4px 6px 5px 3px rgba(0, 0, 0, 0.3) !important;
  -moz-box-shadow: 4px 6px 5px 3px rgba(0, 0, 0, 0.3) !important;
  box-shadow: 4px 6px 5px 3px rgba(0, 0, 0, 0.3) !important;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-decoration: none;
  color: ${({ theme }) => theme?.palette?.grey?.[600]} !important;

  img {
    height: 50px;
  }

  ${({ theme }) => css`
    ${theme.breakpoints.up("md")} {
      width: 100%;
      padding: 8.5px 0;

      img {
        height: 35px;
      }
    }

    ${theme.breakpoints.down("md")} {
      width: 100%;
      padding: 15px 0;

      img {
        height: 35px;
      }
    }

    ${theme.breakpoints.down("sm")} {
      width: 100%;
      padding: 5px 0;
    }

    ${theme.breakpoints.down("300")} {
      width: auto;
      padding: 0;
    }
  `}
`;
