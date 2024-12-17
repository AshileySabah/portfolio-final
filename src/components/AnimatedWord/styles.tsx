import styled, { keyframes } from "styled-components";

export const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

interface CursorProps {
  $delay: number;
}

export const Letter = styled("span")<CursorProps>`
  display: inline-block;
  animation: ${bounce} 2s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay}s;
`;

export const WordContainer = styled("div")`
  display: inline-flex;
`;
