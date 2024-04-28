import { Handlers } from "$fresh/server.ts";
import MainLayout from "../../components/MainLayout.tsx";
import { QuizData } from "../../components/parts/Quiz.tsx";
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
  return <MainLayout data={data} />;
}
