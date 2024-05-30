import { Partial } from "$fresh/runtime.ts";
import Footer from "./parts/Footer.tsx";
import Header from "./parts/Header.tsx";
import SideNavi from "./parts/SideNavi.tsx";
import data, { dates } from "../data/index.ts";
import { isVideoDate } from "../data/videoData.ts";
import { getLevelEmoji, paramsLevelValues } from "../domains/level.ts";
import { getLevelTag } from "../domains/level.ts";
import { getLevelTitle } from "../domains/level.ts";
import { getLevelDetails } from "../domains/level.ts";

const descriptions = {
  system:
    "Host Girl, a friendly and helpful AI that guides users through the quiz. With a cheerful and welcoming demeanor, System provides an overview of the quiz and offers hints and explanations to help users succeed. System's voice is clear and engaging, making learning fun and interactive.",
  narrator:
    "Narrator, a calm and soothing voice that guides listeners through the passage. With a warm and inviting tone, the narrator reads the text clearly and articulately, making it easy to follow along. The narrator's voice is a comforting presence, helping listeners immerse themselves in the story.",
  billy:
    "Billy, a boy of intelligence and curiosity. His passion for science, math, and history is palpable, sparking animated discussions and insightful questions. Despite his age, Billy effortlessly navigates complex concepts and loves tinkering in his bedroom laboratory.",
  kerry:
    "Kerry, a lively filled with curiosity and mischief. With his tousled brown hair and playful grin, he's always up to something, whether it's building LEGO masterpieces or lobbying for a pet tarantula. Despite his fun-loving nature, Kerry is sharp and perceptive, quick to spot unfairness and hypocrisy. He's a passionate debater, often discussing superheroes or critiquing movies with friends.",
  meg:
    "Meg, a girl with an insatiable love for books and boundless imagination. Always immersed in a novel or lost in her writing, she's a true bookworm with a penchant for the extraordinary. Meg's creativity knows no limits as she dreams up fantastical worlds and characters. While some may find her 'quirky,' she embraces her uniqueness, seeing magic in everyday moments.",
  lui:
    "Lui, a veteran educator with over 20 years of experience teaching social studies and history. known for his strictness and attention to detail, Lui instills values of honesty and hard work in his students. Despite his tough exterior, he's a trusted mentor and friend, inspiring a love of learning beyond the classroom.",
};

const YT_times = {
  system: "0",
  narrator: "16",
  billy: "30",
  meg: "44",
  kerry: "59",
  lui: "70",
};

