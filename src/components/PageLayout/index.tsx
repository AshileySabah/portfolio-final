import { Grid, Typography } from "@mui/material";
import { ReactNode } from "react";
import TypingEffect from "../TypingEffect";
import { Container } from "./styles";

interface PageLayoutProps {
  section?: string;
  children: ReactNode;
  customSection?: ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  section = "",
  children,
  customSection,
}) => {
  const [before, after] = section?.split("&");

  return (
    <Grid container spacing={2} p={3}>
      <Container>
        {section && section?.includes("&") ? (
          <Typography>
            {before}
            <span>&</span>
            {after}
          </Typography>
        ) : (
          <Typography>{section}</Typography>
        )}

        {customSection}
      </Container>

      <Grid item xs={12}>
        {children}
      </Grid>
    </Grid>
  );
};
