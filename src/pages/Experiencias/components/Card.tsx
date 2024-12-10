import { Typography } from "@mui/material";
import { Experiencia } from "../data";
import { Container } from "./styles";

interface CardProps extends Experiencia {}

export const Card: React.FC<CardProps> = (experiencia) => {
  return (
    <Container>
      <Typography className="card-cargo">{experiencia?.cargo}</Typography>
      <Typography className="card-periodo">
        {experiencia?.data?.inicio} - {experiencia?.data?.fim}
      </Typography>
      <Typography className="card-empresa">{experiencia?.empresa}</Typography>
      <ul>
        {experiencia?.atividades?.map((atividade) => {
          return <li key={atividade}>{atividade}</li>;
        })}
      </ul>
    </Container>
  );
};
