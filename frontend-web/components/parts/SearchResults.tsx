import dailyData from "../../data/index.ts";
import { isVideoDate } from "../../data/videoData.ts";
import { getLevelTag } from "../../domains/level.ts";
import { getLevelTitle } from "../../domains/level.ts";

export default function SearchResults(
  { dates }: { dates: (keyof typeof dailyData)[] },
) {
  return (
    <>
      {dates.map(
        (date) => {
          const data = dailyData[date];
          return (
            <a href={`/pages/${date}`} key={date}>
              <ul className="flex flex-col md:flex-row mb-2 mt-2 rounded-md w-[90vw] md:w-[60vw] border border-slate-200">
                <li className="flex flex-col items-center md:items-baseline md:justify-start bg-slate-200 p-2">
                  <p className="text-lg">
                    {date}
                  </p>
                  <div className="md:p-4 pt-0">
                    <img
                      className="h-[28vw] w-[20vw] md:h-[14vw] md:w-[10vw] drop-shadow-lg rounded-md object-cover"
                      src={`/bookshelf?date=${date}&img=webp`}
                      alt="thumbnail"
                    />
                  </div>
                </li>
                <li className="md:w-[45vw] p-4">
                  <dl className="w-full m-0 p-0">
                    <dt>
                      <p className="text-xl">
                        {data.title}
                        {isVideoDate(date) ? " 🎧" : ""}
                      </p>
                    </dt>
                    <dd className="before:content-['flavor:_'] ml-4">
                      {data.params.flavor}
                    </dd>
                    <dd className="before:content-['theme:_'] ml-4 text-slate-400">
                      {data.params.theme}
                    </dd>
                    <dd className="before:content-['level:_'] ml-4">
                      {data.params.level} = {getLevelTag(data.params.level)}
                      <span className="text-xs text-slate-400 inline-block ml-4">
                        *{getLevelTitle(data.params.level)}
                      </span>
                    </dd>
                    <dd className="ml-4">
                      AI models:
                      <ul className="ml-4">
                        <li className="before:content-['main:_']">
                          {data.params.models.main}
                        </li>
                        <li className="before:content-['novel:_']">
                          {data.params.models.novel}
                        </li>
                      </ul>
                    </dd>
                    <dd className="ml-4 mt-4 after:content-['...'] italic">
                      {data.body.slice(0, 180)}
                    </dd>
                  </dl>
                </li>
              </ul>
            </a>
          );
        },
      )}
    </>
  );
}
