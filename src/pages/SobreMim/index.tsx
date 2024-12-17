import { PageLayout } from "@/components/PageLayout";
import { Grid } from "@mui/material";
import ProfilePhoto from "../../assets/profilePhoto.svg?react";
import { TypingEffect } from "@/components/TypingEffect";
import {
  PhotoContainer,
  TerminalContainer,
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

          <TerminalContainer>
            <TerminalToolbar>
              <div style={{ background: "#ff625a" }} />
              <div style={{ background: "#ffbd2e" }} />
              <div style={{ background: "#28ca40" }} />
            </TerminalToolbar>

            <TerminalContent>
              <p>
                @Quer transformar suas ideias em código?:<span> Sim</span>
              </p>
              <p>
                @Até aquelas mais malucas, impossíveis ou fora da caixinha?:
                <span> Sim</span>
              </p>
              <p>
                <span>{`>> `}</span>Então você encontrou a Dev certa! 😎
              </p>
              <p>
                <span>{`>> `}</span>Desafios viram soluções com qualidade,
                agilidade e um toque de criatividade.
              </p>
              <p>
                <span>{`>> `}</span>Problemas? Eu resolvo. Código? Eu entrego.
                😉
              </p>
              <p>
                <span>{`>> `}</span>Desafio dado é desafio cumprido com
                excelência.
              </p>
              <p>
                <span>{`>> `}</span>Sem enrolação, sem drama. É só chamar! 🚀
              </p>
            </TerminalContent>
          </TerminalContainer>
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
