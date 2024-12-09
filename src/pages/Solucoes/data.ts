export enum SolucoesEnum {
  PORTFOLIO = "Portfólio",
  BLOG = "Blog",
  SITE_EMPRESARIAL = "Site Empresarial",
  E_COMMERCE = "E-commerce",
  APLICATIVO_PARA_CELULAR = "Aplicativo para celular",
  AUTOMACAO = "Automação",
  DASHBOARD = "Dashboard",
  TRABALHO_ACADEMICO = "Trabalho Acadêmico",
  MAIS = "Mais",
}

export interface Solucoes {
  tipo: SolucoesEnum;
  descricao: string;
}

export const solucoes: Solucoes[] = [
  {
    tipo: SolucoesEnum.PORTFOLIO,
    descricao:
      "Desenvolvimento de sites personalizados para exibição de trabalhos e projetos de forma visual e funcional.",
  },
  {
    tipo: SolucoesEnum.BLOG,
    descricao:
      "Criação de blogs responsivos e dinâmicos, com integração de CMS e funcionalidades de SEO.",
  },
  {
    tipo: SolucoesEnum.SITE_EMPRESARIAL,
    descricao:
      "Desenvolvimento de sites para empresas com foco em performance, usabilidade e identidade corporativa.",
  },
  {
    tipo: SolucoesEnum.E_COMMERCE,
    descricao:
      "Construção de lojas online com integração de pagamentos, controle de estoque e suporte a vendas.",
  },
  {
    tipo: SolucoesEnum.APLICATIVO_PARA_CELULAR,
    descricao:
      "Criação de apps para Android e iOS com funcionalidades personalizadas para diversos setores.",
  },
  {
    tipo: SolucoesEnum.AUTOMACAO,
    descricao:
      "Implementação de sistemas de automação para otimizar processos e aumentar a eficiência de negócios.",
  },
  {
    tipo: SolucoesEnum.DASHBOARD,
    descricao:
      "Desenvolvimento de dashboards interativos e personalizados para monitoramento de dados e métricas de desempenho.",
  },
  {
    tipo: SolucoesEnum.TRABALHO_ACADEMICO,
    descricao:
      "Desenvolvimento de soluções digitais para trabalhos acadêmicos e projetos de TCC.",
  },
  {
    tipo: SolucoesEnum.MAIS,
    descricao: "Soluções sob demanda para projetos específicos.",
  },
];
