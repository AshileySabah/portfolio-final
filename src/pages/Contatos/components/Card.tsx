import { Paper, Tooltip, useMediaQuery } from "@mui/material";
import { Contato } from "../data";
import { Container } from "./styles";
import { useTheme } from "@/hooks/Theme";

interface CardProps extends Contato {}

export const Card: React.FC<CardProps> = (contato) => {
  const { theme } = useTheme();
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
