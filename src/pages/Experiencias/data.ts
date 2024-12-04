export interface Experiencia {
  cargo: string;
  data: {
    inicio: string;
    fim: string;
  };
  empresa: string;
  atividades: string[];
}

export const experiencias: Experiencia[] = [
  {
    cargo: "Analista Desenvolvedora Pleno",
    data: {
      inicio: "12/2022",
      fim: "atualmente",
    },
    empresa: "Magna Sistemas",
    atividades: [
      "Desenvolvimento da Solução de Gerenciamento de Fiscalização, sistema governamental da Secretaria Municipal das Subprefeituras para gestão de atividades de fiscalização em espaços urbanos.",
      "Desenvolvimento do Remédio em Casa, sistema governamental da Secretaria Municipal da Saúde de São Paulo para entrega domiciliar de medicamentos.",
      "Desenvolvimento do Portal do Servidor, sistema governamental da Secretaria de Agricultura e Abastecimento do Estado de São Paulo para controle de atividades dos servidores.",
    ],
  },
  {
    cargo: "Analista Desenvolvedora Júnior",
    data: {
      inicio: "10/2021",
      fim: "12/2022",
    },
    empresa: "Magna Sistemas",
    atividades: [
      "Desenvolvimento do Gedave 2.0, sistema governamental da Secretaria de Agricultura e Abastecimento do Estado de São Paulo para controle de animais, plantas, produtos, doenças, pragas, agrotóxicos, eventos agropecuários e propriedades.",
    ],
  },
  {
    cargo: "Desenvolvedora Fullstack Júnior",
    data: {
      inicio: "04/2021",
      fim: "09/2021",
    },
    empresa: "Bambinno Comércio de Artigos Infantis Eireli",
    atividades: [
      "Desenvolvimento de sistema para controle de estoque.",
      "Desenvolvimento de sistema gerador de dashboard, KPIs e DREs.",
    ],
  },
  {
    cargo: "Estagiária de Automação Industrial",
    data: {
      inicio: "04/2021",
      fim: "09/2021",
    },
    empresa: "Bambinno Comércio de Artigos Infantis Eireli",
    atividades: [
      "Desenvolvimento de dashboards e KPIs.",
      "Automatização do processo de elaborar propostas comerciais utilizando Excel VBA.",
    ],
  },
];
