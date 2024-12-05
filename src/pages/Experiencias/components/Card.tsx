import { Typography } from "@mui/material";
import { Experiencia } from "../data";
import { Container } from "./styles";

interface CardProps extends Experiencia {}

export const Card: React.FC<CardProps> = (experiencia) => {
  return (
    <Container>
      <Typography>
        <strong>{experiencia?.cargo?.toUpperCase()}</strong> •{" "}
        {experiencia?.data?.inicio} - {experiencia?.data?.fim}
      </Typography>
      <Typography>
        <strong>{experiencia?.empresa}</strong>
      </Typography>
      <ul>
        {experiencia?.atividades?.map((atividade) => {
          return <li>{atividade}</li>;
        })}
      </ul>
    </Container>
  );
};
