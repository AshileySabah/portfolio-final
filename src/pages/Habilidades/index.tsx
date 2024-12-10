import { Box, Grid } from "@mui/material";
import { PageLayout } from "@/components/PageLayout";
import { HabilidadesDesktop } from "./Desktop";

export const Habilidades = () => {
  return (
    <PageLayout section="Tecnologias & Habilidades">
      <Box sx={{ display: { xs: "block", md: "none" } }}>mobile</Box>
      <Box sx={{ display: { xs: "none", md: "block" } }}>desktop</Box>
    </PageLayout>
  );
};
