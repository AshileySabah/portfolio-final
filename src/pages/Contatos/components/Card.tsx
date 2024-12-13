import { Contato } from "../data";
import { Container } from "./styles";

interface CardProps extends Contato {}

export const Card: React.FC<CardProps> = (contato) => {
  return (
    <Container href={contato?.link}>
      <img src={contato?.imagem} alt={`Ícone de ${contato?.type}`} />
    </Container>
  );
};
