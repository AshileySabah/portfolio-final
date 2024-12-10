import { Box } from "@mui/material";
import { PageLayout } from "@/components/PageLayout";
import { ExperienciasDesktop } from "./Desktop";
import { ExperienciasMobile } from "./Mobile";

export const Experiencias = () => {
  return (
    <PageLayout section="Experiências">
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <ExperienciasMobile />
      </Box>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <ExperienciasDesktop />
      </Box>
    </PageLayout>
  );
};
