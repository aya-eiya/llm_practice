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
  )[];
  quiz: {
    question: string;
    options: string[];
    answer: number;
  }[];
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
          <p className={"text-sm text-right mb-4"}>generated at {data.date}</p>
          <pre className={"whitespace-pre-wrap px-4"}>{data.body}</pre>
          <p className={"px-8 text-right"}>
            (Word Count: {
              /* AI does not get correct wc */
              // data["word count"]
              data.body.trim().split(/\s+/).length
            })
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
        <div
          className={"w-full px-8 sticky bottom-0 bg-slate-200 border-slate-500"}
        >
          <div
            className={"flex flex-row justify-between items-center w-full h-16"}
          >
            {data.quiz && data.quiz
              .map((quiz, qIdx) => {
                return (
                  <div
                    key={`q${qIdx}`}
                    className={"w-1/6 h-2 sm:h-8 border border-slate-500 items-center flex flex-row"}
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
                              className={"hidden w-full h-full justify-center items-center " +
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
          <div className={"flex flex-row justify-evenly pb-2"} f-client-nav>
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
