import { isVideoDate } from "../../data/videoData.ts";
import { type AudioData } from "../../domains/audio.ts";
import { getLevelTag } from "../../domains/level.ts";
import { getLevelEmoji } from "../../domains/level.ts";
import { type QuizData } from "../../domains/quiz.ts";
import { segment } from "../../domains/text.ts";
import { playerId } from "../../infras/audio/youtube.ts";
import { Printer } from "../../islands/Printer.tsx";
import Audio from "../../islands/YoutubeAudio.tsx";

function Grammar(
  { grammar }: {
    grammar: NonNullable<QuizData["descriptions"]>["grammar"];
  },
) {
  return (
    <>
      {grammar && (
        <section className={"bg-slate-200 px-4 sm:px-8 md:px-24"}>
          <div className={"pb-4 flex flex-col px-4"}>
            <details className={"px-2 sm:px-4"}>
              <summary>
                <h3 className={"notranslate mb-2 text-lg inline"}>[Grammar]</h3>
                <div>
                  [Beta:] Show grammar and vocabulary description for the text.
                </div>
              </summary>
              {grammar.patterns && (
                <details className={"px-2 sm:px-4"}>
                  <summary>
                    <h4 className={"notranslate inline"}>[Patterns]</h4>
                  </summary>
                  {grammar.patterns?.map((
                    pattern,
                    pIdx,
                  ) => (
                    <div
                      key={`p${pIdx}`}
                      className={"mb-4 px-4"}
                    >
                      <h4>
                        <strong className={"notranslate"}>
                          {pattern.pattern}
                        </strong>{" "}
                        Pattern
                      </h4>
                      <ul className={"list-decimal ml-4 mb-2"}>
                        {pattern.usage?.map((usage, eIdx) => (
                          <li key={`p${pIdx}-${eIdx}`}>
                            <pre
                              className={"notranslate whitespace-pre-wrap"}
                            >{usage}</pre>
                          </li>
                        ))}
                      </ul>
                      <p>
                        {pattern.explanation}
                      </p>
                    </div>
                  ))}
                </details>
              )}
              {grammar.vocabularies && (
                <details className={"px-2 sm:px-4"}>
                  <summary>
                    <h4 className={"inline"}>[Vocabularies]</h4>
                  </summary>
                  {grammar.vocabularies?.map(
                    (
                      {
                        word,
                        class: wordClass,
                        pronounce,
                        usage,
                        meaning,
                        example,
                      },
                      pIdx,
                    ) => {
                      return (
                        <>
                          <div
                            key={`v${pIdx}`}
                            className={"mb-4 px-4"}
                          >
                            <dl className={""}>
                              <dt
                                className={"notranslate inline-block text-lg font-bold"}
                              >
                                {word}
                              </dt>
                              <dd
                                className={"notranslate inline-block pl-4"}
                              >
                                {pronounce}
                              </dd>
                              <dd
                                className={""}
                              >
                                <ul className={"notranslate ml-4 mb-2"}>
                                  {usage?.map((ex, eIdx) => (
                                    <li
                                      key={`p${pIdx}-${eIdx}`}
                                      className={"italic"}
                                    >
                                      {ex.replace(
                                        new RegExp(word, "g"),
                                        "<strong>" + word + "</strong>",
                                      ).split(/<\/?strong>/).map((w) => {
                                        return w === word
                                          ? <strong>{w}</strong>
                                          : w;
                                      })}
                                    </li>
                                  ))}
                                </ul>
                              </dd>
                              <dd
                                className={"ml-4"}
                              >
                                {wordClass}
                              </dd>
                              <dd
                                className={"ml-4"}
                              >
                                <p className={"pl-4"}>
                                  {meaning}
                                </p>
                                <p className={"notranslate italic pl-4"}>
                                  {example}
                                </p>
                              </dd>
                            </dl>
                          </div>
                        </>
                      );
                    },
                  )}
                </details>
              )}
            </details>
          </div>
        </section>
      )}
    </>
  );
}

