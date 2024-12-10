import { habilidadesPorNicho } from "../data";
import { Carousel } from "@/components/Carousel";
import { CardCarousel } from "./components/CardCarousel";

export const HabilidadesMobile = () => {
  const orderedHabilidades = habilidadesPorNicho?.sort((a, p) =>
    a?.nicho?.localeCompare(p?.nicho),
  );
  const list = orderedHabilidades?.map((habilidadePorNicho) => {
    return <CardCarousel {...habilidadePorNicho} />;
  });

  return <Carousel list={list} />;
};
