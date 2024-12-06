import { useEffect, useState } from "react";
import { HabilidadePorNicho, habilidadesPorNicho, NichoEnum } from "./data";
import { Container, ContainerButtons, ContainerCards } from "./styles";
import { Card } from "./components/Card";
import { Button } from "./components/Button";
import { Grid } from "@mui/material";

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
    <Container p={3}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={4} lg={3} xl={2}>
          <ContainerButtons>
            {Object?.values(NichoEnum)?.map((nicho) => {
              return <Button {...{ nicho, nichoFilter, setNichoFilter }} />;
            })}
          </ContainerButtons>
        </Grid>
        <Grid item xs={12} sm={8} md={8} lg={9} xl={10}>
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
    </Container>
  );
};
