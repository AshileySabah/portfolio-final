import { Typography } from "@mui/material";
import { Solucao } from "../data";
import { Container } from "./styles";

interface CardProps extends Solucao {}

export const Card: React.FC<CardProps> = (solucao) => {
  return (
    <Container>
      <img src={solucao?.imagem} alt={solucao?.cliente} />
      <div>
        <Typography className="card-cliente">{solucao?.cliente}</Typography>
        <Typography className="card-servico">{solucao?.servico}</Typography>
        <Typography>{solucao?.descricao}</Typography>
      </div>
    </Container>
  );
};
