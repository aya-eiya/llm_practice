import { Handlers } from "$fresh/server.ts";
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
  { data: { data } }: { data: { data: QuizData } },
) {
  return (
    <>
      <Head>
        <title>
          Daily AI-Generated Novels & Quiz: {data.title}
        </title>
        <meta
          property="og:title"
          content={data.title}
        />
        <meta
          name="twitter:title"
          content={data.title}
        />
        {data.descriptions?.keywords && (
          <meta
            name="keywords"
            content={"English novels, AI-generated novels, English learning, test questions, English proficiency, daily novels, learning tools, " +
              data.descriptions?.keywords?.join(", ")}
          />
        )}
      </Head>
      <MainLayout data={data} />
    </>
  );
}
