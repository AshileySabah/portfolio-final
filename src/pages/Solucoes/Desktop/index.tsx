import { solucoes, SolucoesEnum } from "../data";
import { Card } from "../components/Card";
import { Grid } from "@mui/material";

export const SolucoesDesktop = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {solucoes?.map((solucao) => {
            return (
              <Grid
                key={solucao?.tipo}
                item
                xs={12}
                sm={12}
                md={solucao?.tipo === SolucoesEnum.MAIS ? 12 : 6}
                lg={solucao?.tipo === SolucoesEnum.MAIS ? 12 : 6}
                xl={4}
              >
                <Card {...solucao} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};
