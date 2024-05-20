import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import MainLayout from "../../components/MainLayout.tsx";
import { QuizData } from "../../domains/quiz.ts";
import dailyData, { containsKey } from "../../data/index.ts";
import Meta from "../../components/parts/Meta.tsx";

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
          {data.title} - {data.date}
        </title>
        <Meta origin={url.origin} quiz={data} />
      </Head>
      <MainLayout data={data} />
    </>
  );
}
