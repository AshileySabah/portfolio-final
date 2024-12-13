import proezaContabil from "../../assets/proezaContabil.png";
import aCasaCapimLimao from "../../assets/aCasaCapimLimao.png";
import draAlanisBarros from "../../assets/draAlanisBarros.png";

export interface Solucao {
  cliente: string;
  imagem: string;
  servico: string;
  descricao: string;
}

export const solucoes: Solucao[] = [
  {
    cliente: "Proeza Contábil",
    imagem: proezaContabil,
    servico: "Agenda e Controle de Clientes",
    descricao:
      "Profissional rápida, detalhista, esperta. O site ficou muito bom, a agenda ajuda demais a acompanhar quem já pagou, cadastrar e editar os clientes, ver a agenda da semana.",
  },
  {
    cliente: "A Casa Capim Limão",
    imagem: aCasaCapimLimao,
    servico: "E-commerce",
    descricao:
      "Muito bom, o suporte também, a loja ficou no ar bem rápido, tirou todas as dúvidas. Recomendo.",
  },
  {
    cliente: "Dra. Alanis Barros",
    imagem: draAlanisBarros,
    servico: "Agenda e Dashboard Financeiro",
    descricao:
      "Com esse novo sistema, resolvi meus problemas de estoque e financeiros, agradeço por entender tão facilmente o que eu precisava",
  },
];
