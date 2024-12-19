import { habilidadesPorNicho } from "../data";
import { Carousel } from "@/components/Carousel";
import { CardCarousel } from "./components/CardCarousel";
import { CarouselLayout } from "@/components/Carousel/Layout";
import { useStore } from "../useStore";

export const HabilidadesMobile = () => {
  const { activeCarousel, setActiveCarousel } = useStore();

  const orderedHabilidades = habilidadesPorNicho?.sort((a, p) =>
    a?.nicho?.localeCompare(p?.nicho),
  );
  const list = orderedHabilidades?.map((habilidadePorNicho) => {
    return (
      <CardCarousel key={habilidadePorNicho?.nicho} {...habilidadePorNicho} />
    );
  });

  return (
    <CarouselLayout
      activeCarousel={activeCarousel}
      setActiveCarousel={setActiveCarousel}
    >
      <Carousel list={list} activeCarousel={activeCarousel} />
    </CarouselLayout>
  );
};
