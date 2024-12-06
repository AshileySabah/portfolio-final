import { Typography } from "@mui/material";
import { Habilidade, NichoEnum } from "../data";
import {
  Container,
  ContainerImage,
  ContainerMainContent,
  ContainerNicho,
} from "./styles";

interface CardProps extends Habilidade {
  nicho: NichoEnum;
}

export const Card: React.FC<CardProps> = ({ descricao, imagem, nicho }) => {
  return (
    <Container>
      <ContainerMainContent>
        <ContainerImage>
          <img src={imagem} alt={`Ícone para a habilidade de ${descricao}`} />
        </ContainerImage>
        <Typography>{descricao}</Typography>
      </ContainerMainContent>
      <ContainerNicho>{nicho}</ContainerNicho>
    </Container>
  );
};
