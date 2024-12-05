import React from "react";
import { ContainerSide } from "./styles";
import { CardWrapper } from "./components/CardWrapper";
import { Grid } from "@mui/material";

interface TimelineProps {
  list: any[];
}

export const Timeline: React.FC<TimelineProps> = ({ list }) => {
  return list?.map((item, index) => {
    return (
      <Grid container>
        <ContainerSide item xs={12} md={6} $side="left">
          {index % 2 === 0 ? (
            <CardWrapper containerSide="left">{item}</CardWrapper>
          ) : null}
        </ContainerSide>
        <ContainerSide item xs={12} md={6} $side="right">
          {index % 2 !== 0 ? (
            <CardWrapper containerSide="right">{item}</CardWrapper>
          ) : null}
        </ContainerSide>
      </Grid>
    );
  });
};
