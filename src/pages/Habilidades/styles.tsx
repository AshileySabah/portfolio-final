import styled from "styled-components";

export const ContainerCards = styled("div")`
  display: flex;
  flex-wrap: wrap;
  min-width: 100px;

  & > div {
    margin-bottom: 15px;
    margin-left: 15px;
  }
`;

export const ContainerButtons = styled("div")`
  display: flex;
  flex-direction: column;

  button {
    margin-bottom: 15px;
  }
`;
