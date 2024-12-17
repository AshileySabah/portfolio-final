import { PageLayout } from "@/components/PageLayout";
import { Box, Grid, Typography } from "@mui/material";
import ProfilePhoto from "../../assets/profilePhoto.svg?react";
import { TypingEffect } from "@/components/TypingEffect";
import { InfoContainer, PhotoContainer, TypingEffectContainer } from "./styles";

export const SobreMim = () => {
  return (
    <PageLayout section="Sobre Mim">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6}>
          <TypingEffectContainer>
            <TypingEffect
              words={["Program", "Dev Front", "Dev Back", "Pau para toda obra"]}
            />
          </TypingEffectContainer>

          <InfoContainer>
            <Typography fontSize={25}>
              Quer transformar suas ideias em código?
            </Typography>
            <Typography fontSize={25}>
              Até aquelas mais malucas, impossíveis ou fora da caixinha?
            </Typography>
            <Typography fontSize={25}>
              Então você encontrou a Dev certa!
            </Typography>
            <Typography fontSize={25}>
              Desafios viram soluções com qualidade, agilidade e um toque de
              criatividade.
            </Typography>
            <Typography fontSize={25}>
              Problemas? Eu resolvo. Código? Eu entrego.
            </Typography>
            <Typography fontSize={25}>
              E pode ter certeza: desafio dado é desafio cumprido com
              excelência.
            </Typography>
            <Typography fontSize={25}>
              Sem enrolação, sem drama. É só chamar! 🚀
            </Typography>
          </InfoContainer>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <PhotoContainer>
            <ProfilePhoto />
          </PhotoContainer>
        </Grid>
      </Grid>
    </PageLayout>
  );
};
