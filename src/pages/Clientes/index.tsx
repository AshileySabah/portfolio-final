import { solucoes } from "./data";
import { Carousel } from "@/components/Carousel";
import { Card } from "./components/Card";
import { PageLayout } from "@/components/PageLayout";
import { Grid, useMediaQuery } from "@mui/material";
import { splitArrayConverter } from "@/utils/converters/splitArrayConverter";
import { useMemo } from "react";
import { CarouselLayout } from "@/components/Carousel/Layout";
import { useStore } from "./useStore";
import { useTheme } from "@/hooks/Theme";

export const Clientes = () => {
  const { activeCarousel, setActiveCarousel } = useStore();
  const { theme } = useTheme();
  const isScreenSizeUpLg = useMediaQuery(theme?.breakpoints?.up("lg"));

  const list = useMemo(() => {
    if (isScreenSizeUpLg) {
      return splitArrayConverter(solucoes, 2)?.map((solucoesSplitted) => {
        return solucoesSplitted?.map((solucao) => {
          return (
            <Grid
              item
              xs={12}
              sm={12}
              md={8}
              lg={8}
              xl={6}
              key={`${solucao?.cliente}-${solucao?.servico}`}
            >
              <Card {...solucao} />
            </Grid>
          );
        });
      });
    } else {
      return solucoes?.map((solucao) => {
        return (
          <Grid
            item
            xs={12}
            sm={12}
            md={8}
            lg={8}
            xl={6}
            key={`${solucao?.cliente}-${solucao?.servico}`}
          >
            <Card {...solucao} />
          </Grid>
        );
      });
    }
  }, [isScreenSizeUpLg]);

  return (
    <PageLayout section="Clientes">
      <CarouselLayout
        activeCarousel={activeCarousel}
        setActiveCarousel={setActiveCarousel}
      >
        <Carousel
          list={list}
          activeCarousel={activeCarousel}
          useGridContainer
        />
      </CarouselLayout>
    </PageLayout>
  );
};
