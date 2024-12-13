import { solucoes } from "./data";
import { Carousel } from "@/components/Carousel";
import { Card } from "./components/Card";
import { PageLayout } from "@/components/PageLayout";
import { Grid, useMediaQuery } from "@mui/material";
import { splitArrayConverter } from "@/utils/converters/splitArrayConverter";
import { theme } from "@/components/BaseLayout/Theme/styles";
import { useMemo } from "react";

export const Clientes = () => {
  const isScreenSizeUpLg = useMediaQuery(theme?.breakpoints?.up("lg"));

  const list = useMemo(() => {
    if (isScreenSizeUpLg) {
      return splitArrayConverter(solucoes, 2)?.map((solucoesSplitted) => {
        return solucoesSplitted?.map((solucao) => {
          return (
            <Grid item xs={12} sm={12} md={8} lg={8} xl={6}>
              <Card
                key={`${solucao?.cliente}-${solucao?.cliente}`}
                {...solucao}
              />
            </Grid>
          );
        });
      });
    } else {
      return solucoes?.map((solucao) => {
        return (
          <Grid item xs={12} sm={12} md={8} lg={8} xl={6}>
            <Card
              key={`${solucao?.cliente}-${solucao?.cliente}`}
              {...solucao}
            />
          </Grid>
        );
      });
    }
  }, [isScreenSizeUpLg]);

  return (
    <PageLayout section="Clientes">
      <Carousel list={list} useGridContainer />
    </PageLayout>
  );
};
