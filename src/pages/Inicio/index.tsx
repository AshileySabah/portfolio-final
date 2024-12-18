import { PageLayout } from "@/components/PageLayout";
import { Grid, Typography } from "@mui/material";
import ProfilePhoto from "../../assets/profile/profilePhoto.svg?react";
import { TypingEffect } from "@/components/TypingEffect";
import {
  Card,
  GridItem,
  PhotoContainer,
  TerminalContent,
  TerminalToolbar,
  TypingEffectContainer,
} from "./styles";

export const Inicio = () => {
  return (
    <PageLayout
      customSection={
        <TypingEffectContainer>
          <TypingEffect
            words={["Program", "Dev Front", "Dev Back", "Pau para toda obra"]}
          />
        </TypingEffectContainer>
      }
    >
      <Grid container spacing={2}>
        <GridItem item xs={12} sm={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
          <Card>
            <TerminalToolbar>
              <div />
              <div />
              <div />
            </TerminalToolbar>

            <TerminalContent>
              <Typography>
                @Quer transformar suas ideias em código?:<span> SIM</span>
              </Typography>
              <Typography>
                @Até aquelas mais malucas, impossíveis ou fora da caixinha?:
                <span> SIM</span>
              </Typography>
              <div className="response">
                <Typography>
                  <span>{`>> `}</span>Então você encontrou a Dev certa!
                </Typography>
                <Typography>
                  <span>{`>> `}</span>Desafios viram soluções com qualidade,
                  agilidade e um toque de criatividade.
                </Typography>
                <Typography>
                  <span>{`>> `}</span>Problemas? Eu resolvo. Código? Eu entrego.
                </Typography>
                <Typography>
                  <span>{`>> `}</span>Desafio dado é desafio cumprido com
                  excelência.
                </Typography>
                <Typography>
                  <span>{`>> `}</span>Sem enrolação, sem drama. É só chamar!
                </Typography>
              </div>
            </TerminalContent>
          </Card>
        </GridItem>

        <Grid item xs={12} sm={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
          <PhotoContainer>
            <ProfilePhoto />
          </PhotoContainer>
        </Grid>
      </Grid>
    </PageLayout>
  );
};
