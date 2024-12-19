import { Box } from "@mui/material";
import { PageLayout } from "@/components/PageLayout";
import { HabilidadesDesktop } from "./Desktop";
import { HabilidadesMobile } from "./Mobile";

export const Habilidades = () => {
  return (
    <PageLayout section="Tecnologias & Habilidades">
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <HabilidadesMobile />
      </Box>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <HabilidadesDesktop />
      </Box>
    </PageLayout>
  );
};
