import { Box } from "@mui/material";
import { PageLayout } from "@/components/PageLayout";
import { HabilidadesMobile } from "./components/Mobile";
import { HabilidadesDesktop } from "./components/Desktop";

export const Habilidades = () => {
  return (
    <PageLayout section="Habilidades">
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <HabilidadesMobile />
      </Box>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <HabilidadesDesktop />
      </Box>
    </PageLayout>
  );
};
