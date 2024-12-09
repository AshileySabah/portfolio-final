import { Typography } from "@mui/material";
import { Solucoes } from "../data";
import { Container } from "./styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface CardProps extends Solucoes {}

export const Card: React.FC<CardProps> = ({ descricao }) => {
  return (
    <Container>
      <Typography>{descricao}</Typography>
      <ArrowForwardIosIcon />
    </Container>
  );
};
