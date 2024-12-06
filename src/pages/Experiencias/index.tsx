import { Container } from "./styles";
import { experiencias } from "./data";
import { Card } from "./components/Card";
import { Timeline } from "@/components/Timeline";
import { Grid, Typography } from "@mui/material";

export const Experiencias = () => {
  return (
    <Container p={3}>
      <Grid container spacing={2}>
        <Grid item xs={12} mb={2}>
          <Typography variant="h2" align="center" letterSpacing={10}>
            EXPERIÊNCIAS
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Timeline
            list={experiencias?.map((experiencia) => {
              return <Card {...experiencia} />;
            })}
          />
        </Grid>
      </Grid>
    </Container>
  );
};
