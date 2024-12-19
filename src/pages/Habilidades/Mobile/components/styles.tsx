import styled from "styled-components";
import { Box } from "@mui/material";

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  color: ${({ theme }) => theme?.palette?.text?.primary};

  p.titulo-nicho {
    margin-bottom: 30px;
    width: 100%;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
  }
`;

export const ContainerListHabilidades = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const ContainerImageDescription = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 100px;

  img {
    height: 30px;
  }
`;
