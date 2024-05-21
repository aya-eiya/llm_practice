import { useSignal } from "@preact/signals";
import dailyData, { dates } from "../../data/index.ts";
import prs from "../../pr/index.ts";
import { LazyLoadOGP } from "../../islands/LazyLoadOGP.tsx";
import { isVideoDate } from "../../data/videoData.ts";

export default function SideNavi() {
  const ads = useSignal(prs);
  return (
    <nav id="sideMenuNavi" f-client-nav className={"px-2 py-4 relative"}>
      <h2>Updates (latest: {dates[dates.length - 1]})</h2>
      <div className={"overflow-y-scroll h-[80vh]"}>
        <ul className={"ml-4"}>
          {[...dates].reverse().map((date) => {
            return (
              <li
                className={"mt-2 marker:content-['📗'] hover:marker:content-['📖']"}
              >
                <a
                  className={"hover:underline inline-block ml-1 align-top"}
                  href={`/pages/${date}`}
                >
                  {date}
                  <strong class={"inline-block ml-2 hover:underline"}>
                    {dailyData[date].title}
                  </strong>
                  {isVideoDate(date) ? "🎧" : ""}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <hr />
      <aside className={"absolute bottom-0 w-[20vw] px-2"}>
        <p className={"text-xs w-64"}>
          [PR]
          <hr className={"my-1 w-[18vw]"} />
        </p>
        <div>
          <LazyLoadOGP signal={ads} />
          <ul className={"flex flex-row flex-wrap"}>
            {ads.value.map((pr) => (
              <li className={"mb-2 mr-1 flex flex-row flex-wrap"}>
                {pr.image
                  ? (
                    <a
                      href={pr.url}
                      target={"_blank"}
                      rel={"nofollow"}
                      className={"notranslate block px-1 cursor-pointer"}
                    >
                      <img
                        src={pr.image}
                        alt={pr.title}
                        aria-label={"book image:" + pr.title}
                        className={"max-h-16"}
                      />
                    </a>
                  )
                  : (
                    <a
                      href={pr.url}
                      target={"_blank"}
                      className={"notranslate block cursor-pointer text-xs underline max-w-full text-nowrap text-ellipsis overflow-hidden"}
                      rel={"nofollow"}
                    >
                      {pr.title}
                    </a>
                  )}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </nav>
  );
}
