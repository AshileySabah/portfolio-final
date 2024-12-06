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
            <Grid item xs={12} sm={6} md={4}>
              <Typography color="white" fontSize={20} fontWeight="bold">
                {nicho}
              </Typography>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 15 }}>
                {habilidades?.map((habilidade) => {
                  return <Card {...habilidade} />;
                })}
              </div>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};
