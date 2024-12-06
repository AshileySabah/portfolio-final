import { useEffect, useState } from "react";
import { HabilidadePorNicho, habilidadesPorNicho, NichoEnum } from "./data";
import { ContainerButtons, ContainerCards } from "./styles";
import { Card } from "./components/Card";
import { Button } from "./components/Button";
import { Grid } from "@mui/material";
import { PageLayout } from "@/components/PageLayout";

export const Habilidades = () => {
  const [filteredList, setFilteredList] =
    useState<HabilidadePorNicho[]>(habilidadesPorNicho);
  const [nichoFilter, setNichoFilter] = useState<NichoEnum | null>(null);

  useEffect(() => {
    if (nichoFilter !== null) {
      setTimeout(() => {
        setFilteredList(
          habilidadesPorNicho?.filter(({ nicho }) => nicho === nichoFilter),
        );
      }, 400);
    } else {
      setFilteredList(habilidadesPorNicho);
    }
  }, [nichoFilter]);

  return (
    <PageLayout section="Habilidades">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={5} md={5} lg={4} xl={3}>
          <ContainerButtons>
            {Object?.values(NichoEnum)?.map((nicho) => {
              return <Button {...{ nicho, nichoFilter, setNichoFilter }} />;
            })}
          </ContainerButtons>
        </Grid>
        <Grid item xs={12} sm={7} md={7} lg={8} xl={9}>
          <ContainerCards>
            {filteredList?.map(({ nicho, habilidades }) => {
              return habilidades?.map((habilidade) => {
                return (
                  <Card
                    {...habilidade}
                    {...{ nicho }}
                    fadeOut={nichoFilter !== null && nichoFilter !== nicho}
                  />
                );
              });
            })}
          </ContainerCards>
        </Grid>
      </Grid>
    </PageLayout>
  );
};