export default function Quiz(
  { data, audio, next, prev }: { data: QuizData } & { audio?: AudioData } & {
    next?: QuizData["date"];
  } & {
    prev?: QuizData["date"];
  },
) {
  const aiParams = [
    data.params?.models?.main
      ? `chat-ai: ${data.params.models.main}`
      : undefined,
    data.params?.models?.novel
      ? `novel-ai: ${data.params.models.novel}`
      : undefined,
    data.params?.theme ? `theme: ${data.params.theme}` : undefined,
    data.params?.flavor ? `flavor: ${data.params.flavor}` : undefined,
  ].filter((p) => !!p);
  return (
    <>
      <section id={"quiz"}>
        <div className={"px-4"}>
          <h2 className={"text-3xl"}>
            {data.title}
          </h2>
          <div className={"flex flex-row justify-end px-4 select-none"}>
            {aiParams.length > 0 && (
              <aside
                className={"mr-4 print:hidden md:flex md:flex-row-reverse"}
              >
                <input
                  key={data.date}
                  type="checkbox"
                  id={"aiParams"}
                  className={"hidden peer/aiParams"}
                />
                <div className={"flex items-center"}>
                  <label
                    htmlFor={"aiParams"}
                    className={"z-10 cursor-pointer"}
                    title="AI Params"
                  >
                    🤖
                  </label>
                </div>
                <div
                  className={"hidden peer-checked/aiParams:block absolute bg-slate-50 border border-slate-400 p-2" +
                    "md:bg-transparent md:border-0 md:p-0 md:relative"}
                >
                  <ul className={"md:flex flex-row md:text-xs"}>
                    {aiParams.map((param, idx) => (
                      <li
                        key={idx}
                        className={"h-5 md:pb-1 md:mr-1 px-2 md:border-slate-400 md:rounded-full md:bg-slate-200"}
                      >
                        {param}
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            )}
            <aside className={"mr-4 hidden md:flex print:hidden items-center"}>
              <div>
                <Printer />
              </div>
            </aside>
            <aside className={"mr-4 print:hidden"}>
              <input
                key={data.date}
                type="checkbox"
                id={"reportProblem"}
                className={"hidden peer/reportProblem"}
              />
              <div className={"flex items-center"}>
                <label htmlFor={"reportProblem"} className={"cursor-pointer"}>
                  📢
                </label>
              </div>
              <div
                className={"hidden peer-checked/reportProblem:block md:text-xs absolute bg-slate-50 border border-slate-400 p-2"}
              >
                <label
                  htmlFor={"reportProblem"}
                  className={"cursor-pointer font-bold"}
                >
                  [x]&nbsp;&nbsp;&nbsp;Report Problem
                </label>
                <ul>
                  <li className={"mt-2 mb-1"}>
                    <a
                      className={"underline py-1"}
                      target={"_blank"}
                      href={`/report?page=/pages/${data.date}&reason=page%20broken`}
                      rel={"nofollow"}
                    >
                      Broken page
                    </a>
                  </li>
                  <li className={"mb-1"}>
                    <a
                      className={"underline py-1"}
                      target={"_blank"}
                      href={`/report?page=/pages/${data.date}&reason=meaningless%20content`}
                      rel={"nofollow"}
                    >
                      Meaningless Content
                    </a>
                  </li>
                  <li className={"mb-1"}>
                    <a
                      className={"underline py-1"}
                      target={"_blank"}
                      href={`/report?page=/pages/${data.date}&reason=inappropriate%20content`}
                      rel={"nofollow"}
                    >
                      Inappropriate Content
                    </a>
                  </li>
                  <li className={"mb-1"}>
                    <a
                      className={"underline py-1"}
                      target={"_blank"}
                      href={`/report?page=/pages/${data.date}&reason=copyright%20violation`}
                      rel={"nofollow"}
                    >
                      Copyright Violation
                    </a>
                  </li>
                </ul>
              </div>
            </aside>
            <aside className={"mr-4"}>
              <div
                className={"text-base cursor-default select-none"}
                title={getLevelTag(data.params.level)}
              >
                {getLevelEmoji(data.params.level)}
              </div>
            </aside>
            {isVideoDate(data.date) && (
              <aside className={"mr-4"}>
                <div
                  className={"text-base cursor-default select-none"}
                  title="listening available"
                >
                  🎧
                </div>
              </aside>
            )}
            <div className={"flex items-center"}>
              <p
                className={"notranslate text-sm text-right"}
              >
                generated at {data.date}
              </p>
            </div>
          </div>
          <div className={"w-0 h-0"} id={playerId} />
          <div className={"md:pr-12"}>
            {data.body.split("\n\n").map(
              (body, index) => {
                return (
                  <>
                    {index === 0 &&
                      (
                        <div
                          className={"flex flex-col w-full mb-4 sm:w-56 md:w-80 sm:ml-4 sm:float-right"}
                        >
                          {audio && (
                            <div
                              className={"rounded-t-xl w-full bg-slate-800 h-4"}
                            />
                          )}
                          <div
                            className={"w-full h-auto sm:w-56 sm:h-auto md:w-80 md:h-auto bg-slate-800 bg-cover bg-center" +
                              (audio
                                ? " aspect-video"
                                : " rounded-xl aspect-[17/13]")}
                            style={{
                              backgroundImage:
                                `url('/bookshelf?date=${data.date}&img=webp')`,
                            }}
                          >
                          </div>
                          {audio && (
                            <div className={"sm:-mt-6"}>
                              <Audio data={audio} />
                            </div>
                          )}
                        </div>
                      )}
                    <p
                      key={`${data.date}-${index}`}
                      className={"mb-4 font-mono whitespace-pre-wrap"}
                    >
                      {segment(body).map(
                        (
                          line,
                          lineIndex,
                        ) => (
                          <span
                            key={`${data.date}-${index}-${lineIndex}`}
                            className={"font-mono whitespace-pre-wrap"}
                          >
                            {" "}
                            {line.replaceAll(/(\s|&nbsp;)+/g, " ")}
                          </span>
                        ),
                      )}
                    </p>
                  </>
                );
              },
            )}
          </div>
          <p className={"notranslate px-8 text-right"}>
            (Word Count: {data["word count"]})
          </p>
          <h3 className={"notranslate mb-2 text-lg"}>[Dialog]</h3>
          <ul className={"px-4 mb-4"}>
            {data.dialog &&
              data.dialog.map((line, index) => (
                <li key={index} className={"flex flex-row mb-1"}>
                  <span className={"block mr-2 font-bold"}>
                    {Object.keys(line)[0]}:
                  </span>
                  <p>{Object.values(line)[0]}</p>
                </li>
              ))}
          </ul>
          <hr className={"mb-2"} />
          <h3 className={"notranslate mb-2 text-lg"}>[Quiz]</h3>
          {data.quiz &&
            data.quiz.map((question, qIdx) => (
              <div key={qIdx} className={"mb-4 px-4"}>
                <dl>
                  <dt>
                    <h4 id={`quiz_${qIdx}`}>
                      <span className={"notranslate"}>
                        Question {qIdx + 1}.
                      </span>
                      <p className={"px-4 font-bold text-lg"}>
                        {question.question}
                      </p>
                    </h4>
                  </dt>
                  <dd className={"mx-4 my-2 print:hidden"}>
                    Tap or click from following options to select your answer.
                  </dd>
                  <dd>
                    <ul>
                      {question.options.map((option, oIdx) => (
                        <li
                          key={oIdx}
                          className={"ml-16 mr-4 pl-1 py-1 marker:font-mono " +
                            ([
                              "marker:content-['A)']",
                              "marker:content-['B)']",
                              "marker:content-['C)']",
                              "marker:content-['D)']",
                              "marker:content-['E)']",
                            ][oIdx])}
                        >
                          <label
                            htmlFor={`select-q${qIdx}-o${oIdx}`}
                            className={"cursor-pointer border-b print:border-b-0 border-slate-800 inline-block"}
                          >
                            {option}
                          </label>
                        </li>
                      ))}
                    </ul>
                  </dd>
                </dl>
              </div>
            ))}
          <div
            className={"h-[50vh] print:hidden flex flex-col justify-end items-end"}
          />
        </div>
        <div
          className={"w-full px-2 sm:px-8 sticky print:relative bottom-0 bg-slate-200 border-slate-500"}
        >
          <div
            className={"flex flex-row justify-between items-center w-full h-16 break-inside-avoid"}
          >
            {data.quiz && data.quiz
              .map((quiz, qIdx) => {
                return (
                  <a
                    href={`#quiz_${qIdx}`}
                    key={`q${qIdx}`}
                    className={"w-1/6 h-8 border border-slate-500 items-center flex flex-row"}
                  >
                    <div
                      className={"border-r border-slate-500 flex px-1 sm:px-2 items-center h-full"}
                    >
                      <div className={"notranslate"}>Q{qIdx + 1}</div>
                    </div>
                    <div className={"w-full h-full flex items-center"}>
                      {quiz.options.map((_, oIdx) => {
                        return (
                          <>
                            <input
                              type="radio"
                              key={`q${data.date}-${qIdx}-o${oIdx}-input`}
                              id={`select-q${qIdx}-o${oIdx}`}
                              radioGroup={`select-q${qIdx}`}
                              name={`select-q${qIdx}`}
                              value={oIdx}
                              className={"appearance-none hidden " + ([
                                `peer/0`,
                                `peer/1`,
                                `peer/2`,
                                `peer/3`,
                                `peer/4`,
                              ][oIdx])}
                            />
                            <div
                              key={`q${qIdx}-o${oIdx}-label`}
                              className={"hidden w-full h-full justify-center items-center print:invisible " +
                                ([
                                  "peer-checked/0:flex ",
                                  "peer-checked/1:flex ",
                                  "peer-checked/2:flex ",
                                  "peer-checked/3:flex ",
                                  "peer-checked/4:flex ",
                                ][oIdx]) +
                                (quiz.answer === oIdx
                                  ? "bg-blue-400"
                                  : "bg-red-400")}
                            >
                              <div className={"notranslate"}>
                                {String.fromCharCode(oIdx + 65)}
                              </div>
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </a>
                );
              })
              .flat()}
          </div>
          <div
            className={"flex flex-row justify-evenly pb-2 print:hidden"}
            f-client-nav
          >
            <a
              href={prev ? `/pages/${prev}` : "/"}
              className={"notranslate border border-slate-400 px-8 rounded h-8 select-none" +
                (prev ? "" : " invisible")}
            >
              Prev
            </a>
            <a
              href={next ? `/pages/${next}` : "/"}
              className={"notranslate border border-slate-400 px-8 rounded h-8 select-none" +
                (next ? "" : " invisible")}
            >
              Next
            </a>
          </div>
        </div>
      </section>

      {data.descriptions && (
        <Grammar key={data.date} grammar={data.descriptions.grammar} />
      )}
    </>
  );
}
