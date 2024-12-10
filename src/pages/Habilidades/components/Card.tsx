import { useMemo } from "react";
import { habilidadesPorNicho, NichoHabilidadeEnum } from "../data";
import { Container, CardFront, CardBackContainer, CardBack } from "./styles";
import { isFlippedNicho } from "..";
import { Typography } from "@mui/material";

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
      <CardFront $isFlipped={isFlipped?.[nichoHabilidadeEnum] === true}>
        <Typography className="card-titulo ">
          {NichoHabilidadeEnum?.[nichoHabilidadeEnum]}
        </Typography>
      </CardFront>
      <CardBackContainer $isFlipped={isFlipped?.[nichoHabilidadeEnum] === true}>
        {filteredHabilidades?.map(({ descricao, imagem }) => {
          return (
            <CardBack>
              <img src={imagem} alt={`Ícone de ${descricao}`} />
              <Typography>{descricao}</Typography>
            </CardBack>
          );
        })}
      </CardBackContainer>
    </Container>
  );
};
