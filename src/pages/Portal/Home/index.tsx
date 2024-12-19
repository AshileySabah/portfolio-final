import { Clientes } from "@/pages/Clientes";
import { Contatos } from "@/pages/Contatos";
import { Experiencias } from "@/pages/Experiencias";
import { Habilidades } from "@/pages/Habilidades";
import { Inicio } from "@/pages/Inicio";
import { Solucoes } from "@/pages/Solucoes";
import { Grid } from "@mui/material";

export const Home: React.FC = () => {
  return (
    <Grid container spacing={3} justifyContent="center">
      <Grid item xs={12} sm={12} md={12} lg={10} xl={10}>
        <Inicio />
        <Habilidades />
        <Experiencias />
        <Solucoes />
        <Clientes />
        <Contatos />
      </Grid>
    </Grid>
  );
};
