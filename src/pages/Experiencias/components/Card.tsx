import { Box, Typography } from "@mui/material";
import { Experiencia } from "../data";

interface CardProps extends Experiencia {}

export const Card: React.FC<CardProps> = (experiencia) => {
  return (
    <Box>
      <Typography>{experiencia?.cargo}</Typography>
      <Typography>{experiencia?.empresa}</Typography>
      <ul>
        {experiencia?.atividades?.map((atividade) => {
          return <li>{atividade}</li>;
        })}
      </ul>
    </Box>
  );
};
