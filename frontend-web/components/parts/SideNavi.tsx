import dailyData, { dates } from "../../data/index.ts";
import { isVideoDate } from "../../data/videoData.ts";
import { getLevelEmoji } from "../../domains/level.ts";
import { getLevelTag } from "../../domains/level.ts";
import PRBox from "../../islands/PRBox.tsx";

export default function SideNavi() {
  return (
    <nav
      id="sideMenuNavi"
      f-client-nav
      className={"px-2 py-4 relative"}
    >
      <h2>Updates (latest: {dates[dates.length - 1]})</h2>
      <div className={"overflow-y-scroll h-[80vh]"}>
        <ul className={"ml-4"}>
          {[...dates].reverse().map((date) => {
            return (
              <li
                className={"mt-2 marker:content-['📗'] hover:marker:content-['📖']"}
              >
                <a
                  className={"hover:underline block ml-1 align-top"}
                  href={`/pages/${date}`}
                  title={dailyData[date].title + " | " +
                    getLevelTag(dailyData[date].params.level) +
                    (isVideoDate(date) ? " | Listening available" : "")}
                >
                  {date}{" "}
                  <span class={"font-bold"}>
                    {dailyData[date].title}
                  </span>{" "}
                  {getLevelEmoji(dailyData[date].params.level)}
                  {isVideoDate(date) ? " 🎧" : ""}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <hr />
      <PRBox />
    </nav>
  );
}
