import { Typography, TypographyProps } from "@mui/material";
import React, { useState, useEffect } from "react";

interface TypingEffectProps extends TypographyProps {
  words: string[];
  typingSpeed?: number;
  erasingSpeed?: number;
  delay?: number;
}

export const TypingEffect: React.FC<TypingEffectProps> = ({
  words,
  typingSpeed = 100,
  erasingSpeed = 50,
  delay = 1000,
  ...typographyProps
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words || words?.length === 0) return;

    const currentWord = words[currentWordIndex];

    let typingTimeout;

    if (isDeleting) {
      typingTimeout = setTimeout(() => {
        setCurrentText((prev) => prev?.slice(0, -1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words?.length);
        }
      }, erasingSpeed);
    } else {
      typingTimeout = setTimeout(() => {
        setCurrentText((prev) => currentWord?.slice(0, prev?.length + 1));
        if (currentText === currentWord) {
          setTimeout(() => setIsDeleting(true), delay);
        }
      }, typingSpeed);
    }

    return () => clearTimeout(typingTimeout);
  }, [
    currentText,
    isDeleting,
    words,
    currentWordIndex,
    typingSpeed,
    erasingSpeed,
    delay,
  ]);

  return <Typography {...typographyProps}>{currentText}</Typography>;
};