const CharacterCard = (
  { name, ytTime, role, description, imgUrl }: {
    name: string;
    ytTime: string;
    role: string;
    description: string;
    imgUrl: string;
  },
) => (
  <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-start items-center">
    <div className={"relative w-fit mb-4"}>
      <a href={`https://youtu.be/o8BVav3ZR6g?t=${ytTime}`}>
        <img
          src={imgUrl}
          alt={`${name}`}
          className="w-3/4 aspect-square mx-auto rounded-full"
        />
        <img
          className={"w-1/3 max-w-16 absolute bottom-0 right-0"}
          alt="youtube"
          src="/img/YT_icon.svg"
        />
      </a>
    </div>
    <h3 className="text-2xl font-semibold mb-2">
      {name}
    </h3>
    <h4 className="text-lg text-gray-700 mb-2">{role}</h4>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default function TopLayout() {
  const last7dates = [...dates].reverse().slice(0, 7);
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
          className={"absolute top-2 px-2 py-1 z-20 text-xs md:left-[18.5vw] hidden md:block md:peer-checked/sideMenuToggle:hidden border bg-slate-200 rounded-full md:print:hidden"}
        >
          {"<<<"}
        </label>
        <label
          htmlFor="menuToggle"
          className={"absolute top-2 px-2 py-1 z-20 text-xs md:left-[12px] hidden md:peer-checked/sideMenuToggle:block border bg-slate-200 rounded-full md:print:peer-checked/sideMenuToggle:hidden"}
        >
          {">>>"}
        </label>
        <div
          id="sideMenu"
          className={"hidden bg-slate-100 md:flex md:w-1/5 md:peer-checked/sideMenuToggle:hidden md:print:hidden border-r border-slate-400"}
        >
          <SideNavi />
        </div>
        <div
          id="mainContent"
          className={"flex w-full bg-slate-100 md:w-4/5 md:print:w-full md:peer-checked/sideMenuToggle:w-full pt-8"}
        >
          <main className={"w-full"}>
            <Partial name="content">
              <div className="min-h-screen p-8">
                <section id="usage" className={"mb-16"}>
                  <header className="text-center mb-4">
                    <h2 className="text-4xl font-bold text-slate-800 mb-8">
                      Last 7 Daily Quizzes
                    </h2>
                    <div className={"flex justify-center"}>
                      <ul
                        className={"md:w-5/6"}
                      >
                        {last7dates.map((date) => (
                          <li
                            key={date}
                            className={"text-left"}
                          >
                            <a
                              href={`/pages/${date}`}
                              className="block text-xl text-slate-800 hover:underline mb-2"
                            >
                              {date}:{" "}
                              <span
                                className={"font-bold"}
                              >
                                {data[date].title}
                              </span>
                              {isVideoDate(date) ? " 🎧" : ""}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </header>
                </section>
                <section id="usage" className={"mb-16"}>
                  <header className="text-center mb-4">
                    <h2 className="text-4xl font-bold text-slate-800 mb-4">
                      How to Use
                    </h2>
                    <p className="mt-2 text-xl">
                      Daily AI-generated English novels and learning-focused
                      test questions to improve English proficiency.
                    </p>
                  </header>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className={"md:col-span-2"}>
                      <h3
                        className={"text-2xl font-bold text-slate-800"}
                      >
                        Reading
                      </h3>
                      <ul className={"mx-4"}>
                        <li className={"mt-2"}>
                          The reading passages are AI-generated fiction based on
                          real historical events.
                        </li>
                        <li className={"mt-2"}>
                          The layout is print-friendly, so you can create lesson
                          handouts or portable PDF files for offline study using
                          the 🖨️ button.
                        </li>
                      </ul>
                    </div>
                    <div className={"md:col-span-1 p-4 bg-slate-50"}>
                      <h4 className="text-xl font-bold text-slate-800 mb-4">
                        Step 1: Read the Passage
                      </h4>
                      <p className="text-lg">
                        Start by reading the passage provided. The passage is an
                        AI-generated novel that changes daily, offering fresh
                        content for users to enjoy.
                      </p>
                    </div>
                    <div className={"md:col-span-1 p-4 bg-slate-50"}>
                      <h4 className="text-xl font-bold text-slate-800 mb-4">
                        Step 2: Answer the Questions
                      </h4>
                      <p className="text-lg">
                        After reading the passage, answer the questions
                        provided. The questions test your comprehension and
                        critical thinking skills, helping you engage with the
                        text.
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className={"md:col-span-2"}>
                      <h3
                        className={"text-2xl font-bold text-slate-800"}
                      >
                        Listening
                      </h3>
                      <ul className={"mx-4"}>
                        <li className={"mt-2"}>
                          Some quizzes feature AI-generated audio for listening
                          practice, allowing you to study with ease.
                        </li>
                        <li className={"mt-2"}>
                          Quizzes that include listening exercises have a 🎧
                          icon next to their titles.
                        </li>
                        <li className={"mt-2"}>
                          You can play the audio directly from the on-screen
                          audio player, or you can also watch it on YouTube.
                        </li>
                        <li className={"mt-2"}>
                          If you use YouTube Music, you can{" "}
                          <a
                            className={"underline font-bold"}
                            href="https://music.youtube.com/playlist?list=PLe8rBiAN890boqEdONetsgS6v0vVDtLSB&si=oUGTmYobBeOx8d0D"
                          >
                            subscribe to our podcast
                          </a>{" "}
                          to automatically receive new listening audio as it
                          becomes available.
                        </li>
                      </ul>
                    </div>
                    <div className={"md:col-span-1 p-4 bg-white"}>
                      <h4 className="text-xl font-bold text-slate-800 mb-4">
                        Step 1: Listen to the Passage
                      </h4>
                      <p className="text-lg">
                        Start by listening to the passage read by the narrator.
                        The narrator's soothing voice guides you through the
                        story, helping you immerse yourself in the text.
                      </p>
                    </div>
                    <div className={"md:col-span-1 p-4 bg-white"}>
                      <h4 className="text-xl font-bold text-slate-800 mb-4">
                        Step 2: Answer the Questions
                      </h4>
                      <p className="text-lg">
                        After listening to the passage, answer the questions
                        provided. The questions test your comprehension and
                        critical thinking skills, helping you engage with the
                        text.
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className={"md:col-span-2"}>
                      <h3
                        className={"text-2xl font-bold text-slate-800"}
                      >
                        Level
                      </h3>
                      <ul className={"mx-4"}>
                        <li className={"mt-2"}>
                          The quizzes are categorized into different levels
                          based on the complexity of the grammar and vocabulary
                          used. The levels range from beginner to advanced,
                          allowing users to choose quizzes that match their
                          proficiency.
                        </li>
                        <li className={"mt-2"}>
                          Level information is provided at the top of each quiz
                        </li>
                      </ul>
                      <div className={"mt-4 md:px-4"}>
                        <dl
                          className={"grid grid-cols-12 border-y"}
                        >
                          {paramsLevelValues().map((level) => (
                            <>
                              <dt
                                className={"col-span-4 sm:col-span-3 md:col-span-2 border-y py-2"}
                              >
                                {getLevelTag(level)}
                              </dt>
                              <dd className={"col-span-1 border-y py-2"}>
                                {getLevelEmoji(level)}
                              </dd>
                              <dd
                                className={"col-span-7 sm:col-span-3 md:col-span-4 border-y py-2"}
                              >
                                {getLevelTitle(level)}
                              </dd>
                              <dd
                                className={"hidden sm:block sm:col-span-5 md:col-span-5 border-y py-2"}
                              >
                                {getLevelDetails(level)}
                              </dd>
                            </>
                          ))}
                        </dl>
                      </div>
                    </div>
                  </div>
                </section>
                <section id="voices" className={"mb-8"}>
                  <header className={"text-center mb-8"}>
                    <h2 className={"text-4xl font-bold text-slate-800"}>
                      Introduction of the characters
                    </h2>
                    <p className={"mt-2 text-xl mb-4"}>
                      The unique characters in the daily quiz have AI-generated
                      voices
                    </p>
                    <p className={"flex flex-row justify-center"}>
                      <a
                        className={"flex flex-row items-center"}
                        href="https://youtu.be/o8BVav3ZR6g?si=gl3yUiTHhJGO1Uj3"
                        title="check voice on youtube"
                      >
                        <span className={"block text-xl font-bold mr-2"}>
                          CHECK VOICE ON
                        </span>
                        <img
                          className={"w-32 block"}
                          src={"/img/YT_logo.svg"}
                          alt="youtube logo"
                        />
                      </a>
                    </p>
                  </header>

                  <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-8">
                    <div className={"hidden md:block md:col-span-1"} />
                    <div className={"md:col-span-2"}>
                      <CharacterCard
                        name="Host Girl"
                        ytTime={YT_times.system}
                        role="Provides a warm welcome and overview of the quiz."
                        description={descriptions.system}
                        imgUrl="/top/System.jpg.webp"
                      />
                    </div>

                    <div className={"md:col-span-2"}>
                      <CharacterCard
                        name="Narrator Man"
                        ytTime={YT_times.narrator}
                        role="Reads the main text for the day."
                        description={descriptions.narrator}
                        imgUrl="/top/Narrator.jpg.webp"
                      />
                    </div>
                    <div className={"hidden md:block md:col-span-1"} />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <CharacterCard
                      name="Billy"
                      ytTime={YT_times.billy}
                      role="Discusses the passage, asks questions."
                      description={descriptions.billy}
                      imgUrl="/top/Billy.jpg.webp"
                    />

                    <CharacterCard
                      name="Meg"
                      ytTime={YT_times.meg}
                      role="Participates in the conversation, offers insights."
                      description={descriptions.meg}
                      imgUrl="/top/Meg.jpg.webp"
                    />

                    <CharacterCard
                      name="Kerry"
                      ytTime={YT_times.kerry}
                      role="Contributes to the conversation, shares interpretations."
                      description={descriptions.kerry}
                      imgUrl="/top/Kerry.jpg.webp"
                    />

                    <CharacterCard
                      name="Teacher Lui"
                      ytTime={YT_times.lui}
                      role="Guides the discussion, provides explanations."
                      description={descriptions.lui}
                      imgUrl="/top/Lui.jpg.webp"
                    />
                  </div>
                </section>
              </div>
            </Partial>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
