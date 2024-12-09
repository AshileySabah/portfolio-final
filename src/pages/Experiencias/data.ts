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
      "Solução de Gerenciamento de Fiscalização para gestão de atividades de fiscalização em espaços urbanos",
      "Remédio em Casa para entrega domiciliar de medicamentos",
      "Portal do Servidor para controle de atividades de funcionários",
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
      "Gedave 2.0 para controle de animais, plantas, produtos, doenças, pragas, agrotóxicos, eventos agropecuários e propriedades",
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
      "Sistema para controle de estoque",
      "Sistema gerador de dashboard, KPIs e DREs",
    ],
  },
  {
    cargo: "Estagiária de Automação Industrial",
    data: {
      inicio: "04/2021",
      fim: "09/2021",
    },
    empresa: "Viaduto Soluções Logísticas",
    atividades: [
      "Dashboards e KPIs",
      "Automatização do processo de elaborar propostas comerciais",
    ],
  },
];
