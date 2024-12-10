import React, { useState, useRef } from "react";
import {
  CarouselAnimationContainer,
  CarouselContainer,
  CarouselItemContainer,
} from "./styles";

interface CarouselProps {}

export const Carousel: React.FC<CarouselProps> = () => {
  const list = Array.from({ length: 10 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const startX = useRef(0);
  const isDragging = useRef(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (isDragging.current) {
      const deltaX = e.clientX - startX.current;
      if (deltaX > 50) {
        if (currentIndex > 0) {
          setCurrentIndex(currentIndex - 1);
        } else {
          setCurrentIndex(list.length - 1);
        }
      } else if (deltaX < -50) {
        if (currentIndex < list.length - 1) {
          setCurrentIndex(currentIndex + 1);
        } else {
          setCurrentIndex(0);
        }
      }
    }
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      e.preventDefault();
    }
  };

  return (
    <CarouselContainer>
      <CarouselAnimationContainer
        $currentIndex={currentIndex}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {list.map((_, index) => (
          <CarouselItemContainer key={index}>{index}</CarouselItemContainer>
        ))}
      </CarouselAnimationContainer>
    </CarouselContainer>
  );
};
