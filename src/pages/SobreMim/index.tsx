import { PageLayout } from "@/components/PageLayout";
import { Grid, Typography } from "@mui/material";
import ProfilePhoto from "../../assets/profilePhoto.svg?react";
import { TypingEffect } from "@/components/TypingEffect";
import {
  Card,
  PhotoContainer,
  TerminalContent,
  TerminalToolbar,
  TypingEffectContainer,
} from "./styles";

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

          <Card>
            <TerminalToolbar>
              <div style={{ background: "#ff625a" }} />
              <div style={{ background: "#ffbd2e" }} />
              <div style={{ background: "#28ca40" }} />
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
