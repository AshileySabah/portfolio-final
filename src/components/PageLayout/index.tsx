import { Grid } from "@mui/material";
import { ReactNode } from "react";
import { Title } from "./styles";

interface PageLayoutProps {
  section: string;
  children: ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  section,
  children,
}) => {
  return (
    <Grid container spacing={2} p={3}>
      <Grid item xs={12} mb={2}>
        <Title>{section}</Title>
      </Grid>
      <Grid item xs={12}>
        {children}
      </Grid>
    </Grid>
  );
};
