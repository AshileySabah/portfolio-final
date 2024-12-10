import { Grid } from "@mui/material";
import { NichoHabilidadeEnum } from "../data";
import { Card } from "../components/Card";
import { useState } from "react";

export type isFlippedNicho = Record<keyof typeof NichoHabilidadeEnum, boolean>;

const defaultValuesIsFlipped = Object.keys(NichoHabilidadeEnum).reduce(
  (acc, key) => {
    acc[key as keyof typeof NichoHabilidadeEnum] = false;
    return acc;
  },
  {} as isFlippedNicho,
);

export const HabilidadesDesktop = () => {
  const [isFlipped, setIsFlipped] = useState<isFlippedNicho>(
    defaultValuesIsFlipped,
  );

  const handleFlip = (key: keyof typeof NichoHabilidadeEnum) => {
    setIsFlipped((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const listNichoHabilidades = Object.keys(NichoHabilidadeEnum) as Array<
    keyof typeof NichoHabilidadeEnum
  >;

  return (
    <Grid container spacing={2}>
      {listNichoHabilidades?.map((nichoHabilidadeEnum) => (
        <Grid
          key={nichoHabilidadeEnum}
          item
          xs={12}
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
  );
};
