import { Grid } from "@mui/material";
import { listNichoHabilidades, NichoHabilidadeEnum } from "../data";
import { Card } from "./components/Card";
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

  return (
    <Grid
      container
      spacing={2}
      style={{ display: "flex", alignItems: "stretch" }}
    >
      {listNichoHabilidades?.map((nichoHabilidadeEnum) => (
        <Grid
          key={nichoHabilidadeEnum}
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          xl={3}
          style={{ display: "flex" }}
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
