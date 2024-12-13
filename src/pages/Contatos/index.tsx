import { PageLayout } from "@/components/PageLayout";
import { Grid } from "@mui/material";
import { Formulario } from "./Formulario";
import { Links } from "./Links";

export const Contatos = () => {
  return (
    <PageLayout section="Contatos">
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={12} md={10} lg={10} xl={8}>
          <Formulario />
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={2} xl={1.5}>
          <Links />
        </Grid>
      </Grid>
    </PageLayout>
  );
};
