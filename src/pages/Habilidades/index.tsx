import { Grid, Typography } from "@mui/material";
import { habilidadesPorNicho } from "./data";
import { Container } from "./styles";
import { Card } from "./components/Card";

export const Habilidades = () => {
  return (
    <Container p={3}>
      <Grid container spacing={2}>
        {habilidadesPorNicho?.map(({ nicho, habilidades }) => {
          return (
            <Grid item xs={12}>
              <Typography>{nicho}</Typography>
              <Grid container spacing={2}>
                {habilidades?.map((habilidade) => {
                  return (
                    <Grid item xs={12} sm={3} md={2} lg={1.5} xl={0.8}>
                      <Card {...habilidade} />
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};
