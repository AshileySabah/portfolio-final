import { Typography, TypographyProps } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Cursor } from "./styles";

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
  const [blinkCursor, setBlinkCursor] = useState(false);
  const [blinkCount, setBlinkCount] = useState(0);

  useEffect(() => {
    if (!words || words?.length === 0) return;

    const currentWord = words[currentWordIndex];
    let typingTimeout: NodeJS.Timeout;

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
          setBlinkCount(0);
          setBlinkCursor(true);
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

  useEffect(() => {
    let blinkTimeout: NodeJS.Timeout;
    if (blinkCursor) {
      blinkTimeout = setTimeout(() => {
        setBlinkCount((prev) => prev + 1);
        if (blinkCount >= 3) {
          setBlinkCursor(false);
          setTimeout(() => setIsDeleting(true), delay);
        }
      }, 400);
    }
    return () => clearTimeout(blinkTimeout);
  }, [blinkCursor, blinkCount, delay]);

  return (
    <Typography {...typographyProps}>
      {currentText}
      <Cursor $visibility={blinkCursor && blinkCount % 2 === 0}>|</Cursor>
    </Typography>
  );
};

export default TypingEffect;
