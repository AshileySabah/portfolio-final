import styled from "styled-components";
import { Box, Paper } from "@mui/material";

export const Container = styled(Paper)`
  border-radius: 5px;
  border: 2px solid #ececec;
  background-color: ${({ theme }) => theme?.palette?.common?.white};
  text-align: center;

  -webkit-box-shadow: 4px 6px 5px 3px rgba(0, 0, 0, 0.3) !important;
  -moz-box-shadow: 4px 6px 5px 3px rgba(0, 0, 0, 0.3) !important;
  box-shadow: 4px 6px 5px 3px rgba(0, 0, 0, 0.3) !important;

  width: 110px;
  height: 110px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &.fade-out-animation {
    animation: fadeOut 0.6s forwards;
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
      visibility: visible;
    }
    to {
      opacity: 0;
      visibility: hidden;
    }
  }
`;

export const ContainerMainContent = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const ContainerImage = styled(Box)`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  img {
    height: 40px;
  }
`;
