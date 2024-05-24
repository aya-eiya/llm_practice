import { PageProps } from "$fresh/server.ts";
import ForAll from "../../components/lp/forAll.tsx";

const contentText = {
  title: "Treinamento diário de inglês com suporte de IA",
  description:
    "Melhore seu inglês com textos e testes diários gerados por IA. Fortaleça também sua habilidade auditiva.",
  keywords:
    "aprendizado de inglês, IA, teste de compreensão, audição, atualização diária, melhoria de inglês, aprendizado eficaz",
  ogImage: "/lp/forJP/og-image.png",
  nav: {
    feature: "Características",
    recommend: "Recomendações",
    howTo: "Como usar",
    contact: "Contato",
  },
  features: {
    title: "Características do serviço",
    items: [
      {
        imgSrc: "/lp/forAll/you_got_mail.jpg.webp",
        imgAlt: "Teste diário atualizado",
        title: "Atualização diária",
        description: "Textos e testes gerados por IA todos os dias.",
      },
      {
        imgSrc: "/lp/forAll/take_note.jpg.webp",
        imgAlt: "Teste de compreensão",
        title: "Teste de compreensão",
        description: "Cinco perguntas para melhorar sua leitura.",
      },
      {
        imgSrc: "/lp/forAll/hearing.jpg.webp",
        imgAlt: "Prática de audição",
        title: "Prática de audição",
        description: "Treine seus ouvidos com leitura de voz por IA.",
      },
    ],
  },
  recommends: {
    title: "Para quem é recomendado?",
    items: [
      {
        imgSrc: "/lp/forAll/busy_woman.jpg.webp",
        imgAlt: "Pessoas ocupadas",
        title: "Pessoas ocupadas",
        description: "Ideal para quem tem pouco tempo.",
      },
      {
        imgSrc: "/lp/forAll/meeting.jpg.webp",
        imgAlt: "Aprendizado equilibrado",
        title: "Aprendizado equilibrado",
        description: "Melhore leitura e audição ao mesmo tempo.",
      },
      {
        imgSrc: "/lp/forAll/jog.jpg.webp",
        imgAlt: "Rotina diária",
        title: "Rotina diária",
        description: "Perfeito para aprender todos os dias.",
      },
    ],
  },
  howToContents: {
    title: "Fácil de usar!",
    items: [
      {
        imgSrc: "/lp/forAll/internet.jpg.webp",
        imgAlt: "Acesse o site",
        title: "Acesse o site",
        description: "Muito simples de começar.",
      },
      {
        imgSrc: "/lp/forAll/scheduler.jpg.webp",
        imgAlt: "Pratique diariamente",
        title: "Pratique diariamente",
        description: "Desafie-se com textos e testes diários.",
      },
      {
        imgSrc: "/lp/forAll/ear.jpg.webp",
        imgAlt: "Melhore a audição",
        title: "Melhore a audição",
        description: "Não se esqueça de praticar com IA.",
      },
    ],
  },
  startNow: "Comece agora",
  contact: {
    title: "Contato",
    description:
      "Se tiver perguntas ou comentários, entre em contato a qualquer momento.",
    sns: {
      x: "https://x.com/hatano_ay",
      facebook: "https://www.facebook.com/ay.llc.page",
    },
  },
};

export default function forPT({ url }: PageProps) {
  return <ForAll contentText={contentText} url={url} />;
}
