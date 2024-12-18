import { Grid, Switch } from "@mui/material";
import React, { ReactNode } from "react";

interface CarouselLayoutProps {
  activeCarousel: boolean;
  setActiveCarousel: (state: boolean) => void;
  children: ReactNode;
}

export const CarouselLayout: React.FC<CarouselLayoutProps> = ({
  activeCarousel,
  setActiveCarousel,
  children,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setActiveCarousel(event?.target?.checked);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Switch
          checked={activeCarousel}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
          color="secondary"
        />
      </Grid>
      <Grid item xs={12}>
        {children}
      </Grid>
    </Grid>
  );
};
