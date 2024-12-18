import React, { useState, useRef, ReactNode, useEffect } from "react";
import { Grid } from "@mui/material";
import {
  CarouselAnimationContainer,
  CarouselContainer,
  CarouselItemContainer,
  CarouselIndicatorsContainer,
  CarouselIndicator,
} from "./styles";

interface CarouselProps {
  list: ReactNode[];
  useGridContainer?: boolean;
  activeCarousel?: boolean;
}

export const Carousel: React.FC<CarouselProps> = ({
  list,
  useGridContainer,
  activeCarousel = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const startX = useRef(0);
  const isDragging = useRef(false);

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % list.length);
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? list.length - 1 : prevIndex - 1,
    );
  };

  useEffect(() => {
    if (activeCarousel) {
      const interval = setInterval(nextItem, 1500);
      return () => clearInterval(interval);
    }
  }, [currentIndex, activeCarousel]);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e?.clientX;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (isDragging?.current) {
      const deltaX = e?.clientX - startX?.current;
      if (deltaX > 50) prevItem();
      else if (deltaX < -50) nextItem();
    }
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging?.current) {
      e?.preventDefault();
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    startX.current = e?.touches?.[0]?.clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (isDragging?.current) {
      const deltaX = e?.changedTouches?.[0]?.clientX - startX?.current;
      if (deltaX > 50) prevItem();
      else if (deltaX < -50) nextItem();
    }
    isDragging.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging?.current) {
      e?.preventDefault();
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
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {list?.map((item, index) => (
          <CarouselItemContainer key={index} $show={currentIndex === index}>
            {useGridContainer ? (
              <Grid container spacing={2} justifyContent="center">
                {item}
              </Grid>
            ) : (
              item
            )}
          </CarouselItemContainer>
        ))}
      </CarouselAnimationContainer>

      <CarouselIndicatorsContainer>
        {list?.map((_, index) => (
          <CarouselIndicator
            key={index}
            $active={index === currentIndex}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </CarouselIndicatorsContainer>
    </CarouselContainer>
  );
};
