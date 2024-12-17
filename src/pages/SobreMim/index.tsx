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
          <TypingEffectContainer mb={2}>
            <TypingEffect
              words={["Program", "Dev Front", "Dev Back", "Pau para toda obra"]}
            />
          </TypingEffectContainer>

          <InfoContainer>
            <Box>
              <Typography className="pergunta">
                Quer transformar suas ideias em{" "}
                <span className="codigo-animation">código</span>? Até aquelas
                mais malucas, impossíveis ou fora da caixinha?
              </Typography>
              <Typography fontSize={20} fontWeight="bold">
                Então você encontrou a Dev certa! 😎
              </Typography>
            </Box>
            <Box mt={4}>
              <Typography fontSize={25}>
                Desafios viram soluções com qualidade, agilidade e um toque de
                criatividade.
              </Typography>
              <Typography fontSize={20} fontWeight="bold">
                Problemas? Eu resolvo. Código? Eu entrego. 😉
              </Typography>
            </Box>
            <Box textAlign="center" mt={7}>
              <Typography fontSize={25}>
                Desafio dado é desafio cumprido com excelência.
              </Typography>
              <Typography fontSize={20} fontWeight="bold">
                Sem enrolação, sem drama. É só chamar! 🚀
              </Typography>
            </Box>
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
