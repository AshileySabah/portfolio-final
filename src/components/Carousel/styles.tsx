import styled from "styled-components";

export const CarouselContainer = styled("div")`
  /* background: red; */
  width: 100%;
  min-height: 250px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;

  button.carousel-button {
    position: absolute;
    z-index: 1;
    height: 100%;
    border-radius: 0;

    &.left {
      left: 0px;
    }

    &.right {
      right: 0px;
    }
  }
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
  /* background: green; */
  flex: 0 0 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
