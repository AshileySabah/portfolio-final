import styled from "styled-components";
import { Box, Paper } from "@mui/material";

interface CardProps {
  $isFlipped: boolean;
}

export const Container = styled(Paper)<CardProps>`
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme?.palette?.grey?.[50]};
  background-color: ${({ theme }) => theme?.palette?.background?.default};

  &:hover {
    border: ${({ $isFlipped, theme }) =>
      $isFlipped ? undefined : `2px solid ${theme?.palette?.primary?.main}`};
  }

  -webkit-box-shadow: 4px 6px 5px 3px rgba(0, 0, 0, 0.3) !important;
  -moz-box-shadow: 4px 6px 5px 3px rgba(0, 0, 0, 0.3) !important;
  box-shadow: 4px 6px 5px 3px rgba(0, 0, 0, 0.3) !important;

  width: 100%;
  min-height: 200px;
  perspective: 1000px;
  cursor: pointer;

  position: relative;

  transform-style: preserve-3d;
  transform: ${({ $isFlipped }) =>
    $isFlipped ? "rotateY(-180deg)" : "rotateY(0deg)"};
  transition: transform 0.6s ease;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    p.card-titulo {
      color: ${({ theme }) => theme?.palette?.primary?.main};
    }
  }
`;

export const CardFace = styled("div")<CardProps>`
  position: ${({ $isFlipped }) => (!$isFlipped ? "absolute" : "relative")};
  border-radius: 5px;
  width: 100%;
  height: auto;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardFront = styled(CardFace)`
  p.card-titulo {
    font-weight: bold;
    text-align: center;
  }
  display: ${({ $isFlipped }) => (!$isFlipped ? "flex" : "none")};
`;

export const CardBackContainer = styled(CardFace)`
  transform: rotateY(180deg);
  padding: 15px;
  gap: 15px;

  flex-wrap: wrap;
`;

export const CardBack = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100px;

  img {
    height: 30px;
  }

  p {
    text-align: center;
  }
`;
