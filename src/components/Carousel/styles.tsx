import styled from "styled-components";

export const CarouselContainer = styled("div")`
  width: 100%;
  min-height: 250px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;

  button.carousel-button {
    position: absolute;
    z-index: 1;
    height: calc(100% - 30px);
    border-radius: 0;

    &.left {
      left: 0px;
      padding: 0 30px 0 0;

      svg {
        position: absolute;
        left: -5px;
      }
    }

    &.right {
      right: 0px;
      padding: 0 0 0 30px;

      svg {
        position: absolute;
        right: -5px;
      }
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

interface CarouselItemContainerProps {
  $show: boolean;
}

export const CarouselItemContainer = styled("div")<CarouselItemContainerProps>`
  flex: 0 0 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: ${({ $show }) => ($show ? undefined : "hidden")};
`;

export const CarouselIndicatorsContainer = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 10px;
  padding: 5px 0;
  width: 100%;
  position: relative;
  bottom: 0;
`;

interface CarouselIndicatorProps {
  $active: boolean;
}

export const CarouselIndicator = styled("div")<CarouselIndicatorProps>`
  width: 20px;
  height: 5px;
  border: 1px solid #2ea103;
  background-color: ${({ $active }) => ($active ? "#2ea103" : "transparent")};
  cursor: pointer;
`;
