import React from "react";
import { NichoEnum } from "../../data";
import { Button as ButtonUI } from "@mui/material";

interface ButtonProps {
  nicho: NichoEnum;
  nichoFilter: NichoEnum | null;
  setNichoFilter: React.Dispatch<React.SetStateAction<NichoEnum | null>>;
}

export const Button: React.FC<ButtonProps> = ({
  nicho,
  nichoFilter,
  setNichoFilter,
}) => {
  return (
    <ButtonUI
      variant={nichoFilter === nicho ? "contained" : "outlined"}
      onClick={() =>
        nichoFilter === nicho ? setNichoFilter(null) : setNichoFilter(nicho)
      }
      color="secondary"
      fullWidth
    >
      {nicho}
    </ButtonUI>
  );
};
