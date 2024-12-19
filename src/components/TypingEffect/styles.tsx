import styled from "styled-components";

interface CursorProps {
  $visibility: boolean;
}

export const Cursor = styled("span")<CursorProps>`
  color: ${({ theme }) => theme?.palette?.primary?.main};
  visibility: ${({ $visibility }) => ($visibility ? "visible" : "hidden")};
`;
