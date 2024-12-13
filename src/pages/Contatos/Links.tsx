import { Grid } from "@mui/material";
import { Card } from "./components/Card";
import { contatos } from "./data";
import { ContainerLinks } from "./styles";

export const Links = () => {
  return (
    <ContainerLinks>
      {contatos?.map((contato) => {
        return <Card {...contato} />;
      })}
    </ContainerLinks>
  );
};
