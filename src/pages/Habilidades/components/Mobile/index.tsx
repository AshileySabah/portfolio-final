import { Carousel } from "@/components/Carousel";
import { Grid } from "@mui/material";
import { habilidadesPorNicho } from "../../data";

export const HabilidadesMobile = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Carousel
          list={habilidadesPorNicho}
          labelProperty="nicho"
          contentListProperty="habilidades"
          componentToRender={(item) => (
            <img src={item?.imagem} alt={item?.descricao} height={40} />
          )}
        />
      </Grid>
    </Grid>
  );
};
