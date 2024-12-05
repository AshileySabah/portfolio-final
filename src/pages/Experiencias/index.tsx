import { Container } from "./styles";
import { experiencias } from "./data";
import { Card } from "./components/Card";
import { Timeline } from "@/components/Timeline";

export const Experiencias = () => {
  return (
    <Container p={3}>
      <Timeline
        list={experiencias?.map((experiencia) => {
          return <Card {...experiencia} />;
        })}
      />
    </Container>
  );
};
