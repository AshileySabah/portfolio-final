import { solucoes } from "../data";
import { Card } from "../components/Card";
import { splitArrayConverter } from "@/utils/converters/splitArrayConverter";
import { Carousel } from "@/components/Carousel";
import { Container } from "./styles";

export const SolucoesMobile = () => {
  const solucoesMobileList = splitArrayConverter(solucoes, 3);

  const list = solucoesMobileList?.map((solucoes) => {
    return (
      <Container>
        {solucoes?.map((solucao) => {
          return <Card {...solucao} />;
        })}
      </Container>
    );
  });

  return <Carousel list={list} />;
};
