import styled, { css } from "styled-components";
import { Box } from "@mui/material";

interface CardProps {
  $isFlipped: boolean;
}

export const Container = styled(Box)<CardProps>`
  border-radius: 5px;
  border: 2px solid #ececec;
  background-color: ${({ theme }) => theme?.palette?.common?.white};

  &:hover {
    border: ${({ $isFlipped }) =>
      $isFlipped ? undefined : `2px solid #2ea103`};
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
  font-weight: bold;
  text-align: center;
  display: ${({ $isFlipped }) => (!$isFlipped ? "flex" : "none")};

  &:hover {
    color: #2ea103;
  }
`;

export const CardBack = styled(CardFace)`
  transform: rotateY(180deg);
  padding: 15px;

  flex-wrap: wrap;
`;
