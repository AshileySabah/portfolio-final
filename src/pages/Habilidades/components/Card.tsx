import { Typography } from "@mui/material";
import { Habilidade } from "../data";
import { Container, ContainerImage, ContainerMainContent } from "./styles";

interface CardProps extends Habilidade {
  fadeOut: boolean;
}

export const Card: React.FC<CardProps> = ({ descricao, imagem, fadeOut }) => {
  return (
    <Container className={fadeOut ? "fade-out-animation" : ""}>
      <ContainerMainContent>
        <ContainerImage>
          <img src={imagem} alt={`Ícone para a habilidade de ${descricao}`} />
        </ContainerImage>
        <Typography>{descricao}</Typography>
      </ContainerMainContent>
    </Container>
  );
};
