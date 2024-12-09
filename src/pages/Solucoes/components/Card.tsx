import { SyntheticEvent, useState } from "react";
import { AccordionDetails, AccordionSummary, Button } from "@mui/material";
import { Solucoes } from "../data";
import { Container, ContainerSummary } from "./styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface CardProps extends Solucoes {}

export const Card: React.FC<CardProps> = ({ tipo, descricao }) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (_event: SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const id = tipo?.replaceAll(" ", "");

  return (
    <Container expanded={expanded === tipo} onChange={handleChange(tipo)}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${id}-content`}
        id={`${id}-header`}
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
