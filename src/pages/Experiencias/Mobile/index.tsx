import { experiencias } from "../data";
import { Carousel } from "@/components/Carousel";
import { Card } from "../components/Card";

export const ExperienciasMobile = () => {
  const list = experiencias?.map((experiencia) => {
    return (
      <Card
        key={`${experiencia?.empresa} - ${experiencia?.cargo}`}
        {...experiencia}
      />
    );
  });

  return <Carousel list={list} />;
};
