import whatsapp from "../../assets/contatos/whatsapp.png";
import email from "../../assets/contatos/email.png";
import github from "../../assets/contatos/github.png";
import linkedin from "../../assets/contatos/linkedin.png";

export interface Contato {
  type: string;
  imagem: string;
  link: string;
}

export const contatos: Contato[] = [
  {
    type: "WhatsApp",
    imagem: whatsapp,
    link: "https://api.whatsapp.com/send?phone=5511976989145&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os",
  },
  {
    type: "E-mail",
    imagem: email,
    link: "mailto:ashiley.santiago.r@gmail.com",
  },
  {
    type: "Github",
    imagem: github,
    link: "https://github.com/AshileySabah",
  },
  {
    type: "LinkedIn",
    imagem: linkedin,
    link: "https://www.linkedin.com/in/ashiley-santiago/",
  },
];
