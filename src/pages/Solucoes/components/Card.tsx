import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from "@mui/material";
import { Solucoes } from "../data";
import { Container, ContainerSummary } from "./styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface CardProps extends Solucoes {}

export const Card: React.FC<CardProps> = ({ tipo, descricao }) => {
  return (
    <Container>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${tipo}-content`}
        id={`${tipo}-header`}
      >
        <ContainerSummary>
          <span>{tipo}</span>
          <Button variant="outlined" color="secondary">
            Orçar
          </Button>
        </ContainerSummary>
      </AccordionSummary>
      <AccordionDetails>{descricao}</AccordionDetails>
    </Container>
  );
};
