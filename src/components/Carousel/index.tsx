import React, { useState, useRef } from "react";

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
    <div
      style={{
        background: "red",
        width: "100%",
        height: 300,
        overflow: "hidden",
        position: "relative",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          // transition: "transform 0.3s ease-in-out",
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {list.map((_, index) => (
          <div
            key={index}
            style={{
              flex: "0 0 100%",
              background: "green",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                background: "pink",
                width: "80%",
                height: 200,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {index}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
