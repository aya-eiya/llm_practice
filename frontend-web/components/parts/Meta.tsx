import example from "../../data/example.ts";
import { getLevelTitle } from "../../domains/level.ts";
import { QuizData } from "../../domains/quiz.ts";

export default function Meta(
  { origin, quiz }: { origin: string; quiz?: QuizData },
) {
  const url = quiz ? `${origin}/pages/${quiz.date}` : `${origin}/`;
  const keywords = [
    "English novels",
    "AI-generated novels",
    "English learning",
    "test questions",
    "English proficiency",
    "daily novels",
    "learning tools",
    ...(quiz?.descriptions?.keywords ?? []),
    ...(quiz?.params.level ? [getLevelTitle(quiz.params.level)] : []),
  ];
  const title = quiz?.title
    ? `${quiz.title} - ${quiz.date}`
    : "MyniQ - Daily AI-Generated English Novels & Learning Test Questions";
  const description = quiz
    ? `Daily English Novel & Quiz for ESL Learners. Today's episode is "${quiz.title}". Let's try the quiz!`
    : "Daily AI-generated English novels and learning-focused test questions to improve English proficiency.";
  return (
    <>
      <meta
        name="description"
        content={description}
      />
      <meta
        name="keywords"
        content={keywords.join(", ")}
      />
      <meta name="robots" content="index, follow" />
      <meta
        property="og:title"
        content={title}
      />
      <meta
        property="og:description"
        content={description}
      />
      <meta
        property="og:url"
        content={url}
      />
      <meta
        property="og:site_name"
        content="MyniQ"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content={`${origin}/bookshelf?date=${
          quiz?.date ?? example.date
        }&img=jpg`}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content={title}
      />
      <meta
        name="twitter:description"
        content={description}
      />
      <meta
        name="twitter:image"
        content={`${origin}/bookshelf?date=${
          quiz?.date ?? example.date
        }&img=jpg`}
      />
      <link
        rel="icon"
        href="/favicon.svg"
      />
    </>
  );
}
