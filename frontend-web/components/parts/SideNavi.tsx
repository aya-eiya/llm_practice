import dailyData, { containsKey } from "../../data/index.ts";

export default function SideNavi() {
  const dates = Object.keys(dailyData).toSorted();
  return (
    <nav id="sideMenuNavi" f-client-nav className={"px-2 py-4"}>
      <h2>Updates (latest: {dates[0]})</h2>
      <ul className={"ml-4"}>
        {dates.map((date) => {
          if (!containsKey(date)) return;
          return (
            <li
              className={"mt-2 marker:content-['📗'] hover:marker:content-['📖']"}
            >
              <a
                className={"hover:underline inline-block ml-1 align-top"}
                href={`/pages/${date}`}
              >
                {date}
                <strong class={"inline-block ml-2"}>
                  {dailyData[date].title}
                </strong>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
