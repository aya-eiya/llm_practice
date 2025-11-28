import { PageProps } from "fresh";
import { Head } from "fresh/runtime";
import MainLayout from "../../components/MainLayout.tsx";
import { QuizData } from "../../domains/quiz.ts";
import dailyData, { containsKey } from "../../data/index.ts";
import Meta from "../../components/parts/Meta.tsx";
import { HttpError } from "fresh";
import { define } from "../../tools/utils.ts";

export const handler = define.handlers({
  GET(ctx) {
    const { date } = ctx.params;
    if (!containsKey(date)) {
      throw new HttpError(404);
    }
    const data = dailyData[date];
    return { data };
  },
});

export default function DailyQuiz(
  { data, url }: { data: QuizData } & PageProps,
) {
  return (
    <>
      <Head>
        <title>
          {data.title} - {data.date}
        </title>
        <Meta origin={url.origin} quiz={data} />
        <link
          rel="canonical"
          href={`${url.origin}/pages/${data.date}`}
        />
      </Head>
      <MainLayout data={data} url={url} />
    </>
  );
}
