import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import dailyData, { dates as dataDates } from "../../../data/index.ts";
import Meta from "../../../components/parts/Meta.tsx";
import Header from "../../../components/parts/Header.tsx";

export const handler: Handlers = {
  GET(req, ctx) {
    const { flavor } = ctx.params;
    const query = new URL(req.url).searchParams;
    const page = Math.max(query.get("page") ? Number(query.get("page")) : 1, 1);
    const find = [];
    for (let i = dataDates.length - 1; i >= 0; i--) {
      const key = dataDates[i];
      if (dailyData[key].params.flavor === flavor) {
        find.push(dailyData[key].date);
      }
    }
    const dates = find.slice(50 * (page - 1), 50 * page);
    return ctx.render({ dates, flavor, maxCount: find.length });
  },
};

export default function SearchPage(
  { data: { dates, flavor, maxCount }, url }: {
    data: {
      dates: (keyof typeof dailyData)[];
      flavor: string;
      maxCount: number;
    };
  } & Pick<PageProps, "url">,
) {
  return (
    <>
      <Head>
        <title>
          MyniQ | Search results for flavor:{flavor}
        </title>
        <Meta origin={url.origin} />
      </Head>
      <div
        id="mainContent"
        className={"flex flex-col bg-slate-100 items-center"}
      >
        <Header />
        <div>
          <h1>Search results for flavor:{flavor}</h1>
          <p>{maxCount} results found</p>
          {dates.map(
            (date) => (
              <dl
                key={date}
                className={"flex flex-row mb-2 bg-slate-800 rounded-md w"}
              >
                <dd
                  className={"h-[250px] w-[185px] flex flex-col justify-end bg-cover bg-center drop-shadow-lg rounded-md"}
                  style={{
                    backgroundImage: `url(/bookshelf?date=${date}&img=webp)`,
                  }}
                >
                  <span className={"invisible"}>book cover image</span>
                </dd>
                <dd>
                  <div className={"w-1/2"}>
                    <p
                      className={"text-slate-100 px-4 text-right pt-2 text-lg"}
                    >
                      {dailyData[date].title}
                    </p>
                    <p
                      className={"text-slate-100 px-4 text-right pb-2 text-sm"}
                    >
                      {date}
                    </p>
                  </div>
                  <div
                    className={"w-1/2 px-2 bg-white after:content-['...']"}
                  >
                    {dailyData[date].body.slice(0, 131)}
                  </div>
                </dd>
              </dl>
            ),
          )}
        </div>
      </div>
    </>
  );
}
