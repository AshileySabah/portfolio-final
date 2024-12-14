import { PageLayout } from "@/components/PageLayout";
import { Grid } from "@mui/material";
import ProfilePhoto from "../../assets/profilePhoto.svg?react";
import { Card } from "./styles";

export const SobreMim = () => {
  return (
    <PageLayout section="Sobre Mim">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6}></Grid>
        <Grid item xs={12} sm={12} md={6}>
          <ProfilePhoto fill="#2ea103" />
        </Grid>
      </Grid>
    </PageLayout>
  );
};
