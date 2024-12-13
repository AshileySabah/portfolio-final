import { PageLayout } from "@/components/PageLayout";
import { Grid } from "@mui/material";
import { Formulario } from "./Formulario";
import { Links } from "./Links";

export const Contatos = () => {
  return (
    <PageLayout section="Contatos">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={8} lg={9} xl={9}>
          <Formulario />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={3} xl={3}>
          <Links />
        </Grid>
      </Grid>
    </PageLayout>
  );
};
