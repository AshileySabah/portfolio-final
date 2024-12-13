import { Tooltip, useMediaQuery } from "@mui/material";
import { Contato } from "../data";
import { Container } from "./styles";
import { theme } from "@/components/BaseLayout/Theme/styles";

interface CardProps extends Contato {}

export const Card: React.FC<CardProps> = (contato) => {
  const isScreenSizeUpMd = useMediaQuery(theme?.breakpoints?.up("md"));

  return (
    <Tooltip
      title={contato?.type}
      arrow
      placement={isScreenSizeUpMd ? "right" : "bottom"}
    >
      <Container href={contato?.link}>
        <img src={contato?.imagem} alt={`Ícone de ${contato?.type}`} />
      </Container>
    </Tooltip>
  );
};
