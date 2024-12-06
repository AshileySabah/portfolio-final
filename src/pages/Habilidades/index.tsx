import { useMemo, useState } from "react";
import { Button } from "@mui/material";
import { HabilidadePorNicho, habilidadesPorNicho, NichoEnum } from "./data";
import { Container } from "./styles";
import { Card } from "./components/Card";

export const Habilidades = () => {
  const [nichoFilter, setNichoFilter] = useState<NichoEnum | null>(null);

  const filteredList: HabilidadePorNicho[] = useMemo(() => {
    if (nichoFilter !== null) {
      return habilidadesPorNicho?.filter(({ nicho }) => nicho === nichoFilter);
    }
    return habilidadesPorNicho;
  }, [nichoFilter]);

  return (
    <Container p={3}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 15,
          marginBottom: "15px",
        }}
      >
        <Button
          variant={
            nichoFilter === NichoEnum.FRAMEWORK ? "contained" : "outlined"
          }
          onClick={() =>
            nichoFilter === NichoEnum.FRAMEWORK
              ? setNichoFilter(null)
              : setNichoFilter(NichoEnum.FRAMEWORK)
          }
        >
          Framework
        </Button>
        <Button
          variant={
            nichoFilter === NichoEnum.LINGUAGEM ? "contained" : "outlined"
          }
          onClick={() =>
            nichoFilter === NichoEnum.LINGUAGEM
              ? setNichoFilter(null)
              : setNichoFilter(NichoEnum.LINGUAGEM)
          }
        >
          Linguagem
        </Button>
        <Button
          variant={
            nichoFilter === NichoEnum.ESTILIZACAO ? "contained" : "outlined"
          }
          onClick={() =>
            nichoFilter === NichoEnum.ESTILIZACAO
              ? setNichoFilter(null)
              : setNichoFilter(NichoEnum.ESTILIZACAO)
          }
        >
          Estilização
        </Button>
        <Button
          variant={
            nichoFilter === NichoEnum.BANCO_DE_DADOS ? "contained" : "outlined"
          }
          onClick={() =>
            nichoFilter === NichoEnum.BANCO_DE_DADOS
              ? setNichoFilter(null)
              : setNichoFilter(NichoEnum.BANCO_DE_DADOS)
          }
        >
          Banco de Dados
        </Button>
        <Button
          variant={
            nichoFilter === NichoEnum.DOCUMENTACAO ? "contained" : "outlined"
          }
          onClick={() =>
            nichoFilter === NichoEnum.DOCUMENTACAO
              ? setNichoFilter(null)
              : setNichoFilter(NichoEnum.DOCUMENTACAO)
          }
        >
          Documentação
        </Button>
        <Button
          variant={
            nichoFilter === NichoEnum.GERENCIADOR_DE_ESTADOS
              ? "contained"
              : "outlined"
          }
          onClick={() =>
            nichoFilter === NichoEnum.GERENCIADOR_DE_ESTADOS
              ? setNichoFilter(null)
              : setNichoFilter(NichoEnum.GERENCIADOR_DE_ESTADOS)
          }
        >
          Gerenciador de Estados
        </Button>
        <Button
          variant={nichoFilter === NichoEnum.CI_CD ? "contained" : "outlined"}
          onClick={() =>
            nichoFilter === NichoEnum.CI_CD
              ? setNichoFilter(null)
              : setNichoFilter(NichoEnum.CI_CD)
          }
        >
          CI/CD
        </Button>
        <Button
          variant={nichoFilter === NichoEnum.TESTE ? "contained" : "outlined"}
          onClick={() =>
            nichoFilter === NichoEnum.TESTE
              ? setNichoFilter(null)
              : setNichoFilter(NichoEnum.TESTE)
          }
        >
          Teste
        </Button>
        <Button
          variant={nichoFilter === NichoEnum.IDIOMA ? "contained" : "outlined"}
          onClick={() =>
            nichoFilter === NichoEnum.IDIOMA
              ? setNichoFilter(null)
              : setNichoFilter(NichoEnum.IDIOMA)
          }
        >
          Idioma
        </Button>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 15 }}>
        {filteredList?.map(({ nicho, habilidades }) => {
          return habilidades?.map((habilidade) => {
            return <Card {...habilidade} {...{ nicho }} />;
          });
        })}
      </div>
    </Container>
  );
};
