import { Typography } from "@mui/material";
import { Container } from "./styles";
import { experiencias } from "./data";
import { Card } from "./components/Card";
import { Timeline } from "@/components/Timeline";

export const Experiencias = () => {
  return (
    <Container>
      <Typography variant="h2">Experiências</Typography>
      <Timeline
        list={experiencias?.map((experiencia) => {
          return <Card {...experiencia} />;
        })}
      />
    </Container>
  );
};
