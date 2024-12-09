import { Typography } from "@mui/material";
import { NichoHabilidadeEnum } from "../data";
import { Container } from "./styles";

interface CardProps {
  nichoHabilidadeEnum: keyof typeof NichoHabilidadeEnum;
}

export const Card: React.FC<CardProps> = ({ nichoHabilidadeEnum }) => {
  return (
    <Container>
      <Typography className="card-titulo">
        {NichoHabilidadeEnum?.[nichoHabilidadeEnum]}
      </Typography>
    </Container>
  );
};
