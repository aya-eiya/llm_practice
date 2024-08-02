import { useSignal } from "@preact/signals";
import { LazyLoadOGP } from "./LazyLoadOGP.tsx";
import prs from "../pr/index.ts";
import { useEffect } from "preact/hooks";

export default function PRBox() {
  const ads = useSignal<typeof prs>([]);
  useEffect(() => {
    ads.value = prs;
  }, []);
  return (
    <aside className={"absolute bottom-0 w-[20vw] px-2"}>
      <div className={"text-xs w-64"}>
        [PR]
        <hr className={"my-1 w-[18vw]"} />
      </div>
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
  );
}
