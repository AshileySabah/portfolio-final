import { experiencias } from "../data";
import { Carousel } from "@/components/Carousel";
import { Card } from "../components/Card";
import { CarouselLayout } from "@/components/Carousel/Layout";
import { useStore } from "../useStore";

export const ExperienciasMobile = () => {
  const { activeCarousel, setActiveCarousel } = useStore();

  const list = experiencias?.map((experiencia) => {
    return (
      <Card
        key={`${experiencia?.empresa} - ${experiencia?.cargo}`}
        {...experiencia}
      />
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
