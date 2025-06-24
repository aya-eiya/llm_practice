import { isVideoDate } from "../data/videoData.ts";
import { useSignal } from "@preact/signals";
import { useEffect, useState } from "preact/hooks";
import { type QuizData } from "../domains/quiz.ts";

export default function Bookshelf(
  { data: dates }: { data: QuizData[] },
) {
  const cursor = useSignal(0);
  const selectedCursor = useSignal<number | undefined>(undefined);
  const [last7dates, setLast7dates] = useState([
    dates.slice(3, 7),
    dates.slice(0, 3),
  ].flat());
  const [animate, setAnimate] = useState(false);
  const timeout = useSignal<number | undefined>(undefined);
  useEffect(() => {
    if (timeout.value) clearTimeout(timeout.value);
    timeout.value = setTimeout(
      () => {
        const ds = [...last7dates];
        const d = ds.shift();
        d && ds.push(d);
        setLast7dates(ds);
        setAnimate(!animate);
        cursor.value = (cursor.value + 1) % 7;
        if (cursor.value === selectedCursor.value) {
          selectedCursor.value = undefined;
        }
      },
      selectedCursor.value !== undefined && cursor.value != selectedCursor.value
        ? 30
        : 5000,
    );
    return () => clearTimeout(timeout.value);
  }, [
    animate,
    selectedCursor.value,
  ]);
  return (
    <nav className="flex flex-col items-center">
      <div className="flex flex-row justify-center overflow-visible text-nowrap">
        {last7dates
          .map((book, idx) => (
            <div
              key={`${book.date}_${idx}`}
              className={"text-left relative bottom-0 origin-bottom ease-in-out duration-1000 " +
                [
                  "z-10 animate-bookshelf_0 left-72  scale-[.6]",
                  "z-20 animate-bookshelf_1 left-36  scale-[.6]",
                  "z-30 animate-bookshelf_2 left-16  scale-[.7]",
                  "z-40 animate-bookshelf_3 left-4   scale-[.8]",
                  "z-30 animate-bookshelf_4 right-0  scale-[1.]",
                  "z-20 animate-bookshelf_5 right-4  scale-[.8]",
                  "z-10 animate-bookshelf_6 right-16 scale-[.7]",
                ].at(idx)}
            >
              <a
                href={`/pages/${book.date}`}
              >
                <section
                  className="h-[50vh] w-[31vh] flex flex-col justify-end bg-cover bg-center drop-shadow-lg rounded-md"
                  style={{
                    backgroundImage:
                      `url(/bookshelf?date=${book.date}&img=webp)`,
                  }}
                >
                  <div className="overflow-hidden mb-4 bg-slate-800">
                    <h1
                      className={"text-slate-100 px-4 text-right " +
                        (
                          [
                            "pt-2 text-4xl",
                            "pt-2 text-3xl",
                            "pt-2 text-2xl",
                            "pt-2 text-xl",
                          ].at(
                            Math.floor(
                              book.title.length / 5,
                            ),
                          ) ?? "pt-4 text-lg"
                        )}
                    >
                      {book.title}
                      {isVideoDate(book.date) && (
                        <span className="text-lg">🎧</span>
                      )}
                    </h1>
                    <p className="text-slate-100 px-4 text-right pb-2">
                      {book.date}
                    </p>
                  </div>
                </section>
              </a>
            </div>
          ))}
        <div
          key={"bookshelf_end_" + animate}
          className="w-[62vh] animate-bookshelf_end"
        />
      </div>
      <div className="w-48 flex flex-row justify-between py-4 text-slate-500">
        {last7dates.map((book, idx) => (
          <button
            type="button"
            key={`${book.date}_${idx}`}
            className="block p-2"
            onClick={() => selectedCursor.value = idx}
          >
            {cursor.value === idx ? "●" : "⚪"}
          </button>
        ))}
      </div>
    </nav>
  );
}
