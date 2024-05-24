import { PageProps } from "$fresh/server.ts";
import ForAll from "../../components/lp/ForAll.tsx";

const contentText = {
  title: "Entrenamiento diario de inglés apoyado por IA",
  description:
    "Mejora tu inglés con textos y pruebas de comprensión diarios generados por IA. También mejora tu capacidad auditiva.",
  keywords:
    "aprendizaje de inglés, IA, prueba de comprensión, escucha, actualización diaria, mejora de inglés, aprendizaje efectivo",
  ogImage: "/lp/forJP/og-image.png",
  nav: {
    feature: "Características",
    recommend: "Recomendaciones",
    howTo: "Cómo usar",
    contact: "Contacto",
  },
  features: {
    title: "Características del servicio",
    items: [
      {
        imgSrc: "/lp/forAll/you_got_mail.jpg.webp",
        imgAlt: "Prueba diaria actualizada",
        title: "Actualización diaria",
        description: "Textos y pruebas generados por IA cada día.",
      },
      {
        imgSrc: "/lp/forAll/take_note.jpg.webp",
        imgAlt: "Prueba de comprensión",
        title: "Prueba de comprensión",
        description: "Cinco preguntas para mejorar tu comprensión lectora.",
      },
      {
        imgSrc: "/lp/forAll/hearing.jpg.webp",
        imgAlt: "Práctica de escucha",
        title: "Práctica de escucha",
        description: "Entrena tu oído con lectura de voz por IA.",
      },
    ],
  },
  recommends: {
    title: "¿Para quién está recomendado?",
    items: [
      {
        imgSrc: "/lp/forAll/busy_woman.jpg.webp",
        imgAlt: "Personas ocupadas",
        title: "Personas ocupadas",
        description: "Ideal para quienes tienen poco tiempo.",
      },
      {
        imgSrc: "/lp/forAll/meeting.jpg.webp",
        imgAlt: "Aprendizaje equilibrado",
        title: "Aprendizaje equilibrado",
        description: "Mejora lectura y escucha simultáneamente.",
      },
      {
        imgSrc: "/lp/forAll/jog.jpg.webp",
        imgAlt: "Rutina diaria",
        title: "Rutina diaria",
        description: "Perfecto para aprender todos los días.",
      },
    ],
  },
  howToContents: {
    title: "¡Fácil de usar!",
    items: [
      {
        imgSrc: "/lp/forAll/internet.jpg.webp",
        imgAlt: "Accede al sitio",
        title: "Accede al sitio",
        description: "Muy sencillo de empezar.",
      },
      {
        imgSrc: "/lp/forAll/scheduler.jpg.webp",
        imgAlt: "Practica a diario",
        title: "Practica a diario",
        description: "Desafía los textos y pruebas diarias.",
      },
      {
        imgSrc: "/lp/forAll/ear.jpg.webp",
        imgAlt: "Mejora auditiva",
        title: "Mejora auditiva",
        description: "No olvides practicar con IA.",
      },
    ],
  },
  startNow: "Empieza ahora",
  contact: {
    title: "Contacto",
    description:
      "Si tienes preguntas o comentarios, contáctanos en cualquier momento.",
    sns: {
      x: "https://x.com/hatano_ay",
      facebook: "https://www.facebook.com/ay.llc.page",
    },
  },
};

export default function forES({ url }: PageProps) {
  return <ForAll contentText={contentText} url={url} />;
}
