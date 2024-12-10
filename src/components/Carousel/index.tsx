import React, { useState, useRef, ReactNode } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Button } from "@mui/material";
import {
  CarouselAnimationContainer,
  CarouselContainer,
  CarouselItemContainer,
  CarouselIndicatorsContainer,
  CarouselIndicator,
} from "./styles";

interface CarouselProps {
  list: ReactNode[];
}

export const Carousel: React.FC<CarouselProps> = ({ list }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const startX = useRef(0);
  const isDragging = useRef(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e?.clientX;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (isDragging?.current) {
      const deltaX = e?.clientX - startX?.current;
      if (deltaX > 50) {
        if (currentIndex > 0) {
          setCurrentIndex(currentIndex - 1);
        } else {
          setCurrentIndex(list?.length - 1);
        }
      } else if (deltaX < -50) {
        if (currentIndex < list?.length - 1) {
          setCurrentIndex(currentIndex + 1);
        } else {
          setCurrentIndex(0);
        }
      }
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
      if (deltaX > 50) {
        if (currentIndex > 0) {
          setCurrentIndex(currentIndex - 1);
        } else {
          setCurrentIndex(list?.length - 1);
        }
      } else if (deltaX < -50) {
        if (currentIndex < list?.length - 1) {
          setCurrentIndex(currentIndex + 1);
        } else {
          setCurrentIndex(0);
        }
      }
    }
    isDragging.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging?.current) {
      e?.preventDefault();
    }
  };

  const nextItem = () => {
    if (currentIndex < list.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevItem = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(list.length - 1);
    }
  };

  return (
    <CarouselContainer>
      <Button
        className="carousel-button left"
        color="secondary"
        onClick={prevItem}
      >
        <ArrowBackIosNewIcon />
      </Button>

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
          <CarouselItemContainer key={index}>{item}</CarouselItemContainer>
        ))}
      </CarouselAnimationContainer>

      <Button
        className="carousel-button right"
        color="secondary"
        onClick={nextItem}
      >
        <ArrowForwardIosIcon />
      </Button>

      <CarouselIndicatorsContainer>
        {list.map((_, index) => (
          <CarouselIndicator
            key={index}
            active={index === currentIndex}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </CarouselIndicatorsContainer>
    </CarouselContainer>
  );
};
