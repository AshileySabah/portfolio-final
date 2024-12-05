import { Typography } from "@mui/material";
import { Habilidade } from "../data";
import { Container, ContainerImage } from "./styles";

interface CardProps extends Habilidade {}

export const Card: React.FC<CardProps> = ({ descricao, imagem }) => {
  return (
    <Container>
      <ContainerImage>
        <img
          src={imagem}
          alt={`Ícone para a habilidade de ${descricao}`}
          width={40}
        />
      </ContainerImage>
      <Typography>{descricao}</Typography>
    </Container>
  );
};
