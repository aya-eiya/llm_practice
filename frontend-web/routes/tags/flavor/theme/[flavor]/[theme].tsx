import { Context, PageProps } from "fresh";
import { Head } from "fresh/runtime";
import dailyData, { dates as dataDates } from "../../../../../data/index.ts";
import Meta from "../../../../../components/parts/Meta.tsx";
import Header from "../../../../../components/parts/Header.tsx";
import Footer from "../../../../../components/parts/Footer.tsx";
import SearchResults from "../../../../../components/parts/SearchResults.tsx";

const PAGE_SIZE = 10;

export const handler = {
  GET(ctx: Context<unknown>) {
    const req = ctx.req;
    let { flavor, theme } = ctx.params;
    if (theme === undefined || flavor === undefined) {
      return {
        data: { dates: [], flavor: "", theme: "", maxCount: 0, page: 0 },
        status: 404,
      };
    }
    flavor = decodeURI(flavor);
    theme = decodeURI(theme);
    const _page = new URL(req.url).searchParams.get("page");
    const page = Math.max(_page ? Number(_page) : 1, 1);
    const find = [];
    for (let i = dataDates.length - 1; i >= 0; i--) {
      const key = dataDates[i];
      if (
        dailyData[key].params.theme.toLowerCase() === theme.toLowerCase() &&
        dailyData[key].params.flavor.toLowerCase() === flavor.toLowerCase()
      ) {
        find.push(dailyData[key].date);
      }
    }
    const dates = find.slice(PAGE_SIZE * (page - 1), PAGE_SIZE * page);
    return {
      data: { dates, flavor, theme, maxCount: find.length, page },
      status: find.length > 0 ? 200 : 404,
    };
  },
};

function Pager(
  { page, theme, flavor, maxCount }: {
    page: number;
    theme: string;
    flavor: string;
    maxCount: number;
  },
) {
  return (
    <div className="flex flex-row justify-between">
      <div>
        {page > 1
          ? (
            <a
              href={`/tags/flavor/theme/${flavor}/${theme}?page=${page - 1}`}
            >
              {"<"}
            </a>
          )
          : <span>{"<"}</span>}
      </div>
      <div className="flex flex-row justify-center">
        {[...new Array(Math.floor(maxCount / PAGE_SIZE) + 1)].map(
          (_, p) => {
            const _page = p + 1;
            return (
              <div key={_page} className="px-2 py-1 mx-1 bg-slate-200">
                {_page === page
                  ? <span className="font-bold">{_page}</span>
                  : (
                    <a
                      href={`/tags/flavor/theme/${flavor}/${theme}?page=${_page}`}
                      className="underline"
                    >
                      {_page}
                    </a>
                  )}
              </div>
            );
          },
        )}
      </div>
      <div>
        {page * PAGE_SIZE < maxCount
          ? (
            <a
              href={`/tags/flavor/theme/${flavor}/${theme}?page=${page + 1}`}
            >
              {">"}
            </a>
          )
          : <span>{">"}</span>}
      </div>
    </div>
  );
}

export default function SearchPage(
  { data: { dates, page, flavor, theme, maxCount }, url }: {
    data: {
      dates: (keyof typeof dailyData)[];
      flavor: string;
      theme: string;
      page: number;
      maxCount: number;
    };
  } & Pick<PageProps, "url">,
) {
  const flavors = Object.keys(dailyData).reduce((tags, date) => {
    const { flavor: f } = dailyData[date as keyof typeof dailyData].params;
    tags.add(f);
    return tags;
  }, new Set<string>());
  const themes = Object.keys(dailyData).reduce((tags, date) => {
    const { theme: t } = dailyData[date as keyof typeof dailyData].params;
    tags.add(t);
    return tags;
  }, new Set<string>());
  const actualPageNum = Math.min(
    Math.max(page, 1),
    Math.floor(maxCount / PAGE_SIZE) + 1,
  );
  const pageParam = actualPageNum > 1 ? `?page=${actualPageNum}` : "";
  return (
    <>
      <Head>
        <title>
          MyniQ | Search results for flavor{flavor} and theme:{theme}
        </title>
        <Meta origin={url.origin} />
        <link
          rel="canonical"
          href={`${url.origin}/tags/flavor/theme/${flavor}/${theme}${pageParam}`}
        />
      </Head>
      <div
        id="mainContent"
        className="flex flex-col bg-slate-100 items-center"
      >
        <Header />
        <main>
          <header>
            <h1 className="text-xl">Tag Search Page</h1>
            <div className="text-right">
              <p className="before:content-['Search_results_for_theme:']">
                <strong>{theme}</strong>
              </p>
              <p>{maxCount} results found</p>
            </div>
            <div className="mb-4">
              <ul className="flex flex-row flex-wrap w-[60vw]">
                <li className="m-1 px-2">Flavor:</li>
                {Array.from(flavors).map((f) => (
                  <li
                    key={f}
                    className={"bg-slate-200 m-1 px-2 rounded-full" +
                      (flavor.toLowerCase() === f.toLowerCase()
                        ? " border border-slate-800"
                        : "")}
                  >
                    <a href={`/tags/flavor/theme/${f}/${theme}`}>{f}</a>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-row flex-wrap w-[60vw]">
                <li className="m-1 px-2">Theme:</li>
                {Array.from(themes).map((t) => (
                  <li
                    key={t}
                    className={"bg-slate-200 m-1 px-2 rounded-full" +
                      (theme.toLowerCase() === t.toLowerCase()
                        ? " border border-slate-800"
                        : "")}
                  >
                    <a href={`/tags/flavor/theme/${flavor}/${t}`}>{t}</a>
                  </li>
                ))}
              </ul>
            </div>
          </header>
          <section className="mb-8">
            <Pager
              page={page}
              flavor={flavor}
              theme={theme}
              maxCount={maxCount}
            />
            <SearchResults dates={dates} />
            <Pager
              page={page}
              flavor={flavor}
              theme={theme}
              maxCount={maxCount}
            />
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
