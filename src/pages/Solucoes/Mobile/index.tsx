import { solucoes } from "../data";
import { Card } from "../components/Card";
import { splitArrayConverter } from "@/utils/converters/splitArrayConverter";
import { Carousel } from "@/components/Carousel";
import { Container } from "./styles";
import { useStore } from "../useStore";
import { CarouselLayout } from "@/components/Carousel/Layout";

export const SolucoesMobile = () => {
  const { activeCarousel, setActiveCarousel } = useStore();

  const solucoesMobileList = splitArrayConverter(solucoes, 3);

  const list = solucoesMobileList?.map((solucoes) => {
    return (
      <Container>
        {solucoes?.map((solucao) => {
          return <Card key={solucao?.tipo} {...solucao} />;
        })}
      </Container>
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
