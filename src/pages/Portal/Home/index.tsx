import { Experiencias } from "@/pages/Experiencias";
import { Habilidades } from "@/pages/Habilidades";
import { Grid } from "@mui/material";

export const Home: React.FC = () => {
  return (
    <Grid container spacing={3} justifyContent="center">
      <Grid item xs={12} sm={12} md={12} lg={10} xl={10}>
        <Habilidades />
        <Experiencias />
      </Grid>
    </Grid>
  );
};
