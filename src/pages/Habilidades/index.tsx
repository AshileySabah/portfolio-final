import { Grid } from "@mui/material";
import { PageLayout } from "@/components/PageLayout";
import { NichoHabilidadeEnum } from "./data";
import { Card } from "./components/Card";
import { useState } from "react";

export type isFlippedNicho = Record<keyof typeof NichoHabilidadeEnum, boolean>;

export const Habilidades = () => {
  const [isFlipped, setIsFlipped] = useState<isFlippedNicho>(
    Object.keys(NichoHabilidadeEnum).reduce((acc, key) => {
      acc[key as keyof typeof NichoHabilidadeEnum] = false;
      return acc;
    }, {} as isFlippedNicho),
  );

  const handleFlip = (key: keyof typeof NichoHabilidadeEnum) => {
    setIsFlipped((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <PageLayout section="Tecnologias & Habilidades">
      <Grid container spacing={2}>
        {(
          Object.keys(NichoHabilidadeEnum) as Array<
            keyof typeof NichoHabilidadeEnum
          >
        ).map((nichoHabilidadeEnum) => (
          <Grid
            key={nichoHabilidadeEnum}
            item
            xs={isFlipped[nichoHabilidadeEnum] ? 12 : 6}
            sm={isFlipped[nichoHabilidadeEnum] ? 12 : 6}
            md={isFlipped[nichoHabilidadeEnum] ? 12 : 4}
            lg={isFlipped[nichoHabilidadeEnum] ? 12 : 4}
            xl={isFlipped[nichoHabilidadeEnum] ? 12 : 3}
          >
            <Card
              nichoHabilidadeEnum={nichoHabilidadeEnum}
              handleFlip={() => handleFlip(nichoHabilidadeEnum)}
              isFlipped={isFlipped}
            />
          </Grid>
        ))}
      </Grid>
    </PageLayout>
  );
};
