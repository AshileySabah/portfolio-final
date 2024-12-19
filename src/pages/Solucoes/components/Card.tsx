import { SyntheticEvent, useEffect, useState } from "react";
import { AccordionDetails, AccordionSummary, Button } from "@mui/material";
import { Solucoes } from "../data";
import { Container, ContainerSummary } from "./styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useStore } from "../useStore";

interface CardProps extends Solucoes {}

export const Card: React.FC<CardProps> = ({ tipo, descricao }) => {
  const { setActiveCarousel } = useStore();
  const [expanded, setExpanded] = useState<string | false>(false);
  const id = tipo?.replaceAll(" ", "");

  const handleChange =
    (panel: string) => (_event: SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const handleOrcar = (event: SyntheticEvent) => {
    event?.stopPropagation();
  };

  useEffect(() => {
    if (expanded === tipo) {
      setActiveCarousel(false);
    }
  }, [expanded, tipo]);

  return (
    <Container expanded={expanded === tipo} onChange={handleChange(tipo)}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${id}-content`}
        id={`${id}-header`}
      >
        <ContainerSummary>
          <span>{tipo}</span>
          <Button variant="outlined" onClick={handleOrcar}>
            Orçar
          </Button>
        </ContainerSummary>
      </AccordionSummary>
      <AccordionDetails>{descricao}</AccordionDetails>
    </Container>
  );
};
