import { containsKey } from "../data/index.ts";
import { dates } from "../data/index.ts";
import { Partial } from "$fresh/runtime.ts";
import { type QuizData } from "../domains/quiz.ts";
import Footer from "./parts/Footer.tsx";
import Header from "./parts/Header.tsx";
import Quiz from "./parts/Quiz.tsx";
import SideNavi from "./parts/SideNavi.tsx";
import { getAudioData } from "../infras/audio/youtube.ts";

const BASE_URL = "https://daily-ai-generated-quiz.deno.dev" as const;

export default function Main({ data, url }: { data: QuizData; url: URL }) {
  const next = containsKey(data.date) &&
      dates.indexOf(data.date) !== dates.length - 1
    ? dates[dates.indexOf(data.date) + 1]
    : undefined;
  const prev = containsKey(data.date) &&
      dates.indexOf(data.date) !== 0
    ? dates[dates.indexOf(data.date) - 1]
    : undefined;
  const summary =
    `The story is based on the event "${data.event.event}" and includes themes of ${data.params.theme} and ${data.params.flavor}. Read the AI-generated novel and take on the quiz!`;
  const shareText = `${
    data.date === dates[dates.length - 1] ? "New Episode! " : ""
  } ${data.title}

${summary}`;
  return (
    <>
      <Header />
      <div className="flex flex-row relative text-slate-800">
        <input
          type="checkbox"
          id="menuToggle"
          name="menuToggle"
          className="hidden peer/sideMenuToggle"
        />
        <label
          htmlFor="menuToggle"
          className="absolute top-2 px-2 py-1 z-20 text-xs md:left-[18.5vw] hidden md:block md:peer-checked/sideMenuToggle:hidden border bg-slate-200 rounded-full md:print:hidden"
        >
          {"<<<"}
        </label>
        <label
          htmlFor="menuToggle"
          className="absolute top-2 px-2 py-1 z-20 text-xs md:left-[12px] hidden md:peer-checked/sideMenuToggle:block border bg-slate-200 rounded-full md:print:peer-checked/sideMenuToggle:hidden"
        >
          {">>>"}
        </label>
        <div
          id="sideMenu"
          className="hidden bg-slate-100 md:flex md:w-1/5 md:peer-checked/sideMenuToggle:hidden md:print:hidden border-r border-slate-400"
        >
          <SideNavi />
        </div>
        <div
          id="mainContent"
          className="flex w-full bg-slate-100 md:w-4/5 md:print:w-full md:peer-checked/sideMenuToggle:w-full pt-8"
        >
          <main className="w-full">
            <Partial name="content">
              <p className="text-lg px-4 mb-1">
                Explore a daily quiz inspired by an AI-generated novel and its
                accompanying dialogue. Immerse yourself in the story and engage
                with a series of questions to test your comprehension.
              </p>
              <Quiz
                data={data}
                audio={getAudioData(data.date)}
                prev={prev}
                next={next}
                shares={{
                  xHref: `https://x.com/intent/post?url=${
                    encodeURIComponent(BASE_URL + url.pathname)
                  }&text=${encodeURIComponent(shareText)}&via=myniq_en`,
                  fbHref: undefined,
                }}
              />
            </Partial>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
