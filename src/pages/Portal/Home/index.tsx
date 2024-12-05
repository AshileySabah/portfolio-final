import { Experiencias } from "@/pages/Experiencias";
import { Habilidades } from "@/pages/Habilidades";
import { Grid } from "@mui/material";

export const Home: React.FC = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Habilidades />
        <Experiencias />
      </Grid>
    </Grid>
  );
};
