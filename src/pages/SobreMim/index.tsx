import { PageLayout } from "@/components/PageLayout";
import { Grid } from "@mui/material";
import ProfilePhoto from "../../assets/profilePhoto.svg?react";
import { TypingEffect } from "@/components/TypingEffect";

export const SobreMim = () => {
  return (
    <PageLayout section="Sobre Mim">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6}>
          <TypingEffect
            fontSize={40}
            words={[
              "Program|",
              "Dev Front|",
              "Dev Back|",
              "Pau para toda obra",
            ]}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <ProfilePhoto fill="#2ea103" />
        </Grid>
      </Grid>
    </PageLayout>
  );
};
