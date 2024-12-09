import { useMemo, useState } from "react";
import { habilidadesPorNicho, NichoHabilidadeEnum } from "../data";
import { Container, CardFront, CardBack } from "./styles";

interface CardProps {
  nichoHabilidadeEnum: keyof typeof NichoHabilidadeEnum;
}

export const Card: React.FC<CardProps> = ({ nichoHabilidadeEnum }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const filteredHabilidades = useMemo(
    () =>
      habilidadesPorNicho?.find(
        (habilidade) =>
          habilidade?.nicho === NichoHabilidadeEnum?.[nichoHabilidadeEnum],
      )?.habilidades || [],
    [nichoHabilidadeEnum],
  );

  return (
    <Container $isFlipped={isFlipped} onClick={handleFlip}>
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
