import { Grid } from "@mui/material";
import { PageLayout } from "@/components/PageLayout";
import { NichoHabilidadeEnum } from "./data";
import { Card } from "./components/Card";

export const Habilidades = () => {
  return (
    <PageLayout section="Habilidades">
      <Grid container spacing={2}>
        {Object?.keys(NichoHabilidadeEnum)?.map((nichoHabilidadeEnum) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
              <Card
                nichoHabilidadeEnum={
                  nichoHabilidadeEnum as keyof typeof NichoHabilidadeEnum
                }
              />
            </Grid>
          );
        })}
      </Grid>
    </PageLayout>
  );
};
