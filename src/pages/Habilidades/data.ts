import react from "../../assets/framework/react.png";
import next from "../../assets/framework/next.png";
import angular from "../../assets/framework/angular.png";
import flutter from "../../assets/framework/flutter.png";
import express from "../../assets/framework/express.png";
import springBoot from "../../assets/framework/springBoot.png";
import html from "../../assets/linguagem/html.png";
import javascript from "../../assets/linguagem/javascript.png";
import typescript from "../../assets/linguagem/typescript.png";
import dart from "../../assets/linguagem/dart.png";
import node from "../../assets/linguagem/node.png";
import java from "../../assets/linguagem/java.png";
import css from "../../assets/estilizacao/css.png";
import sass from "../../assets/estilizacao/sass.png";
import styledComponents from "../../assets/estilizacao/styledComponents.png";
import materialUI from "../../assets/estilizacao/material-ui.png";
import tailwind from "../../assets/estilizacao/tailwind.png";
import bootstrap from "../../assets/estilizacao/bootstrap.png";
import sql from "../../assets/bancoDados/sql.png";
import mongodb from "../../assets/bancoDados/mongodb.png";
import mysql from "../../assets/bancoDados/mysql.png";
import postgresql from "../../assets/bancoDados/postgresql.png";
import firebase from "../../assets/bancoDados/firebase.png";
import storybook from "../../assets/documentacao/storybook.png";
import swagger from "../../assets/documentacao/swagger.png";
import redux from "../../assets/gerenciadorEstados/redux.png";
import zustand from "../../assets/gerenciadorEstados/zustand.png";
import git from "../../assets/ciCd/git.png";
import jest from "../../assets/teste/jest.png";
import junit from "../../assets/teste/junit.png";
import inglesAvancado from "../../assets/idioma/inglesAvancado.png";
import eslint from "../../assets/padraoQualidade/eslint.png";
import husky from "../../assets/padraoQualidade/husky.png";
import sonarqube from "../../assets/padraoQualidade/sonarqube.png";
import docker from "../../assets/padraoQualidade/docker.png";
import liderancaSquads from "../../assets/arquiteturaGestaoLideranca/liderancaSquads.png";
import arquiteturaProjetos from "../../assets/arquiteturaGestaoLideranca/arquiteturaProjetos.png";
import resolucaoProblemas from "../../assets/arquiteturaGestaoLideranca/resolucaoProblemas.png";
import colaboracaoEquipes from "../../assets/arquiteturaGestaoLideranca/colaboracaoEquipes.png";
import visaoNegocios from "../../assets/arquiteturaGestaoLideranca/visaoNegocios.png";
import googleCloudPlatform from "../../assets/cloudComputing/googleCloudPlatform.png";

export interface Habilidade {
  descricao: string;
  imagem: string;
}

export enum NichoHabilidadeEnum {
  FRAMEWORK = "Framework",
  LINGUAGEM = "Linguagem",
  ESTILIZACAO = "Estilização",
  BANCO_DE_DADOS = "Banco de Dados",
  DOCUMENTACAO = "Documentação",
  GERENCIADOR_DE_ESTADOS = "Gerenciador de Estados",
  CI_CD = "CI/CD",
  TESTE = "Teste",
  IDIOMA = "Idioma",
  PADRAO_E_QUALIDADE = "Padrão e Qualidade",
  ARQUITETURA_GESTAO_E_LIDERANCA = "Arquitetura, Gestão e Liderança",
  CLOUD_COMPUTING = "Cloud Computing",
}

export const listNichoHabilidades = Object?.keys(
  NichoHabilidadeEnum,
)?.sort() as Array<keyof typeof NichoHabilidadeEnum>;

export interface HabilidadePorNicho {
  nicho: NichoHabilidadeEnum;
  habilidades: Habilidade[];
}

