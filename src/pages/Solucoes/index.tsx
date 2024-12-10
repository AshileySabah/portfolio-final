import { Box, Grid } from "@mui/material";
import { PageLayout } from "@/components/PageLayout";
import { SolucoesDesktop } from "./Desktop";
import { SolucoesMobile } from "./Mobile";

export const Solucoes = () => {
  return (
    <PageLayout section="Soluções">
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <SolucoesMobile />
      </Box>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <SolucoesDesktop />
      </Box>
    </PageLayout>
  );
};
