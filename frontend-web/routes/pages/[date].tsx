import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import MainLayout from "../../components/MainLayout.tsx";
import { QuizData } from "../../domains/quiz.ts";
import dailyData, { containsKey } from "../../data/index.ts";

export const handler: Handlers = {
  GET(_, ctx) {
    const { date } = ctx.params;
    if (!containsKey(date)) {
      return ctx.renderNotFound();
    }
    const data = dailyData[date];
    return ctx.render({ data });
  },
};

export default function DailyQuiz(
  { data: { data }, url }: { data: { data: QuizData } } & PageProps,
) {
  return (
    <>
      <Head>
        <title>
          Daily AI-Generated Novels & Quiz: {data.title}
        </title>
        {data.descriptions?.keywords && (
          <meta
            name="keywords"
            content={"English novels, AI-generated novels, English learning, test questions, English proficiency, daily novels, learning tools, " +
              data.descriptions?.keywords?.join(", ")}
          />
        )}
        <meta
          name="description"
          content="Daily AI-generated English novels and learning-focused test questions to improve English proficiency."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content={data.title}
        />
        <meta
          property="og:description"
          content="Daily AI-generated English novels and learning-focused test questions to improve English proficiency."
        />
        <meta
          property="og:url"
          content={`${url.origin}/pages/${data.date}`}
        />
        <meta
          property="og:site_name"
          content="Daily AI-Generated English Novels & Learning Test Questions"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={`${url.origin}/og/study_group.jpg`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={data.title}
        />
        <meta
          name="twitter:description"
          content="Daily AI-generated English novels and learning-focused test questions to improve English proficiency."
        />
        <meta
          name="twitter:image"
          content={`${url.origin}/og/study_group.jpg`}
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🤖</text></svg>"
        />
      </Head>
      <MainLayout data={data} />
    </>
  );
}
