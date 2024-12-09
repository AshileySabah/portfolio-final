import { useMemo, useState } from "react";
import { habilidadesPorNicho, NichoHabilidadeEnum } from "../data";
import { Container, CardFront, CardBack } from "./styles";
import { isFlippedNicho } from "..";

interface CardProps {
  nichoHabilidadeEnum: keyof typeof NichoHabilidadeEnum;
  handleFlip: (key: keyof typeof NichoHabilidadeEnum) => void;
  isFlipped: isFlippedNicho;
}

export const Card: React.FC<CardProps> = ({
  nichoHabilidadeEnum,
  handleFlip,
  isFlipped,
}) => {
  const filteredHabilidades = useMemo(
    () =>
      habilidadesPorNicho?.find(
        (habilidade) =>
          habilidade?.nicho === NichoHabilidadeEnum?.[nichoHabilidadeEnum],
      )?.habilidades || [],
    [nichoHabilidadeEnum],
  );

  return (
    <Container
      $isFlipped={isFlipped?.[nichoHabilidadeEnum] === true}
      onClick={() => handleFlip(nichoHabilidadeEnum)}
    >
      <CardFront>{NichoHabilidadeEnum?.[nichoHabilidadeEnum]}</CardFront>
      <CardBack>
        {filteredHabilidades?.map(({ descricao, imagem }) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: 5,
              }}
            >
              <img src={imagem} alt={`Ícone de ${descricao}`} height={30} />
              <div>{descricao}</div>
            </div>
          );
        })}
      </CardBack>
    </Container>
  );
};
