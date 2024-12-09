import { solucoes } from "./data";
import { Card } from "./components/Card";
import { Grid } from "@mui/material";
import { PageLayout } from "@/components/PageLayout";

export const Solucoes = () => {
  return (
    <PageLayout section="Soluções">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {solucoes?.map((solucao) => {
              return (
                <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
                  <Card {...solucao} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </PageLayout>
  );
};
