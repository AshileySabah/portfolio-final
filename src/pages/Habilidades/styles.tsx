import styled from "styled-components";

export const ContainerCards = styled("div")`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
  gap: 15px;
`;

export const ContainerButtons = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
