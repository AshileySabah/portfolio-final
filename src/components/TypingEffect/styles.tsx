import styled from "styled-components";

interface CursorProps {
  $visibility: boolean;
}

export const Cursor = styled("span")<CursorProps>`
  color: #2ea103;
  visibility: ${({ $visibility }) => ($visibility ? "visible" : "hidden")};
`;
