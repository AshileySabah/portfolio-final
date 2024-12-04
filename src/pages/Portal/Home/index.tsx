import { Experiencias } from "@/pages/Experiencias";
import { Grid } from "@mui/material";

export const Home: React.FC = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Experiencias />
      </Grid>
    </Grid>
  );
};
