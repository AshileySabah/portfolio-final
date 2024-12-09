import styled, { css } from "styled-components";
import { Paper } from "@mui/material";

export const Container = styled(Paper)`
  padding: 15px;
  border-radius: 5px;
  border: 2px solid #ececec;
  background-color: ${({ theme }) => theme?.palette?.common?.white};
  text-align: justify;

  display: flex;
  justify-content: space-between;

  -webkit-box-shadow: 4px 6px 5px 3px rgba(0, 0, 0, 0.3) !important;
  -moz-box-shadow: 4px 6px 5px 3px rgba(0, 0, 0, 0.3) !important;
  box-shadow: 4px 6px 5px 3px rgba(0, 0, 0, 0.3) !important;

  p {
    font-weight: bold;
  }

  &:hover {
    border: 2px solid ${({ theme }) => theme?.palette?.secondary?.main};
    cursor: pointer;
    transition:
      border-color 0.5s,
      color 0.5s;

    p,
    svg {
      color: ${({ theme }) => theme?.palette?.secondary?.main};
    }
  }
`;
