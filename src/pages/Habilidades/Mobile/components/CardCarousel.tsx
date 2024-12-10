import React from "react";
import { HabilidadePorNicho } from "../../data";
import {
  Container,
  ContainerImageDescription,
  ContainerListHabilidades,
} from "./styles";
import { Typography } from "@mui/material";

interface CardCarouselProps extends HabilidadePorNicho {}

export const CardCarousel: React.FC<CardCarouselProps> = ({
  nicho,
  habilidades,
}) => {
  return (
    <Container>
      <Typography className="titulo-nicho">{nicho}</Typography>
      <ContainerListHabilidades>
        {habilidades?.map(({ imagem, descricao }) => {
          return (
            <ContainerImageDescription>
              <img src={imagem} alt={`Ícone de ${descricao}`} />
              <Typography>{descricao}</Typography>
            </ContainerImageDescription>
          );
        })}
      </ContainerListHabilidades>
    </Container>
  );
};
