import React from "react";
import { Letter, WordContainer } from "./styles";

interface AnimatedWordProps {
  children: string;
}

export const AnimatedWord: React.FC<AnimatedWordProps> = ({ children }) => {
  return (
    <WordContainer>
      {children?.split("")?.map((char, index) => (
        <Letter key={index} $delay={index * 0.2}>
          {char}
        </Letter>
      ))}
    </WordContainer>
  );
};
