import { useState } from "react";
import { NichoHabilidadeEnum } from "../data";
import { Container, CardFront, CardBack } from "./styles";

interface CardProps {
  nichoHabilidadeEnum: keyof typeof NichoHabilidadeEnum;
}

export const Card: React.FC<CardProps> = ({ nichoHabilidadeEnum }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Container $isFlipped={isFlipped} onClick={handleFlip}>
      <CardFront>{NichoHabilidadeEnum?.[nichoHabilidadeEnum]}</CardFront>
      <CardBack>
        <p>Verso</p>
      </CardBack>
    </Container>
  );
};
