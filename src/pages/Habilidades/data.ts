import inglesAvancado from "../../assets/ingles-avancado.png";
import react from "../../assets/react.png";
import next from "../../assets/next.png";
import angular from "../../assets/angular.png";
import flutter from "../../assets/flutter.png";
import express from "../../assets/express.png";
import springBoot from "../../assets/spring-boot.png";
import html from "../../assets/html.png";
import javascript from "../../assets/javascript.png";
import typescript from "../../assets/typescript.png";
import dart from "../../assets/dart.png";
import node from "../../assets/node.png";
import java from "../../assets/java.png";
import css from "../../assets/css.png";
import sass from "../../assets/sass.png";
import styledComponents from "../../assets/styled-components.png";
import materialUI from "../../assets/material-ui.png";
import tailwind from "../../assets/tailwind.png";
import bootstrap from "../../assets/bootstrap.png";
import sql from "../../assets/sql.png";
import mongodb from "../../assets/mongodb.png";
import mysql from "../../assets/mysql.png";
import postgresql from "../../assets/postgresql.png";
import firebase from "../../assets/firebase.png";
import storybook from "../../assets/storybook.png";
import swagger from "../../assets/swagger.png";
import redux from "../../assets/redux.png";
import zustand from "../../assets/zustand.png";
import git from "../../assets/git.png";
import jest from "../../assets/jest.png";
import junit from "../../assets/junit.png";
import eslint from "../../assets/eslint.png";
import husky from "../../assets/husky.png";
import sonarqube from "../../assets/sonarqube.png";
import liderancaSquads from "../../assets/liderancaSquads.png";
import arquiteturaProjetos from "../../assets/arquiteturaProjetos.png";
import resolucaoProblemas from "../../assets/resolucaoProblemas.png";
import colaboracaoEquipes from "../../assets/colaboracaoEquipes.png";
import visaoNegocios from "../../assets/visaoNegocios.png";

export interface Habilidade {
  descricao: string;
  imagem: string;
}

export enum NichoEnum {
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
}

export interface HabilidadePorNicho {
  nicho: NichoEnum;
  habilidades: Habilidade[];
}

export const habilidadesPorNicho: HabilidadePorNicho[] = [
  {
    nicho: NichoEnum.FRAMEWORK,
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
    nicho: NichoEnum.LINGUAGEM,
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
    nicho: NichoEnum.ESTILIZACAO,
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
    nicho: NichoEnum.BANCO_DE_DADOS,
    habilidades: [
      { descricao: "SQL", imagem: sql },
      { descricao: "MongoDB", imagem: mongodb },
      { descricao: "MySQL", imagem: mysql },
      { descricao: "PostgreSQL", imagem: postgresql },
      { descricao: "Firebase", imagem: firebase },
    ],
  },
  {
    nicho: NichoEnum.DOCUMENTACAO,
    habilidades: [
      { descricao: "Storybook", imagem: storybook },
      { descricao: "Swagger", imagem: swagger },
    ],
  },
  {
    nicho: NichoEnum.GERENCIADOR_DE_ESTADOS,
    habilidades: [
      { descricao: "Redux", imagem: redux },
      { descricao: "Zustand", imagem: zustand },
    ],
  },
  {
    nicho: NichoEnum.CI_CD,
    habilidades: [{ descricao: "Git", imagem: git }],
  },
  {
    nicho: NichoEnum.TESTE,
    habilidades: [
      { descricao: "Jest", imagem: jest },
      { descricao: "JUnit", imagem: junit },
    ],
  },
  {
    nicho: NichoEnum.IDIOMA,
    habilidades: [
      {
        descricao: "Inglês Avançado",
        imagem: inglesAvancado,
      },
    ],
  },
  {
    nicho: NichoEnum.PADRAO_E_QUALIDADE,
    habilidades: [
      { descricao: "ESLint", imagem: eslint },
      { descricao: "Husky", imagem: husky },
      { descricao: "SonarQube", imagem: sonarqube },
    ],
  },
  {
    nicho: NichoEnum.ARQUITETURA_GESTAO_E_LIDERANCA,
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
];
