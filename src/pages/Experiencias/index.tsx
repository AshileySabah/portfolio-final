import { experiencias } from "./data";
import { Card } from "./components/Card";
import { Timeline } from "@/components/Timeline";
import { Grid } from "@mui/material";
import { PageLayout } from "@/components/PageLayout";

export const Experiencias = () => {
  return (
    <PageLayout section="Experiências">
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
    </PageLayout>
  );
};
