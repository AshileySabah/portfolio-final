import { experiencias } from "../data";
import { Card } from "../components/Card";
import { Timeline } from "@/components/Timeline";
import { Grid } from "@mui/material";

export const ExperienciasDesktop = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Timeline
          list={experiencias?.map((experiencia) => {
            return (
              <Card
                key={`${experiencia?.empresa} - ${experiencia?.cargo}`}
                {...experiencia}
              />
            );
          })}
        />
      </Grid>
    </Grid>
  );
};
