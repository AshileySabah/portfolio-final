import { Typography } from "@mui/material";
import { Experiencia } from "../data";
import { Container } from "./styles";

interface CardProps extends Experiencia {}

export const Card: React.FC<CardProps> = (experiencia) => {
  return (
    <Container>
      <Typography>{experiencia?.cargo}</Typography>
      <Typography>{experiencia?.empresa}</Typography>
      <ul>
        {experiencia?.atividades?.map((atividade) => {
          return <li>{atividade}</li>;
        })}
      </ul>
    </Container>
  );
};
