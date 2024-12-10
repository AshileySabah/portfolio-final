import styled from "styled-components";

export const CarouselContainer = styled("div")`
  background: red;
  width: 100%;
  height: 300px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
`;

interface CarouselAnimationContainerProps {
  $currentIndex: number;
}

export const CarouselAnimationContainer = styled(
  "div",
)<CarouselAnimationContainerProps>`
  display: flex;
  width: 100%;
  transition: transform 0.3s ease-in-out;
  transform: ${({ $currentIndex }) => `translateX(-${$currentIndex * 100}%)`};
`;

export const CarouselItemContainer = styled("div")`
  flex: 0 0 100%;
  background: green;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
