import { Partial } from "$fresh/runtime.ts";
import Footer from "./parts/Footer.tsx";
import Header from "./parts/Header.tsx";
import SideNavi from "./parts/SideNavi.tsx";
import Quiz, { QuizData } from "./parts/Quiz.tsx";
import { dates } from "../data/index.ts";
import { containsKey } from "../data/index.ts";

export default function Main({ data }: { data: QuizData }) {
  const next = containsKey(data.date) &&
      dates.indexOf(data.date) !== dates.length - 1
    ? dates[dates.indexOf(data.date) + 1]
    : undefined;
  const prev = containsKey(data.date) &&
      dates.indexOf(data.date) !== 0
    ? dates[dates.indexOf(data.date) - 1]
    : undefined;
  return (
    <>
      <Header />
      <div className={"flex flex-row relative"}>
        <input
          type="checkbox"
          id="menuToggle"
          name="menuToggle"
          className={"hidden peer/sideMenuToggle"}
        />
        <label
          htmlFor="menuToggle"
          className={"absolute top-2 px-2 text-xs md:left-[18.5vw] hidden md:block md:peer-checked/sideMenuToggle:hidden border bg-slate-200 rounded-full"}
        >
          {"<<<"}
        </label>
        <label
          htmlFor="menuToggle"
          className={"absolute top-2 px-2 text-xs md:left-[12px] hidden md:peer-checked/sideMenuToggle:block border bg-slate-200 rounded-full"}
        >
          {">>>"}
        </label>
        <div
          id="sideMenu"
          className={"hidden bg-slate-100 md:flex md:w-1/5 md:peer-checked/sideMenuToggle:hidden border-r border-slate-400"}
        >
          <SideNavi />
        </div>
        <div
          id="mainContent"
          className={"flex w-full bg-slate-100 md:w-4/5 md:peer-checked/sideMenuToggle:w-full pt-8"}
        >
          <main>
            <Partial name="content">
              <p className={"text-lg px-4 mb-4"}>
                A daily quiz is based on a AI generated novel and dialog about
                it. Read the novel and dialogue and try to check your
                understanding of the novel through a series of questions.
              </p>
              <Quiz
                data={data}
                prev={prev}
                next={next}
              />
            </Partial>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
