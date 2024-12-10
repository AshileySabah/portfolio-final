import { Container } from "./styles";

interface TitleProps {
  section: string;
}

export const Title: React.FC<TitleProps> = ({ section }) => {
  const [before, after] = section?.split("&");

  return section?.includes("&") ? (
    <Container>
      {before}
      <span>&</span>
      {after}
    </Container>
  ) : (
    <Container>{section}</Container>
  );
};
