import { Printer } from "../../islands/Printer.tsx";

export type QuizData = {
  date: string;
  event: string;
  title: string;
  body: string;
  "word count": number;
  dialog: (
    | {
      Billy: string;
    }
    | {
      Kerry: string;
    }
    | {
      Meg: string;
    }
    | {
      Lui: string;
    }
  )[];
  quiz: {
    question: string;
    options: string[];
    answer: number;
  }[];
  descriptions?: {
    keywords?: string[];
    grammar?: {
      patterns?: {
        pattern: string;
        usage: string[];
        explanation: string;
        words: {
          S?: string[];
          V?: string[];
          O?: string[];
          C?: string[];
          M?: string[];
        }[];
      }[];
      vocabularies?: {
        word: string;
        usage: string[];
        pronounce: string;
        meanings: {
          class: string;
          meaning: string;
          example: string;
        }[];
      }[];
    };
  };
};

export default function Quiz(
  { data, next, prev }: { data: QuizData } & { next?: QuizData["date"] } & {
    prev?: QuizData["date"];
  },
) {
  return (
    <>
      <section id="quiz.example">
        <div className={"px-4"}>
          <h2 className={"text-3xl"}>{data.title}</h2>
          <div className={"flex flex-row justify-end px-4"}>
            <aside className={"mr-4 hidden md:flex print:hidden"}>
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
              <label htmlFor={"reportProblem"} className={"cursor-pointer"}>
                📢
              </label>
              <ul
                className={"hidden peer-checked/reportProblem:block md:text-xs absolute bg-slate-50 border border-slate-400 p-2"}
              >
                <caption className={"font-bold"}>
                  <label htmlFor={"reportProblem"} className={"cursor-pointer"}>
                    [x]&nbsp;&nbsp;&nbsp;Report Problem
                  </label>
                </caption>
                <li className={"mt-2 mb-1"}>
                  <a
                    className={"underline py-1"}
                    target={"_blank"}
                    href={`/report?page=/pages/${data.date}&reason=page%20broken`}
                  >
                    Broken page
                  </a>
                </li>
                <li className={"mb-1"}>
                  <a
                    className={"underline py-1"}
                    target={"_blank"}
                    href={`/report?page=/pages/${data.date}&reason=meaningless%20content`}
                  >
                    Meaningless Content
                  </a>
                </li>
                <li className={"mb-1"}>
                  <a
                    className={"underline py-1"}
                    target={"_blank"}
                    href={`/report?page=/pages/${data.date}&reason=inappropriate%20content`}
                  >
                    Inappropriate Content
                  </a>
                </li>
                <li className={"mb-1"}>
                  <a
                    className={"underline py-1"}
                    href={`/report?page=/pages/${data.date}&reason=copyright%20violation`}
                    target={"_blank"}
                  >
                    Copyright Violation
                  </a>
                </li>
              </ul>
            </aside>
            <p className={"text-sm text-right mb-4"}>
              generated at {data.date}
            </p>
          </div>
          <pre className={"whitespace-pre-wrap px-4"}>{data.body}</pre>
          <p className={"px-8 text-right"}>
            (Word Count: {data["word count"]})
          </p>
          <h3 className={"mb-2 text-lg"}>[Dialog]</h3>
          <ul className={"px-4 mb-4"}>
            {data.dialog &&
              data.dialog.map((line, index) => (
                <li key={index} className={"flex flex-row"}>
                  <strong className={"block mr-2"}>
                    {Object.keys(line)[0]}:
                  </strong>
                  <p>{Object.values(line)[0]}</p>
                </li>
              ))}
          </ul>
          <hr className={"mb-2"} />
          <h3 className={"mb-2 text-lg"}>[Quiz]</h3>
          {data.quiz &&
            data.quiz.map((question, qIdx) => (
              <div key={qIdx} className={"mb-4 px-4"}>
                <dl>
                  <dt>
                    <h4>
                      Question {qIdx + 1}.
                      <p className={"px-4"}>
                        <strong>{question.question}</strong>
                      </p>
                    </h4>
                  </dt>
                  <dd>
                    <ul>
                      {question.options.map((option, oIdx) => (
                        <li
                          key={oIdx}
                          className={"mx-8 pl-1 " +
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
                            className={"cursor-pointer"}
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
        </div>
        {data.descriptions?.grammar && (
          <section className={"bg-slate-200 mx-4 sm:mx-8 md:mx-24"}>
            <div className={"mb-4 flex flex-col px-4"}>
              <details className={"px-2 sm:px-4"}>
                <summary>
                  <h3 className={"mb-2 text-lg inline"}>[Grammar]</h3>
                  <div>
                    Show grammar and vocabulary description for the text.
                  </div>
                </summary>
                <details className={"px-2 sm:px-4"}>
                  <summary>
                    {data.descriptions.grammar.patterns && (
                      <h4 className={"inline"}>[Patterns]</h4>
                    )}
                  </summary>
                  {data.descriptions.grammar.patterns?.map((
                    pattern,
                    pIdx,
                  ) => (
                    <div
                      key={`p${data.date}-${pIdx}`}
                      className={"mb-4 px-4"}
                    >
                      <h4>
                        <strong>{pattern.pattern}</strong> Pattern
                      </h4>
                      <ul className={"list-decimal ml-4 mb-2"}>
                        {pattern.usage?.map((usage, eIdx) => (
                          <li key={`p${data.date}-${pIdx}-${eIdx}`}>
                            <pre
                              className={"whitespace-pre-wrap"}
                            >{usage}</pre>
                          </li>
                        ))}
                      </ul>
                      <p
                        className={""}
                      >
                        {pattern.explanation}
                      </p>
                    </div>
                  ))}
                </details>
                <details className={"px-2 sm:px-4"}>
                  <summary>
                    {data.descriptions.grammar.vocabularies && (
                      <h4 className={"inline"}>[Vocabularies]</h4>
                    )}
                  </summary>
                  {data.descriptions.grammar.vocabularies?.map(
                    ({ word, pronounce, meanings, usage }, pIdx) => {
                      return (
                        <>
                          <div
                            key={`v${data.date}-${pIdx}`}
                            className={"mb-4 px-4"}
                          >
                            <dl className={""}>
                              <dt
                                className={"inline-block text-lg font-bold"}
                              >
                                {word}
                              </dt>
                              <dd
                                className={"inline-block pl-4"}
                              >
                                {pronounce}
                              </dd>
                              <dd
                                className={""}
                              >
                                <ul className={"ml-4 mb-2"}>
                                  {usage?.map((ex, eIdx) => (
                                    <li
                                      key={`p${data.date}-${pIdx}-${eIdx}`}
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
                              {meanings.map((meaning, mIdx) => (
                                <>
                                  <dd
                                    key={`v${data.date}-${pIdx}-${mIdx}-class`}
                                    className={"ml-4"}
                                  >
                                    {meaning.class}
                                  </dd>
                                  <dd
                                    key={`v${data.date}-${pIdx}-${mIdx}-meaning`}
                                    className={"ml-4"}
                                  >
                                    <p className={"pl-4"}>
                                      {meaning.meaning}
                                    </p>
                                    <p className={"italic pl-4"}>
                                      {meaning.example}
                                    </p>
                                  </dd>
                                </>
                              ))}
                            </dl>
                          </div>
                        </>
                      );
                    },
                  )}
                </details>
              </details>
            </div>
          </section>
        )}
        <div
          className={"w-full px-2 sm:px-8 sticky print:relative bottom-0 bg-slate-200 border-slate-500"}
        >
          <div
            className={"flex flex-row justify-between items-center w-full h-16"}
          >
            {data.quiz && data.quiz
              .map((quiz, qIdx) => {
                return (
                  <div
                    key={`q${qIdx}`}
                    className={"w-1/6 h-8 border border-slate-500 items-center flex flex-row"}
                  >
                    <div
                      className={"border-r border-slate-500 flex px-1 sm:px-2 items-center h-full"}
                    >
                      <div>Q{qIdx + 1}</div>
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
                              <div>
                                {String.fromCharCode(oIdx + 65)}
                              </div>
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </div>
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
              className={"border border-slate-400 px-8 rounded h-8 select-none" +
                (prev ? "" : " invisible")}
            >
              Prev
            </a>
            <a
              href={next ? `/pages/${next}` : "/"}
              className={"border border-slate-400 px-8 rounded h-8 select-none" +
                (next ? "" : " invisible")}
            >
              Next
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