export const habilidadesPorNicho: HabilidadePorNicho[] = [
  {
    nicho: NichoHabilidadeEnum.FRAMEWORK,
    habilidades: [
      { descricao: "React", imagem: react },
      { descricao: "Next", imagem: next },
      { descricao: "Angular", imagem: angular },
      { descricao: "React Native", imagem: react },
      { descricao: "Flutter", imagem: flutter },
      { descricao: "Express", imagem: express },
      { descricao: "Spring Boot", imagem: springBoot },
    ],
  },
  {
    nicho: NichoHabilidadeEnum.LINGUAGEM,
    habilidades: [
      { descricao: "HTML", imagem: html },
      { descricao: "JavaScript", imagem: javascript },
      { descricao: "TypeScript", imagem: typescript },
      { descricao: "Dart", imagem: dart },
      { descricao: "Node", imagem: node },
      { descricao: "Java", imagem: java },
    ],
  },
  {
    nicho: NichoHabilidadeEnum.ESTILIZACAO,
    habilidades: [
      { descricao: "CSS", imagem: css },
      { descricao: "SASS", imagem: sass },
      {
        descricao: "Styled Components",
        imagem: styledComponents,
      },
      { descricao: "Material UI", imagem: materialUI },
      { descricao: "Tailwind", imagem: tailwind },
      { descricao: "Bootstrap", imagem: bootstrap },
    ],
  },
  {
    nicho: NichoHabilidadeEnum.BANCO_DE_DADOS,
    habilidades: [
      { descricao: "SQL", imagem: sql },
      { descricao: "MongoDB", imagem: mongodb },
      { descricao: "MySQL", imagem: mysql },
      { descricao: "PostgreSQL", imagem: postgresql },
      { descricao: "Firebase", imagem: firebase },
    ],
  },
  {
    nicho: NichoHabilidadeEnum.DOCUMENTACAO,
    habilidades: [
      { descricao: "Storybook", imagem: storybook },
      { descricao: "Swagger", imagem: swagger },
    ],
  },
  {
    nicho: NichoHabilidadeEnum.GERENCIADOR_DE_ESTADOS,
    habilidades: [
      { descricao: "Redux", imagem: redux },
      { descricao: "Zustand", imagem: zustand },
    ],
  },
  {
    nicho: NichoHabilidadeEnum.CI_CD,
    habilidades: [{ descricao: "Git", imagem: git }],
  },
  {
    nicho: NichoHabilidadeEnum.TESTE,
    habilidades: [
      { descricao: "Jest", imagem: jest },
      { descricao: "JUnit", imagem: junit },
    ],
  },
  {
    nicho: NichoHabilidadeEnum.IDIOMA,
    habilidades: [
      {
        descricao: "Inglês Avançado",
        imagem: inglesAvancado,
      },
    ],
  },
  {
    nicho: NichoHabilidadeEnum.PADRAO_E_QUALIDADE,
    habilidades: [
      { descricao: "ESLint", imagem: eslint },
      { descricao: "Husky", imagem: husky },
      { descricao: "SonarQube", imagem: sonarqube },
      { descricao: "Docker", imagem: docker },
    ],
  },
  {
    nicho: NichoHabilidadeEnum.ARQUITETURA_GESTAO_E_LIDERANCA,
    habilidades: [
      {
        descricao: "Liderança de Squads",
        imagem: liderancaSquads,
      },
      {
        descricao: "Arquitetura de Projetos",
        imagem: arquiteturaProjetos,
      },
      {
        descricao: "Resolução de problemas",
        imagem: resolucaoProblemas,
      },
      {
        descricao: "Colaboração entre equipes",
        imagem: colaboracaoEquipes,
      },
      {
        descricao: "Visão de negócios",
        imagem: visaoNegocios,
      },
    ],
  },
  {
    nicho: NichoHabilidadeEnum.CLOUD_COMPUTING,
    habilidades: [
      {
        descricao: "Google Cloud Platform",
        imagem: googleCloudPlatform,
      },
    ],
  },
];
